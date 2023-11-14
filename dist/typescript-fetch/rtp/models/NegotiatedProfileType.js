"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegotiatedProfileTypeToJSON = exports.NegotiatedProfileTypeFromJSONTyped = exports.NegotiatedProfileTypeFromJSON = exports.instanceOfNegotiatedProfileType = void 0;
const runtime_1 = require("../runtime");
const NegRateAccessType_1 = require("./NegRateAccessType");
const ProfileNameType_1 = require("./ProfileNameType");
const ProfileTypeType_1 = require("./ProfileTypeType");
const UniqueIDListType_1 = require("./UniqueIDListType");
/**
 * Check if a given object implements the NegotiatedProfileType interface.
 */
function instanceOfNegotiatedProfileType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNegotiatedProfileType = instanceOfNegotiatedProfileType;
function NegotiatedProfileTypeFromJSON(json) {
    return NegotiatedProfileTypeFromJSONTyped(json, false);
}
exports.NegotiatedProfileTypeFromJSON = NegotiatedProfileTypeFromJSON;
function NegotiatedProfileTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'externalSystemCode': !(0, runtime_1.exists)(json, 'externalSystemCode') ? undefined : json['externalSystemCode'],
        'profileIdList': !(0, runtime_1.exists)(json, 'profileIdList') ? undefined : (0, UniqueIDListType_1.UniqueIDListTypeFromJSON)(json['profileIdList']),
        'profileName': !(0, runtime_1.exists)(json, 'profileName') ? undefined : (0, ProfileNameType_1.ProfileNameTypeFromJSON)(json['profileName']),
        'profileType': !(0, runtime_1.exists)(json, 'profileType') ? undefined : (0, ProfileTypeType_1.ProfileTypeTypeFromJSON)(json['profileType']),
        'rateInfoList': !(0, runtime_1.exists)(json, 'rateInfoList') ? undefined : (json['rateInfoList'].map(NegRateAccessType_1.NegRateAccessTypeFromJSON)),
    };
}
exports.NegotiatedProfileTypeFromJSONTyped = NegotiatedProfileTypeFromJSONTyped;
function NegotiatedProfileTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'externalSystemCode': value.externalSystemCode,
        'profileIdList': (0, UniqueIDListType_1.UniqueIDListTypeToJSON)(value.profileIdList),
        'profileName': (0, ProfileNameType_1.ProfileNameTypeToJSON)(value.profileName),
        'profileType': (0, ProfileTypeType_1.ProfileTypeTypeToJSON)(value.profileType),
        'rateInfoList': value.rateInfoList === undefined ? undefined : (value.rateInfoList.map(NegRateAccessType_1.NegRateAccessTypeToJSON)),
    };
}
exports.NegotiatedProfileTypeToJSON = NegotiatedProfileTypeToJSON;