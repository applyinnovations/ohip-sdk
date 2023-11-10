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
exports.TemplateAmenitiesToBeChangedToJSON = exports.TemplateAmenitiesToBeChangedFromJSONTyped = exports.TemplateAmenitiesToBeChangedFromJSON = exports.instanceOfTemplateAmenitiesToBeChanged = void 0;
const runtime_1 = require("../runtime");
const ConfigTemplateAmenitiesType_1 = require("./ConfigTemplateAmenitiesType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the TemplateAmenitiesToBeChanged interface.
 */
function instanceOfTemplateAmenitiesToBeChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTemplateAmenitiesToBeChanged = instanceOfTemplateAmenitiesToBeChanged;
function TemplateAmenitiesToBeChangedFromJSON(json) {
    return TemplateAmenitiesToBeChangedFromJSONTyped(json, false);
}
exports.TemplateAmenitiesToBeChangedFromJSON = TemplateAmenitiesToBeChangedFromJSON;
function TemplateAmenitiesToBeChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'templateAmenities': !(0, runtime_1.exists)(json, 'templateAmenities') ? undefined : (0, ConfigTemplateAmenitiesType_1.ConfigTemplateAmenitiesTypeFromJSON)(json['templateAmenities']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.TemplateAmenitiesToBeChangedFromJSONTyped = TemplateAmenitiesToBeChangedFromJSONTyped;
function TemplateAmenitiesToBeChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'templateAmenities': (0, ConfigTemplateAmenitiesType_1.ConfigTemplateAmenitiesTypeToJSON)(value.templateAmenities),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.TemplateAmenitiesToBeChangedToJSON = TemplateAmenitiesToBeChangedToJSON;
