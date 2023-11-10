"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReprintCommissionCheckRangeCriteriaTypeToJSON = exports.ReprintCommissionCheckRangeCriteriaTypeFromJSONTyped = exports.ReprintCommissionCheckRangeCriteriaTypeFromJSON = exports.instanceOfReprintCommissionCheckRangeCriteriaType = void 0;
const runtime_1 = require("../runtime");
const NumberRangeType_1 = require("./NumberRangeType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ReprintCommissionCheckRangeCriteriaType interface.
 */
function instanceOfReprintCommissionCheckRangeCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReprintCommissionCheckRangeCriteriaType = instanceOfReprintCommissionCheckRangeCriteriaType;
function ReprintCommissionCheckRangeCriteriaTypeFromJSON(json) {
    return ReprintCommissionCheckRangeCriteriaTypeFromJSONTyped(json, false);
}
exports.ReprintCommissionCheckRangeCriteriaTypeFromJSON = ReprintCommissionCheckRangeCriteriaTypeFromJSON;
function ReprintCommissionCheckRangeCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowExistingCheckNo': !(0, runtime_1.exists)(json, 'allowExistingCheckNo') ? undefined : json['allowExistingCheckNo'],
        'bankAccountId': !(0, runtime_1.exists)(json, 'bankAccountId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['bankAccountId']),
        'batchId': !(0, runtime_1.exists)(json, 'batchId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['batchId']),
        'checkRange': !(0, runtime_1.exists)(json, 'checkRange') ? undefined : (0, NumberRangeType_1.NumberRangeTypeFromJSON)(json['checkRange']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'startCheckNo': !(0, runtime_1.exists)(json, 'startCheckNo') ? undefined : json['startCheckNo'],
    };
}
exports.ReprintCommissionCheckRangeCriteriaTypeFromJSONTyped = ReprintCommissionCheckRangeCriteriaTypeFromJSONTyped;
function ReprintCommissionCheckRangeCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowExistingCheckNo': value.allowExistingCheckNo,
        'bankAccountId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.bankAccountId),
        'batchId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.batchId),
        'checkRange': (0, NumberRangeType_1.NumberRangeTypeToJSON)(value.checkRange),
        'hotelId': value.hotelId,
        'startCheckNo': value.startCheckNo,
    };
}
exports.ReprintCommissionCheckRangeCriteriaTypeToJSON = ReprintCommissionCheckRangeCriteriaTypeToJSON;
