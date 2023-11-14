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
exports.HotelFeatureTypeToJSON = exports.HotelFeatureTypeFromJSONTyped = exports.HotelFeatureTypeFromJSON = exports.instanceOfHotelFeatureType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HotelFeatureType interface.
 */
function instanceOfHotelFeatureType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelFeatureType = instanceOfHotelFeatureType;
function HotelFeatureTypeFromJSON(json) {
    return HotelFeatureTypeFromJSONTyped(json, false);
}
exports.HotelFeatureTypeFromJSON = HotelFeatureTypeFromJSON;
function HotelFeatureTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : json['comments'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'featureCode': !(0, runtime_1.exists)(json, 'featureCode') ? undefined : json['featureCode'],
        'hours': !(0, runtime_1.exists)(json, 'hours') ? undefined : json['hours'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'priceRange': !(0, runtime_1.exists)(json, 'priceRange') ? undefined : json['priceRange'],
    };
}
exports.HotelFeatureTypeFromJSONTyped = HotelFeatureTypeFromJSONTyped;
function HotelFeatureTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'comments': value.comments,
        'description': value.description,
        'featureCode': value.featureCode,
        'hours': value.hours,
        'orderSequence': value.orderSequence,
        'priceRange': value.priceRange,
    };
}
exports.HotelFeatureTypeToJSON = HotelFeatureTypeToJSON;