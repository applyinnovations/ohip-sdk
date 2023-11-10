"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestLastStayInfoTypeToJSON = exports.GuestLastStayInfoTypeFromJSONTyped = exports.GuestLastStayInfoTypeFromJSON = exports.instanceOfGuestLastStayInfoType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the GuestLastStayInfoType interface.
 */
function instanceOfGuestLastStayInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGuestLastStayInfoType = instanceOfGuestLastStayInfoType;
function GuestLastStayInfoTypeFromJSON(json) {
    return GuestLastStayInfoTypeFromJSONTyped(json, false);
}
exports.GuestLastStayInfoTypeFromJSON = GuestLastStayInfoTypeFromJSON;
function GuestLastStayInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lastStayDate': !(0, runtime_1.exists)(json, 'lastStayDate') ? undefined : (new Date(json['lastStayDate'])),
        'lastStayRoom': !(0, runtime_1.exists)(json, 'lastStayRoom') ? undefined : json['lastStayRoom'],
        'lastStayRate': !(0, runtime_1.exists)(json, 'lastStayRate') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['lastStayRate']),
        'totalStay': !(0, runtime_1.exists)(json, 'totalStay') ? undefined : json['totalStay'],
    };
}
exports.GuestLastStayInfoTypeFromJSONTyped = GuestLastStayInfoTypeFromJSONTyped;
function GuestLastStayInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lastStayDate': value.lastStayDate === undefined ? undefined : (value.lastStayDate.toISOString().substr(0, 10)),
        'lastStayRoom': value.lastStayRoom,
        'lastStayRate': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.lastStayRate),
        'totalStay': value.totalStay,
    };
}
exports.GuestLastStayInfoTypeToJSON = GuestLastStayInfoTypeToJSON;
