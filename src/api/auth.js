import axios from "axios";

export async function registerUser(data) {
  const response = await axios.post("http://localhost:8080/register", data);
  if (response) {
    return response;
  } else {
    return null;
  }
}
