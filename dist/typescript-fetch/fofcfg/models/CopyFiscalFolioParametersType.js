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
exports.CopyFiscalFolioParametersTypeToJSON = exports.CopyFiscalFolioParametersTypeFromJSONTyped = exports.CopyFiscalFolioParametersTypeFromJSON = exports.instanceOfCopyFiscalFolioParametersType = void 0;
const runtime_1 = require("../runtime");
const CopyFiscalFolioParametersInfoType_1 = require("./CopyFiscalFolioParametersInfoType");
/**
 * Check if a given object implements the CopyFiscalFolioParametersType interface.
 */
function instanceOfCopyFiscalFolioParametersType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyFiscalFolioParametersType = instanceOfCopyFiscalFolioParametersType;
function CopyFiscalFolioParametersTypeFromJSON(json) {
    return CopyFiscalFolioParametersTypeFromJSONTyped(json, false);
}
exports.CopyFiscalFolioParametersTypeFromJSON = CopyFiscalFolioParametersTypeFromJSON;
function CopyFiscalFolioParametersTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'copyFiscalFolioParametersInfo': !(0, runtime_1.exists)(json, 'copyFiscalFolioParametersInfo') ? undefined : (json['copyFiscalFolioParametersInfo'].map(CopyFiscalFolioParametersInfoType_1.CopyFiscalFolioParametersInfoTypeFromJSON)),
        'sourceHotelCode': !(0, runtime_1.exists)(json, 'sourceHotelCode') ? undefined : json['sourceHotelCode'],
    };
}
exports.CopyFiscalFolioParametersTypeFromJSONTyped = CopyFiscalFolioParametersTypeFromJSONTyped;
function CopyFiscalFolioParametersTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'copyFiscalFolioParametersInfo': value.copyFiscalFolioParametersInfo === undefined ? undefined : (value.copyFiscalFolioParametersInfo.map(CopyFiscalFolioParametersInfoType_1.CopyFiscalFolioParametersInfoTypeToJSON)),
        'sourceHotelCode': value.sourceHotelCode,
    };
}
exports.CopyFiscalFolioParametersTypeToJSON = CopyFiscalFolioParametersTypeToJSON;
