import Web3 from 'web3';
import TrafficViolationContract from '../artifacts/TrafficViolation.json';

const blockchainService = {
  async init() {
    if (window.ethereum) {
      await window.ethereum.enable();
      const web3 = new Web3(window.ethereum);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = TrafficViolationContract.networks[networkId];
      this.contract = new web3.eth.Contract(
        TrafficViolationContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      this.web3 = web3;
    }
  },

  async submitReport(ipfsHash) {
    const accounts = await this.web3.eth.getAccounts();
    return this.contract.methods.submitReport(ipfsHash).send({ from: accounts[0] });
  },
};

export default blockchainService;
