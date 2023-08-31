require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/IsH-TAdQjDJS7oFDQTKSOM6wZprVMj_A',
      accounts: ['4c9b09f5d721a9d8a99f49e492c08a7556756c6e56b5d4c9929dff0632e59486'],
    },
  },
};