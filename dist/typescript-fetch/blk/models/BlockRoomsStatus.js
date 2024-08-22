"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockRoomsStatusToJSON = exports.BlockRoomsStatusFromJSONTyped = exports.BlockRoomsStatusFromJSON = exports.instanceOfBlockRoomsStatus = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const RoomsStatusSummaryType_1 = require("./RoomsStatusSummaryType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the BlockRoomsStatus interface.
 */
function instanceOfBlockRoomsStatus(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockRoomsStatus = instanceOfBlockRoomsStatus;
function BlockRoomsStatusFromJSON(json) {
    return BlockRoomsStatusFromJSONTyped(json, false);
}
exports.BlockRoomsStatusFromJSON = BlockRoomsStatusFromJSON;
function BlockRoomsStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'roomsStatusSummary': !(0, runtime_1.exists)(json, 'roomsStatusSummary') ? undefined : (0, RoomsStatusSummaryType_1.RoomsStatusSummaryTypeFromJSON)(json['roomsStatusSummary']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.BlockRoomsStatusFromJSONTyped = BlockRoomsStatusFromJSONTyped;
function BlockRoomsStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'roomsStatusSummary': (0, RoomsStatusSummaryType_1.RoomsStatusSummaryTypeToJSON)(value.roomsStatusSummary),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.BlockRoomsStatusToJSON = BlockRoomsStatusToJSON;
