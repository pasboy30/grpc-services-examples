var grpc = require('@grpc/grpc-js')
var service = require('../server/protos/maxima_grpc_pb')
var messages = require('../server/protos/maxima_pb')



function getMaximum(call, callback) {
    let currentMax = -1000000
    console.log('--> getMaximum Service Method called')
    call.on('data', (req) => {
        var notification = `>> Server Recieved Data! ${req.getInputNum()}`
        input = req.getInputNum()
        console.log(notification)
        if (input > currentMax) {
            currentMax = input
            console.log(`>> new maximum is ${input}`)
            var response = new messages.MaximumResponse()
            response.setResult(input)
            call.write(response)
        }
        else {
            console.log(`>> ${input} is not a new maximum`)
        }
    })
    call.on('error', (err) => {
        console.error(`[X] Unexpected Errors: ${err}`)
    })
    call.on('end', () => {
        console.log("[#] Computation Complete")
        call.end()
    })
}

function main() {
    var server = new grpc.Server()
    server.addService(service.MaximumServiceService, {getMaximum, getMaximum})
    server.bindAsync(
        '127.0.0.1:50051',
        grpc.ServerCredentials.createInsecure(),
        () => {
            server.start()
            console.log(`[#] GetMaxima Server Running on Port 50051`)
        }
    )
}

main()