"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARProfileAgingInfoTypeToJSON = exports.ARProfileAgingInfoTypeFromJSONTyped = exports.ARProfileAgingInfoTypeFromJSON = exports.instanceOfARProfileAgingInfoType = void 0;
const runtime_1 = require("../runtime");
const ARAgingInfoType_1 = require("./ARAgingInfoType");
const ARProfileAgingInfoTypeHotelInner_1 = require("./ARProfileAgingInfoTypeHotelInner");
/**
 * Check if a given object implements the ARProfileAgingInfoType interface.
 */
function instanceOfARProfileAgingInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARProfileAgingInfoType = instanceOfARProfileAgingInfoType;
function ARProfileAgingInfoTypeFromJSON(json) {
    return ARProfileAgingInfoTypeFromJSONTyped(json, false);
}
exports.ARProfileAgingInfoTypeFromJSON = ARProfileAgingInfoTypeFromJSON;
function ARProfileAgingInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotel': !(0, runtime_1.exists)(json, 'hotel') ? undefined : (json['hotel'].map(ARProfileAgingInfoTypeHotelInner_1.ARProfileAgingInfoTypeHotelInnerFromJSON)),
        'totalProfileAging': !(0, runtime_1.exists)(json, 'totalProfileAging') ? undefined : (0, ARAgingInfoType_1.ARAgingInfoTypeFromJSON)(json['totalProfileAging']),
    };
}
exports.ARProfileAgingInfoTypeFromJSONTyped = ARProfileAgingInfoTypeFromJSONTyped;
function ARProfileAgingInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotel': value.hotel === undefined ? undefined : (value.hotel.map(ARProfileAgingInfoTypeHotelInner_1.ARProfileAgingInfoTypeHotelInnerToJSON)),
        'totalProfileAging': (0, ARAgingInfoType_1.ARAgingInfoTypeToJSON)(value.totalProfileAging),
    };
}
exports.ARProfileAgingInfoTypeToJSON = ARProfileAgingInfoTypeToJSON;
