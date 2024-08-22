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
exports.PackageCodeShortInfoTypeToJSON = exports.PackageCodeShortInfoTypeFromJSONTyped = exports.PackageCodeShortInfoTypeFromJSON = exports.instanceOfPackageCodeShortInfoType = void 0;
const runtime_1 = require("../runtime");
const ConfigPackagePrimaryDetailsType_1 = require("./ConfigPackagePrimaryDetailsType");
const ConfigPackageTransactionType_1 = require("./ConfigPackageTransactionType");
const ConfigPostingAttributesType_1 = require("./ConfigPostingAttributesType");
/**
 * Check if a given object implements the PackageCodeShortInfoType interface.
 */
function instanceOfPackageCodeShortInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPackageCodeShortInfoType = instanceOfPackageCodeShortInfoType;
function PackageCodeShortInfoTypeFromJSON(json) {
    return PackageCodeShortInfoTypeFromJSONTyped(json, false);
}
exports.PackageCodeShortInfoTypeFromJSON = PackageCodeShortInfoTypeFromJSON;
function PackageCodeShortInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'group': !(0, runtime_1.exists)(json, 'group') ? undefined : json['group'],
        'postingAttributes': !(0, runtime_1.exists)(json, 'postingAttributes') ? undefined : (0, ConfigPostingAttributesType_1.ConfigPostingAttributesTypeFromJSON)(json['postingAttributes']),
        'primaryDetails': !(0, runtime_1.exists)(json, 'primaryDetails') ? undefined : (0, ConfigPackagePrimaryDetailsType_1.ConfigPackagePrimaryDetailsTypeFromJSON)(json['primaryDetails']),
        'redemptionProductYn': !(0, runtime_1.exists)(json, 'redemptionProductYn') ? undefined : json['redemptionProductYn'],
        'transactionDetails': !(0, runtime_1.exists)(json, 'transactionDetails') ? undefined : (0, ConfigPackageTransactionType_1.ConfigPackageTransactionTypeFromJSON)(json['transactionDetails']),
        'usedInAppSetting': !(0, runtime_1.exists)(json, 'usedInAppSetting') ? undefined : json['usedInAppSetting'],
    };
}
exports.PackageCodeShortInfoTypeFromJSONTyped = PackageCodeShortInfoTypeFromJSONTyped;
function PackageCodeShortInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'group': value.group,
        'postingAttributes': (0, ConfigPostingAttributesType_1.ConfigPostingAttributesTypeToJSON)(value.postingAttributes),
        'primaryDetails': (0, ConfigPackagePrimaryDetailsType_1.ConfigPackagePrimaryDetailsTypeToJSON)(value.primaryDetails),
        'redemptionProductYn': value.redemptionProductYn,
        'transactionDetails': (0, ConfigPackageTransactionType_1.ConfigPackageTransactionTypeToJSON)(value.transactionDetails),
        'usedInAppSetting': value.usedInAppSetting,
    };
}
exports.PackageCodeShortInfoTypeToJSON = PackageCodeShortInfoTypeToJSON;
