"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
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
        'hasMore': value.hasMore,
        'preferenceType': value.preferenceType === undefined ? undefined : (value.preferenceType.map(PreferenceTypeType_1.PreferenceTypeTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
exports.ProfileTypePreferenceCollectionToJSON = ProfileTypePreferenceCollectionToJSON;
