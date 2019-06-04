import axios from "axios";

const BASEURL = "http://services.tropicos.org/";
const NAME = "Name/Search?"

const APIKEY = "52cf0c2a-597e-4331-93bf-4682d7582f4c";
const TOKEN = "&apikey=" + APIKEY;
const FORMAT = "&format=json";

let randomId = (min,max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
};

export default {
  truffleShuffle: function(query) {
    return axios.get(BASEURL + "name/" + randomId +  + APIKEY);
  }
};


