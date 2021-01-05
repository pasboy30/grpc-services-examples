// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_maxima_pb = require('../protos/maxima_pb.js');

function serialize_maxima_MaximumRequest(arg) {
  if (!(arg instanceof protos_maxima_pb.MaximumRequest)) {
    throw new Error('Expected argument of type maxima.MaximumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_maxima_MaximumRequest(buffer_arg) {
  return protos_maxima_pb.MaximumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_maxima_MaximumResponse(arg) {
  if (!(arg instanceof protos_maxima_pb.MaximumResponse)) {
    throw new Error('Expected argument of type maxima.MaximumResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_maxima_MaximumResponse(buffer_arg) {
  return protos_maxima_pb.MaximumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MaximumServiceService = exports.MaximumServiceService = {
  getMaximum: {
    path: '/maxima.MaximumService/GetMaximum',
    requestStream: true,
    responseStream: true,
    requestType: protos_maxima_pb.MaximumRequest,
    responseType: protos_maxima_pb.MaximumResponse,
    requestSerialize: serialize_maxima_MaximumRequest,
    requestDeserialize: deserialize_maxima_MaximumRequest,
    responseSerialize: serialize_maxima_MaximumResponse,
    responseDeserialize: deserialize_maxima_MaximumResponse,
  },
};

exports.MaximumServiceClient = grpc.makeGenericClientConstructor(MaximumServiceService);
