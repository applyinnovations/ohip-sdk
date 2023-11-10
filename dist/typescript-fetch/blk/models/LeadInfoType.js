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
exports.LeadInfoTypeToJSON = exports.LeadInfoTypeFromJSONTyped = exports.LeadInfoTypeFromJSON = exports.instanceOfLeadInfoType = void 0;
const runtime_1 = require("../runtime");
const BlockClassificationType_1 = require("./BlockClassificationType");
const BlockIdList_1 = require("./BlockIdList");
const BookingStatusType_1 = require("./BookingStatusType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the LeadInfoType interface.
 */
function instanceOfLeadInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfLeadInfoType = instanceOfLeadInfoType;
function LeadInfoTypeFromJSON(json) {
    return LeadInfoTypeFromJSONTyped(json, false);
}
exports.LeadInfoTypeFromJSON = LeadInfoTypeFromJSON;
function LeadInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockIdList': !(0, runtime_1.exists)(json, 'blockIdList') ? undefined : (0, BlockIdList_1.BlockIdListFromJSON)(json['blockIdList']),
        'blockName': !(0, runtime_1.exists)(json, 'blockName') ? undefined : json['blockName'],
        'blockStatus': !(0, runtime_1.exists)(json, 'blockStatus') ? undefined : (0, BookingStatusType_1.BookingStatusTypeFromJSON)(json['blockStatus']),
        'blockType': !(0, runtime_1.exists)(json, 'blockType') ? undefined : (0, BlockClassificationType_1.BlockClassificationTypeFromJSON)(json['blockType']),
        'cateringStatus': !(0, runtime_1.exists)(json, 'cateringStatus') ? undefined : (0, BookingStatusType_1.BookingStatusTypeFromJSON)(json['cateringStatus']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'roomNightsBlocked': !(0, runtime_1.exists)(json, 'roomNightsBlocked') ? undefined : json['roomNightsBlocked'],
        'roomNightsPickedup': !(0, runtime_1.exists)(json, 'roomNightsPickedup') ? undefined : json['roomNightsPickedup'],
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
    };
}
exports.LeadInfoTypeFromJSONTyped = LeadInfoTypeFromJSONTyped;
function LeadInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockIdList': (0, BlockIdList_1.BlockIdListToJSON)(value.blockIdList),
        'blockName': value.blockName,
        'blockStatus': (0, BookingStatusType_1.BookingStatusTypeToJSON)(value.blockStatus),
        'blockType': (0, BlockClassificationType_1.BlockClassificationTypeToJSON)(value.blockType),
        'cateringStatus': (0, BookingStatusType_1.BookingStatusTypeToJSON)(value.cateringStatus),
        'hotelId': value.hotelId,
        'roomNightsBlocked': value.roomNightsBlocked,
        'roomNightsPickedup': value.roomNightsPickedup,
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
    };
}
exports.LeadInfoTypeToJSON = LeadInfoTypeToJSON;
