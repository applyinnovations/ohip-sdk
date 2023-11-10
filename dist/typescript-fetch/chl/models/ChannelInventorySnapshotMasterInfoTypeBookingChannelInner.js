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
exports.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerToJSON = exports.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSONTyped = exports.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSON = exports.instanceOfChannelInventorySnapshotMasterInfoTypeBookingChannelInner = void 0;
const runtime_1 = require("../runtime");
const ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner_1 = require("./ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner");
/**
 * Check if a given object implements the ChannelInventorySnapshotMasterInfoTypeBookingChannelInner interface.
 */
function instanceOfChannelInventorySnapshotMasterInfoTypeBookingChannelInner(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelInventorySnapshotMasterInfoTypeBookingChannelInner = instanceOfChannelInventorySnapshotMasterInfoTypeBookingChannelInner;
function ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSON(json) {
    return ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSONTyped(json, false);
}
exports.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSON = ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSON;
function ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingChannelType': !(0, runtime_1.exists)(json, 'bookingChannelType') ? undefined : json['bookingChannelType'],
        'channelInventoryActive': !(0, runtime_1.exists)(json, 'channelInventoryActive') ? undefined : json['channelInventoryActive'],
        'channelRoomTypes': !(0, runtime_1.exists)(json, 'channelRoomTypes') ? undefined : (json['channelRoomTypes'].map(ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner_1.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSON)),
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
    };
}
exports.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSONTyped = ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerFromJSONTyped;
function ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingChannelType': value.bookingChannelType,
        'channelInventoryActive': value.channelInventoryActive,
        'channelRoomTypes': value.channelRoomTypes === undefined ? undefined : (value.channelRoomTypes.map(ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner_1.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerToJSON)),
        'code': value.code,
        'description': value.description,
    };
}
exports.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerToJSON = ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerToJSON;
