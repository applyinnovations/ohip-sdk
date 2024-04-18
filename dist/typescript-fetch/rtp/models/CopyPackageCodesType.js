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
exports.CopyPackageCodesTypeToJSON = exports.CopyPackageCodesTypeFromJSONTyped = exports.CopyPackageCodesTypeFromJSON = exports.instanceOfCopyPackageCodesType = void 0;
const runtime_1 = require("../runtime");
const CopyPackageCodeInfoType_1 = require("./CopyPackageCodeInfoType");
/**
 * Check if a given object implements the CopyPackageCodesType interface.
 */
function instanceOfCopyPackageCodesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyPackageCodesType = instanceOfCopyPackageCodesType;
function CopyPackageCodesTypeFromJSON(json) {
    return CopyPackageCodesTypeFromJSONTyped(json, false);
}
exports.CopyPackageCodesTypeFromJSON = CopyPackageCodesTypeFromJSON;
function CopyPackageCodesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'copyPackageCodeInfo': !(0, runtime_1.exists)(json, 'copyPackageCodeInfo') ? undefined : (json['copyPackageCodeInfo'].map(CopyPackageCodeInfoType_1.CopyPackageCodeInfoTypeFromJSON)),
        'copyPackagePricing': !(0, runtime_1.exists)(json, 'copyPackagePricing') ? undefined : json['copyPackagePricing'],
        'sourceHotelCode': !(0, runtime_1.exists)(json, 'sourceHotelCode') ? undefined : json['sourceHotelCode'],
    };
}
exports.CopyPackageCodesTypeFromJSONTyped = CopyPackageCodesTypeFromJSONTyped;
function CopyPackageCodesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'copyPackageCodeInfo': value.copyPackageCodeInfo === undefined ? undefined : (value.copyPackageCodeInfo.map(CopyPackageCodeInfoType_1.CopyPackageCodeInfoTypeToJSON)),
        'copyPackagePricing': value.copyPackagePricing,
        'sourceHotelCode': value.sourceHotelCode,
    };
}
exports.CopyPackageCodesTypeToJSON = CopyPackageCodesTypeToJSON;