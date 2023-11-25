// alchemy-nft-api/fetch-script.js
import fetch from 'node-fetch';

// Setup request options:
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// Replace with your Alchemy API key:
const apiKey = "demo";
const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTs/`;
// Replace with the wallet address you want to query:
const ownerAddr = "0x8D53485cE4bf6dbAcbC4eD9e1CE3c88649423450";
const fetchURL = `${baseURL}?owner=${ownerAddr}`;

// Make the request and print the formatted response:
fetch(fetchURL, requestOptions)
  .then(response => response.json())
  .then(response => JSON.stringify(response, null, 2))
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
