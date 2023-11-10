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
exports.CateringEventPostingTypeToJSON = exports.CateringEventPostingTypeFromJSONTyped = exports.CateringEventPostingTypeFromJSON = exports.instanceOfCateringEventPostingType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the CateringEventPostingType interface.
 */
function instanceOfCateringEventPostingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringEventPostingType = instanceOfCateringEventPostingType;
function CateringEventPostingTypeFromJSON(json) {
    return CateringEventPostingTypeFromJSONTyped(json, false);
}
exports.CateringEventPostingTypeFromJSON = CateringEventPostingTypeFromJSON;
function CateringEventPostingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chequeNumber': !(0, runtime_1.exists)(json, 'chequeNumber') ? undefined : json['chequeNumber'],
        'includedRevenue': !(0, runtime_1.exists)(json, 'includedRevenue') ? undefined : json['includedRevenue'],
        'postId': !(0, runtime_1.exists)(json, 'postId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['postId']),
        'posted': !(0, runtime_1.exists)(json, 'posted') ? undefined : json['posted'],
        'postedRevenue': !(0, runtime_1.exists)(json, 'postedRevenue') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['postedRevenue']),
        'resourceName': !(0, runtime_1.exists)(json, 'resourceName') ? undefined : json['resourceName'],
        'revenue': !(0, runtime_1.exists)(json, 'revenue') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['revenue']),
        'revenueType': !(0, runtime_1.exists)(json, 'revenueType') ? undefined : json['revenueType'],
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
    };
}
exports.CateringEventPostingTypeFromJSONTyped = CateringEventPostingTypeFromJSONTyped;
function CateringEventPostingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chequeNumber': value.chequeNumber,
        'includedRevenue': value.includedRevenue,
        'postId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.postId),
        'posted': value.posted,
        'postedRevenue': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.postedRevenue),
        'resourceName': value.resourceName,
        'revenue': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.revenue),
        'revenueType': value.revenueType,
        'transactionCode': value.transactionCode,
    };
}
exports.CateringEventPostingTypeToJSON = CateringEventPostingTypeToJSON;
