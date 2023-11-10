"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeActivityTypesToJSON = exports.ChangeActivityTypesFromJSONTyped = exports.ChangeActivityTypesFromJSON = exports.instanceOfChangeActivityTypes = void 0;
const runtime_1 = require("../runtime");
const ActivityTypesType_1 = require("./ActivityTypesType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ChangeActivityTypes interface.
 */
function instanceOfChangeActivityTypes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeActivityTypes = instanceOfChangeActivityTypes;
function ChangeActivityTypesFromJSON(json) {
    return ChangeActivityTypesFromJSONTyped(json, false);
}
exports.ChangeActivityTypesFromJSON = ChangeActivityTypesFromJSON;
function ChangeActivityTypesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activityTypes': !(0, runtime_1.exists)(json, 'activityTypes') ? undefined : (0, ActivityTypesType_1.ActivityTypesTypeFromJSON)(json['activityTypes']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ChangeActivityTypesFromJSONTyped = ChangeActivityTypesFromJSONTyped;
function ChangeActivityTypesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activityTypes': (0, ActivityTypesType_1.ActivityTypesTypeToJSON)(value.activityTypes),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ChangeActivityTypesToJSON = ChangeActivityTypesToJSON;
