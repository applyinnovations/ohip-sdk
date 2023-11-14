"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelBrochureTypePropertyControlsCurrencyFormattingToJSON = exports.HotelBrochureTypePropertyControlsCurrencyFormattingFromJSONTyped = exports.HotelBrochureTypePropertyControlsCurrencyFormattingFromJSON = exports.instanceOfHotelBrochureTypePropertyControlsCurrencyFormatting = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HotelBrochureTypePropertyControlsCurrencyFormatting interface.
 */
function instanceOfHotelBrochureTypePropertyControlsCurrencyFormatting(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelBrochureTypePropertyControlsCurrencyFormatting = instanceOfHotelBrochureTypePropertyControlsCurrencyFormatting;
function HotelBrochureTypePropertyControlsCurrencyFormattingFromJSON(json) {
    return HotelBrochureTypePropertyControlsCurrencyFormattingFromJSONTyped(json, false);
}
exports.HotelBrochureTypePropertyControlsCurrencyFormattingFromJSON = HotelBrochureTypePropertyControlsCurrencyFormattingFromJSON;
function HotelBrochureTypePropertyControlsCurrencyFormattingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencyFormat': !(0, runtime_1.exists)(json, 'currencyFormat') ? undefined : json['currencyFormat'],
        'currencySymbol': !(0, runtime_1.exists)(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPositions': !(0, runtime_1.exists)(json, 'decimalPositions') ? undefined : json['decimalPositions'],
    };
}
exports.HotelBrochureTypePropertyControlsCurrencyFormattingFromJSONTyped = HotelBrochureTypePropertyControlsCurrencyFormattingFromJSONTyped;
function HotelBrochureTypePropertyControlsCurrencyFormattingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currencyCode': value.currencyCode,
        'currencyFormat': value.currencyFormat,
        'currencySymbol': value.currencySymbol,
        'decimalPositions': value.decimalPositions,
    };
}
exports.HotelBrochureTypePropertyControlsCurrencyFormattingToJSON = HotelBrochureTypePropertyControlsCurrencyFormattingToJSON;