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
exports.RegionTypeToJSON = exports.RegionTypeFromJSONTyped = exports.RegionTypeFromJSON = exports.instanceOfRegionType = void 0;
const runtime_1 = require("../runtime");
const MarketingCityType_1 = require("./MarketingCityType");
/**
 * Check if a given object implements the RegionType interface.
 */
function instanceOfRegionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRegionType = instanceOfRegionType;
function RegionTypeFromJSON(json) {
    return RegionTypeFromJSONTyped(json, false);
}
exports.RegionTypeFromJSON = RegionTypeFromJSON;
function RegionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'marketingCities': !(0, runtime_1.exists)(json, 'marketingCities') ? undefined : (json['marketingCities'].map(MarketingCityType_1.MarketingCityTypeFromJSON)),
        'regionCode': !(0, runtime_1.exists)(json, 'regionCode') ? undefined : json['regionCode'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
    };
}
exports.RegionTypeFromJSONTyped = RegionTypeFromJSONTyped;
function RegionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'marketingCities': value.marketingCities === undefined ? undefined : (value.marketingCities.map(MarketingCityType_1.MarketingCityTypeToJSON)),
        'regionCode': value.regionCode,
        'description': value.description,
    };
}
exports.RegionTypeToJSON = RegionTypeToJSON;
