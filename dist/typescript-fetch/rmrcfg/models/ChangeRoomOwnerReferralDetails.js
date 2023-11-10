"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRoomOwnerReferralDetailsToJSON = exports.ChangeRoomOwnerReferralDetailsFromJSONTyped = exports.ChangeRoomOwnerReferralDetailsFromJSON = exports.instanceOfChangeRoomOwnerReferralDetails = void 0;
const runtime_1 = require("../runtime");
const RoomOwnerReferralType_1 = require("./RoomOwnerReferralType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ChangeRoomOwnerReferralDetails interface.
 */
function instanceOfChangeRoomOwnerReferralDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeRoomOwnerReferralDetails = instanceOfChangeRoomOwnerReferralDetails;
function ChangeRoomOwnerReferralDetailsFromJSON(json) {
    return ChangeRoomOwnerReferralDetailsFromJSONTyped(json, false);
}
exports.ChangeRoomOwnerReferralDetailsFromJSON = ChangeRoomOwnerReferralDetailsFromJSON;
function ChangeRoomOwnerReferralDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'roomOwnerReferral': !(0, runtime_1.exists)(json, 'roomOwnerReferral') ? undefined : (0, RoomOwnerReferralType_1.RoomOwnerReferralTypeFromJSON)(json['roomOwnerReferral']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ChangeRoomOwnerReferralDetailsFromJSONTyped = ChangeRoomOwnerReferralDetailsFromJSONTyped;
function ChangeRoomOwnerReferralDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'roomOwnerReferral': (0, RoomOwnerReferralType_1.RoomOwnerReferralTypeToJSON)(value.roomOwnerReferral),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ChangeRoomOwnerReferralDetailsToJSON = ChangeRoomOwnerReferralDetailsToJSON;
