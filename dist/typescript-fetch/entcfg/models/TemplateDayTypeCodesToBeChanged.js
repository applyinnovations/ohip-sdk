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
exports.TemplateDayTypeCodesToBeChangedToJSON = exports.TemplateDayTypeCodesToBeChangedFromJSONTyped = exports.TemplateDayTypeCodesToBeChangedFromJSON = exports.instanceOfTemplateDayTypeCodesToBeChanged = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const TemplateDayTypeCodesType_1 = require("./TemplateDayTypeCodesType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the TemplateDayTypeCodesToBeChanged interface.
 */
function instanceOfTemplateDayTypeCodesToBeChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTemplateDayTypeCodesToBeChanged = instanceOfTemplateDayTypeCodesToBeChanged;
function TemplateDayTypeCodesToBeChangedFromJSON(json) {
    return TemplateDayTypeCodesToBeChangedFromJSONTyped(json, false);
}
exports.TemplateDayTypeCodesToBeChangedFromJSON = TemplateDayTypeCodesToBeChangedFromJSON;
function TemplateDayTypeCodesToBeChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'templateDayTypeCodes': !(0, runtime_1.exists)(json, 'templateDayTypeCodes') ? undefined : (0, TemplateDayTypeCodesType_1.TemplateDayTypeCodesTypeFromJSON)(json['templateDayTypeCodes']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.TemplateDayTypeCodesToBeChangedFromJSONTyped = TemplateDayTypeCodesToBeChangedFromJSONTyped;
function TemplateDayTypeCodesToBeChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'templateDayTypeCodes': (0, TemplateDayTypeCodesType_1.TemplateDayTypeCodesTypeToJSON)(value.templateDayTypeCodes),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.TemplateDayTypeCodesToBeChangedToJSON = TemplateDayTypeCodesToBeChangedToJSON;