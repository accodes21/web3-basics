//https://eth-goerli.g.alchemy.com/v2/V7oty0MHNwwPedZocoayYOcRJZoGia8e

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/n4QCrfBYuDuDED5b3oLMf-Z3jXSol2F4',
      accounts: ['c4c4cebb721372ea69f395778166b8352ac77eecfacc3b2d09647c44de23fb84'] 
    }
  } 
}