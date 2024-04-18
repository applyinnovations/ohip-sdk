"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResPreConfiguredRoutingInstrTypeToJSON = exports.ResPreConfiguredRoutingInstrTypeFromJSONTyped = exports.ResPreConfiguredRoutingInstrTypeFromJSON = exports.instanceOfResPreConfiguredRoutingInstrType = void 0;
const runtime_1 = require("../runtime");
const AuthorizerInfoType_1 = require("./AuthorizerInfoType");
const ResProfileTypeType_1 = require("./ResProfileTypeType");
/**
 * Check if a given object implements the ResPreConfiguredRoutingInstrType interface.
 */
function instanceOfResPreConfiguredRoutingInstrType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResPreConfiguredRoutingInstrType = instanceOfResPreConfiguredRoutingInstrType;
function ResPreConfiguredRoutingInstrTypeFromJSON(json) {
    return ResPreConfiguredRoutingInstrTypeFromJSONTyped(json, false);
}
exports.ResPreConfiguredRoutingInstrTypeFromJSON = ResPreConfiguredRoutingInstrTypeFromJSON;
function ResPreConfiguredRoutingInstrTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authorizerInfo': !(0, runtime_1.exists)(json, 'authorizerInfo') ? undefined : (0, AuthorizerInfoType_1.AuthorizerInfoTypeFromJSON)(json['authorizerInfo']),
        'profileType': !(0, runtime_1.exists)(json, 'profileType') ? undefined : (0, ResProfileTypeType_1.ResProfileTypeTypeFromJSON)(json['profileType']),
        'promotionCode': !(0, runtime_1.exists)(json, 'promotionCode') ? undefined : json['promotionCode'],
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
    };
}
exports.ResPreConfiguredRoutingInstrTypeFromJSONTyped = ResPreConfiguredRoutingInstrTypeFromJSONTyped;
function ResPreConfiguredRoutingInstrTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authorizerInfo': (0, AuthorizerInfoType_1.AuthorizerInfoTypeToJSON)(value.authorizerInfo),
        'profileType': (0, ResProfileTypeType_1.ResProfileTypeTypeToJSON)(value.profileType),
        'promotionCode': value.promotionCode,
        'ratePlanCode': value.ratePlanCode,
    };
}
exports.ResPreConfiguredRoutingInstrTypeToJSON = ResPreConfiguredRoutingInstrTypeToJSON;