const axios = require("axios");

let accessToken = null;
async function getAccessToken() {
    try {
        if (accessToken) {
            return accessToken;
        }
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/auth",
        {
            email: "2315043@nec.edu.in",
            name: "kajamuthulakshmi m",
            rollNo: "2315043",
            accessCode: "ERzUyx",
            clientID: "c496ce45-89ec-43dd-a319-55e41b34f599",
            clientSecret: "DAheZcJWMtXpSSjc"
        }
    );

    console.log("Response:");
    console.log(response.data);

        accessToken = response.data.access_token;

        return accessToken;

    } catch (error) {
        console.log("Authentication Failed");
        console.log(error.response?.data || error.message);
    }
}
module.exports = getAccessToken;       