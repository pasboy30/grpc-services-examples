grpc = require('@grpc/grpc-js')
service = require('../server/protos/average_grpc_pb')
messages = require('../server/protos/average_pb')

function calculateAverage(call, callback) {
    let ctr = 0
    let addition = 0 
    call.on('data', (req) => {
        addition += req.getNum()
        ctr += 1
        console.log(`[x] Server Recieved Integer For Average Calculation: ${req.getNum()}`)
    })
    call.on('error', (err) => {
        console.error(`Unexped Error: ${err}`)
    })
    call.on('end', () => {
        console.log(`[x] Total Numbers Fetched: ${ctr}`)
        const avgAns = addition/ctr
        console.log(`[x] Average ${avgAns} will be returned to client!`)
        var response = new messages.AverageResponse()
        response.setResult(avgAns)
        callback(null, response)
    })
}

function main() {
    // Initialize Server
    var server = new grpc.Server()
    // Append Services 
    server.addService(service.AverageServiceService, {calculateAverage: calculateAverage})
    server.bindAsync(
        '127.0.0.1:50051',
        grpc.ServerCredentials.createInsecure(),
        () => {
            server.start()
            console.log('Server Running on Port 50051')
        }
    )
}

main()