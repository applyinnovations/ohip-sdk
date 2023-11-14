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
exports.SearchRoomClassificationTypeToJSON = exports.SearchRoomClassificationTypeFromJSONTyped = exports.SearchRoomClassificationTypeFromJSON = exports.instanceOfSearchRoomClassificationType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SearchRoomClassificationType interface.
 */
function instanceOfSearchRoomClassificationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSearchRoomClassificationType = instanceOfSearchRoomClassificationType;
function SearchRoomClassificationTypeFromJSON(json) {
    return SearchRoomClassificationTypeFromJSONTyped(json, false);
}
exports.SearchRoomClassificationTypeFromJSON = SearchRoomClassificationTypeFromJSON;
function SearchRoomClassificationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'roomTypes': !(0, runtime_1.exists)(json, 'roomTypes') ? undefined : json['roomTypes'],
        'tag': !(0, runtime_1.exists)(json, 'tag') ? undefined : json['tag'],
        'adults': !(0, runtime_1.exists)(json, 'adults') ? undefined : json['adults'],
        'children': !(0, runtime_1.exists)(json, 'children') ? undefined : json['children'],
        'numberOfUnits': !(0, runtime_1.exists)(json, 'numberOfUnits') ? undefined : json['numberOfUnits'],
    };
}
exports.SearchRoomClassificationTypeFromJSONTyped = SearchRoomClassificationTypeFromJSONTyped;
function SearchRoomClassificationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'roomTypes': value.roomTypes,
        'tag': value.tag,
        'adults': value.adults,
        'children': value.children,
        'numberOfUnits': value.numberOfUnits,
    };
}
exports.SearchRoomClassificationTypeToJSON = SearchRoomClassificationTypeToJSON;