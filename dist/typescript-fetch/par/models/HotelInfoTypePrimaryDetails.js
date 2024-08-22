"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelInfoTypePrimaryDetailsToJSON = exports.HotelInfoTypePrimaryDetailsFromJSONTyped = exports.HotelInfoTypePrimaryDetailsFromJSON = exports.instanceOfHotelInfoTypePrimaryDetails = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HotelInfoTypePrimaryDetails interface.
 */
function instanceOfHotelInfoTypePrimaryDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelInfoTypePrimaryDetails = instanceOfHotelInfoTypePrimaryDetails;
function HotelInfoTypePrimaryDetailsFromJSON(json) {
    return HotelInfoTypePrimaryDetailsFromJSONTyped(json, false);
}
exports.HotelInfoTypePrimaryDetailsFromJSON = HotelInfoTypePrimaryDetailsFromJSON;
function HotelInfoTypePrimaryDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'legalOwner': !(0, runtime_1.exists)(json, 'legalOwner') ? undefined : json['legalOwner'],
    };
}
exports.HotelInfoTypePrimaryDetailsFromJSONTyped = HotelInfoTypePrimaryDetailsFromJSONTyped;
function HotelInfoTypePrimaryDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'legalOwner': value.legalOwner,
    };
}
exports.HotelInfoTypePrimaryDetailsToJSON = HotelInfoTypePrimaryDetailsToJSON;
