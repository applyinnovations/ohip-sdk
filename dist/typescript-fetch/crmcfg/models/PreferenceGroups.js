"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceGroupsToJSON = exports.PreferenceGroupsFromJSONTyped = exports.PreferenceGroupsFromJSON = exports.instanceOfPreferenceGroups = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const PreferenceGroupsType_1 = require("./PreferenceGroupsType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PreferenceGroups interface.
 */
function instanceOfPreferenceGroups(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPreferenceGroups = instanceOfPreferenceGroups;
function PreferenceGroupsFromJSON(json) {
    return PreferenceGroupsFromJSONTyped(json, false);
}
exports.PreferenceGroupsFromJSON = PreferenceGroupsFromJSON;
function PreferenceGroupsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'preferenceGroups': !(0, runtime_1.exists)(json, 'preferenceGroups') ? undefined : (0, PreferenceGroupsType_1.PreferenceGroupsTypeFromJSON)(json['preferenceGroups']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PreferenceGroupsFromJSONTyped = PreferenceGroupsFromJSONTyped;
function PreferenceGroupsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'preferenceGroups': (0, PreferenceGroupsType_1.PreferenceGroupsTypeToJSON)(value.preferenceGroups),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PreferenceGroupsToJSON = PreferenceGroupsToJSON;