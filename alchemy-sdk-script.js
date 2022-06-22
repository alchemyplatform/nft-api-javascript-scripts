import {
  Network,
  initializeAlchemy,
  getNftsForOwner,
  getNftMetadata,
} from "@alch/alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "demo", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
  maxRetries: 10,
};

const alchemy = initializeAlchemy(settings);

// Print owner's wallet address:
const ownerAddr = "0xshah.eth";
console.log("fetching NFTs for address:", ownerAddr);
console.log("...");

// Print total NFT count returned in the response:
const nftsForOwner = await getNftsForOwner(alchemy, "0xshah.eth");
console.log("number of NFTs found:", nftsForOwner.totalCount);
console.log("...");

// Print contract address and tokenId for each NFT:
for (const nft of nftsForOwner.ownedNfts) {
  console.log("===");
  console.log("contract address:", nft.contract.address);
  console.log("token ID:", nft.tokenId);
}
console.log("===");

// Fetch metadata for a particular NFT:
console.log("fetching metadata for a Crypto Coven NFT...");
const response = await getNftMetadata(
  alchemy,
  "0x5180db8F5c931aaE63c74266b211F580155ecac8",
  "1590"
);

// Uncomment this line to see the full api response:
// console.log(response);

// Print some commonly used fields:
console.log("NFT name: ", response.title);
console.log("token type: ", response.tokenType);
console.log("tokenUri: ", response.tokenUri.gateway);
console.log("image url: ", response.rawMetadata.image);
console.log("time last updated: ", response.timeLastUpdated);
console.log("===");
