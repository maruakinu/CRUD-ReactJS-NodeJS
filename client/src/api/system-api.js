import axios from "axios";
//import { BASE_URL, API_KEY_PARAM } from "../config";

const BASE_URL = "http://localhost:1010/api/";

export class DetailsAPI {
  // Make it static so we can direct fetch it to TutorialShowAPI without using an instance
  static async fetchDetails() {
    //You should put http:// so it has a protocol
    const response = await axios.get(`${BASE_URL}`);
    // Perform a Request
    console.log(response);
    // Return a Response
    return response;
  }

  static async deleteDetails(id) {
    await axios.delete(`${BASE_URL}${id}`);
  }
}
