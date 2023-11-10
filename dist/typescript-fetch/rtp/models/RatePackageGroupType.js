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
exports.RatePackageGroupTypeToJSON = exports.RatePackageGroupTypeFromJSONTyped = exports.RatePackageGroupTypeFromJSON = exports.instanceOfRatePackageGroupType = void 0;
const runtime_1 = require("../runtime");
const RatePackageCodeListType_1 = require("./RatePackageCodeListType");
/**
 * Check if a given object implements the RatePackageGroupType interface.
 */
function instanceOfRatePackageGroupType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRatePackageGroupType = instanceOfRatePackageGroupType;
function RatePackageGroupTypeFromJSON(json) {
    return RatePackageGroupTypeFromJSONTyped(json, false);
}
exports.RatePackageGroupTypeFromJSON = RatePackageGroupTypeFromJSON;
function RatePackageGroupTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'packages': !(0, runtime_1.exists)(json, 'packages') ? undefined : (0, RatePackageCodeListType_1.RatePackageCodeListTypeFromJSON)(json['packages']),
        'sellSeparate': !(0, runtime_1.exists)(json, 'sellSeparate') ? undefined : json['sellSeparate'],
        'shortDescription': !(0, runtime_1.exists)(json, 'shortDescription') ? undefined : json['shortDescription'],
        'webBookable': !(0, runtime_1.exists)(json, 'webBookable') ? undefined : json['webBookable'],
    };
}
exports.RatePackageGroupTypeFromJSONTyped = RatePackageGroupTypeFromJSONTyped;
function RatePackageGroupTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'packages': (0, RatePackageCodeListType_1.RatePackageCodeListTypeToJSON)(value.packages),
        'sellSeparate': value.sellSeparate,
        'shortDescription': value.shortDescription,
        'webBookable': value.webBookable,
    };
}
exports.RatePackageGroupTypeToJSON = RatePackageGroupTypeToJSON;
