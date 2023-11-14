"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionSpaceDetailsToJSON = exports.FunctionSpaceDetailsFromJSONTyped = exports.FunctionSpaceDetailsFromJSON = exports.instanceOfFunctionSpaceDetails = void 0;
const runtime_1 = require("../runtime");
const FunctionSpaceType_1 = require("./FunctionSpaceType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the FunctionSpaceDetails interface.
 */
function instanceOfFunctionSpaceDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFunctionSpaceDetails = instanceOfFunctionSpaceDetails;
function FunctionSpaceDetailsFromJSON(json) {
    return FunctionSpaceDetailsFromJSONTyped(json, false);
}
exports.FunctionSpaceDetailsFromJSON = FunctionSpaceDetailsFromJSON;
function FunctionSpaceDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'functionSpaceRoom': !(0, runtime_1.exists)(json, 'functionSpaceRoom') ? undefined : (0, FunctionSpaceType_1.FunctionSpaceTypeFromJSON)(json['functionSpaceRoom']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.FunctionSpaceDetailsFromJSONTyped = FunctionSpaceDetailsFromJSONTyped;
function FunctionSpaceDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'functionSpaceRoom': (0, FunctionSpaceType_1.FunctionSpaceTypeToJSON)(value.functionSpaceRoom),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.FunctionSpaceDetailsToJSON = FunctionSpaceDetailsToJSON;