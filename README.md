# grpc-services-examples
This is a base project for starters who wish to develop gRPC applications using NodeJS.

These set of examples covers 4 types of RPC services possible while using gRPC

- Unary Service -- nodeCalculator
- Client Streaming Service -- streaming-client-avg
- Server Streaming Service -- streaming-server-primes
- Bi-Directional Streaming Service -- streaming-bidirect-max

Each of these service directory is a node application. Steps to run:
- Go to directory and run `npm install`
- command.txt file has a protoc command to complie protocol buffer files. Run the command. 
  - Commnd might change based on the OS
  - Please Refer protocol buffer official documentation. This repo has precomplied stubs and can be found under `../server/protos`
- Run `node server/server.js` and `node client/client.js`

Please Note! These are simple prototypes to get a understanding on how services function.
