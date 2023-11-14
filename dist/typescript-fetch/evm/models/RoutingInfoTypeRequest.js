"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingInfoTypeRequestToJSON = exports.RoutingInfoTypeRequestFromJSONTyped = exports.RoutingInfoTypeRequestFromJSON = exports.instanceOfRoutingInfoTypeRequest = void 0;
const runtime_1 = require("../runtime");
const CompRoutingRequestType_1 = require("./CompRoutingRequestType");
const RoutingInstructionType_1 = require("./RoutingInstructionType");
/**
 * Check if a given object implements the RoutingInfoTypeRequest interface.
 */
function instanceOfRoutingInfoTypeRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoutingInfoTypeRequest = instanceOfRoutingInfoTypeRequest;
function RoutingInfoTypeRequestFromJSON(json) {
    return RoutingInfoTypeRequestFromJSONTyped(json, false);
}
exports.RoutingInfoTypeRequestFromJSON = RoutingInfoTypeRequestFromJSON;
function RoutingInfoTypeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'compRequestInfo': !(0, runtime_1.exists)(json, 'compRequestInfo') ? undefined : (0, CompRoutingRequestType_1.CompRoutingRequestTypeFromJSON)(json['compRequestInfo']),
        'instructions': !(0, runtime_1.exists)(json, 'instructions') ? undefined : (json['instructions'].map(RoutingInstructionType_1.RoutingInstructionTypeFromJSON)),
    };
}
exports.RoutingInfoTypeRequestFromJSONTyped = RoutingInfoTypeRequestFromJSONTyped;
function RoutingInfoTypeRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'compRequestInfo': (0, CompRoutingRequestType_1.CompRoutingRequestTypeToJSON)(value.compRequestInfo),
        'instructions': value.instructions === undefined ? undefined : (value.instructions.map(RoutingInstructionType_1.RoutingInstructionTypeToJSON)),
    };
}
exports.RoutingInfoTypeRequestToJSON = RoutingInfoTypeRequestToJSON;