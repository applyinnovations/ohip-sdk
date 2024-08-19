"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextBlockStatusCodeTypeToJSON = exports.NextBlockStatusCodeTypeFromJSONTyped = exports.NextBlockStatusCodeTypeFromJSON = exports.instanceOfNextBlockStatusCodeType = void 0;
const runtime_1 = require("../runtime");
const NextBlockStatusCodeInfoType_1 = require("./NextBlockStatusCodeInfoType");
/**
 * Check if a given object implements the NextBlockStatusCodeType interface.
 */
function instanceOfNextBlockStatusCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNextBlockStatusCodeType = instanceOfNextBlockStatusCodeType;
function NextBlockStatusCodeTypeFromJSON(json) {
    return NextBlockStatusCodeTypeFromJSONTyped(json, false);
}
exports.NextBlockStatusCodeTypeFromJSON = NextBlockStatusCodeTypeFromJSON;
function NextBlockStatusCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nextAvailableStatusList': !(0, runtime_1.exists)(json, 'nextAvailableStatusList') ? undefined : (json['nextAvailableStatusList'].map(NextBlockStatusCodeInfoType_1.NextBlockStatusCodeInfoTypeFromJSON)),
        'nextConfiguredStatusList': !(0, runtime_1.exists)(json, 'nextConfiguredStatusList') ? undefined : (json['nextConfiguredStatusList'].map(NextBlockStatusCodeInfoType_1.NextBlockStatusCodeInfoTypeFromJSON)),
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
    };
}
exports.NextBlockStatusCodeTypeFromJSONTyped = NextBlockStatusCodeTypeFromJSONTyped;
function NextBlockStatusCodeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nextAvailableStatusList': value.nextAvailableStatusList === undefined ? undefined : (value.nextAvailableStatusList.map(NextBlockStatusCodeInfoType_1.NextBlockStatusCodeInfoTypeToJSON)),
        'nextConfiguredStatusList': value.nextConfiguredStatusList === undefined ? undefined : (value.nextConfiguredStatusList.map(NextBlockStatusCodeInfoType_1.NextBlockStatusCodeInfoTypeToJSON)),
        'status': value.status,
    };
}
exports.NextBlockStatusCodeTypeToJSON = NextBlockStatusCodeTypeToJSON;
