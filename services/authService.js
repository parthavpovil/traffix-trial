import Web3 from 'web3';

const authService = {
  async connectWallet() {
    if (window.ethereum) {
      await window.ethereum.enable();
      const web3 = new Web3(window.ethereum);
      return web3.eth.getAccounts();
    }
  },
};

export default authService;
