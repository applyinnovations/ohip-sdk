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
exports.ChannelHotelCodeMappingBucketsTypeToJSON = exports.ChannelHotelCodeMappingBucketsTypeFromJSONTyped = exports.ChannelHotelCodeMappingBucketsTypeFromJSON = exports.instanceOfChannelHotelCodeMappingBucketsType = void 0;
const runtime_1 = require("../runtime");
const ChannelHotelCodeMappingBucketType_1 = require("./ChannelHotelCodeMappingBucketType");
/**
 * Check if a given object implements the ChannelHotelCodeMappingBucketsType interface.
 */
function instanceOfChannelHotelCodeMappingBucketsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelHotelCodeMappingBucketsType = instanceOfChannelHotelCodeMappingBucketsType;
function ChannelHotelCodeMappingBucketsTypeFromJSON(json) {
    return ChannelHotelCodeMappingBucketsTypeFromJSONTyped(json, false);
}
exports.ChannelHotelCodeMappingBucketsTypeFromJSON = ChannelHotelCodeMappingBucketsTypeFromJSON;
function ChannelHotelCodeMappingBucketsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'available': !(0, runtime_1.exists)(json, 'available') ? undefined : json['available'],
        'channelHotelCodeMappingBucket': !(0, runtime_1.exists)(json, 'channelHotelCodeMappingBucket') ? undefined : (json['channelHotelCodeMappingBucket'].map(ChannelHotelCodeMappingBucketType_1.ChannelHotelCodeMappingBucketTypeFromJSON)),
        'defaultRateCode': !(0, runtime_1.exists)(json, 'defaultRateCode') ? undefined : json['defaultRateCode'],
    };
}
exports.ChannelHotelCodeMappingBucketsTypeFromJSONTyped = ChannelHotelCodeMappingBucketsTypeFromJSONTyped;
function ChannelHotelCodeMappingBucketsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'available': value.available,
        'channelHotelCodeMappingBucket': value.channelHotelCodeMappingBucket === undefined ? undefined : (value.channelHotelCodeMappingBucket.map(ChannelHotelCodeMappingBucketType_1.ChannelHotelCodeMappingBucketTypeToJSON)),
        'defaultRateCode': value.defaultRateCode,
    };
}
exports.ChannelHotelCodeMappingBucketsTypeToJSON = ChannelHotelCodeMappingBucketsTypeToJSON;