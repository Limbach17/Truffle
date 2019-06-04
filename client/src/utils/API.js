import axios from "axios";

export default {
  
  getGenus: function(letter) {
    return axios.get("/genus/" + letter);
  }
};