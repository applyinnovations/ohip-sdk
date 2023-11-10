"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorporateDepartmentCodesDetailsToJSON = exports.CorporateDepartmentCodesDetailsFromJSONTyped = exports.CorporateDepartmentCodesDetailsFromJSON = exports.instanceOfCorporateDepartmentCodesDetails = void 0;
const runtime_1 = require("../runtime");
const CorporateDepartmentCodesType_1 = require("./CorporateDepartmentCodesType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the CorporateDepartmentCodesDetails interface.
 */
function instanceOfCorporateDepartmentCodesDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCorporateDepartmentCodesDetails = instanceOfCorporateDepartmentCodesDetails;
function CorporateDepartmentCodesDetailsFromJSON(json) {
    return CorporateDepartmentCodesDetailsFromJSONTyped(json, false);
}
exports.CorporateDepartmentCodesDetailsFromJSON = CorporateDepartmentCodesDetailsFromJSON;
function CorporateDepartmentCodesDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'corporateDepartmentCodes': !(0, runtime_1.exists)(json, 'corporateDepartmentCodes') ? undefined : (0, CorporateDepartmentCodesType_1.CorporateDepartmentCodesTypeFromJSON)(json['corporateDepartmentCodes']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.CorporateDepartmentCodesDetailsFromJSONTyped = CorporateDepartmentCodesDetailsFromJSONTyped;
function CorporateDepartmentCodesDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'corporateDepartmentCodes': (0, CorporateDepartmentCodesType_1.CorporateDepartmentCodesTypeToJSON)(value.corporateDepartmentCodes),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.CorporateDepartmentCodesDetailsToJSON = CorporateDepartmentCodesDetailsToJSON;
