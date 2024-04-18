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
exports.ConfigRoutingInstructionTypeToJSON = exports.ConfigRoutingInstructionTypeFromJSONTyped = exports.ConfigRoutingInstructionTypeFromJSON = exports.instanceOfConfigRoutingInstructionType = void 0;
const runtime_1 = require("../runtime");
const TimeSpanDaysOfWeekType_1 = require("./TimeSpanDaysOfWeekType");
const TrxInfoType_1 = require("./TrxInfoType");
/**
 * Check if a given object implements the ConfigRoutingInstructionType interface.
 */
function instanceOfConfigRoutingInstructionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfConfigRoutingInstructionType = instanceOfConfigRoutingInstructionType;
function ConfigRoutingInstructionTypeFromJSON(json) {
    return ConfigRoutingInstructionTypeFromJSONTyped(json, false);
}
exports.ConfigRoutingInstructionTypeFromJSON = ConfigRoutingInstructionTypeFromJSON;
function ConfigRoutingInstructionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'compAccounting': !(0, runtime_1.exists)(json, 'compAccounting') ? undefined : json['compAccounting'],
        'covers': !(0, runtime_1.exists)(json, 'covers') ? undefined : json['covers'],
        'daily': !(0, runtime_1.exists)(json, 'daily') ? undefined : json['daily'],
        'daysOfWeek': !(0, runtime_1.exists)(json, 'daysOfWeek') ? undefined : (0, TimeSpanDaysOfWeekType_1.TimeSpanDaysOfWeekTypeFromJSON)(json['daysOfWeek']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'inheritAuthRateCode': !(0, runtime_1.exists)(json, 'inheritAuthRateCode') ? undefined : json['inheritAuthRateCode'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'percent': !(0, runtime_1.exists)(json, 'percent') ? undefined : json['percent'],
        'transactionCodes': !(0, runtime_1.exists)(json, 'transactionCodes') ? undefined : (json['transactionCodes'].map(TrxInfoType_1.TrxInfoTypeFromJSON)),
    };
}
exports.ConfigRoutingInstructionTypeFromJSONTyped = ConfigRoutingInstructionTypeFromJSONTyped;
function ConfigRoutingInstructionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'compAccounting': value.compAccounting,
        'covers': value.covers,
        'daily': value.daily,
        'daysOfWeek': (0, TimeSpanDaysOfWeekType_1.TimeSpanDaysOfWeekTypeToJSON)(value.daysOfWeek),
        'description': value.description,
        'hotelId': value.hotelId,
        'inheritAuthRateCode': value.inheritAuthRateCode,
        'limit': value.limit,
        'percent': value.percent,
        'transactionCodes': value.transactionCodes === undefined ? undefined : (value.transactionCodes.map(TrxInfoType_1.TrxInfoTypeToJSON)),
    };
}
exports.ConfigRoutingInstructionTypeToJSON = ConfigRoutingInstructionTypeToJSON;