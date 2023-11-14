"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelConfigCancelPenaltiesTypeToJSON = exports.HotelConfigCancelPenaltiesTypeFromJSONTyped = exports.HotelConfigCancelPenaltiesTypeFromJSON = exports.instanceOfHotelConfigCancelPenaltiesType = void 0;
const runtime_1 = require("../runtime");
const ConfigCancelPenaltyType_1 = require("./ConfigCancelPenaltyType");
/**
 * Check if a given object implements the HotelConfigCancelPenaltiesType interface.
 */
function instanceOfHotelConfigCancelPenaltiesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelConfigCancelPenaltiesType = instanceOfHotelConfigCancelPenaltiesType;
function HotelConfigCancelPenaltiesTypeFromJSON(json) {
    return HotelConfigCancelPenaltiesTypeFromJSONTyped(json, false);
}
exports.HotelConfigCancelPenaltiesTypeFromJSON = HotelConfigCancelPenaltiesTypeFromJSON;
function HotelConfigCancelPenaltiesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cancelPenaltyConfig': !(0, runtime_1.exists)(json, 'cancelPenaltyConfig') ? undefined : (json['cancelPenaltyConfig'].map(ConfigCancelPenaltyType_1.ConfigCancelPenaltyTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.HotelConfigCancelPenaltiesTypeFromJSONTyped = HotelConfigCancelPenaltiesTypeFromJSONTyped;
function HotelConfigCancelPenaltiesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cancelPenaltyConfig': value.cancelPenaltyConfig === undefined ? undefined : (value.cancelPenaltyConfig.map(ConfigCancelPenaltyType_1.ConfigCancelPenaltyTypeToJSON)),
        'hotelId': value.hotelId,
    };
}
exports.HotelConfigCancelPenaltiesTypeToJSON = HotelConfigCancelPenaltiesTypeToJSON;