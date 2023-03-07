# satik-nft

This is a hardhat project for deploying nft smartcontract.

## How to get started?

1. Clone this repo.

2. Create .env file.  `cp .env.sample .env`

3. Install npm dependencies. `npm install`

4. Compile contract. `npx hardhat compile`

5. Deploy contract. `npx hardhat run scripts/deploy.js --network goerli`

6. Find your contract in goerli etherscan. https://goerli.etherscan.io/


## Mint NFT

1. Update .env file with nft metadata url. Eg: https://gateway.pinata.cloud/ipfs/{CID}/{tokenId}

2. Update .env file with public address where you want to mint nft.

3. Run command `node scripts/mint-nft.js`


Enjoy!