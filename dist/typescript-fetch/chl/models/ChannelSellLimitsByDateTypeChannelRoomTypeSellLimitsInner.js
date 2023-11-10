"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerToJSON = exports.ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerFromJSONTyped = exports.ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerFromJSON = exports.instanceOfChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner interface.
 */
function instanceOfChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner = instanceOfChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner;
function ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerFromJSON(json) {
    return ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerFromJSONTyped(json, false);
}
exports.ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerFromJSON = ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerFromJSON;
function ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingChannelCode': !(0, runtime_1.exists)(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'channelRoomType': !(0, runtime_1.exists)(json, 'channelRoomType') ? undefined : json['channelRoomType'],
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : (new Date(json['date'])),
        'numberOfRooms': !(0, runtime_1.exists)(json, 'numberOfRooms') ? undefined : json['numberOfRooms'],
    };
}
exports.ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerFromJSONTyped = ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerFromJSONTyped;
function ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingChannelCode': value.bookingChannelCode,
        'channelRoomType': value.channelRoomType,
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0, 10)),
        'numberOfRooms': value.numberOfRooms,
    };
}
exports.ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerToJSON = ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInnerToJSON;
