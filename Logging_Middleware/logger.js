const axios = require("axios");
const getAccessToken = require("./auth");

async function Log(stack, level, packageName, message) {
    try {
        const token = await getAccessToken();

        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        console.log("Log Created Successfully");
        console.log(response.data);

    } catch (error) {
        console.log("Logging Failed");
        console.log(error.response?.data || error.message);
    }
}

module.exports = Log;