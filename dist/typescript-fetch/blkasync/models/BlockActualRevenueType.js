"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Reservation Asynchronous API
 * APIs to cater Block Reservation related asynchronous functionality in OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockActualRevenueTypeToJSON = exports.BlockActualRevenueTypeFromJSONTyped = exports.BlockActualRevenueTypeFromJSON = exports.instanceOfBlockActualRevenueType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BlockActualRevenueType interface.
 */
function instanceOfBlockActualRevenueType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockActualRevenueType = instanceOfBlockActualRevenueType;
function BlockActualRevenueTypeFromJSON(json) {
    return BlockActualRevenueTypeFromJSONTyped(json, false);
}
exports.BlockActualRevenueTypeFromJSON = BlockActualRevenueTypeFromJSON;
function BlockActualRevenueTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : json['currency'],
        'foodRevenue': !(0, runtime_1.exists)(json, 'foodRevenue') ? undefined : json['foodRevenue'],
        'foodRevenueTax': !(0, runtime_1.exists)(json, 'foodRevenueTax') ? undefined : json['foodRevenueTax'],
        'nonRevenue': !(0, runtime_1.exists)(json, 'nonRevenue') ? undefined : json['nonRevenue'],
        'nonRevenueTax': !(0, runtime_1.exists)(json, 'nonRevenueTax') ? undefined : json['nonRevenueTax'],
        'otherRevenue': !(0, runtime_1.exists)(json, 'otherRevenue') ? undefined : json['otherRevenue'],
        'otherRevenueTax': !(0, runtime_1.exists)(json, 'otherRevenueTax') ? undefined : json['otherRevenueTax'],
        'roomRevenue': !(0, runtime_1.exists)(json, 'roomRevenue') ? undefined : json['roomRevenue'],
        'roomRevenueTax': !(0, runtime_1.exists)(json, 'roomRevenueTax') ? undefined : json['roomRevenueTax'],
        'totalRevenue': !(0, runtime_1.exists)(json, 'totalRevenue') ? undefined : json['totalRevenue'],
        'totalRevenueTax': !(0, runtime_1.exists)(json, 'totalRevenueTax') ? undefined : json['totalRevenueTax'],
    };
}
exports.BlockActualRevenueTypeFromJSONTyped = BlockActualRevenueTypeFromJSONTyped;
function BlockActualRevenueTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currency': value.currency,
        'foodRevenue': value.foodRevenue,
        'foodRevenueTax': value.foodRevenueTax,
        'nonRevenue': value.nonRevenue,
        'nonRevenueTax': value.nonRevenueTax,
        'otherRevenue': value.otherRevenue,
        'otherRevenueTax': value.otherRevenueTax,
        'roomRevenue': value.roomRevenue,
        'roomRevenueTax': value.roomRevenueTax,
        'totalRevenue': value.totalRevenue,
        'totalRevenueTax': value.totalRevenueTax,
    };
}
exports.BlockActualRevenueTypeToJSON = BlockActualRevenueTypeToJSON;
