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
exports.HotelPackageSchedulePriceTypeToJSON = exports.HotelPackageSchedulePriceTypeFromJSONTyped = exports.HotelPackageSchedulePriceTypeFromJSON = exports.instanceOfHotelPackageSchedulePriceType = void 0;
const runtime_1 = require("../runtime");
const PackageChildBuckets_1 = require("./PackageChildBuckets");
/**
 * Check if a given object implements the HotelPackageSchedulePriceType interface.
 */
function instanceOfHotelPackageSchedulePriceType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelPackageSchedulePriceType = instanceOfHotelPackageSchedulePriceType;
function HotelPackageSchedulePriceTypeFromJSON(json) {
    return HotelPackageSchedulePriceTypeFromJSONTyped(json, false);
}
exports.HotelPackageSchedulePriceTypeFromJSON = HotelPackageSchedulePriceTypeFromJSON;
function HotelPackageSchedulePriceTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bucket': !(0, runtime_1.exists)(json, 'bucket') ? undefined : (0, PackageChildBuckets_1.PackageChildBucketsFromJSON)(json['bucket']),
        'unitAllowance': !(0, runtime_1.exists)(json, 'unitAllowance') ? undefined : json['unitAllowance'],
        'unitPoints': !(0, runtime_1.exists)(json, 'unitPoints') ? undefined : json['unitPoints'],
        'unitPrice': !(0, runtime_1.exists)(json, 'unitPrice') ? undefined : json['unitPrice'],
    };
}
exports.HotelPackageSchedulePriceTypeFromJSONTyped = HotelPackageSchedulePriceTypeFromJSONTyped;
function HotelPackageSchedulePriceTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bucket': (0, PackageChildBuckets_1.PackageChildBucketsToJSON)(value.bucket),
        'unitAllowance': value.unitAllowance,
        'unitPoints': value.unitPoints,
        'unitPrice': value.unitPrice,
    };
}
exports.HotelPackageSchedulePriceTypeToJSON = HotelPackageSchedulePriceTypeToJSON;
