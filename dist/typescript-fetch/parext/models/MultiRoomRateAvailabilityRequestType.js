"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Availability Extension API
 * APIs to provide extended features for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br />Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p>This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p><br /><br /> Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2.0.0
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiRoomRateAvailabilityRequestTypeToJSON = exports.MultiRoomRateAvailabilityRequestTypeFromJSONTyped = exports.MultiRoomRateAvailabilityRequestTypeFromJSON = exports.instanceOfMultiRoomRateAvailabilityRequestType = void 0;
const RatesSearchType_1 = require("./RatesSearchType");
const RoomsSearchType_1 = require("./RoomsSearchType");
/**
 * Check if a given object implements the MultiRoomRateAvailabilityRequestType interface.
 */
function instanceOfMultiRoomRateAvailabilityRequestType(value) {
    let isInstance = true;
    isInstance = isInstance && "arrivalDate" in value;
    isInstance = isInstance && "departureDate" in value;
    isInstance = isInstance && "hotelIds" in value;
    isInstance = isInstance && "rates" in value;
    isInstance = isInstance && "rooms" in value;
    return isInstance;
}
exports.instanceOfMultiRoomRateAvailabilityRequestType = instanceOfMultiRoomRateAvailabilityRequestType;
function MultiRoomRateAvailabilityRequestTypeFromJSON(json) {
    return MultiRoomRateAvailabilityRequestTypeFromJSONTyped(json, false);
}
exports.MultiRoomRateAvailabilityRequestTypeFromJSON = MultiRoomRateAvailabilityRequestTypeFromJSON;
function MultiRoomRateAvailabilityRequestTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'arrivalDate': json['arrivalDate'],
        'departureDate': json['departureDate'],
        'hotelIds': json['hotelIds'],
        'rates': (0, RatesSearchType_1.RatesSearchTypeFromJSON)(json['rates']),
        'rooms': (json['rooms'].map(RoomsSearchType_1.RoomsSearchTypeFromJSON)),
    };
}
exports.MultiRoomRateAvailabilityRequestTypeFromJSONTyped = MultiRoomRateAvailabilityRequestTypeFromJSONTyped;
function MultiRoomRateAvailabilityRequestTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'arrivalDate': value.arrivalDate,
        'departureDate': value.departureDate,
        'hotelIds': value.hotelIds,
        'rates': (0, RatesSearchType_1.RatesSearchTypeToJSON)(value.rates),
        'rooms': (value.rooms.map(RoomsSearchType_1.RoomsSearchTypeToJSON)),
    };
}
exports.MultiRoomRateAvailabilityRequestTypeToJSON = MultiRoomRateAvailabilityRequestTypeToJSON;
