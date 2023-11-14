"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileTypePreferenceCollectionToJSON = exports.ProfileTypePreferenceCollectionFromJSONTyped = exports.ProfileTypePreferenceCollectionFromJSON = exports.instanceOfProfileTypePreferenceCollection = void 0;
const runtime_1 = require("../runtime");
const PreferenceTypeType_1 = require("./PreferenceTypeType");
/**
 * Check if a given object implements the ProfileTypePreferenceCollection interface.
 */
function instanceOfProfileTypePreferenceCollection(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileTypePreferenceCollection = instanceOfProfileTypePreferenceCollection;
function ProfileTypePreferenceCollectionFromJSON(json) {
    return ProfileTypePreferenceCollectionFromJSONTyped(json, false);
}
exports.ProfileTypePreferenceCollectionFromJSON = ProfileTypePreferenceCollectionFromJSON;
function ProfileTypePreferenceCollectionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'preferenceType': !(0, runtime_1.exists)(json, 'preferenceType') ? undefined : (json['preferenceType'].map(PreferenceTypeType_1.PreferenceTypeTypeFromJSON)),
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.ProfileTypePreferenceCollectionFromJSONTyped = ProfileTypePreferenceCollectionFromJSONTyped;
function ProfileTypePreferenceCollectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'preferenceType': value.preferenceType === undefined ? undefined : (value.preferenceType.map(PreferenceTypeType_1.PreferenceTypeTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
exports.ProfileTypePreferenceCollectionToJSON = ProfileTypePreferenceCollectionToJSON;