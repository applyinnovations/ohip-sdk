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
exports.HotelPackageTypeToJSON = exports.HotelPackageTypeFromJSONTyped = exports.HotelPackageTypeFromJSON = exports.instanceOfHotelPackageType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HotelPackageType interface.
 */
function instanceOfHotelPackageType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelPackageType = instanceOfHotelPackageType;
function HotelPackageTypeFromJSON(json) {
    return HotelPackageTypeFromJSONTyped(json, false);
}
exports.HotelPackageTypeFromJSON = HotelPackageTypeFromJSON;
function HotelPackageTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'beginDate': !(0, runtime_1.exists)(json, 'beginDate') ? undefined : (new Date(json['beginDate'])),
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'packageCode': !(0, runtime_1.exists)(json, 'packageCode') ? undefined : json['packageCode'],
        'packageName': !(0, runtime_1.exists)(json, 'packageName') ? undefined : json['packageName'],
        'packagePrice': !(0, runtime_1.exists)(json, 'packagePrice') ? undefined : json['packagePrice'],
        'pointsRequired': !(0, runtime_1.exists)(json, 'pointsRequired') ? undefined : json['pointsRequired'],
        'rateCode': !(0, runtime_1.exists)(json, 'rateCode') ? undefined : json['rateCode'],
    };
}
exports.HotelPackageTypeFromJSONTyped = HotelPackageTypeFromJSONTyped;
function HotelPackageTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'beginDate': value.beginDate === undefined ? undefined : (value.beginDate.toISOString().substring(0, 10)),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substring(0, 10)),
        'packageCode': value.packageCode,
        'packageName': value.packageName,
        'packagePrice': value.packagePrice,
        'pointsRequired': value.pointsRequired,
        'rateCode': value.rateCode,
    };
}
exports.HotelPackageTypeToJSON = HotelPackageTypeToJSON;