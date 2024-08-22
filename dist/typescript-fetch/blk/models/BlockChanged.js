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
exports.BlockChangedToJSON = exports.BlockChangedFromJSONTyped = exports.BlockChangedFromJSON = exports.instanceOfBlockChanged = void 0;
const runtime_1 = require("../runtime");
const BlocksType_1 = require("./BlocksType");
const CateringEventsProcessedInfoType_1 = require("./CateringEventsProcessedInfoType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the BlockChanged interface.
 */
function instanceOfBlockChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockChanged = instanceOfBlockChanged;
function BlockChangedFromJSON(json) {
    return BlockChangedFromJSONTyped(json, false);
}
exports.BlockChangedFromJSON = BlockChangedFromJSON;
function BlockChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blocks': !(0, runtime_1.exists)(json, 'blocks') ? undefined : (0, BlocksType_1.BlocksTypeFromJSON)(json['blocks']),
        'cateringEventsProcessedInfo': !(0, runtime_1.exists)(json, 'cateringEventsProcessedInfo') ? undefined : (json['cateringEventsProcessedInfo'].map(CateringEventsProcessedInfoType_1.CateringEventsProcessedInfoTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.BlockChangedFromJSONTyped = BlockChangedFromJSONTyped;
function BlockChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blocks': (0, BlocksType_1.BlocksTypeToJSON)(value.blocks),
        'cateringEventsProcessedInfo': value.cateringEventsProcessedInfo === undefined ? undefined : (value.cateringEventsProcessedInfo.map(CateringEventsProcessedInfoType_1.CateringEventsProcessedInfoTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.BlockChangedToJSON = BlockChangedToJSON;
