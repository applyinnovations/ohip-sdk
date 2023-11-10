"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceExportDataDetailTypeToJSON = exports.InterfaceExportDataDetailTypeFromJSONTyped = exports.InterfaceExportDataDetailTypeFromJSON = exports.instanceOfInterfaceExportDataDetailType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the InterfaceExportDataDetailType interface.
 */
function instanceOfInterfaceExportDataDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfInterfaceExportDataDetailType = instanceOfInterfaceExportDataDetailType;
function InterfaceExportDataDetailTypeFromJSON(json) {
    return InterfaceExportDataDetailTypeFromJSONTyped(json, false);
}
exports.InterfaceExportDataDetailTypeFromJSON = InterfaceExportDataDetailTypeFromJSON;
function InterfaceExportDataDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'columnName': !(0, runtime_1.exists)(json, 'columnName') ? undefined : json['columnName'],
        'columnSelected': !(0, runtime_1.exists)(json, 'columnSelected') ? undefined : json['columnSelected'],
        'dataLength': !(0, runtime_1.exists)(json, 'dataLength') ? undefined : json['dataLength'],
        'dataType': !(0, runtime_1.exists)(json, 'dataType') ? undefined : json['dataType'],
        'sourceTableName': !(0, runtime_1.exists)(json, 'sourceTableName') ? undefined : json['sourceTableName'],
        'xMLTagName': !(0, runtime_1.exists)(json, 'xMLTagName') ? undefined : json['xMLTagName'],
    };
}
exports.InterfaceExportDataDetailTypeFromJSONTyped = InterfaceExportDataDetailTypeFromJSONTyped;
function InterfaceExportDataDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'columnName': value.columnName,
        'columnSelected': value.columnSelected,
        'dataLength': value.dataLength,
        'dataType': value.dataType,
        'sourceTableName': value.sourceTableName,
        'xMLTagName': value.xMLTagName,
    };
}
exports.InterfaceExportDataDetailTypeToJSON = InterfaceExportDataDetailTypeToJSON;
