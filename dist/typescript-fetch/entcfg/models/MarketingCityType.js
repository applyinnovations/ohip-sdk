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
exports.MarketingCityTypeToJSON = exports.MarketingCityTypeFromJSONTyped = exports.MarketingCityTypeFromJSON = exports.instanceOfMarketingCityType = void 0;
const runtime_1 = require("../runtime");
const CityHotelInfoType_1 = require("./CityHotelInfoType");
/**
 * Check if a given object implements the MarketingCityType interface.
 */
function instanceOfMarketingCityType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMarketingCityType = instanceOfMarketingCityType;
function MarketingCityTypeFromJSON(json) {
    return MarketingCityTypeFromJSONTyped(json, false);
}
exports.MarketingCityTypeFromJSON = MarketingCityTypeFromJSON;
function MarketingCityTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cityHotels': !(0, runtime_1.exists)(json, 'cityHotels') ? undefined : (json['cityHotels'].map(CityHotelInfoType_1.CityHotelInfoTypeFromJSON)),
        'marketingCity': !(0, runtime_1.exists)(json, 'marketingCity') ? undefined : json['marketingCity'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
    };
}
exports.MarketingCityTypeFromJSONTyped = MarketingCityTypeFromJSONTyped;
function MarketingCityTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cityHotels': value.cityHotels === undefined ? undefined : (value.cityHotels.map(CityHotelInfoType_1.CityHotelInfoTypeToJSON)),
        'marketingCity': value.marketingCity,
        'description': value.description,
    };
}
exports.MarketingCityTypeToJSON = MarketingCityTypeToJSON;
