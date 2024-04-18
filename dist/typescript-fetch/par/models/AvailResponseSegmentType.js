"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailResponseSegmentTypeToJSON = exports.AvailResponseSegmentTypeFromJSONTyped = exports.AvailResponseSegmentTypeFromJSON = exports.instanceOfAvailResponseSegmentType = void 0;
const runtime_1 = require("../runtime");
const AvailResponseMasterInfoType_1 = require("./AvailResponseMasterInfoType");
const ChannelAvailRSInfoType_1 = require("./ChannelAvailRSInfoType");
const HotelInfoType_1 = require("./HotelInfoType");
const MasterRestrictionStatusesType_1 = require("./MasterRestrictionStatusesType");
const RateChangeTypeType_1 = require("./RateChangeTypeType");
const RoomStayType_1 = require("./RoomStayType");
/**
 * Check if a given object implements the AvailResponseSegmentType interface.
 */
function instanceOfAvailResponseSegmentType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAvailResponseSegmentType = instanceOfAvailResponseSegmentType;
function AvailResponseSegmentTypeFromJSON(json) {
    return AvailResponseSegmentTypeFromJSONTyped(json, false);
}
exports.AvailResponseSegmentTypeFromJSON = AvailResponseSegmentTypeFromJSON;
function AvailResponseSegmentTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelInformation': !(0, runtime_1.exists)(json, 'channelInformation') ? undefined : (0, ChannelAvailRSInfoType_1.ChannelAvailRSInfoTypeFromJSON)(json['channelInformation']),
        'closed': !(0, runtime_1.exists)(json, 'closed') ? undefined : json['closed'],
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'hotelAlert': !(0, runtime_1.exists)(json, 'hotelAlert') ? undefined : json['hotelAlert'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelInfo': !(0, runtime_1.exists)(json, 'hotelInfo') ? undefined : (0, HotelInfoType_1.HotelInfoTypeFromJSON)(json['hotelInfo']),
        'masterInfo': !(0, runtime_1.exists)(json, 'masterInfo') ? undefined : (0, AvailResponseMasterInfoType_1.AvailResponseMasterInfoTypeFromJSON)(json['masterInfo']),
        'pagingKey': !(0, runtime_1.exists)(json, 'pagingKey') ? undefined : json['pagingKey'],
        'rateChange': !(0, runtime_1.exists)(json, 'rateChange') ? undefined : (0, RateChangeTypeType_1.RateChangeTypeTypeFromJSON)(json['rateChange']),
        'ratePlanSet': !(0, runtime_1.exists)(json, 'ratePlanSet') ? undefined : json['ratePlanSet'],
        'redemption': !(0, runtime_1.exists)(json, 'redemption') ? undefined : json['redemption'],
        'restriction': !(0, runtime_1.exists)(json, 'restriction') ? undefined : (0, MasterRestrictionStatusesType_1.MasterRestrictionStatusesTypeFromJSON)(json['restriction']),
        'roomStays': !(0, runtime_1.exists)(json, 'roomStays') ? undefined : (json['roomStays'].map(RoomStayType_1.RoomStayTypeFromJSON)),
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.AvailResponseSegmentTypeFromJSONTyped = AvailResponseSegmentTypeFromJSONTyped;
function AvailResponseSegmentTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channelInformation': (0, ChannelAvailRSInfoType_1.ChannelAvailRSInfoTypeToJSON)(value.channelInformation),
        'closed': value.closed,
        'count': value.count,
        'hasMore': value.hasMore,
        'hotelAlert': value.hotelAlert,
        'hotelId': value.hotelId,
        'hotelInfo': (0, HotelInfoType_1.HotelInfoTypeToJSON)(value.hotelInfo),
        'masterInfo': (0, AvailResponseMasterInfoType_1.AvailResponseMasterInfoTypeToJSON)(value.masterInfo),
        'pagingKey': value.pagingKey,
        'rateChange': (0, RateChangeTypeType_1.RateChangeTypeTypeToJSON)(value.rateChange),
        'ratePlanSet': value.ratePlanSet,
        'redemption': value.redemption,
        'restriction': (0, MasterRestrictionStatusesType_1.MasterRestrictionStatusesTypeToJSON)(value.restriction),
        'roomStays': value.roomStays === undefined ? undefined : (value.roomStays.map(RoomStayType_1.RoomStayTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
exports.AvailResponseSegmentTypeToJSON = AvailResponseSegmentTypeToJSON;