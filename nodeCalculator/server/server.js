var grpc = require('@grpc/grpc-js')
var services = require('../server/protos/calculator_grpc_pb')
var messages = require('../server/protos/calculator_pb')

function sum(call, callback) {
    // Create the response body
    var summation = new messages.SumResponse()
    summation.setOutput(
        call.request.getSumInput().getNum1() + call.request.getSumInput().getNum2()
    )
    callback(null, summation)
}

function sub(call, callback) {
    // Create the response body
    var subtraction = new messages.SubResponse()
    subtraction.setOutput(
        call.request.getSubInput().getNum1() - call.request.getSubInput().getNum2()
    )
    callback(null, subtraction)
}

function prod(call, callback) {
    // Create the response body
    var product = new messages.ProdResponse()
    product.setOutput(
        call.request.getProdInput().getNum1() * call.request.getProdInput().getNum2()
    )
    callback(null, product)
}

function squareRoot(call, callback) {
    var number = call.request.getNumber()

    if (number >= 0) {
        var numberRoot = Math.sqrt(number)
        var response = new messages.SquareRootResponse()
        response.setNumberRoot(numberRoot)
        callback(null, response)
    }
    else {
        // Error Handeling ...
        return callback({
            code: grpc.status.INVALID_ARGUMENT,
            message: `The number being sent is not positive (Sent Request: ${number})`
        })
    }
}


function main() {
    const server = new grpc.Server()
    // Add Services -- Addition, Subration and Multiplication
    server.addService (
        services.CalculatorServiceService,
        {
            sum : sum,
            sub : sub, 
            prod: prod,
            squareRoot: squareRoot
        }
    )
    // Server Bind and Run ... 
    server.bindAsync (
        '127.0.0.1:50051',
        grpc.ServerCredentials.createInsecure(),
        () => {
            server.start()
            console.log('Calculator Server running on 127.0.0.1:50051')
        }
    )
}

main()