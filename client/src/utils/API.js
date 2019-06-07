import axios from "axios";

export default {
  
  getAll: function () {
    return axios.get("/plants");
  },

  getOne: function (id) {
    return axios.get("/plant/" + id);
  },
  
  getGenus: function(letter) {
    return axios.get("/genus/" + letter);
  },

  addPlant: function(data) {
    console.log(data);
  return axios.post("/plants", data);
  }
  
};