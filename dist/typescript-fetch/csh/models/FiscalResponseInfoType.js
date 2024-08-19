"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiscalResponseInfoTypeToJSON = exports.FiscalResponseInfoTypeFromJSONTyped = exports.FiscalResponseInfoTypeFromJSON = exports.instanceOfFiscalResponseInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the FiscalResponseInfoType interface.
 */
function instanceOfFiscalResponseInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFiscalResponseInfoType = instanceOfFiscalResponseInfoType;
function FiscalResponseInfoTypeFromJSON(json) {
    return FiscalResponseInfoTypeFromJSONTyped(json, false);
}
exports.FiscalResponseInfoTypeFromJSON = FiscalResponseInfoTypeFromJSON;
function FiscalResponseInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fiscalResponseId': !(0, runtime_1.exists)(json, 'fiscalResponseId') ? undefined : json['fiscalResponseId'],
        'invoiceNo': !(0, runtime_1.exists)(json, 'invoiceNo') ? undefined : json['invoiceNo'],
    };
}
exports.FiscalResponseInfoTypeFromJSONTyped = FiscalResponseInfoTypeFromJSONTyped;
function FiscalResponseInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fiscalResponseId': value.fiscalResponseId,
        'invoiceNo': value.invoiceNo,
    };
}
exports.FiscalResponseInfoTypeToJSON = FiscalResponseInfoTypeToJSON;
