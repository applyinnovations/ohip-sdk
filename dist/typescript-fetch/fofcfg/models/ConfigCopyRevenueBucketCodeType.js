"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigCopyRevenueBucketCodeTypeToJSON = exports.ConfigCopyRevenueBucketCodeTypeFromJSONTyped = exports.ConfigCopyRevenueBucketCodeTypeFromJSON = exports.instanceOfConfigCopyRevenueBucketCodeType = void 0;
const runtime_1 = require("../runtime");
const CopyConfigurationCodeType_1 = require("./CopyConfigurationCodeType");
/**
 * Check if a given object implements the ConfigCopyRevenueBucketCodeType interface.
 */
function instanceOfConfigCopyRevenueBucketCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfConfigCopyRevenueBucketCodeType = instanceOfConfigCopyRevenueBucketCodeType;
function ConfigCopyRevenueBucketCodeTypeFromJSON(json) {
    return ConfigCopyRevenueBucketCodeTypeFromJSONTyped(json, false);
}
exports.ConfigCopyRevenueBucketCodeTypeFromJSON = ConfigCopyRevenueBucketCodeTypeFromJSON;
function ConfigCopyRevenueBucketCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'copyCodes': !(0, runtime_1.exists)(json, 'copyCodes') ? undefined : (json['copyCodes'].map(CopyConfigurationCodeType_1.CopyConfigurationCodeTypeFromJSON)),
        'revenueBucketType': !(0, runtime_1.exists)(json, 'revenueBucketType') ? undefined : json['revenueBucketType'],
    };
}
exports.ConfigCopyRevenueBucketCodeTypeFromJSONTyped = ConfigCopyRevenueBucketCodeTypeFromJSONTyped;
function ConfigCopyRevenueBucketCodeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'copyCodes': value.copyCodes === undefined ? undefined : (value.copyCodes.map(CopyConfigurationCodeType_1.CopyConfigurationCodeTypeToJSON)),
        'revenueBucketType': value.revenueBucketType,
    };
}
exports.ConfigCopyRevenueBucketCodeTypeToJSON = ConfigCopyRevenueBucketCodeTypeToJSON;
