const ethers = require("ethers")

const CONTRACT_ARTIFACT_PATH = process.env.CONTRACT_ARTIFACT_PATH

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const METAMASK_PKEY = process.env.METAMASK_PKEY

const provider = new ethers.providers.AlchemyProvider(network="goerli", ALCHEMY_API_KEY)
const signer = new ethers.Wallet(METAMASK_PKEY, provider)
const Contract = require(CONTRACT_ARTIFACT_PATH)
const contract = new ethers.Contract(CONTRACT_ADDRESS, Contract.abi, signer)

async function main() {
  console.log(">>> calling testnet")

  const num = await contract.getNum()
  console.log(">>> num")
  console.log(num)

  const latestPrice = await contract.getLatestPrice()
  console.log(">>> latest price")
  console.log(latestPrice)
}

main()
