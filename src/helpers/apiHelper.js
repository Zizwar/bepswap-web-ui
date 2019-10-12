import axios from 'axios';

export const CHAINSERVICE_BASE_URL = process.env.REACT_APP_CHAINSERVICE_API_URL;
export const STATECHAIN_BASE_URL = process.env.REACT_APP_STATECHAIN_API_URL;
export const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';
export const TESTNET_TX_BASE_URL = 'https://testnet-explorer.binance.org/tx/';
export const BINANCE_TESTNET_URL = 'https://testnet-dex.binance.org/api/v1';
export const BINANCE_MAINNET_URL = 'https://dex.binance.org/api/v1';

export const getChainserviceURL = url => `${CHAINSERVICE_BASE_URL}/${url}`;
export const getStatechainURL = url => `${STATECHAIN_BASE_URL}/${url}`;
export const getCoinGeckoURL = url => `${COINGECKO_BASE_URL}/${url}`;
export const getBinanceTestnetURL = url => `${BINANCE_TESTNET_URL}/${url}`;
export const getBinanceMainnetURL = url => `${BINANCE_MAINNET_URL}/${url}`;

const defaultAxios = axios.create();

export const axiosRequest = defaultAxios.request;

export const getHeaders = () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return headers;
};
