import axios from "axios";
import md5 from "md5";

const urlbase = "https://gateway.marvel.com";
const publickey = "coloque sua chave publica aqui";
const privatekey = "coloque sua chave privada aqui";
const time = Number(new Date());

const marvelhash = md5(time+privatekey+publickey);

const api = axios.create({
  baseURL: urlbase,
  params: {
    ts: time,
    apikey: publickey,
    hash: marvelhash,
  },
});

export default api;
