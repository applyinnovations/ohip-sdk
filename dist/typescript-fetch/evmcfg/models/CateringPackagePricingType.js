"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CateringPackagePricingTypeToJSON = exports.CateringPackagePricingTypeFromJSONTyped = exports.CateringPackagePricingTypeFromJSON = exports.instanceOfCateringPackagePricingType = void 0;
const runtime_1 = require("../runtime");
const CateringPackageRevenueListType_1 = require("./CateringPackageRevenueListType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const DateTimeSpanType_1 = require("./DateTimeSpanType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the CateringPackagePricingType interface.
 */
function instanceOfCateringPackagePricingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringPackagePricingType = instanceOfCateringPackagePricingType;
function CateringPackagePricingTypeFromJSON(json) {
    return CateringPackagePricingTypeFromJSONTyped(json, false);
}
exports.CateringPackagePricingTypeFromJSON = CateringPackagePricingTypeFromJSON;
function CateringPackagePricingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockDate': !(0, runtime_1.exists)(json, 'blockDate') ? undefined : (0, DateTimeSpanType_1.DateTimeSpanTypeFromJSON)(json['blockDate']),
        'bookingType': !(0, runtime_1.exists)(json, 'bookingType') ? undefined : json['bookingType'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'flatRate': !(0, runtime_1.exists)(json, 'flatRate') ? undefined : json['flatRate'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['id']),
        'marketCode': !(0, runtime_1.exists)(json, 'marketCode') ? undefined : json['marketCode'],
        'maxAttendees': !(0, runtime_1.exists)(json, 'maxAttendees') ? undefined : json['maxAttendees'],
        'minAttendees': !(0, runtime_1.exists)(json, 'minAttendees') ? undefined : json['minAttendees'],
        'priceCode': !(0, runtime_1.exists)(json, 'priceCode') ? undefined : json['priceCode'],
        'revenueDetails': !(0, runtime_1.exists)(json, 'revenueDetails') ? undefined : (0, CateringPackageRevenueListType_1.CateringPackageRevenueListTypeFromJSON)(json['revenueDetails']),
        'sellDate': !(0, runtime_1.exists)(json, 'sellDate') ? undefined : (0, DateTimeSpanType_1.DateTimeSpanTypeFromJSON)(json['sellDate']),
        'totalPrice': !(0, runtime_1.exists)(json, 'totalPrice') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['totalPrice']),
        'webBookable': !(0, runtime_1.exists)(json, 'webBookable') ? undefined : json['webBookable'],
    };
}
exports.CateringPackagePricingTypeFromJSONTyped = CateringPackagePricingTypeFromJSONTyped;
function CateringPackagePricingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockDate': (0, DateTimeSpanType_1.DateTimeSpanTypeToJSON)(value.blockDate),
        'bookingType': value.bookingType,
        'description': value.description,
        'flatRate': value.flatRate,
        'id': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.id),
        'marketCode': value.marketCode,
        'maxAttendees': value.maxAttendees,
        'minAttendees': value.minAttendees,
        'priceCode': value.priceCode,
        'revenueDetails': (0, CateringPackageRevenueListType_1.CateringPackageRevenueListTypeToJSON)(value.revenueDetails),
        'sellDate': (0, DateTimeSpanType_1.DateTimeSpanTypeToJSON)(value.sellDate),
        'totalPrice': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.totalPrice),
        'webBookable': value.webBookable,
    };
}
exports.CateringPackagePricingTypeToJSON = CateringPackagePricingTypeToJSON;