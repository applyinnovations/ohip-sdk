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
exports.SearchPropertyRequestTypeToJSON = exports.SearchPropertyRequestTypeFromJSONTyped = exports.SearchPropertyRequestTypeFromJSON = exports.instanceOfSearchPropertyRequestType = void 0;
const runtime_1 = require("../runtime");
const SearchRoomClassificationType_1 = require("./SearchRoomClassificationType");
const SortByType_1 = require("./SortByType");
/**
 * Check if a given object implements the SearchPropertyRequestType interface.
 */
function instanceOfSearchPropertyRequestType(value) {
    let isInstance = true;
    isInstance = isInstance && "arrivalDate" in value;
    isInstance = isInstance && "departureDate" in value;
    return isInstance;
}
exports.instanceOfSearchPropertyRequestType = instanceOfSearchPropertyRequestType;
function SearchPropertyRequestTypeFromJSON(json) {
    return SearchPropertyRequestTypeFromJSONTyped(json, false);
}
exports.SearchPropertyRequestTypeFromJSON = SearchPropertyRequestTypeFromJSON;
function SearchPropertyRequestTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !(0, runtime_1.exists)(json, 'accountId') ? undefined : json['accountId'],
        'arrivalDate': (new Date(json['arrivalDate'])),
        'departureDate': (new Date(json['departureDate'])),
        'hotelIds': !(0, runtime_1.exists)(json, 'hotelIds') ? undefined : json['hotelIds'],
        'includePublicRates': !(0, runtime_1.exists)(json, 'includePublicRates') ? undefined : json['includePublicRates'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'minRate': !(0, runtime_1.exists)(json, 'minRate') ? undefined : json['minRate'],
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'rooms': !(0, runtime_1.exists)(json, 'rooms') ? undefined : (json['rooms'].map(SearchRoomClassificationType_1.SearchRoomClassificationTypeFromJSON)),
        'sortBy': !(0, runtime_1.exists)(json, 'sortBy') ? undefined : (0, SortByType_1.SortByTypeFromJSON)(json['sortBy']),
    };
}
exports.SearchPropertyRequestTypeFromJSONTyped = SearchPropertyRequestTypeFromJSONTyped;
function SearchPropertyRequestTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountId': value.accountId,
        'arrivalDate': (value.arrivalDate.toISOString().substr(0, 10)),
        'departureDate': (value.departureDate.toISOString().substr(0, 10)),
        'hotelIds': value.hotelIds,
        'includePublicRates': value.includePublicRates,
        'limit': value.limit,
        'minRate': value.minRate,
        'offset': value.offset,
        'rooms': value.rooms === undefined ? undefined : (value.rooms.map(SearchRoomClassificationType_1.SearchRoomClassificationTypeToJSON)),
        'sortBy': (0, SortByType_1.SortByTypeToJSON)(value.sortBy),
    };
}
exports.SearchPropertyRequestTypeToJSON = SearchPropertyRequestTypeToJSON;
