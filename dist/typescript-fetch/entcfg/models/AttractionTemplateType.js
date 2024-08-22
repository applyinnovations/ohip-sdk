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
exports.AttractionTemplateTypeToJSON = exports.AttractionTemplateTypeFromJSONTyped = exports.AttractionTemplateTypeFromJSON = exports.instanceOfAttractionTemplateType = void 0;
const runtime_1 = require("../runtime");
const AddressType_1 = require("./AddressType");
const RelativePositionType_1 = require("./RelativePositionType");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
const URLType_1 = require("./URLType");
/**
 * Check if a given object implements the AttractionTemplateType interface.
 */
function instanceOfAttractionTemplateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAttractionTemplateType = instanceOfAttractionTemplateType;
function AttractionTemplateTypeFromJSON(json) {
    return AttractionTemplateTypeFromJSONTyped(json, false);
}
exports.AttractionTemplateTypeFromJSON = AttractionTemplateTypeFromJSON;
function AttractionTemplateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['name']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        '_class': !(0, runtime_1.exists)(json, 'class') ? undefined : json['class'],
        'generalDirections': !(0, runtime_1.exists)(json, 'generalDirections') ? undefined : json['generalDirections'],
        'relativePosition': !(0, runtime_1.exists)(json, 'relativePosition') ? undefined : (0, RelativePositionType_1.RelativePositionTypeFromJSON)(json['relativePosition']),
        'address': !(0, runtime_1.exists)(json, 'address') ? undefined : (0, AddressType_1.AddressTypeFromJSON)(json['address']),
        'website': !(0, runtime_1.exists)(json, 'website') ? undefined : (0, URLType_1.URLTypeFromJSON)(json['website']),
        'priceRange': !(0, runtime_1.exists)(json, 'priceRange') ? undefined : json['priceRange'],
        'operationHours': !(0, runtime_1.exists)(json, 'operationHours') ? undefined : json['operationHours'],
        'displaySeq': !(0, runtime_1.exists)(json, 'displaySeq') ? undefined : json['displaySeq'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'region': !(0, runtime_1.exists)(json, 'region') ? undefined : json['region'],
        'inactiveDate': !(0, runtime_1.exists)(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'latitude': !(0, runtime_1.exists)(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !(0, runtime_1.exists)(json, 'longitude') ? undefined : json['longitude'],
    };
}
exports.AttractionTemplateTypeFromJSONTyped = AttractionTemplateTypeFromJSONTyped;
function AttractionTemplateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.name),
        'type': value.type,
        'class': value._class,
        'generalDirections': value.generalDirections,
        'relativePosition': (0, RelativePositionType_1.RelativePositionTypeToJSON)(value.relativePosition),
        'address': (0, AddressType_1.AddressTypeToJSON)(value.address),
        'website': (0, URLType_1.URLTypeToJSON)(value.website),
        'priceRange': value.priceRange,
        'operationHours': value.operationHours,
        'displaySeq': value.displaySeq,
        'code': value.code,
        'region': value.region,
        'inactiveDate': value.inactiveDate,
        'latitude': value.latitude,
        'longitude': value.longitude,
    };
}
exports.AttractionTemplateTypeToJSON = AttractionTemplateTypeToJSON;
