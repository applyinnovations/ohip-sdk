"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageRatesRatePlanListToJSON = exports.PackageRatesRatePlanListFromJSONTyped = exports.PackageRatesRatePlanListFromJSON = exports.instanceOfPackageRatesRatePlanList = void 0;
const runtime_1 = require("../runtime");
const RatePlanShortInfoType_1 = require("./RatePlanShortInfoType");
/**
 * Check if a given object implements the PackageRatesRatePlanList interface.
 */
function instanceOfPackageRatesRatePlanList(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPackageRatesRatePlanList = instanceOfPackageRatesRatePlanList;
function PackageRatesRatePlanListFromJSON(json) {
    return PackageRatesRatePlanListFromJSONTyped(json, false);
}
exports.PackageRatesRatePlanListFromJSON = PackageRatesRatePlanListFromJSON;
function PackageRatesRatePlanListFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelCode': !(0, runtime_1.exists)(json, 'hotelCode') ? undefined : json['hotelCode'],
        'packageCode': !(0, runtime_1.exists)(json, 'packageCode') ? undefined : json['packageCode'],
        'ratePlan': !(0, runtime_1.exists)(json, 'ratePlan') ? undefined : (json['ratePlan'].map(RatePlanShortInfoType_1.RatePlanShortInfoTypeFromJSON)),
    };
}
exports.PackageRatesRatePlanListFromJSONTyped = PackageRatesRatePlanListFromJSONTyped;
function PackageRatesRatePlanListToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelCode': value.hotelCode,
        'packageCode': value.packageCode,
        'ratePlan': value.ratePlan === undefined ? undefined : (value.ratePlan.map(RatePlanShortInfoType_1.RatePlanShortInfoTypeToJSON)),
    };
}
exports.PackageRatesRatePlanListToJSON = PackageRatesRatePlanListToJSON;
