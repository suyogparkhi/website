import { Core } from '@walletconnect/core';
import WalletKit from '@reown/walletkit';

let walletKit: WalletKit | null = null;

export const initWalletKit = async () => {

  const projectId = '441d8a29a241a9fa4d43dee9fbaeed6e';
  
  if (!projectId) {
    throw new Error('PROJECT_ID environment variable is not set');
  }

  const core = new Core({
    projectId
  });

  walletKit = await WalletKit.init({
    core,
    metadata: {
        name: 'Ethamons',
        description: 'AppKit Example',
        url: 'https://reown.com/appkit',
        icons: ['https://assets.reown.com/reown-profile-pic.png']
    }
  });

  return walletKit;
};

export const getWalletKit = () => {
    if (!walletKit) {
      throw new Error('WalletKit not initialized');
    }
    return walletKit;
  };