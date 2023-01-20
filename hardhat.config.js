require("dotenv").config()
require("@nomiclabs/hardhat-ethers")

const { ALCHEMY_API_URL, WTF } = process.env

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: ALCHEMY_API_URL,
      accounts: [`0x${WTF}`]
    }
  }
}
