"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingInfoTypeCompToJSON = exports.RoutingInfoTypeCompFromJSONTyped = exports.RoutingInfoTypeCompFromJSON = exports.instanceOfRoutingInfoTypeComp = void 0;
const runtime_1 = require("../runtime");
const CompRoutingRequestType_1 = require("./CompRoutingRequestType");
const PayeeInfoType_1 = require("./PayeeInfoType");
const RoutingInstructionType_1 = require("./RoutingInstructionType");
/**
 * Check if a given object implements the RoutingInfoTypeComp interface.
 */
function instanceOfRoutingInfoTypeComp(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoutingInfoTypeComp = instanceOfRoutingInfoTypeComp;
function RoutingInfoTypeCompFromJSON(json) {
    return RoutingInfoTypeCompFromJSONTyped(json, false);
}
exports.RoutingInfoTypeCompFromJSON = RoutingInfoTypeCompFromJSON;
function RoutingInfoTypeCompFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'compRequestInfo': !(0, runtime_1.exists)(json, 'compRequestInfo') ? undefined : (0, CompRoutingRequestType_1.CompRoutingRequestTypeFromJSON)(json['compRequestInfo']),
        'folioWindowNo': !(0, runtime_1.exists)(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'instructions': !(0, runtime_1.exists)(json, 'instructions') ? undefined : (json['instructions'].map(RoutingInstructionType_1.RoutingInstructionTypeFromJSON)),
        'payeeInfo': !(0, runtime_1.exists)(json, 'payeeInfo') ? undefined : (0, PayeeInfoType_1.PayeeInfoTypeFromJSON)(json['payeeInfo']),
    };
}
exports.RoutingInfoTypeCompFromJSONTyped = RoutingInfoTypeCompFromJSONTyped;
function RoutingInfoTypeCompToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'compRequestInfo': (0, CompRoutingRequestType_1.CompRoutingRequestTypeToJSON)(value.compRequestInfo),
        'folioWindowNo': value.folioWindowNo,
        'instructions': value.instructions === undefined ? undefined : (value.instructions.map(RoutingInstructionType_1.RoutingInstructionTypeToJSON)),
        'payeeInfo': (0, PayeeInfoType_1.PayeeInfoTypeToJSON)(value.payeeInfo),
    };
}
exports.RoutingInfoTypeCompToJSON = RoutingInfoTypeCompToJSON;
