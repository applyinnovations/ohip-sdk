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
exports.ChannelCardTypeMappingTypeToJSON = exports.ChannelCardTypeMappingTypeFromJSONTyped = exports.ChannelCardTypeMappingTypeFromJSON = exports.instanceOfChannelCardTypeMappingType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ChannelCardTypeMappingType interface.
 */
function instanceOfChannelCardTypeMappingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelCardTypeMappingType = instanceOfChannelCardTypeMappingType;
function ChannelCardTypeMappingTypeFromJSON(json) {
    return ChannelCardTypeMappingTypeFromJSONTyped(json, false);
}
exports.ChannelCardTypeMappingTypeFromJSON = ChannelCardTypeMappingTypeFromJSON;
function ChannelCardTypeMappingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingChannelCode': !(0, runtime_1.exists)(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'cardType': !(0, runtime_1.exists)(json, 'cardType') ? undefined : json['cardType'],
        'channelCardType': !(0, runtime_1.exists)(json, 'channelCardType') ? undefined : json['channelCardType'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'inactiveDate': !(0, runtime_1.exists)(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'newChannelCardType': !(0, runtime_1.exists)(json, 'newChannelCardType') ? undefined : json['newChannelCardType'],
    };
}
exports.ChannelCardTypeMappingTypeFromJSONTyped = ChannelCardTypeMappingTypeFromJSONTyped;
function ChannelCardTypeMappingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingChannelCode': value.bookingChannelCode,
        'cardType': value.cardType,
        'channelCardType': value.channelCardType,
        'hotelId': value.hotelId,
        'inactiveDate': value.inactiveDate,
        'newChannelCardType': value.newChannelCardType,
    };
}
exports.ChannelCardTypeMappingTypeToJSON = ChannelCardTypeMappingTypeToJSON;