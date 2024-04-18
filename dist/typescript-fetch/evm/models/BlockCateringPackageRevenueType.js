"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockCateringPackageRevenueTypeToJSON = exports.BlockCateringPackageRevenueTypeFromJSONTyped = exports.BlockCateringPackageRevenueTypeFromJSON = exports.instanceOfBlockCateringPackageRevenueType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const DateTimeSpanType_1 = require("./DateTimeSpanType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the BlockCateringPackageRevenueType interface.
 */
function instanceOfBlockCateringPackageRevenueType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockCateringPackageRevenueType = instanceOfBlockCateringPackageRevenueType;
function BlockCateringPackageRevenueTypeFromJSON(json) {
    return BlockCateringPackageRevenueTypeFromJSONTyped(json, false);
}
exports.BlockCateringPackageRevenueTypeFromJSON = BlockCateringPackageRevenueTypeFromJSON;
function BlockCateringPackageRevenueTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'costExpected': !(0, runtime_1.exists)(json, 'costExpected') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['costExpected']),
        'eventName': !(0, runtime_1.exists)(json, 'eventName') ? undefined : json['eventName'],
        'eventTimeSpan': !(0, runtime_1.exists)(json, 'eventTimeSpan') ? undefined : (0, DateTimeSpanType_1.DateTimeSpanTypeFromJSON)(json['eventTimeSpan']),
        'eventType': !(0, runtime_1.exists)(json, 'eventType') ? undefined : json['eventType'],
        'orderBy': !(0, runtime_1.exists)(json, 'orderBy') ? undefined : json['orderBy'],
        'packageEventId': !(0, runtime_1.exists)(json, 'packageEventId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['packageEventId']),
        'revExpected': !(0, runtime_1.exists)(json, 'revExpected') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['revExpected']),
        'revForecast': !(0, runtime_1.exists)(json, 'revForecast') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['revForecast']),
        'revType': !(0, runtime_1.exists)(json, 'revType') ? undefined : json['revType'],
    };
}
exports.BlockCateringPackageRevenueTypeFromJSONTyped = BlockCateringPackageRevenueTypeFromJSONTyped;
function BlockCateringPackageRevenueTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'costExpected': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.costExpected),
        'eventName': value.eventName,
        'eventTimeSpan': (0, DateTimeSpanType_1.DateTimeSpanTypeToJSON)(value.eventTimeSpan),
        'eventType': value.eventType,
        'orderBy': value.orderBy,
        'packageEventId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.packageEventId),
        'revExpected': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.revExpected),
        'revForecast': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.revForecast),
        'revType': value.revType,
    };
}
exports.BlockCateringPackageRevenueTypeToJSON = BlockCateringPackageRevenueTypeToJSON;