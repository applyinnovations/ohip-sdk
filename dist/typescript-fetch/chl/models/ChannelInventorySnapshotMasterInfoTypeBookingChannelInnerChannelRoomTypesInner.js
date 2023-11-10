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
exports.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerToJSON = exports.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSONTyped = exports.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSON = exports.instanceOfChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner interface.
 */
function instanceOfChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner = instanceOfChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner;
function ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSON(json) {
    return ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSONTyped(json, false);
}
exports.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSON = ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSON;
function ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelRoomTypeCode': !(0, runtime_1.exists)(json, 'channelRoomTypeCode') ? undefined : json['channelRoomTypeCode'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'roomDescriptionLine1': !(0, runtime_1.exists)(json, 'roomDescriptionLine1') ? undefined : json['roomDescriptionLine1'],
        'roomDescriptionLine2': !(0, runtime_1.exists)(json, 'roomDescriptionLine2') ? undefined : json['roomDescriptionLine2'],
        'roomDescriptionLine3': !(0, runtime_1.exists)(json, 'roomDescriptionLine3') ? undefined : json['roomDescriptionLine3'],
        'roomTypeCode': !(0, runtime_1.exists)(json, 'roomTypeCode') ? undefined : json['roomTypeCode'],
        'sellSequence': !(0, runtime_1.exists)(json, 'sellSequence') ? undefined : json['sellSequence'],
    };
}
exports.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSONTyped = ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerFromJSONTyped;
function ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channelRoomTypeCode': value.channelRoomTypeCode,
        'description': value.description,
        'roomDescriptionLine1': value.roomDescriptionLine1,
        'roomDescriptionLine2': value.roomDescriptionLine2,
        'roomDescriptionLine3': value.roomDescriptionLine3,
        'roomTypeCode': value.roomTypeCode,
        'sellSequence': value.sellSequence,
    };
}
exports.ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerToJSON = ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInnerToJSON;
