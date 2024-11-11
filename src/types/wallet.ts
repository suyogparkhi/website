export interface WalletState {
    address: string | null;
    isConnecting: boolean;
    isConnected: boolean;
    error: string | null;
  }  