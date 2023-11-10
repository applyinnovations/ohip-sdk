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
exports.CustomerTypeToJSON = exports.CustomerTypeFromJSONTyped = exports.CustomerTypeFromJSON = exports.instanceOfCustomerType = void 0;
const runtime_1 = require("../runtime");
const PersonNameType_1 = require("./PersonNameType");
/**
 * Check if a given object implements the CustomerType interface.
 */
function instanceOfCustomerType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCustomerType = instanceOfCustomerType;
function CustomerTypeFromJSON(json) {
    return CustomerTypeFromJSONTyped(json, false);
}
exports.CustomerTypeFromJSON = CustomerTypeFromJSON;
function CustomerTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'genderCode': !(0, runtime_1.exists)(json, 'genderCode') ? undefined : json['genderCode'],
        'personName': !(0, runtime_1.exists)(json, 'personName') ? undefined : (json['personName'].map(PersonNameType_1.PersonNameTypeFromJSON)),
        'vipDescription': !(0, runtime_1.exists)(json, 'vipDescription') ? undefined : json['vipDescription'],
        'vipStatus': !(0, runtime_1.exists)(json, 'vipStatus') ? undefined : json['vipStatus'],
    };
}
exports.CustomerTypeFromJSONTyped = CustomerTypeFromJSONTyped;
function CustomerTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'genderCode': value.genderCode,
        'personName': value.personName === undefined ? undefined : (value.personName.map(PersonNameType_1.PersonNameTypeToJSON)),
        'vipDescription': value.vipDescription,
        'vipStatus': value.vipStatus,
    };
}
exports.CustomerTypeToJSON = CustomerTypeToJSON;
