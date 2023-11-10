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
exports.CopyMarketingCitiesTypeToJSON = exports.CopyMarketingCitiesTypeFromJSONTyped = exports.CopyMarketingCitiesTypeFromJSON = exports.instanceOfCopyMarketingCitiesType = void 0;
const runtime_1 = require("../runtime");
const CodeListType_1 = require("./CodeListType");
const TemplateMarketingCityInfoType_1 = require("./TemplateMarketingCityInfoType");
/**
 * Check if a given object implements the CopyMarketingCitiesType interface.
 */
function instanceOfCopyMarketingCitiesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyMarketingCitiesType = instanceOfCopyMarketingCitiesType;
function CopyMarketingCitiesTypeFromJSON(json) {
    return CopyMarketingCitiesTypeFromJSONTyped(json, false);
}
exports.CopyMarketingCitiesTypeFromJSON = CopyMarketingCitiesTypeFromJSON;
function CopyMarketingCitiesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelCodes': !(0, runtime_1.exists)(json, 'hotelCodes') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['hotelCodes']),
        'templateMarketingCities': !(0, runtime_1.exists)(json, 'templateMarketingCities') ? undefined : (json['templateMarketingCities'].map(TemplateMarketingCityInfoType_1.TemplateMarketingCityInfoTypeFromJSON)),
    };
}
exports.CopyMarketingCitiesTypeFromJSONTyped = CopyMarketingCitiesTypeFromJSONTyped;
function CopyMarketingCitiesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelCodes': (0, CodeListType_1.CodeListTypeToJSON)(value.hotelCodes),
        'templateMarketingCities': value.templateMarketingCities === undefined ? undefined : (value.templateMarketingCities.map(TemplateMarketingCityInfoType_1.TemplateMarketingCityInfoTypeToJSON)),
    };
}
exports.CopyMarketingCitiesTypeToJSON = CopyMarketingCitiesTypeToJSON;
