"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttractionClassesToBeChangedToJSON = exports.AttractionClassesToBeChangedFromJSONTyped = exports.AttractionClassesToBeChangedFromJSON = exports.instanceOfAttractionClassesToBeChanged = void 0;
const runtime_1 = require("../runtime");
const AttractionClassType_1 = require("./AttractionClassType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the AttractionClassesToBeChanged interface.
 */
function instanceOfAttractionClassesToBeChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAttractionClassesToBeChanged = instanceOfAttractionClassesToBeChanged;
function AttractionClassesToBeChangedFromJSON(json) {
    return AttractionClassesToBeChangedFromJSONTyped(json, false);
}
exports.AttractionClassesToBeChangedFromJSON = AttractionClassesToBeChangedFromJSON;
function AttractionClassesToBeChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attractionClasses': !(0, runtime_1.exists)(json, 'attractionClasses') ? undefined : (json['attractionClasses'].map(AttractionClassType_1.AttractionClassTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.AttractionClassesToBeChangedFromJSONTyped = AttractionClassesToBeChangedFromJSONTyped;
function AttractionClassesToBeChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attractionClasses': value.attractionClasses === undefined ? undefined : (value.attractionClasses.map(AttractionClassType_1.AttractionClassTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.AttractionClassesToBeChangedToJSON = AttractionClassesToBeChangedToJSON;
