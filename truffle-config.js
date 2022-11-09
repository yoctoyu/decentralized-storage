require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');
const privateKeys = process.env.PRIVATE_KEYS || "";

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" //match any network id
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(privateKeys.split(','), 'https://goerli.infura.io/v3/' + process.env.INFURA_API_KEY, 0, 2)
      },
      network_id: 5, // eslint-disable-line camelcase
      gas: 4465030,
      gasPrice: 10000000000,
    },
    main: {
      provider: () => {
        return new HDWalletProvider(privateKeys.split(','), 'https://mainnet.infura.io/v3/' + process.env.INFURA_API_KEY, 0, 2)
      },
      network_id: 1, // eslint-disable-line camelcase
      gas: 3000000,
      gasPrice: 10000000000,
    },
  },
  contracts_directory: './src/contracts',
  contracts_build_directory: './src/abis',

  // Configure your compilers
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      version: "^0.8.0" 
    }
  }
};