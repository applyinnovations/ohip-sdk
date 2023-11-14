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
exports.OriginCodesDetailsToJSON = exports.OriginCodesDetailsFromJSONTyped = exports.OriginCodesDetailsFromJSON = exports.instanceOfOriginCodesDetails = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const OriginCodesType_1 = require("./OriginCodesType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the OriginCodesDetails interface.
 */
function instanceOfOriginCodesDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfOriginCodesDetails = instanceOfOriginCodesDetails;
function OriginCodesDetailsFromJSON(json) {
    return OriginCodesDetailsFromJSONTyped(json, false);
}
exports.OriginCodesDetailsFromJSON = OriginCodesDetailsFromJSON;
function OriginCodesDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'originCodes': !(0, runtime_1.exists)(json, 'originCodes') ? undefined : (0, OriginCodesType_1.OriginCodesTypeFromJSON)(json['originCodes']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.OriginCodesDetailsFromJSONTyped = OriginCodesDetailsFromJSONTyped;
function OriginCodesDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'originCodes': (0, OriginCodesType_1.OriginCodesTypeToJSON)(value.originCodes),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.OriginCodesDetailsToJSON = OriginCodesDetailsToJSON;