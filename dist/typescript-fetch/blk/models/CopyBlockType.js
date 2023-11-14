"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyBlockTypeToJSON = exports.CopyBlockTypeFromJSONTyped = exports.CopyBlockTypeFromJSON = exports.instanceOfCopyBlockType = void 0;
const runtime_1 = require("../runtime");
const CopyBlockTypeCopyInstructions_1 = require("./CopyBlockTypeCopyInstructions");
const NewBlockDetailsType_1 = require("./NewBlockDetailsType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the CopyBlockType interface.
 */
function instanceOfCopyBlockType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyBlockType = instanceOfCopyBlockType;
function CopyBlockTypeFromJSON(json) {
    return CopyBlockTypeFromJSONTyped(json, false);
}
exports.CopyBlockTypeFromJSON = CopyBlockTypeFromJSON;
function CopyBlockTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'copyInstructions': !(0, runtime_1.exists)(json, 'copyInstructions') ? undefined : (0, CopyBlockTypeCopyInstructions_1.CopyBlockTypeCopyInstructionsFromJSON)(json['copyInstructions']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'newBlock': !(0, runtime_1.exists)(json, 'newBlock') ? undefined : (0, NewBlockDetailsType_1.NewBlockDetailsTypeFromJSON)(json['newBlock']),
        'sourceBlockId': !(0, runtime_1.exists)(json, 'sourceBlockId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['sourceBlockId']),
    };
}
exports.CopyBlockTypeFromJSONTyped = CopyBlockTypeFromJSONTyped;
function CopyBlockTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'copyInstructions': (0, CopyBlockTypeCopyInstructions_1.CopyBlockTypeCopyInstructionsToJSON)(value.copyInstructions),
        'hotelId': value.hotelId,
        'newBlock': (0, NewBlockDetailsType_1.NewBlockDetailsTypeToJSON)(value.newBlock),
        'sourceBlockId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.sourceBlockId),
    };
}
exports.CopyBlockTypeToJSON = CopyBlockTypeToJSON;