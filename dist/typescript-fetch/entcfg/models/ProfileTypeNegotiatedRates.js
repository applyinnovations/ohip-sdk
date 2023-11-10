"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileTypeNegotiatedRatesToJSON = exports.ProfileTypeNegotiatedRatesFromJSONTyped = exports.ProfileTypeNegotiatedRatesFromJSON = exports.instanceOfProfileTypeNegotiatedRates = void 0;
const runtime_1 = require("../runtime");
const NegotiatedType_1 = require("./NegotiatedType");
/**
 * Check if a given object implements the ProfileTypeNegotiatedRates interface.
 */
function instanceOfProfileTypeNegotiatedRates(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileTypeNegotiatedRates = instanceOfProfileTypeNegotiatedRates;
function ProfileTypeNegotiatedRatesFromJSON(json) {
    return ProfileTypeNegotiatedRatesFromJSONTyped(json, false);
}
exports.ProfileTypeNegotiatedRatesFromJSON = ProfileTypeNegotiatedRatesFromJSON;
function ProfileTypeNegotiatedRatesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'negotiatedRate': !(0, runtime_1.exists)(json, 'negotiatedRate') ? undefined : (json['negotiatedRate'].map(NegotiatedType_1.NegotiatedTypeFromJSON)),
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.ProfileTypeNegotiatedRatesFromJSONTyped = ProfileTypeNegotiatedRatesFromJSONTyped;
function ProfileTypeNegotiatedRatesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'hasMore': value.hasMore,
        'negotiatedRate': value.negotiatedRate === undefined ? undefined : (value.negotiatedRate.map(NegotiatedType_1.NegotiatedTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
exports.ProfileTypeNegotiatedRatesToJSON = ProfileTypeNegotiatedRatesToJSON;
