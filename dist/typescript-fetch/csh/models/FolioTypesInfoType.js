"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolioTypesInfoTypeToJSON = exports.FolioTypesInfoTypeFromJSONTyped = exports.FolioTypesInfoTypeFromJSON = exports.instanceOfFolioTypesInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the FolioTypesInfoType interface.
 */
function instanceOfFolioTypesInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFolioTypesInfoType = instanceOfFolioTypesInfoType;
function FolioTypesInfoTypeFromJSON(json) {
    return FolioTypesInfoTypeFromJSONTyped(json, false);
}
exports.FolioTypesInfoTypeFromJSON = FolioTypesInfoTypeFromJSON;
function FolioTypesInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'compress': !(0, runtime_1.exists)(json, 'compress') ? undefined : json['compress'],
        'credit': !(0, runtime_1.exists)(json, 'credit') ? undefined : json['credit'],
        'fiscal': !(0, runtime_1.exists)(json, 'fiscal') ? undefined : json['fiscal'],
        'folioType': !(0, runtime_1.exists)(json, 'folioType') ? undefined : json['folioType'],
        'sendFiscalFolio': !(0, runtime_1.exists)(json, 'sendFiscalFolio') ? undefined : json['sendFiscalFolio'],
    };
}
exports.FolioTypesInfoTypeFromJSONTyped = FolioTypesInfoTypeFromJSONTyped;
function FolioTypesInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'compress': value.compress,
        'credit': value.credit,
        'fiscal': value.fiscal,
        'folioType': value.folioType,
        'sendFiscalFolio': value.sendFiscalFolio,
    };
}
exports.FolioTypesInfoTypeToJSON = FolioTypesInfoTypeToJSON;
