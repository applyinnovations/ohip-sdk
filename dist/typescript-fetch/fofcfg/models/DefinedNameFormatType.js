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
exports.DefinedNameFormatTypeToJSON = exports.DefinedNameFormatTypeFromJSONTyped = exports.DefinedNameFormatTypeFromJSON = exports.instanceOfDefinedNameFormatType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the DefinedNameFormatType interface.
 */
function instanceOfDefinedNameFormatType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDefinedNameFormatType = instanceOfDefinedNameFormatType;
function DefinedNameFormatTypeFromJSON(json) {
    return DefinedNameFormatTypeFromJSONTyped(json, false);
}
exports.DefinedNameFormatTypeFromJSON = DefinedNameFormatTypeFromJSON;
function DefinedNameFormatTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'definedFormatId': !(0, runtime_1.exists)(json, 'definedFormatId') ? undefined : json['definedFormatId'],
        'expression': !(0, runtime_1.exists)(json, 'expression') ? undefined : json['expression'],
        'expressionTable': !(0, runtime_1.exists)(json, 'expressionTable') ? undefined : json['expressionTable'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'logo': !(0, runtime_1.exists)(json, 'logo') ? undefined : json['logo'],
    };
}
exports.DefinedNameFormatTypeFromJSONTyped = DefinedNameFormatTypeFromJSONTyped;
function DefinedNameFormatTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'definedFormatId': value.definedFormatId,
        'expression': value.expression,
        'expressionTable': value.expressionTable,
        'hotelId': value.hotelId,
        'logo': value.logo,
    };
}
exports.DefinedNameFormatTypeToJSON = DefinedNameFormatTypeToJSON;
