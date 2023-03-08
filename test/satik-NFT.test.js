const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Satik NFT", function () {
    let nftContract;
    let owner;
    let address1;

    beforeEach(async () => {
        const SatikNFT = await ethers.getContractFactory("SatikNFT");
        nftContract = await SatikNFT.deploy();
        [owner, address1] = await ethers.getSigners();
    });

    it('Should have correct nft symbol', async function() {
        expect(await nftContract.symbol()).to.be.equal('STK');
    });

    it('Should set the right owner', async function() {
        expect(await nftContract.owner()).to.be.equal(owner.address);
    });

    it("Owner can mint NFT", async function () {
        await nftContract.connect(owner).mintNFT(address1.address, 'https://sampleipfs.com');
        let userBalance = await nftContract.balanceOf(address1.address);
        expect(userBalance.toString()).to.be.equal('1');

        await nftContract.connect(owner).mintNFT(address1.address, 'https://sampleipfs.com');
        userBalance = await nftContract.balanceOf(address1.address);
        expect(userBalance.toString()).to.be.equal('2');

        await nftContract.connect(owner).mintNFT(owner.address, 'https://sampleipfs.com');
        const ownerBalance = await nftContract.balanceOf(owner.address);
        expect(ownerBalance.toString()).to.be.equal('1');
    });

    it("Non-Owner can't mint NFT", async function () {
        await expect(nftContract.connect(address1).mintNFT(address1.address, 'https://sampleipfs.com')).to.be.revertedWith(
            "Ownable: caller is not the owner"
        );
    });

    it("Should get the tokenURI", async function () {
        await nftContract.connect(owner).mintNFT(owner.address, 'https://sampleipfs.com/1');
        expect(await nftContract.tokenURI(1)).to.equal("https://sampleipfs.com/1");
    });
});
