// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_primes_pb = require('../protos/primes_pb.js');

function serialize_primes_PrimeRequest(arg) {
  if (!(arg instanceof protos_primes_pb.PrimeRequest)) {
    throw new Error('Expected argument of type primes.PrimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_primes_PrimeRequest(buffer_arg) {
  return protos_primes_pb.PrimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_primes_PrimeResponse(arg) {
  if (!(arg instanceof protos_primes_pb.PrimeResponse)) {
    throw new Error('Expected argument of type primes.PrimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_primes_PrimeResponse(buffer_arg) {
  return protos_primes_pb.PrimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PrimeDecompositionService = exports.PrimeDecompositionService = {
  // Streaming Server Service
primes: {
    path: '/primes.PrimeDecomposition/primes',
    requestStream: false,
    responseStream: true,
    requestType: protos_primes_pb.PrimeRequest,
    responseType: protos_primes_pb.PrimeResponse,
    requestSerialize: serialize_primes_PrimeRequest,
    requestDeserialize: deserialize_primes_PrimeRequest,
    responseSerialize: serialize_primes_PrimeResponse,
    responseDeserialize: deserialize_primes_PrimeResponse,
  },
};

exports.PrimeDecompositionClient = grpc.makeGenericClientConstructor(PrimeDecompositionService);
