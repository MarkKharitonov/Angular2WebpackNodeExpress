Introduction
============

This project demonstrates my attempt to figure out how to start developing an Angular2 RC5 application.

I am not a seasoned web developer, so for me the first obstacle (out of many) is setting up the eco-system. 

Ideally, I would like to:

 1. Use Node+Express for the server side.
 1. Write the server side code in TypeScript.
 1. Use webpack to bundle the client side code.
 1. Use webpack-dev-server alongside the Node+Express.
 1. Be able to debug both the client and the server side code in IntelliJ IDEA (or WebStorm, should be the same).
 1. Have clear separation between the client and server code (different root folders).
 1. Have clear separation between the source TypeScript code and the generated JavaScript code.
 
Ideally, I should also want to be able to run unit and end to end tests. I will definitely do when I have some code to test :-).

My starting point was the module-1 branch of the retain-app repository - https://github.com/AngularClass/retain-app/tree/module-1

(I have learned about it after listening to the Angular2 course on https://angularclass.com - thank you, guys. You are doing a great job)

Running
=======

 1. `npm install`
 1. `npm run dev` 
     
Navigate to http://localhost:3000

Problems
========

There are several things I do not like/understand/uncertain of:

 1. The client side contents are transpiled by webpack, the server side - by IDE or manually. Not sure if this corresponds to the best 
    practices. 
 
    For example, webpack is going to take care of any plain .js files under ./src/client - they should be bundled and
    placed under ./dist/client automatically. But what about plain .js files under ./src/server ? They will have to be copied as well.
 1. I have three tsconfig.json files - `./src/client/tsconfig.json`, `./src/server/tsconfig.json` and `./tsconfig.json`. The three 
    files share most of the options, but right now I copy them in each of the three files - not very good.
 1. Because the `typings` folder is at the root I had to start all the top level TypeScript files (.\src\client\main.ts, 
    .\src\client\polyfills.ts, .\src\client\vendor.ts and .\src\server\main.ts) with 
    
    /// &lt;reference path="../../typings/index.d.ts" /&gt;
   
    Can anything be done about it while keeping the client and server files under the src folder?
 
P.S.
http://stackoverflow.com/questions/39007344/how-to-wire-angular2-webpack-node-express
