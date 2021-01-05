var grpc = require('@grpc/grpc-js')
var service = require('../server/protos/maxima_grpc_pb')
var messages = require('../server/protos/maxima_pb')



async function main() {
    console.log(`[#] GetMaxima Client Running`)
    var client = new service.MaximumServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )
    var call = client.getMaximum((err, resp) => {
        console.log(`>> Server Response: ${resp}`)
    })
    call.on('data', (resp) => {
        console.log(`>> New Maximum is ${resp.getResult()}`)
    })
    call.on('error', err => {
        console.error(`[X] Error: ${err}`)
    })
    call.on('end', () => {
        console.log('>> Stream Ends ...')
    })
    nums = [1,11,3,345,34,1000,10,111111]
    nums.forEach(x => {
        var request = new messages.MaximumRequest()
        request.setInputNum(x)
        call.write(request)
    });
    call.end()
}

main()