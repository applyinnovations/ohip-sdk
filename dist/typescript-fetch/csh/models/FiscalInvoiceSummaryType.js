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
exports.FiscalInvoiceSummaryTypeToJSON = exports.FiscalInvoiceSummaryTypeFromJSONTyped = exports.FiscalInvoiceSummaryTypeFromJSON = exports.instanceOfFiscalInvoiceSummaryType = void 0;
const runtime_1 = require("../runtime");
const FolioStatusType_1 = require("./FolioStatusType");
/**
 * Check if a given object implements the FiscalInvoiceSummaryType interface.
 */
function instanceOfFiscalInvoiceSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFiscalInvoiceSummaryType = instanceOfFiscalInvoiceSummaryType;
function FiscalInvoiceSummaryTypeFromJSON(json) {
    return FiscalInvoiceSummaryTypeFromJSONTyped(json, false);
}
exports.FiscalInvoiceSummaryTypeFromJSON = FiscalInvoiceSummaryTypeFromJSON;
function FiscalInvoiceSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fiscalBillNo': !(0, runtime_1.exists)(json, 'fiscalBillNo') ? undefined : json['fiscalBillNo'],
        'fiscalTerminalId': !(0, runtime_1.exists)(json, 'fiscalTerminalId') ? undefined : json['fiscalTerminalId'],
        'folioDate': !(0, runtime_1.exists)(json, 'folioDate') ? undefined : json['folioDate'],
        'folioNo': !(0, runtime_1.exists)(json, 'folioNo') ? undefined : json['folioNo'],
        'folioNoWithPrefix': !(0, runtime_1.exists)(json, 'folioNoWithPrefix') ? undefined : json['folioNoWithPrefix'],
        'folioSeqNo': !(0, runtime_1.exists)(json, 'folioSeqNo') ? undefined : json['folioSeqNo'],
        'folioStatus': !(0, runtime_1.exists)(json, 'folioStatus') ? undefined : (0, FolioStatusType_1.FolioStatusTypeFromJSON)(json['folioStatus']),
        'folioTypeName': !(0, runtime_1.exists)(json, 'folioTypeName') ? undefined : json['folioTypeName'],
        'generateFiscalFolio': !(0, runtime_1.exists)(json, 'generateFiscalFolio') ? undefined : json['generateFiscalFolio'],
        'internalFolioWindowID': !(0, runtime_1.exists)(json, 'internalFolioWindowID') ? undefined : json['internalFolioWindowID'],
        'invoiceNo': !(0, runtime_1.exists)(json, 'invoiceNo') ? undefined : json['invoiceNo'],
        'queueName': !(0, runtime_1.exists)(json, 'queueName') ? undefined : json['queueName'],
        'transactionType': !(0, runtime_1.exists)(json, 'transactionType') ? undefined : json['transactionType'],
    };
}
exports.FiscalInvoiceSummaryTypeFromJSONTyped = FiscalInvoiceSummaryTypeFromJSONTyped;
function FiscalInvoiceSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fiscalBillNo': value.fiscalBillNo,
        'fiscalTerminalId': value.fiscalTerminalId,
        'folioDate': value.folioDate,
        'folioNo': value.folioNo,
        'folioNoWithPrefix': value.folioNoWithPrefix,
        'folioSeqNo': value.folioSeqNo,
        'folioStatus': (0, FolioStatusType_1.FolioStatusTypeToJSON)(value.folioStatus),
        'folioTypeName': value.folioTypeName,
        'generateFiscalFolio': value.generateFiscalFolio,
        'internalFolioWindowID': value.internalFolioWindowID,
        'invoiceNo': value.invoiceNo,
        'queueName': value.queueName,
        'transactionType': value.transactionType,
    };
}
exports.FiscalInvoiceSummaryTypeToJSON = FiscalInvoiceSummaryTypeToJSON;
