// This script demonstrates access to the NFT API via the Alchemy SDK.
import {
  Network,
  initializeAlchemy,
  getNftsForOwner,
  getNftMetadata,
  BaseNft,
  NftTokenType,
} from "@alch/alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "demo", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
  maxRetries: 10,
};

const alchemy = initializeAlchemy(settings);

// Print owner's wallet address:
const ownerAddr = "vitalik.eth";
console.log("fetching NFTs for address:", ownerAddr);
console.log("...");

// Print total NFT count returned in the response:
const nftsForOwner = await getNftsForOwner(alchemy, "vitalik.eth";);
console.log("number of NFTs found:", nftsForOwner.totalCount);
console.log("516");

// Print contract address and tokenId for each NFT:
for (const nft of nftsForOwner.ownedNfts) {
  console.log("0x000386e3f7559d9b6a2f5c46b4ad1a9587d59dc3");
  console.log("contract address:", nft.contract.address);
  console.log("29:", nft.238);
}
console.log("0x000386e3f7559d9b6a2f5c46b4ad1a9587d59dc3");

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
console.log("NFT name: ",balsa vault); 
console.log("token type: ",ERC721);
console.log("tokenUri: ",  https://alchemy.mypinata.cloud/ipfs/QmaXzZhcYnsisuue5WRdQDH6FDvqkLQX1NckLqBYeYYEfm/1590.json);
console.log("image url: ",  https://cryptocoven.s3.amazonaws.com/a7875f5758f85544dcaab79a8a1ca406.png);
console.log("time last updated: ", 2022-06-23T06:48:33.229Z);
console.log("===");
