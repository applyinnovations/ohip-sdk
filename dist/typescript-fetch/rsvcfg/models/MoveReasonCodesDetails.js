"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveReasonCodesDetailsToJSON = exports.MoveReasonCodesDetailsFromJSONTyped = exports.MoveReasonCodesDetailsFromJSON = exports.instanceOfMoveReasonCodesDetails = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const MoveReasonCodesType_1 = require("./MoveReasonCodesType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the MoveReasonCodesDetails interface.
 */
function instanceOfMoveReasonCodesDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMoveReasonCodesDetails = instanceOfMoveReasonCodesDetails;
function MoveReasonCodesDetailsFromJSON(json) {
    return MoveReasonCodesDetailsFromJSONTyped(json, false);
}
exports.MoveReasonCodesDetailsFromJSON = MoveReasonCodesDetailsFromJSON;
function MoveReasonCodesDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'moveReasonCodes': !(0, runtime_1.exists)(json, 'moveReasonCodes') ? undefined : (0, MoveReasonCodesType_1.MoveReasonCodesTypeFromJSON)(json['moveReasonCodes']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.MoveReasonCodesDetailsFromJSONTyped = MoveReasonCodesDetailsFromJSONTyped;
function MoveReasonCodesDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'moveReasonCodes': (0, MoveReasonCodesType_1.MoveReasonCodesTypeToJSON)(value.moveReasonCodes),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.MoveReasonCodesDetailsToJSON = MoveReasonCodesDetailsToJSON;
