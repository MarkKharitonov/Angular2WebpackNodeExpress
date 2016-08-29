/// <reference path="../../typings/index.d.ts" />
import {router as api} from "./api";

const express = require("express");
const app = express();

app.use('/api', api);

const PROD: boolean = process.env.NODE_ENV === 'production';
let port: number;
if (PROD) {
    port = process.env.API_PORT || 2999;
} else {
    let config = require('../../webpack.config');
    port = config.devServer.port - 1;
}

app.listen(port);
