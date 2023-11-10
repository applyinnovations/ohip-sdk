"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockCancellationReasonsToBeChangedToJSON = exports.BlockCancellationReasonsToBeChangedFromJSONTyped = exports.BlockCancellationReasonsToBeChangedFromJSON = exports.instanceOfBlockCancellationReasonsToBeChanged = void 0;
const runtime_1 = require("../runtime");
const BlockCancellationReasonsType_1 = require("./BlockCancellationReasonsType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the BlockCancellationReasonsToBeChanged interface.
 */
function instanceOfBlockCancellationReasonsToBeChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockCancellationReasonsToBeChanged = instanceOfBlockCancellationReasonsToBeChanged;
function BlockCancellationReasonsToBeChangedFromJSON(json) {
    return BlockCancellationReasonsToBeChangedFromJSONTyped(json, false);
}
exports.BlockCancellationReasonsToBeChangedFromJSON = BlockCancellationReasonsToBeChangedFromJSON;
function BlockCancellationReasonsToBeChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockCancellationReasons': !(0, runtime_1.exists)(json, 'blockCancellationReasons') ? undefined : (0, BlockCancellationReasonsType_1.BlockCancellationReasonsTypeFromJSON)(json['blockCancellationReasons']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.BlockCancellationReasonsToBeChangedFromJSONTyped = BlockCancellationReasonsToBeChangedFromJSONTyped;
function BlockCancellationReasonsToBeChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockCancellationReasons': (0, BlockCancellationReasonsType_1.BlockCancellationReasonsTypeToJSON)(value.blockCancellationReasons),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.BlockCancellationReasonsToBeChangedToJSON = BlockCancellationReasonsToBeChangedToJSON;
