const axios = require('axios');
require('dotenv').config();

const ovwService = async () => {
    console.log('All Things');
    return await axios.get(`${process.env.overwatchURL}`)
}

const ovwHeroes = async (key)=> {
    console.log(`${key}`);
    return await axios.get(`${process.env.overwatchURL}${key}`) //fix
}

module.exports = {ovwService, ovwHeroes}