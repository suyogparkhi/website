import { useState, useCallback, useEffect } from 'react';
import { Button } from "./ui/button";
import { initWalletKit, getWalletKit } from '@/lib/walletkit';
import { WalletState } from '@/types/wallet';
import { getSdkError } from '@walletconnect/utils';

export const ConnectWallet = () => {
  const [state, setState] = useState<WalletState>({
    address: null,
    isConnecting: false,
    isConnected: false,
    error: null,
  });

  const initializeWallet = useCallback(async () => {
    try {
      await initWalletKit();
      const walletKit = getWalletKit();

      walletKit.on('session_proposal', async (proposal) => {
        try {
          const { id, params } = proposal;
          const approvedNamespaces = {
            eip155: {
              chains: ['eip155:1'],
              methods: ['eth_sendTransaction', 'personal_sign'],
              events: ['accountsChanged', 'chainChanged'],
              accounts: [
                // This should be replaced with actual user's address
                'eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb'
              ]
            }
          };

          await walletKit.approveSession({
            id,
            namespaces: approvedNamespaces
          });

          setState(prev => ({
            ...prev,
            isConnected: true,
            address: approvedNamespaces.eip155.accounts[0],
            isConnecting: false
          }));
        } catch (error) {
          console.error('Error during session proposal:', error);
          await walletKit.rejectSession({
            id: proposal.id,
            reason: getSdkError("USER_REJECTED")
          });
          setState(prev => ({
            ...prev,
            error: 'Failed to connect wallet',
            isConnecting: false
          }));
        }
      });

    } catch (error) {
      console.error('Failed to initialize WalletKit:', error);
      setState(prev => ({
        ...prev,
        error: 'Failed to initialize wallet',
        isConnecting: false
      }));
    }
  }, []);

  useEffect(() => {
    initializeWallet();
  }, [initializeWallet]);

  const connectWallet = async () => {
    try {
      setState(prev => ({ ...prev, isConnecting: true, error: null }));
      const walletKit = getWalletKit();
      
      // This URI would typically come from scanning a QR code
      // For testing, you can get this from a dapp's QR code
      const uri = prompt('Please enter the WalletConnect URI from the dapp:');
      if (!uri) {
        setState(prev => ({ ...prev, isConnecting: false }));
        return;
      }

      await walletKit.pair({ uri });
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setState(prev => ({
        ...prev,
        error: 'Failed to connect wallet',
        isConnecting: false
      }));
    }
  };

  const disconnectWallet = async () => {
    try {
      const walletKit = getWalletKit();
      const sessions = walletKit.getActiveSessions();
      
      for (const [topic] of Object.entries(sessions)) {
        await walletKit.disconnectSession({
          topic,
          reason: getSdkError('USER_DISCONNECTED')
        });
      }

      setState({
        address: null,
        isConnecting: false,
        isConnected: false,
        error: null
      });
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  return (
    <div>
      {state.error && (
        <div className="text-red-500 text-sm mb-2">{state.error}</div>
      )}
      {!state.isConnected ? (
        <Button
          onClick={connectWallet}
          disabled={state.isConnecting}
        >
          {state.isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </Button>
      ) : (
        <div className="flex items-center gap-4">
          <span className="text-sm">
            {state.address?.slice(0, 6)}...{state.address?.slice(-4)}
          </span>
          <Button
            variant="secondary"
            onClick={disconnectWallet}
          >
            Disconnect
          </Button>
        </div>
      )}
    </div>
  );
};