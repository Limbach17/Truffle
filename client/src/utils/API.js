import axios from "axios";

export default {
  
  getAll: function () {
    return axios.get("/plants");
  },
  
  getGenus: function(letter) {
    return axios.get("/genus/" + letter);
  }
};