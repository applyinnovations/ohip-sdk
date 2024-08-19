"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileTypeProfileDeliveryMethodsToJSON = exports.ProfileTypeProfileDeliveryMethodsFromJSONTyped = exports.ProfileTypeProfileDeliveryMethodsFromJSON = exports.instanceOfProfileTypeProfileDeliveryMethods = void 0;
const runtime_1 = require("../runtime");
const ProfileDeliveryMethod_1 = require("./ProfileDeliveryMethod");
/**
 * Check if a given object implements the ProfileTypeProfileDeliveryMethods interface.
 */
function instanceOfProfileTypeProfileDeliveryMethods(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileTypeProfileDeliveryMethods = instanceOfProfileTypeProfileDeliveryMethods;
function ProfileTypeProfileDeliveryMethodsFromJSON(json) {
    return ProfileTypeProfileDeliveryMethodsFromJSONTyped(json, false);
}
exports.ProfileTypeProfileDeliveryMethodsFromJSON = ProfileTypeProfileDeliveryMethodsFromJSON;
function ProfileTypeProfileDeliveryMethodsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'profileDeliveryMethod': !(0, runtime_1.exists)(json, 'profileDeliveryMethod') ? undefined : (json['profileDeliveryMethod'].map(ProfileDeliveryMethod_1.ProfileDeliveryMethodFromJSON)),
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
    };
}
exports.ProfileTypeProfileDeliveryMethodsFromJSONTyped = ProfileTypeProfileDeliveryMethodsFromJSONTyped;
function ProfileTypeProfileDeliveryMethodsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'profileDeliveryMethod': value.profileDeliveryMethod === undefined ? undefined : (value.profileDeliveryMethod.map(ProfileDeliveryMethod_1.ProfileDeliveryMethodToJSON)),
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'count': value.count,
    };
}
exports.ProfileTypeProfileDeliveryMethodsToJSON = ProfileTypeProfileDeliveryMethodsToJSON;
