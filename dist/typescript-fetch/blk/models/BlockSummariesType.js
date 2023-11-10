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
exports.BlockSummariesTypeToJSON = exports.BlockSummariesTypeFromJSONTyped = exports.BlockSummariesTypeFromJSON = exports.instanceOfBlockSummariesType = void 0;
const runtime_1 = require("../runtime");
const BlockSummariesTypeBlockInfoInner_1 = require("./BlockSummariesTypeBlockInfoInner");
/**
 * Check if a given object implements the BlockSummariesType interface.
 */
function instanceOfBlockSummariesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockSummariesType = instanceOfBlockSummariesType;
function BlockSummariesTypeFromJSON(json) {
    return BlockSummariesTypeFromJSONTyped(json, false);
}
exports.BlockSummariesTypeFromJSON = BlockSummariesTypeFromJSON;
function BlockSummariesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockInfo': !(0, runtime_1.exists)(json, 'blockInfo') ? undefined : (json['blockInfo'].map(BlockSummariesTypeBlockInfoInner_1.BlockSummariesTypeBlockInfoInnerFromJSON)),
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.BlockSummariesTypeFromJSONTyped = BlockSummariesTypeFromJSONTyped;
function BlockSummariesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockInfo': value.blockInfo === undefined ? undefined : (value.blockInfo.map(BlockSummariesTypeBlockInfoInner_1.BlockSummariesTypeBlockInfoInnerToJSON)),
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
    };
}
exports.BlockSummariesTypeToJSON = BlockSummariesTypeToJSON;
