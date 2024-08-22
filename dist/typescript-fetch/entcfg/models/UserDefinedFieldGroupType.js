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
exports.UserDefinedFieldGroupTypeToJSON = exports.UserDefinedFieldGroupTypeFromJSONTyped = exports.UserDefinedFieldGroupTypeFromJSON = exports.instanceOfUserDefinedFieldGroupType = void 0;
const runtime_1 = require("../runtime");
const UserDefinedFieldGroupDataType_1 = require("./UserDefinedFieldGroupDataType");
/**
 * Check if a given object implements the UserDefinedFieldGroupType interface.
 */
function instanceOfUserDefinedFieldGroupType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUserDefinedFieldGroupType = instanceOfUserDefinedFieldGroupType;
function UserDefinedFieldGroupTypeFromJSON(json) {
    return UserDefinedFieldGroupTypeFromJSONTyped(json, false);
}
exports.UserDefinedFieldGroupTypeFromJSON = UserDefinedFieldGroupTypeFromJSON;
function UserDefinedFieldGroupTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'groupCode': !(0, runtime_1.exists)(json, 'groupCode') ? undefined : json['groupCode'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'dataType': !(0, runtime_1.exists)(json, 'dataType') ? undefined : (0, UserDefinedFieldGroupDataType_1.UserDefinedFieldGroupDataTypeFromJSON)(json['dataType']),
        'dataLength': !(0, runtime_1.exists)(json, 'dataLength') ? undefined : json['dataLength'],
        '_protected': !(0, runtime_1.exists)(json, 'protected') ? undefined : json['protected'],
    };
}
exports.UserDefinedFieldGroupTypeFromJSONTyped = UserDefinedFieldGroupTypeFromJSONTyped;
function UserDefinedFieldGroupTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'groupCode': value.groupCode,
        'description': value.description,
        'dataType': (0, UserDefinedFieldGroupDataType_1.UserDefinedFieldGroupDataTypeToJSON)(value.dataType),
        'dataLength': value.dataLength,
        'protected': value._protected,
    };
}
exports.UserDefinedFieldGroupTypeToJSON = UserDefinedFieldGroupTypeToJSON;
