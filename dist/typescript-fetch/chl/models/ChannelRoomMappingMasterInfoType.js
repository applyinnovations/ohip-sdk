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
exports.ChannelRoomMappingMasterInfoTypeToJSON = exports.ChannelRoomMappingMasterInfoTypeFromJSONTyped = exports.ChannelRoomMappingMasterInfoTypeFromJSON = exports.instanceOfChannelRoomMappingMasterInfoType = void 0;
const runtime_1 = require("../runtime");
const BookingChannelInfoType_1 = require("./BookingChannelInfoType");
const ChannelRoomMappingSourceDescriptionsType_1 = require("./ChannelRoomMappingSourceDescriptionsType");
/**
 * Check if a given object implements the ChannelRoomMappingMasterInfoType interface.
 */
function instanceOfChannelRoomMappingMasterInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelRoomMappingMasterInfoType = instanceOfChannelRoomMappingMasterInfoType;
function ChannelRoomMappingMasterInfoTypeFromJSON(json) {
    return ChannelRoomMappingMasterInfoTypeFromJSONTyped(json, false);
}
exports.ChannelRoomMappingMasterInfoTypeFromJSON = ChannelRoomMappingMasterInfoTypeFromJSON;
function ChannelRoomMappingMasterInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingChannelsInfo': !(0, runtime_1.exists)(json, 'bookingChannelsInfo') ? undefined : (json['bookingChannelsInfo'].map(BookingChannelInfoType_1.BookingChannelInfoTypeFromJSON)),
        'sourceDescriptions': !(0, runtime_1.exists)(json, 'sourceDescriptions') ? undefined : (json['sourceDescriptions'].map(ChannelRoomMappingSourceDescriptionsType_1.ChannelRoomMappingSourceDescriptionsTypeFromJSON)),
    };
}
exports.ChannelRoomMappingMasterInfoTypeFromJSONTyped = ChannelRoomMappingMasterInfoTypeFromJSONTyped;
function ChannelRoomMappingMasterInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingChannelsInfo': value.bookingChannelsInfo === undefined ? undefined : (value.bookingChannelsInfo.map(BookingChannelInfoType_1.BookingChannelInfoTypeToJSON)),
        'sourceDescriptions': value.sourceDescriptions === undefined ? undefined : (value.sourceDescriptions.map(ChannelRoomMappingSourceDescriptionsType_1.ChannelRoomMappingSourceDescriptionsTypeToJSON)),
    };
}
exports.ChannelRoomMappingMasterInfoTypeToJSON = ChannelRoomMappingMasterInfoTypeToJSON;
