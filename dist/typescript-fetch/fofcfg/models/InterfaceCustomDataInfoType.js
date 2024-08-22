"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceCustomDataInfoTypeToJSON = exports.InterfaceCustomDataInfoTypeFromJSONTyped = exports.InterfaceCustomDataInfoTypeFromJSON = exports.instanceOfInterfaceCustomDataInfoType = void 0;
const runtime_1 = require("../runtime");
const InterfaceCustomDataDetailType_1 = require("./InterfaceCustomDataDetailType");
/**
 * Check if a given object implements the InterfaceCustomDataInfoType interface.
 */
function instanceOfInterfaceCustomDataInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfInterfaceCustomDataInfoType = instanceOfInterfaceCustomDataInfoType;
function InterfaceCustomDataInfoTypeFromJSON(json) {
    return InterfaceCustomDataInfoTypeFromJSONTyped(json, false);
}
exports.InterfaceCustomDataInfoTypeFromJSON = InterfaceCustomDataInfoTypeFromJSON;
function InterfaceCustomDataInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'exportAsXml': !(0, runtime_1.exists)(json, 'exportAsXml') ? undefined : json['exportAsXml'],
        'includeDoorcardField': !(0, runtime_1.exists)(json, 'includeDoorcardField') ? undefined : json['includeDoorcardField'],
        'interfaceCustomDataDetails': !(0, runtime_1.exists)(json, 'interfaceCustomDataDetails') ? undefined : (json['interfaceCustomDataDetails'].map(InterfaceCustomDataDetailType_1.InterfaceCustomDataDetailTypeFromJSON)),
    };
}
exports.InterfaceCustomDataInfoTypeFromJSONTyped = InterfaceCustomDataInfoTypeFromJSONTyped;
function InterfaceCustomDataInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'exportAsXml': value.exportAsXml,
        'includeDoorcardField': value.includeDoorcardField,
        'interfaceCustomDataDetails': value.interfaceCustomDataDetails === undefined ? undefined : (value.interfaceCustomDataDetails.map(InterfaceCustomDataDetailType_1.InterfaceCustomDataDetailTypeToJSON)),
    };
}
exports.InterfaceCustomDataInfoTypeToJSON = InterfaceCustomDataInfoTypeToJSON;
