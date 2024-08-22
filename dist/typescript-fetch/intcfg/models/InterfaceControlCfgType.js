"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceControlCfgTypeToJSON = exports.InterfaceControlCfgTypeFromJSONTyped = exports.InterfaceControlCfgTypeFromJSON = exports.instanceOfInterfaceControlCfgType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the InterfaceControlCfgType interface.
 */
function instanceOfInterfaceControlCfgType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfInterfaceControlCfgType = instanceOfInterfaceControlCfgType;
function InterfaceControlCfgTypeFromJSON(json) {
    return InterfaceControlCfgTypeFromJSONTyped(json, false);
}
exports.InterfaceControlCfgTypeFromJSON = InterfaceControlCfgTypeFromJSON;
function InterfaceControlCfgTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'logo': !(0, runtime_1.exists)(json, 'logo') ? undefined : json['logo'],
        'internalCode': !(0, runtime_1.exists)(json, 'internalCode') ? undefined : json['internalCode'],
        'originCode': !(0, runtime_1.exists)(json, 'originCode') ? undefined : json['originCode'],
        'merchantId': !(0, runtime_1.exists)(json, 'merchantId') ? undefined : json['merchantId'],
    };
}
exports.InterfaceControlCfgTypeFromJSONTyped = InterfaceControlCfgTypeFromJSONTyped;
function InterfaceControlCfgTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'logo': value.logo,
        'internalCode': value.internalCode,
        'originCode': value.originCode,
        'merchantId': value.merchantId,
    };
}
exports.InterfaceControlCfgTypeToJSON = InterfaceControlCfgTypeToJSON;
