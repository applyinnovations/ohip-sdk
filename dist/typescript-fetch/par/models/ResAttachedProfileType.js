"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResAttachedProfileTypeToJSON = exports.ResAttachedProfileTypeFromJSONTyped = exports.ResAttachedProfileTypeFromJSON = exports.instanceOfResAttachedProfileType = void 0;
const runtime_1 = require("../runtime");
const ProfileIdList_1 = require("./ProfileIdList");
const ResProfileTypeType_1 = require("./ResProfileTypeType");
/**
 * Check if a given object implements the ResAttachedProfileType interface.
 */
function instanceOfResAttachedProfileType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResAttachedProfileType = instanceOfResAttachedProfileType;
function ResAttachedProfileTypeFromJSON(json) {
    return ResAttachedProfileTypeFromJSONTyped(json, false);
}
exports.ResAttachedProfileTypeFromJSON = ResAttachedProfileTypeFromJSON;
function ResAttachedProfileTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'profileIdList': !(0, runtime_1.exists)(json, 'profileIdList') ? undefined : (0, ProfileIdList_1.ProfileIdListFromJSON)(json['profileIdList']),
        'reservationProfileType': !(0, runtime_1.exists)(json, 'reservationProfileType') ? undefined : (0, ResProfileTypeType_1.ResProfileTypeTypeFromJSON)(json['reservationProfileType']),
    };
}
exports.ResAttachedProfileTypeFromJSONTyped = ResAttachedProfileTypeFromJSONTyped;
function ResAttachedProfileTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'profileIdList': (0, ProfileIdList_1.ProfileIdListToJSON)(value.profileIdList),
        'reservationProfileType': (0, ResProfileTypeType_1.ResProfileTypeTypeToJSON)(value.reservationProfileType),
    };
}
exports.ResAttachedProfileTypeToJSON = ResAttachedProfileTypeToJSON;
