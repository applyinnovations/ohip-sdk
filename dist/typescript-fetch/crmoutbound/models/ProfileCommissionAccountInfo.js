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
exports.ProfileCommissionAccountInfoToJSON = exports.ProfileCommissionAccountInfoFromJSONTyped = exports.ProfileCommissionAccountInfoFromJSON = exports.instanceOfProfileCommissionAccountInfo = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const ProfileCommissionAccountInfoListType_1 = require("./ProfileCommissionAccountInfoListType");
/**
 * Check if a given object implements the ProfileCommissionAccountInfo interface.
 */
function instanceOfProfileCommissionAccountInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileCommissionAccountInfo = instanceOfProfileCommissionAccountInfo;
function ProfileCommissionAccountInfoFromJSON(json) {
    return ProfileCommissionAccountInfoFromJSONTyped(json, false);
}
exports.ProfileCommissionAccountInfoFromJSON = ProfileCommissionAccountInfoFromJSON;
function ProfileCommissionAccountInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'profileCommissionAccountInfoList': !(0, runtime_1.exists)(json, 'profileCommissionAccountInfoList') ? undefined : (0, ProfileCommissionAccountInfoListType_1.ProfileCommissionAccountInfoListTypeFromJSON)(json['profileCommissionAccountInfoList']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
    };
}
exports.ProfileCommissionAccountInfoFromJSONTyped = ProfileCommissionAccountInfoFromJSONTyped;
function ProfileCommissionAccountInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'profileCommissionAccountInfoList': (0, ProfileCommissionAccountInfoListType_1.ProfileCommissionAccountInfoListTypeToJSON)(value.profileCommissionAccountInfoList),
        'links': (0, Links_1.LinksToJSON)(value.links),
    };
}
exports.ProfileCommissionAccountInfoToJSON = ProfileCommissionAccountInfoToJSON;