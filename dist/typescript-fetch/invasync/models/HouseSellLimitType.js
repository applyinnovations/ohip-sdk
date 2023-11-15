"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Opera Cloud Inventory Asynchronous API
 * APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseSellLimitTypeToJSON = exports.HouseSellLimitTypeFromJSONTyped = exports.HouseSellLimitTypeFromJSON = exports.instanceOfHouseSellLimitType = exports.HouseSellLimitTypeFlatOrPercentageEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.HouseSellLimitTypeFlatOrPercentageEnum = {
    Flat: 'Flat',
    Percentage: 'Percentage'
};
/**
 * Check if a given object implements the HouseSellLimitType interface.
 */
function instanceOfHouseSellLimitType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHouseSellLimitType = instanceOfHouseSellLimitType;
function HouseSellLimitTypeFromJSON(json) {
    return HouseSellLimitTypeFromJSONTyped(json, false);
}
exports.HouseSellLimitTypeFromJSON = HouseSellLimitTypeFromJSON;
function HouseSellLimitTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : json['date'],
        'flatOrPercentage': !(0, runtime_1.exists)(json, 'flatOrPercentage') ? undefined : json['flatOrPercentage'],
    };
}
exports.HouseSellLimitTypeFromJSONTyped = HouseSellLimitTypeFromJSONTyped;
function HouseSellLimitTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'date': value.date,
        'flatOrPercentage': value.flatOrPercentage,
    };
}
exports.HouseSellLimitTypeToJSON = HouseSellLimitTypeToJSON;
