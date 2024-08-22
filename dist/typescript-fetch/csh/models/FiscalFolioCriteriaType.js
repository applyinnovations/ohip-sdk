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
exports.FiscalFolioCriteriaTypeToJSON = exports.FiscalFolioCriteriaTypeFromJSONTyped = exports.FiscalFolioCriteriaTypeFromJSON = exports.instanceOfFiscalFolioCriteriaType = void 0;
const runtime_1 = require("../runtime");
const FiscalInvoiceSummaryType_1 = require("./FiscalInvoiceSummaryType");
const FolioCommandType_1 = require("./FolioCommandType");
/**
 * Check if a given object implements the FiscalFolioCriteriaType interface.
 */
function instanceOfFiscalFolioCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFiscalFolioCriteriaType = instanceOfFiscalFolioCriteriaType;
function FiscalFolioCriteriaTypeFromJSON(json) {
    return FiscalFolioCriteriaTypeFromJSONTyped(json, false);
}
exports.FiscalFolioCriteriaTypeFromJSON = FiscalFolioCriteriaTypeFromJSON;
function FiscalFolioCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'effectiveDate': !(0, runtime_1.exists)(json, 'effectiveDate') ? undefined : json['effectiveDate'],
        'folioCommand': !(0, runtime_1.exists)(json, 'folioCommand') ? undefined : (0, FolioCommandType_1.FolioCommandTypeFromJSON)(json['folioCommand']),
        'folios': !(0, runtime_1.exists)(json, 'folios') ? undefined : (0, FiscalInvoiceSummaryType_1.FiscalInvoiceSummaryTypeFromJSON)(json['folios']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.FiscalFolioCriteriaTypeFromJSONTyped = FiscalFolioCriteriaTypeFromJSONTyped;
function FiscalFolioCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'effectiveDate': value.effectiveDate,
        'folioCommand': (0, FolioCommandType_1.FolioCommandTypeToJSON)(value.folioCommand),
        'folios': (0, FiscalInvoiceSummaryType_1.FiscalInvoiceSummaryTypeToJSON)(value.folios),
        'hotelId': value.hotelId,
    };
}
exports.FiscalFolioCriteriaTypeToJSON = FiscalFolioCriteriaTypeToJSON;
