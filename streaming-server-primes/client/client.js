var grpc = require('@grpc/grpc-js')
var services = require('../server/protos/primes_grpc_pb')
var messages = require('../server/protos/primes_pb')

function main (N) {
    console.log(`Running Client With Input ${N} ....`)
    // Client Initialization ...
    var client = new services.PrimeDecompositionClient('localhost:50051', grpc.credentials.createInsecure())
    // Set Request ...
    var request = new messages.PrimeRequest()
    request.setInputint(N)
    // Make the call ... 
    call = client.primes(request, () => {})
    // Respond to stream of reponses ... 
    call.on('data', (response) => {
            console.log(`[x] Prime Factor Recieved ${response.getResponseint()}`)
    })
    call.on('status', (status) => {
        console.log("Server Status: ", status)
    })
    call.on('error', (err) => {
        console.error("Error: ", err)
    })
    call.on('end', () => {
        console.log("Stream Ended . . .")
    })
}

const N = 7
main(N)