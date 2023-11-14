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
exports.TemplateHotelDetailTypeToJSON = exports.TemplateHotelDetailTypeFromJSONTyped = exports.TemplateHotelDetailTypeFromJSON = exports.instanceOfTemplateHotelDetailType = void 0;
const runtime_1 = require("../runtime");
const TemplateHotelDetailValuesType_1 = require("./TemplateHotelDetailValuesType");
/**
 * Check if a given object implements the TemplateHotelDetailType interface.
 */
function instanceOfTemplateHotelDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTemplateHotelDetailType = instanceOfTemplateHotelDetailType;
function TemplateHotelDetailTypeFromJSON(json) {
    return TemplateHotelDetailTypeFromJSONTyped(json, false);
}
exports.TemplateHotelDetailTypeFromJSON = TemplateHotelDetailTypeFromJSON;
function TemplateHotelDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'category': !(0, runtime_1.exists)(json, 'category') ? undefined : json['category'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
        'templateHotelDetailValues': !(0, runtime_1.exists)(json, 'templateHotelDetailValues') ? undefined : (0, TemplateHotelDetailValuesType_1.TemplateHotelDetailValuesTypeFromJSON)(json['templateHotelDetailValues']),
    };
}
exports.TemplateHotelDetailTypeFromJSONTyped = TemplateHotelDetailTypeFromJSONTyped;
function TemplateHotelDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'category': value.category,
        'code': value.code,
        'description': value.description,
        'sequence': value.sequence,
        'templateHotelDetailValues': (0, TemplateHotelDetailValuesType_1.TemplateHotelDetailValuesTypeToJSON)(value.templateHotelDetailValues),
    };
}
exports.TemplateHotelDetailTypeToJSON = TemplateHotelDetailTypeToJSON;