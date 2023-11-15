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
exports.SupplementalFolioCriteriaTypeToJSON = exports.SupplementalFolioCriteriaTypeFromJSONTyped = exports.SupplementalFolioCriteriaTypeFromJSON = exports.instanceOfSupplementalFolioCriteriaType = void 0;
const runtime_1 = require("../runtime");
const ChargeCriteriaType_1 = require("./ChargeCriteriaType");
const FiscalServiceType_1 = require("./FiscalServiceType");
const FolioType_1 = require("./FolioType");
const NameValueHeaderDetailType_1 = require("./NameValueHeaderDetailType");
const PaymentCriteriaType_1 = require("./PaymentCriteriaType");
/**
 * Check if a given object implements the SupplementalFolioCriteriaType interface.
 */
function instanceOfSupplementalFolioCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSupplementalFolioCriteriaType = instanceOfSupplementalFolioCriteriaType;
function SupplementalFolioCriteriaTypeFromJSON(json) {
    return SupplementalFolioCriteriaTypeFromJSONTyped(json, false);
}
exports.SupplementalFolioCriteriaTypeFromJSON = SupplementalFolioCriteriaTypeFromJSON;
function SupplementalFolioCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'charges': !(0, runtime_1.exists)(json, 'charges') ? undefined : (json['charges'].map(ChargeCriteriaType_1.ChargeCriteriaTypeFromJSON)),
        'fiscalFolioInfo': !(0, runtime_1.exists)(json, 'fiscalFolioInfo') ? undefined : (0, FiscalServiceType_1.FiscalServiceTypeFromJSON)(json['fiscalFolioInfo']),
        'fiscalTerminalId': !(0, runtime_1.exists)(json, 'fiscalTerminalId') ? undefined : json['fiscalTerminalId'],
        'folioNameValue': !(0, runtime_1.exists)(json, 'folioNameValue') ? undefined : (json['folioNameValue'].map(NameValueHeaderDetailType_1.NameValueHeaderDetailTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'incomeAuditDate': !(0, runtime_1.exists)(json, 'incomeAuditDate') ? undefined : json['incomeAuditDate'],
        'originalFolio': !(0, runtime_1.exists)(json, 'originalFolio') ? undefined : (0, FolioType_1.FolioTypeFromJSON)(json['originalFolio']),
        'payments': !(0, runtime_1.exists)(json, 'payments') ? undefined : (json['payments'].map(PaymentCriteriaType_1.PaymentCriteriaTypeFromJSON)),
        'trxServiceType': !(0, runtime_1.exists)(json, 'trxServiceType') ? undefined : json['trxServiceType'],
    };
}
exports.SupplementalFolioCriteriaTypeFromJSONTyped = SupplementalFolioCriteriaTypeFromJSONTyped;
function SupplementalFolioCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierId': value.cashierId,
        'charges': value.charges === undefined ? undefined : (value.charges.map(ChargeCriteriaType_1.ChargeCriteriaTypeToJSON)),
        'fiscalFolioInfo': (0, FiscalServiceType_1.FiscalServiceTypeToJSON)(value.fiscalFolioInfo),
        'fiscalTerminalId': value.fiscalTerminalId,
        'folioNameValue': value.folioNameValue === undefined ? undefined : (value.folioNameValue.map(NameValueHeaderDetailType_1.NameValueHeaderDetailTypeToJSON)),
        'hotelId': value.hotelId,
        'incomeAuditDate': value.incomeAuditDate,
        'originalFolio': (0, FolioType_1.FolioTypeToJSON)(value.originalFolio),
        'payments': value.payments === undefined ? undefined : (value.payments.map(PaymentCriteriaType_1.PaymentCriteriaTypeToJSON)),
        'trxServiceType': value.trxServiceType,
    };
}
exports.SupplementalFolioCriteriaTypeToJSON = SupplementalFolioCriteriaTypeToJSON;
