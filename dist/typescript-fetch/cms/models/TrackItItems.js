"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackItItemsToJSON = exports.TrackItItemsFromJSONTyped = exports.TrackItItemsFromJSON = exports.instanceOfTrackItItems = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const TrackItItemType_1 = require("./TrackItItemType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the TrackItItems interface.
 */
function instanceOfTrackItItems(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTrackItItems = instanceOfTrackItItems;
function TrackItItemsFromJSON(json) {
    return TrackItItemsFromJSONTyped(json, false);
}
exports.TrackItItemsFromJSON = TrackItItemsFromJSON;
function TrackItItemsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'trackItItemsInfo': !(0, runtime_1.exists)(json, 'trackItItemsInfo') ? undefined : (json['trackItItemsInfo'].map(TrackItItemType_1.TrackItItemTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.TrackItItemsFromJSONTyped = TrackItItemsFromJSONTyped;
function TrackItItemsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'trackItItemsInfo': value.trackItItemsInfo === undefined ? undefined : (value.trackItItemsInfo.map(TrackItItemType_1.TrackItItemTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.TrackItItemsToJSON = TrackItItemsToJSON;