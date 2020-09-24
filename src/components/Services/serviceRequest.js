import Axios from "axios";

const url = "http://localhost:8080/service";

function getAuthority(data) {
  Axios.post(url + "/getAuthority", data);
}
function ucrRegistration(data) {
  Axios.post(url + "/ucrRegistration", data);
}
function cabCard(data) {
  Axios.post(url + "/cabcard", data);
}
function carrierPacket(data) {
  Axios.post(url + "/carrierPacket", data);
}
function dispatch(data) {
  Axios.post(url + "/dispatch", data);
}

function form2290Request(data) {
  Axios.post(url + "/form2290", data);
}

function iftaRequest(data) {
  Axios.post(url + "/ifta", data);
}

export {
  getAuthority,
  ucrRegistration,
  cabCard,
  carrierPacket,
  dispatch,
  iftaRequest,
  form2290Request,
};
