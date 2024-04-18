"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockSalesAllowanceToJSON = exports.BlockSalesAllowanceFromJSONTyped = exports.BlockSalesAllowanceFromJSON = exports.instanceOfBlockSalesAllowance = void 0;
const runtime_1 = require("../runtime");
const BlockSalesAllowanceType_1 = require("./BlockSalesAllowanceType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the BlockSalesAllowance interface.
 */
function instanceOfBlockSalesAllowance(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockSalesAllowance = instanceOfBlockSalesAllowance;
function BlockSalesAllowanceFromJSON(json) {
    return BlockSalesAllowanceFromJSONTyped(json, false);
}
exports.BlockSalesAllowanceFromJSON = BlockSalesAllowanceFromJSON;
function BlockSalesAllowanceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'salesAllowances': !(0, runtime_1.exists)(json, 'salesAllowances') ? undefined : (json['salesAllowances'].map(BlockSalesAllowanceType_1.BlockSalesAllowanceTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.BlockSalesAllowanceFromJSONTyped = BlockSalesAllowanceFromJSONTyped;
function BlockSalesAllowanceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'salesAllowances': value.salesAllowances === undefined ? undefined : (value.salesAllowances.map(BlockSalesAllowanceType_1.BlockSalesAllowanceTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.BlockSalesAllowanceToJSON = BlockSalesAllowanceToJSON;