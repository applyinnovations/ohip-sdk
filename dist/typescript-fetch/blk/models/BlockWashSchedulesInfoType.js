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
exports.BlockWashSchedulesInfoTypeToJSON = exports.BlockWashSchedulesInfoTypeFromJSONTyped = exports.BlockWashSchedulesInfoTypeFromJSON = exports.instanceOfBlockWashSchedulesInfoType = void 0;
const runtime_1 = require("../runtime");
const BlockIdList_1 = require("./BlockIdList");
const BlockWashSchedulesType_1 = require("./BlockWashSchedulesType");
/**
 * Check if a given object implements the BlockWashSchedulesInfoType interface.
 */
function instanceOfBlockWashSchedulesInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockWashSchedulesInfoType = instanceOfBlockWashSchedulesInfoType;
function BlockWashSchedulesInfoTypeFromJSON(json) {
    return BlockWashSchedulesInfoTypeFromJSONTyped(json, false);
}
exports.BlockWashSchedulesInfoTypeFromJSON = BlockWashSchedulesInfoTypeFromJSON;
function BlockWashSchedulesInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockIdList': !(0, runtime_1.exists)(json, 'blockIdList') ? undefined : (0, BlockIdList_1.BlockIdListFromJSON)(json['blockIdList']),
        'blockWashSchedules': !(0, runtime_1.exists)(json, 'blockWashSchedules') ? undefined : (0, BlockWashSchedulesType_1.BlockWashSchedulesTypeFromJSON)(json['blockWashSchedules']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.BlockWashSchedulesInfoTypeFromJSONTyped = BlockWashSchedulesInfoTypeFromJSONTyped;
function BlockWashSchedulesInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockIdList': (0, BlockIdList_1.BlockIdListToJSON)(value.blockIdList),
        'blockWashSchedules': (0, BlockWashSchedulesType_1.BlockWashSchedulesTypeToJSON)(value.blockWashSchedules),
        'hotelId': value.hotelId,
    };
}
exports.BlockWashSchedulesInfoTypeToJSON = BlockWashSchedulesInfoTypeToJSON;