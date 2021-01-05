grpc = require('@grpc/grpc-js')
service = require('../server/protos/average_grpc_pb')
messages = require('../server/protos/average_pb')

function main() {

    var client = new service.AverageServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )

    var request = new messages.AverageRequest()

    var call = client.calculateAverage(request, (error, response) => {
        if(!error) {
            console.log(`[~] Average of Numbers is  ${response.getResult()}`)
        }
        else {
            console.error(`[x] Unexpected Errors: ${error}`)
        }
    })

    let numbers = [1,2,3,45,5,5,6,76,7]
    numbers.forEach((val) => {
        console.log(`[x] Sending ${val} to Server ...`)
        var request = new messages.AverageRequest()
        request.setNum(val)
        call.write(request)
    })
    call.end()
}

main()