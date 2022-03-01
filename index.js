'use strict';

require('dotenv').config();

const server = require('./src/server.js');
const {databaseexported} = require('./src/models/index.js')

    databaseexported.sync().then(()=>{
    server.start(process.env.PORT || 3008);})

.catch(console.error) 
