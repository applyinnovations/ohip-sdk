"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BestAvailableRateTypeToJSON = exports.BestAvailableRateTypeFromJSONTyped = exports.BestAvailableRateTypeFromJSON = exports.instanceOfBestAvailableRateType = void 0;
const runtime_1 = require("../runtime");
const CodeListType_1 = require("./CodeListType");
/**
 * Check if a given object implements the BestAvailableRateType interface.
 */
function instanceOfBestAvailableRateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBestAvailableRateType = instanceOfBestAvailableRateType;
function BestAvailableRateTypeFromJSON(json) {
    return BestAvailableRateTypeFromJSONTyped(json, false);
}
exports.BestAvailableRateTypeFromJSON = BestAvailableRateTypeFromJSON;
function BestAvailableRateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : (new Date(json['date'])),
        'lengthOfStay': !(0, runtime_1.exists)(json, 'lengthOfStay') ? undefined : json['lengthOfStay'],
        'rateCode': !(0, runtime_1.exists)(json, 'rateCode') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['rateCode']),
    };
}
exports.BestAvailableRateTypeFromJSONTyped = BestAvailableRateTypeFromJSONTyped;
function BestAvailableRateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date === undefined ? undefined : (value.date.toISOString().substring(0, 10)),
        'lengthOfStay': value.lengthOfStay,
        'rateCode': (0, CodeListType_1.CodeListTypeToJSON)(value.rateCode),
    };
}
exports.BestAvailableRateTypeToJSON = BestAvailableRateTypeToJSON;