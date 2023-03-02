const {ethers} = require('hardhat');

async function main() {
    const SatikNFT = await ethers.getContractFactory("SatikNFT");

    // Start deployment, returning a promise that resolves to a contract object
    const nft = await SatikNFT.deploy();
    await nft.deployed();
    console.log("Contract deployed to address:", nft.address);
}

main().then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
