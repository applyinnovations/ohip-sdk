"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesAllowanceTypeToJSON = exports.SalesAllowanceTypeFromJSONTyped = exports.SalesAllowanceTypeFromJSON = exports.instanceOfSalesAllowanceType = void 0;
const runtime_1 = require("../runtime");
const SalesAllowanceIDType_1 = require("./SalesAllowanceIDType");
/**
 * Check if a given object implements the SalesAllowanceType interface.
 */
function instanceOfSalesAllowanceType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSalesAllowanceType = instanceOfSalesAllowanceType;
function SalesAllowanceTypeFromJSON(json) {
    return SalesAllowanceTypeFromJSONTyped(json, false);
}
exports.SalesAllowanceTypeFromJSON = SalesAllowanceTypeFromJSON;
function SalesAllowanceTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allotmentDeductQty': !(0, runtime_1.exists)(json, 'allotmentDeductQty') ? undefined : json['allotmentDeductQty'],
        'available': !(0, runtime_1.exists)(json, 'available') ? undefined : json['available'],
        'booked': !(0, runtime_1.exists)(json, 'booked') ? undefined : json['booked'],
        'ceilingDate': !(0, runtime_1.exists)(json, 'ceilingDate') ? undefined : (new Date(json['ceilingDate'])),
        'ceilingId': !(0, runtime_1.exists)(json, 'ceilingId') ? undefined : (0, SalesAllowanceIDType_1.SalesAllowanceIDTypeFromJSON)(json['ceilingId']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'overBooked': !(0, runtime_1.exists)(json, 'overBooked') ? undefined : json['overBooked'],
        'salesAllowance': !(0, runtime_1.exists)(json, 'salesAllowance') ? undefined : json['salesAllowance'],
    };
}
exports.SalesAllowanceTypeFromJSONTyped = SalesAllowanceTypeFromJSONTyped;
function SalesAllowanceTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allotmentDeductQty': value.allotmentDeductQty,
        'available': value.available,
        'booked': value.booked,
        'ceilingDate': value.ceilingDate === undefined ? undefined : (value.ceilingDate.toISOString().substr(0, 10)),
        'ceilingId': (0, SalesAllowanceIDType_1.SalesAllowanceIDTypeToJSON)(value.ceilingId),
        'hotelId': value.hotelId,
        'overBooked': value.overBooked,
        'salesAllowance': value.salesAllowance,
    };
}
exports.SalesAllowanceTypeToJSON = SalesAllowanceTypeToJSON;
