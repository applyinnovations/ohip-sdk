"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyMappingTypeToJSON = exports.PropertyMappingTypeFromJSONTyped = exports.PropertyMappingTypeFromJSON = exports.instanceOfPropertyMappingType = void 0;
const runtime_1 = require("../runtime");
const ChannelHotelCodeMappingBucketsType_1 = require("./ChannelHotelCodeMappingBucketsType");
const SystemInfoType_1 = require("./SystemInfoType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the PropertyMappingType interface.
 */
function instanceOfPropertyMappingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPropertyMappingType = instanceOfPropertyMappingType;
function PropertyMappingTypeFromJSON(json) {
    return PropertyMappingTypeFromJSONTyped(json, false);
}
exports.PropertyMappingTypeFromJSON = PropertyMappingTypeFromJSON;
function PropertyMappingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aRIEnabled': !(0, runtime_1.exists)(json, 'aRIEnabled') ? undefined : json['aRIEnabled'],
        'addOnLicense': !(0, runtime_1.exists)(json, 'addOnLicense') ? undefined : json['addOnLicense'],
        'bookingLimit': !(0, runtime_1.exists)(json, 'bookingLimit') ? undefined : json['bookingLimit'],
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'channelHotelCodeMappingBuckets': !(0, runtime_1.exists)(json, 'channelHotelCodeMappingBuckets') ? undefined : (0, ChannelHotelCodeMappingBucketsType_1.ChannelHotelCodeMappingBucketsTypeFromJSON)(json['channelHotelCodeMappingBuckets']),
        'city': !(0, runtime_1.exists)(json, 'city') ? undefined : json['city'],
        'dateRange': !(0, runtime_1.exists)(json, 'dateRange') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['dateRange']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'externalSystemCode': !(0, runtime_1.exists)(json, 'externalSystemCode') ? undefined : json['externalSystemCode'],
        'hotelChainId': !(0, runtime_1.exists)(json, 'hotelChainId') ? undefined : json['hotelChainId'],
        'initialUpload': !(0, runtime_1.exists)(json, 'initialUpload') ? undefined : json['initialUpload'],
        'localSystemCode': !(0, runtime_1.exists)(json, 'localSystemCode') ? undefined : json['localSystemCode'],
        'prevailingRates': !(0, runtime_1.exists)(json, 'prevailingRates') ? undefined : json['prevailingRates'],
        'roomLimit': !(0, runtime_1.exists)(json, 'roomLimit') ? undefined : json['roomLimit'],
        'systemInfo': !(0, runtime_1.exists)(json, 'systemInfo') ? undefined : (0, SystemInfoType_1.SystemInfoTypeFromJSON)(json['systemInfo']),
    };
}
exports.PropertyMappingTypeFromJSONTyped = PropertyMappingTypeFromJSONTyped;
function PropertyMappingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aRIEnabled': value.aRIEnabled,
        'addOnLicense': value.addOnLicense,
        'bookingLimit': value.bookingLimit,
        'chainCode': value.chainCode,
        'channelHotelCodeMappingBuckets': (0, ChannelHotelCodeMappingBucketsType_1.ChannelHotelCodeMappingBucketsTypeToJSON)(value.channelHotelCodeMappingBuckets),
        'city': value.city,
        'dateRange': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.dateRange),
        'description': value.description,
        'externalSystemCode': value.externalSystemCode,
        'hotelChainId': value.hotelChainId,
        'initialUpload': value.initialUpload,
        'localSystemCode': value.localSystemCode,
        'prevailingRates': value.prevailingRates,
        'roomLimit': value.roomLimit,
        'systemInfo': (0, SystemInfoType_1.SystemInfoTypeToJSON)(value.systemInfo),
    };
}
exports.PropertyMappingTypeToJSON = PropertyMappingTypeToJSON;
