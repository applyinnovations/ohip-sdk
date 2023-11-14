"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResAwardsTypeToJSON = exports.ResAwardsTypeFromJSONTyped = exports.ResAwardsTypeFromJSON = exports.instanceOfResAwardsType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ResAwardsType interface.
 */
function instanceOfResAwardsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResAwardsType = instanceOfResAwardsType;
function ResAwardsTypeFromJSON(json) {
    return ResAwardsTypeFromJSONTyped(json, false);
}
exports.ResAwardsTypeFromJSON = ResAwardsTypeFromJSON;
function ResAwardsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'membershipNo': !(0, runtime_1.exists)(json, 'membershipNo') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['membershipNo']),
        'originalRoomType': !(0, runtime_1.exists)(json, 'originalRoomType') ? undefined : json['originalRoomType'],
        'upgradeRoomType': !(0, runtime_1.exists)(json, 'upgradeRoomType') ? undefined : json['upgradeRoomType'],
    };
}
exports.ResAwardsTypeFromJSONTyped = ResAwardsTypeFromJSONTyped;
function ResAwardsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'membershipNo': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.membershipNo),
        'originalRoomType': value.originalRoomType,
        'upgradeRoomType': value.upgradeRoomType,
    };
}
exports.ResAwardsTypeToJSON = ResAwardsTypeToJSON;