"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomClassSellLimitTypeToJSON = exports.RoomClassSellLimitTypeFromJSONTyped = exports.RoomClassSellLimitTypeFromJSON = exports.instanceOfRoomClassSellLimitType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RoomClassSellLimitType interface.
 */
function instanceOfRoomClassSellLimitType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomClassSellLimitType = instanceOfRoomClassSellLimitType;
function RoomClassSellLimitTypeFromJSON(json) {
    return RoomClassSellLimitTypeFromJSONTyped(json, false);
}
exports.RoomClassSellLimitTypeFromJSON = RoomClassSellLimitTypeFromJSON;
function RoomClassSellLimitTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : json['date'],
        'flatOrPercentage': !(0, runtime_1.exists)(json, 'flatOrPercentage') ? undefined : json['flatOrPercentage'],
        'roomClass': !(0, runtime_1.exists)(json, 'roomClass') ? undefined : json['roomClass'],
    };
}
exports.RoomClassSellLimitTypeFromJSONTyped = RoomClassSellLimitTypeFromJSONTyped;
function RoomClassSellLimitTypeToJSON(value) {
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
        'roomClass': value.roomClass,
    };
}
exports.RoomClassSellLimitTypeToJSON = RoomClassSellLimitTypeToJSON;
