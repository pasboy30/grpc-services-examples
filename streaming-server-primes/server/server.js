var grpc = require('@grpc/grpc-js')
var services = require('../server/protos/primes_grpc_pb')
var messages = require('../server/protos/primes_pb')



function primes(call, callBack) {
    let N = call.request.getInputint()
    console.log(`[x] Client Requested Prime Factors for Integer ${N}`)
    let k = 2
    while (N > 1) {
        if (N % k == 0) {
            console.log(`[x] Prime Factor Generated ${k}`)
            var primeFactor = new messages.PrimeResponse()
            primeFactor.setResponseint(k)
            call.write(primeFactor)
            N = parseInt(N / k)
        }
        else {
            k = k + 1
            console.log(`[x] Divisor Incremenmt to ${k}`)
        }
    }
    console.log('[x] End of Algorithm')
    call.end()
}


function main () {
    // Initialize server ...
    var server = new grpc.Server()
    //Add services ... 
    server.addService(services.PrimeDecompositionService, {primes: primes})
    // Bind Server ... 
    server.bindAsync(
        '127.0.0.1:50051',
        grpc.ServerCredentials.createInsecure(),
        () => {
            server.start()
            console.log('Prime Decomposition Server Running On Port 50051 ...')
        }
    )
}

main()