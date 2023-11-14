"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityTypesConfigCopyToJSON = exports.ActivityTypesConfigCopyFromJSONTyped = exports.ActivityTypesConfigCopyFromJSON = exports.instanceOfActivityTypesConfigCopy = void 0;
const runtime_1 = require("../runtime");
const CopyActivityConfigCriteriaType_1 = require("./CopyActivityConfigCriteriaType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ActivityTypesConfigCopy interface.
 */
function instanceOfActivityTypesConfigCopy(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfActivityTypesConfigCopy = instanceOfActivityTypesConfigCopy;
function ActivityTypesConfigCopyFromJSON(json) {
    return ActivityTypesConfigCopyFromJSONTyped(json, false);
}
exports.ActivityTypesConfigCopyFromJSON = ActivityTypesConfigCopyFromJSON;
function ActivityTypesConfigCopyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, CopyActivityConfigCriteriaType_1.CopyActivityConfigCriteriaTypeFromJSON)(json['criteria']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ActivityTypesConfigCopyFromJSONTyped = ActivityTypesConfigCopyFromJSONTyped;
function ActivityTypesConfigCopyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, CopyActivityConfigCriteriaType_1.CopyActivityConfigCriteriaTypeToJSON)(value.criteria),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ActivityTypesConfigCopyToJSON = ActivityTypesConfigCopyToJSON;