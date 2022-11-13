import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "Picardy Resolver Api" });
});

app.get("/walletNfts", async (req, res) => {
  const wallet = req.body.wallet;
  const nfts = await getWalletNfts(wallet);
  console.log(nfts);
  res.json(nfts);
});

app.get("/domainHolders", async (req, res) => {
  const domainAddress = req.body.domainAddress;
  const domainHolders = await getDomainHolders(domainAddress);
  res.json(domainHolders);
});

app.get("/domainTransactions", async (req, res) => {
  const domainAddress = req.body.domainAddress;
  const transactions = await getDomainTransaction(domainAddress);
  res.json(transactions);
});

app.get("/domainTokenHistory", async (req, res) => {
  const domainAddress = req.body.domainAddress;
  const tokenId = req.params.tokenId;
  const transactions = await getDomainTokenHistory(domainAddress, tokenId);
  res.json(transactions);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const apiUrl = "http://api.blokness.io/";
const apiKey = process.env.BKN_API_KEY;

const getFromApi = async (url) => {
  try {
    const { data } = await axios.get(url, { headers: { "x-api-key": apiKey } });
    return data;
  } catch (err) {
    console.log(`unable to get data from ${url} - ${err}`);
  }
};

const getWalletNfts = async (wallet) => {
  const url = `${apiUrl}nfts?wallet=${wallet}`;
  const nfts = await getFromApi(url);
  return nfts;
};

const getDomainHolders = async (domainAddress) => {
  const url = `${apiUrl}${domainAddress}/owners?limit=30`;
  const domainHolders = await getFromApi(url);
  return domainHolders;
};

const getDomainTransaction = async (domainAddress) => {
  const url = `${apiUrl}/transactions?collection=${domainAddress}&limit=10`;
  const transactions = await getFromApi(url);
  return transactions;
};

const getDomainTokenHistory = async (domainAddress, tokenId) => {
  const url = `${apiUrl}nfts/${domainAddress}/${tokenId}/trade_history`;
  const transactions = await getFromApi(url);
  return transactions;
};
