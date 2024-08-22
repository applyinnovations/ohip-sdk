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
exports.BlockCopyToJSON = exports.BlockCopyFromJSONTyped = exports.BlockCopyFromJSON = exports.instanceOfBlockCopy = void 0;
const runtime_1 = require("../runtime");
const CopyBlockType_1 = require("./CopyBlockType");
const InstanceLink_1 = require("./InstanceLink");
const ResponseInstructionType_1 = require("./ResponseInstructionType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the BlockCopy interface.
 */
function instanceOfBlockCopy(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockCopy = instanceOfBlockCopy;
function BlockCopyFromJSON(json) {
    return BlockCopyFromJSONTyped(json, false);
}
exports.BlockCopyFromJSON = BlockCopyFromJSON;
function BlockCopyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, CopyBlockType_1.CopyBlockTypeFromJSON)(json['criteria']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'responseInstruction': !(0, runtime_1.exists)(json, 'responseInstruction') ? undefined : (0, ResponseInstructionType_1.ResponseInstructionTypeFromJSON)(json['responseInstruction']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.BlockCopyFromJSONTyped = BlockCopyFromJSONTyped;
function BlockCopyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, CopyBlockType_1.CopyBlockTypeToJSON)(value.criteria),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'responseInstruction': (0, ResponseInstructionType_1.ResponseInstructionTypeToJSON)(value.responseInstruction),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.BlockCopyToJSON = BlockCopyToJSON;
