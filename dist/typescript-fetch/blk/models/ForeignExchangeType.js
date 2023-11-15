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
exports.ForeignExchangeTypeToJSON = exports.ForeignExchangeTypeFromJSONTyped = exports.ForeignExchangeTypeFromJSON = exports.instanceOfForeignExchangeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ForeignExchangeType interface.
 */
function instanceOfForeignExchangeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfForeignExchangeType = instanceOfForeignExchangeType;
function ForeignExchangeTypeFromJSON(json) {
    return ForeignExchangeTypeFromJSONTyped(json, false);
}
exports.ForeignExchangeTypeFromJSON = ForeignExchangeTypeFromJSON;
function ForeignExchangeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'effectiveDate': !(0, runtime_1.exists)(json, 'effectiveDate') ? undefined : json['effectiveDate'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.ForeignExchangeTypeFromJSONTyped = ForeignExchangeTypeFromJSONTyped;
function ForeignExchangeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'effectiveDate': value.effectiveDate,
        'type': value.type,
    };
}
exports.ForeignExchangeTypeToJSON = ForeignExchangeTypeToJSON;
