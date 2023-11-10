"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalProfileTypeToJSON = exports.ExternalProfileTypeFromJSONTyped = exports.ExternalProfileTypeFromJSON = exports.instanceOfExternalProfileType = void 0;
const runtime_1 = require("../runtime");
const IncidentsType_1 = require("./IncidentsType");
const ProfileIdList_1 = require("./ProfileIdList");
const ProfileType_1 = require("./ProfileType");
/**
 * Check if a given object implements the ExternalProfileType interface.
 */
function instanceOfExternalProfileType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExternalProfileType = instanceOfExternalProfileType;
function ExternalProfileTypeFromJSON(json) {
    return ExternalProfileTypeFromJSONTyped(json, false);
}
exports.ExternalProfileTypeFromJSON = ExternalProfileTypeFromJSON;
function ExternalProfileTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'profileIdList': !(0, runtime_1.exists)(json, 'profileIdList') ? undefined : (0, ProfileIdList_1.ProfileIdListFromJSON)(json['profileIdList']),
        'profile': !(0, runtime_1.exists)(json, 'profile') ? undefined : (0, ProfileType_1.ProfileTypeFromJSON)(json['profile']),
        'incidents': !(0, runtime_1.exists)(json, 'incidents') ? undefined : (0, IncidentsType_1.IncidentsTypeFromJSON)(json['incidents']),
        'guestStatus': !(0, runtime_1.exists)(json, 'guestStatus') ? undefined : json['guestStatus'],
    };
}
exports.ExternalProfileTypeFromJSONTyped = ExternalProfileTypeFromJSONTyped;
function ExternalProfileTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'profileIdList': (0, ProfileIdList_1.ProfileIdListToJSON)(value.profileIdList),
        'profile': (0, ProfileType_1.ProfileTypeToJSON)(value.profile),
        'incidents': (0, IncidentsType_1.IncidentsTypeToJSON)(value.incidents),
        'guestStatus': value.guestStatus,
    };
}
exports.ExternalProfileTypeToJSON = ExternalProfileTypeToJSON;
