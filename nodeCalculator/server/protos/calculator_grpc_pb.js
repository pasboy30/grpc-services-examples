// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_calculator_pb = require('../protos/calculator_pb.js');

function serialize_calculator_ProdRequest(arg) {
  if (!(arg instanceof protos_calculator_pb.ProdRequest)) {
    throw new Error('Expected argument of type calculator.ProdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_ProdRequest(buffer_arg) {
  return protos_calculator_pb.ProdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_ProdResponse(arg) {
  if (!(arg instanceof protos_calculator_pb.ProdResponse)) {
    throw new Error('Expected argument of type calculator.ProdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_ProdResponse(buffer_arg) {
  return protos_calculator_pb.ProdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SquareRootRequest(arg) {
  if (!(arg instanceof protos_calculator_pb.SquareRootRequest)) {
    throw new Error('Expected argument of type calculator.SquareRootRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SquareRootRequest(buffer_arg) {
  return protos_calculator_pb.SquareRootRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SquareRootResponse(arg) {
  if (!(arg instanceof protos_calculator_pb.SquareRootResponse)) {
    throw new Error('Expected argument of type calculator.SquareRootResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SquareRootResponse(buffer_arg) {
  return protos_calculator_pb.SquareRootResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SubRequest(arg) {
  if (!(arg instanceof protos_calculator_pb.SubRequest)) {
    throw new Error('Expected argument of type calculator.SubRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SubRequest(buffer_arg) {
  return protos_calculator_pb.SubRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SubResponse(arg) {
  if (!(arg instanceof protos_calculator_pb.SubResponse)) {
    throw new Error('Expected argument of type calculator.SubResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SubResponse(buffer_arg) {
  return protos_calculator_pb.SubResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SumRequest(arg) {
  if (!(arg instanceof protos_calculator_pb.SumRequest)) {
    throw new Error('Expected argument of type calculator.SumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SumRequest(buffer_arg) {
  return protos_calculator_pb.SumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SumResponse(arg) {
  if (!(arg instanceof protos_calculator_pb.SumResponse)) {
    throw new Error('Expected argument of type calculator.SumResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SumResponse(buffer_arg) {
  return protos_calculator_pb.SumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorServiceService = exports.CalculatorServiceService = {
  // unary Services for Calculator
sum: {
    path: '/calculator.CalculatorService/Sum',
    requestStream: false,
    responseStream: false,
    requestType: protos_calculator_pb.SumRequest,
    responseType: protos_calculator_pb.SumResponse,
    requestSerialize: serialize_calculator_SumRequest,
    requestDeserialize: deserialize_calculator_SumRequest,
    responseSerialize: serialize_calculator_SumResponse,
    responseDeserialize: deserialize_calculator_SumResponse,
  },
  sub: {
    path: '/calculator.CalculatorService/Sub',
    requestStream: false,
    responseStream: false,
    requestType: protos_calculator_pb.SubRequest,
    responseType: protos_calculator_pb.SubResponse,
    requestSerialize: serialize_calculator_SubRequest,
    requestDeserialize: deserialize_calculator_SubRequest,
    responseSerialize: serialize_calculator_SubResponse,
    responseDeserialize: deserialize_calculator_SubResponse,
  },
  prod: {
    path: '/calculator.CalculatorService/Prod',
    requestStream: false,
    responseStream: false,
    requestType: protos_calculator_pb.ProdRequest,
    responseType: protos_calculator_pb.ProdResponse,
    requestSerialize: serialize_calculator_ProdRequest,
    requestDeserialize: deserialize_calculator_ProdRequest,
    responseSerialize: serialize_calculator_ProdResponse,
    responseDeserialize: deserialize_calculator_ProdResponse,
  },
  // This Unary RPC will throw error if the sent number is negative!
squareRoot: {
    path: '/calculator.CalculatorService/SquareRoot',
    requestStream: false,
    responseStream: false,
    requestType: protos_calculator_pb.SquareRootRequest,
    responseType: protos_calculator_pb.SquareRootResponse,
    requestSerialize: serialize_calculator_SquareRootRequest,
    requestDeserialize: deserialize_calculator_SquareRootRequest,
    responseSerialize: serialize_calculator_SquareRootResponse,
    responseDeserialize: deserialize_calculator_SquareRootResponse,
  },
};

exports.CalculatorServiceClient = grpc.makeGenericClientConstructor(CalculatorServiceService);
