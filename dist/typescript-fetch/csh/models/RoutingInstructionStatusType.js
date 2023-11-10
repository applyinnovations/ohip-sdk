"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingInstructionStatusTypeToJSON = exports.RoutingInstructionStatusTypeFromJSONTyped = exports.RoutingInstructionStatusTypeFromJSON = exports.RoutingInstructionStatusType = void 0;
/**
 * Routing instruction set is deleted.
 * @export
 */
exports.RoutingInstructionStatusType = {
    RoutingInstructionNew: 'RoutingInstructionNew',
    RoutingInstructionEdited: 'RoutingInstructionEdited',
    RoutingInstructionRemoved: 'RoutingInstructionRemoved'
};
function RoutingInstructionStatusTypeFromJSON(json) {
    return RoutingInstructionStatusTypeFromJSONTyped(json, false);
}
exports.RoutingInstructionStatusTypeFromJSON = RoutingInstructionStatusTypeFromJSON;
function RoutingInstructionStatusTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.RoutingInstructionStatusTypeFromJSONTyped = RoutingInstructionStatusTypeFromJSONTyped;
function RoutingInstructionStatusTypeToJSON(value) {
    return value;
}
exports.RoutingInstructionStatusTypeToJSON = RoutingInstructionStatusTypeToJSON;
