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
exports.SubAllocationToJSON = exports.SubAllocationFromJSONTyped = exports.SubAllocationFromJSON = exports.instanceOfSubAllocation = void 0;
const runtime_1 = require("../runtime");
const BlockDetailInstructionType_1 = require("./BlockDetailInstructionType");
const InstanceLink_1 = require("./InstanceLink");
const SubAllocationsType_1 = require("./SubAllocationsType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the SubAllocation interface.
 */
function instanceOfSubAllocation(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSubAllocation = instanceOfSubAllocation;
function SubAllocationFromJSON(json) {
    return SubAllocationFromJSONTyped(json, false);
}
exports.SubAllocationFromJSON = SubAllocationFromJSON;
function SubAllocationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fetchInstructions': !(0, runtime_1.exists)(json, 'fetchInstructions') ? undefined : (json['fetchInstructions'].map(BlockDetailInstructionType_1.BlockDetailInstructionTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'subAllocations': !(0, runtime_1.exists)(json, 'subAllocations') ? undefined : (0, SubAllocationsType_1.SubAllocationsTypeFromJSON)(json['subAllocations']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.SubAllocationFromJSONTyped = SubAllocationFromJSONTyped;
function SubAllocationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fetchInstructions': value.fetchInstructions === undefined ? undefined : (value.fetchInstructions.map(BlockDetailInstructionType_1.BlockDetailInstructionTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'subAllocations': (0, SubAllocationsType_1.SubAllocationsTypeToJSON)(value.subAllocations),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.SubAllocationToJSON = SubAllocationToJSON;