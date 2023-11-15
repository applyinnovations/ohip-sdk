"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockSalesAllowanceRangeTypeToJSON = exports.BlockSalesAllowanceRangeTypeFromJSONTyped = exports.BlockSalesAllowanceRangeTypeFromJSON = exports.instanceOfBlockSalesAllowanceRangeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BlockSalesAllowanceRangeType interface.
 */
function instanceOfBlockSalesAllowanceRangeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockSalesAllowanceRangeType = instanceOfBlockSalesAllowanceRangeType;
function BlockSalesAllowanceRangeTypeFromJSON(json) {
    return BlockSalesAllowanceRangeTypeFromJSONTyped(json, false);
}
exports.BlockSalesAllowanceRangeTypeFromJSON = BlockSalesAllowanceRangeTypeFromJSON;
function BlockSalesAllowanceRangeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cutoffDays': !(0, runtime_1.exists)(json, 'cutoffDays') ? undefined : json['cutoffDays'],
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : json['end'],
        'friday': !(0, runtime_1.exists)(json, 'friday') ? undefined : json['friday'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'incrementFlag': !(0, runtime_1.exists)(json, 'incrementFlag') ? undefined : json['incrementFlag'],
        'monday': !(0, runtime_1.exists)(json, 'monday') ? undefined : json['monday'],
        'overwriteExistingSalesAllowance': !(0, runtime_1.exists)(json, 'overwriteExistingSalesAllowance') ? undefined : json['overwriteExistingSalesAllowance'],
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'saturday': !(0, runtime_1.exists)(json, 'saturday') ? undefined : json['saturday'],
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : json['start'],
        'sunday': !(0, runtime_1.exists)(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !(0, runtime_1.exists)(json, 'thursday') ? undefined : json['thursday'],
        'tuesday': !(0, runtime_1.exists)(json, 'tuesday') ? undefined : json['tuesday'],
        'validateExistingSalesAllowance': !(0, runtime_1.exists)(json, 'validateExistingSalesAllowance') ? undefined : json['validateExistingSalesAllowance'],
        'wednesday': !(0, runtime_1.exists)(json, 'wednesday') ? undefined : json['wednesday'],
    };
}
exports.BlockSalesAllowanceRangeTypeFromJSONTyped = BlockSalesAllowanceRangeTypeFromJSONTyped;
function BlockSalesAllowanceRangeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cutoffDays': value.cutoffDays,
        'end': value.end,
        'friday': value.friday,
        'hotelId': value.hotelId,
        'incrementFlag': value.incrementFlag,
        'monday': value.monday,
        'overwriteExistingSalesAllowance': value.overwriteExistingSalesAllowance,
        'quantity': value.quantity,
        'saturday': value.saturday,
        'start': value.start,
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tuesday': value.tuesday,
        'validateExistingSalesAllowance': value.validateExistingSalesAllowance,
        'wednesday': value.wednesday,
    };
}
exports.BlockSalesAllowanceRangeTypeToJSON = BlockSalesAllowanceRangeTypeToJSON;
