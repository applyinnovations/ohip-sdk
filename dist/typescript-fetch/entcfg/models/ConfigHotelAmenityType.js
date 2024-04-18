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
exports.ConfigHotelAmenityTypeToJSON = exports.ConfigHotelAmenityTypeFromJSONTyped = exports.ConfigHotelAmenityTypeFromJSON = exports.instanceOfConfigHotelAmenityType = void 0;
const runtime_1 = require("../runtime");
const AmenityTypeType_1 = require("./AmenityTypeType");
/**
 * Check if a given object implements the ConfigHotelAmenityType interface.
 */
function instanceOfConfigHotelAmenityType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfConfigHotelAmenityType = instanceOfConfigHotelAmenityType;
function ConfigHotelAmenityTypeFromJSON(json) {
    return ConfigHotelAmenityTypeFromJSONTyped(json, false);
}
exports.ConfigHotelAmenityTypeFromJSON = ConfigHotelAmenityTypeFromJSON;
function ConfigHotelAmenityTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : json['comments'],
        'featureCode': !(0, runtime_1.exists)(json, 'featureCode') ? undefined : json['featureCode'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'amenityType': !(0, runtime_1.exists)(json, 'amenityType') ? undefined : (0, AmenityTypeType_1.AmenityTypeTypeFromJSON)(json['amenityType']),
        'beginDate': !(0, runtime_1.exists)(json, 'beginDate') ? undefined : json['beginDate'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'newAmenityCode': !(0, runtime_1.exists)(json, 'newAmenityCode') ? undefined : json['newAmenityCode'],
        'newBeginDate': !(0, runtime_1.exists)(json, 'newBeginDate') ? undefined : json['newBeginDate'],
        'hours': !(0, runtime_1.exists)(json, 'hours') ? undefined : json['hours'],
        'priceRange': !(0, runtime_1.exists)(json, 'priceRange') ? undefined : json['priceRange'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.ConfigHotelAmenityTypeFromJSONTyped = ConfigHotelAmenityTypeFromJSONTyped;
function ConfigHotelAmenityTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'comments': value.comments,
        'featureCode': value.featureCode,
        'orderSequence': value.orderSequence,
        'amenityType': (0, AmenityTypeType_1.AmenityTypeTypeToJSON)(value.amenityType),
        'beginDate': value.beginDate,
        'endDate': value.endDate,
        'newAmenityCode': value.newAmenityCode,
        'newBeginDate': value.newBeginDate,
        'hours': value.hours,
        'priceRange': value.priceRange,
        'hotelId': value.hotelId,
    };
}
exports.ConfigHotelAmenityTypeToJSON = ConfigHotelAmenityTypeToJSON;