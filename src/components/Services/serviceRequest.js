import Axios from "axios";

const url = "http://localhost:8080/service";

function getAuthority(data) {
  Axios.post(url + "/getAuthority", data);
}

export { getAuthority };
