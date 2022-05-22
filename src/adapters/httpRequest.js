
const axios = require('axios').default;


const httpRequest = async (url, method, data) => {
    const response = await axios({
        url,
        method,
        data,
    });
    
    return response.data;
};

module.exports = {httpRequest};