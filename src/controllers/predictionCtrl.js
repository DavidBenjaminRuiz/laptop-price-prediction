
const {httpRequest} = require('../adapters/httpRequest');

const makePrediction = async (req, res) => {
    
    awsURL = process.env.AWS_ENDPOINT;
    const method = "POST";
    const data = req.body;
    const prediction = await httpRequest(awsURL, method, data);
    return prediction;
};

module.exports = {makePrediction};