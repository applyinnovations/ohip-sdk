"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedRoomOwnershipListDetailsToJSON = exports.AssociatedRoomOwnershipListDetailsFromJSONTyped = exports.AssociatedRoomOwnershipListDetailsFromJSON = exports.instanceOfAssociatedRoomOwnershipListDetails = void 0;
const runtime_1 = require("../runtime");
const AssociatedRoomOwnershipInfoType_1 = require("./AssociatedRoomOwnershipInfoType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the AssociatedRoomOwnershipListDetails interface.
 */
function instanceOfAssociatedRoomOwnershipListDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAssociatedRoomOwnershipListDetails = instanceOfAssociatedRoomOwnershipListDetails;
function AssociatedRoomOwnershipListDetailsFromJSON(json) {
    return AssociatedRoomOwnershipListDetailsFromJSONTyped(json, false);
}
exports.AssociatedRoomOwnershipListDetailsFromJSON = AssociatedRoomOwnershipListDetailsFromJSON;
function AssociatedRoomOwnershipListDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'associatedRoomOwnershipInfoTypeList': !(0, runtime_1.exists)(json, 'associatedRoomOwnershipInfoTypeList') ? undefined : (json['associatedRoomOwnershipInfoTypeList'].map(AssociatedRoomOwnershipInfoType_1.AssociatedRoomOwnershipInfoTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.AssociatedRoomOwnershipListDetailsFromJSONTyped = AssociatedRoomOwnershipListDetailsFromJSONTyped;
function AssociatedRoomOwnershipListDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'associatedRoomOwnershipInfoTypeList': value.associatedRoomOwnershipInfoTypeList === undefined ? undefined : (value.associatedRoomOwnershipInfoTypeList.map(AssociatedRoomOwnershipInfoType_1.AssociatedRoomOwnershipInfoTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.AssociatedRoomOwnershipListDetailsToJSON = AssociatedRoomOwnershipListDetailsToJSON;