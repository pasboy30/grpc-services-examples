var grpc = require('@grpc/grpc-js')
var services = require('../server/protos/calculator_grpc_pb')
var messages = require('../server/protos/calculator_pb')


function addition() {
    console.log('Addition Called ...')
    var client = new services.CalculatorServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )
    // Create Instance of Request and add the values to it.
    // High level request instance which has one variable of type NumberInput
    var request = new messages.SumRequest()
    // Variable to feed in request (NumberInput type) that takes 2 int32 values num_1 and num_2
    var input = new messages.NumberInput()
    input.setNum1(10)
    input.setNum2(20)
    // Appending value to request
    request.setSumInput(input)

    client.sum(request, (err, resp) => {
        if(!err) {
            console.log(`Addition of numbers is ... ${resp.getOutput()}`)
        }
        else {
            console.error(`Error: ${err}`)
        }
    })
}


function getRPCDeadline(rpcType) {
    tileAllowed = 5000

    switch(rpcType) {
        case 1:
            timeAllowed = 1000
            break
        case 2:
            timeAllowed = 7000
            break
        default:
            console.log('Invalid RPC type -- setting to 5000ms')
    }
    return new Date(Date.now() + timeAllowed)
}

function subtraction() {
    console.log('Subtraction Called ...')
    var client = new services.CalculatorServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )
    // Create Instance of Request and add the values to it.
    // High level request instance which has one variable of type NumberInput
    var request = new messages.SubRequest()
    // Variable to feed in request (NumberInput type) that takes 2 int32 values num_1 and num_2
    var input = new messages.NumberInput()
    input.setNum1(20)
    input.setNum2(10)
    // Appending value to request
    request.setSubInput(input)

    client.sub(request, (err, resp) => {
        if(!err) {
            console.log(`Subtraction of numbers is ... ${resp.getOutput()}`)
        }
        else {
            console.log(`Error: ${Object.keys(err)}`)
        }
    })
}



function multiply() {
    console.log('Multiplication Called ...')
    var client = new services.CalculatorServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )
    // Create Instance of Request and add the values to it.
    // High level request instance which has one variable of type NumberInput
    var request = new messages.ProdRequest()
    // Variable to feed in request (NumberInput type) that takes 2 int32 values num_1 and num_2
    var input = new messages.NumberInput()
    input.setNum1(10)
    input.setNum2(20)
    // Appending value to request
    request.setProdInput(input)

    client.prod(request, (err, resp) => {
        if(!err) {
            console.log(`Product of numbers is ... ${resp.getOutput()}`)
        }
        else {
            console.error(`Error: ${err}`)
        }
    })
}


function Squrtroot(x) {
    var deadline = getRPCDeadline(1)

    console.log('Square Root Called ...')
    var client = new services.CalculatorServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    )
    var request = new messages.SquareRootRequest()
    request.setNumber(x)
    client.squareRoot(request, {deadline: deadline}, (err, resp) => {
        if(!err) {
            console.log(`Sqrt of number ${x} is ${resp.getNumberRoot()}`)
        }
        else {
            //console.log(`Debugging options using err -- ${Object.keys(err)}`)
            //console.error(err.details)
            console.error(err)

        }
    })

}

addition()
subtraction()
multiply()
Squrtroot(100)