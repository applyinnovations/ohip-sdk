"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountForecastTypeToJSON = exports.AccountForecastTypeFromJSONTyped = exports.AccountForecastTypeFromJSON = exports.instanceOfAccountForecastType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const OverrideForecastTypeType_1 = require("./OverrideForecastTypeType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the AccountForecastType interface.
 */
function instanceOfAccountForecastType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAccountForecastType = instanceOfAccountForecastType;
function AccountForecastTypeFromJSON(json) {
    return AccountForecastTypeFromJSONTyped(json, false);
}
exports.AccountForecastTypeFromJSON = AccountForecastTypeFromJSON;
function AccountForecastTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !(0, runtime_1.exists)(json, 'accountId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['accountId']),
        'averageRate': !(0, runtime_1.exists)(json, 'averageRate') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['averageRate']),
        'foodAndBeverageRevenue': !(0, runtime_1.exists)(json, 'foodAndBeverageRevenue') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['foodAndBeverageRevenue']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'otherRevenue': !(0, runtime_1.exists)(json, 'otherRevenue') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['otherRevenue']),
        'overrideForecast': !(0, runtime_1.exists)(json, 'overrideForecast') ? undefined : (0, OverrideForecastTypeType_1.OverrideForecastTypeTypeFromJSON)(json['overrideForecast']),
        'periodCode': !(0, runtime_1.exists)(json, 'periodCode') ? undefined : json['periodCode'],
        'periodDescription': !(0, runtime_1.exists)(json, 'periodDescription') ? undefined : json['periodDescription'],
        'periodEndDate': !(0, runtime_1.exists)(json, 'periodEndDate') ? undefined : (new Date(json['periodEndDate'])),
        'periodStartDate': !(0, runtime_1.exists)(json, 'periodStartDate') ? undefined : (new Date(json['periodStartDate'])),
        'roomNights': !(0, runtime_1.exists)(json, 'roomNights') ? undefined : json['roomNights'],
        'roomRevenue': !(0, runtime_1.exists)(json, 'roomRevenue') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['roomRevenue']),
        'totalRevenue': !(0, runtime_1.exists)(json, 'totalRevenue') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['totalRevenue']),
    };
}
exports.AccountForecastTypeFromJSONTyped = AccountForecastTypeFromJSONTyped;
function AccountForecastTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.accountId),
        'averageRate': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.averageRate),
        'foodAndBeverageRevenue': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.foodAndBeverageRevenue),
        'hotelId': value.hotelId,
        'otherRevenue': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.otherRevenue),
        'overrideForecast': (0, OverrideForecastTypeType_1.OverrideForecastTypeTypeToJSON)(value.overrideForecast),
        'periodCode': value.periodCode,
        'periodDescription': value.periodDescription,
        'periodEndDate': value.periodEndDate === undefined ? undefined : (value.periodEndDate.toISOString().substr(0, 10)),
        'periodStartDate': value.periodStartDate === undefined ? undefined : (value.periodStartDate.toISOString().substr(0, 10)),
        'roomNights': value.roomNights,
        'roomRevenue': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.roomRevenue),
        'totalRevenue': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.totalRevenue),
    };
}
exports.AccountForecastTypeToJSON = AccountForecastTypeToJSON;
