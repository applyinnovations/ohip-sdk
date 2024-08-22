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
exports.FolioTypeToJSON = exports.FolioTypeFromJSONTyped = exports.FolioTypeFromJSON = exports.instanceOfFolioType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const FolioStatusType_1 = require("./FolioStatusType");
const PayeeInfoType_1 = require("./PayeeInfoType");
const SummaryPostingType_1 = require("./SummaryPostingType");
/**
 * Check if a given object implements the FolioType interface.
 */
function instanceOfFolioType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFolioType = instanceOfFolioType;
function FolioTypeFromJSON(json) {
    return FolioTypeFromJSONTyped(json, false);
}
exports.FolioTypeFromJSON = FolioTypeFromJSON;
function FolioTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowConvertFolioYn': !(0, runtime_1.exists)(json, 'allowConvertFolioYn') ? undefined : json['allowConvertFolioYn'],
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : json['end'],
        'fiscalBillNo': !(0, runtime_1.exists)(json, 'fiscalBillNo') ? undefined : json['fiscalBillNo'],
        'folioAmount': !(0, runtime_1.exists)(json, 'folioAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['folioAmount']),
        'folioDate': !(0, runtime_1.exists)(json, 'folioDate') ? undefined : json['folioDate'],
        'folioNo': !(0, runtime_1.exists)(json, 'folioNo') ? undefined : json['folioNo'],
        'folioNoWithPrefix': !(0, runtime_1.exists)(json, 'folioNoWithPrefix') ? undefined : json['folioNoWithPrefix'],
        'folioSeqNo': !(0, runtime_1.exists)(json, 'folioSeqNo') ? undefined : json['folioSeqNo'],
        'folioStatus': !(0, runtime_1.exists)(json, 'folioStatus') ? undefined : (0, FolioStatusType_1.FolioStatusTypeFromJSON)(json['folioStatus']),
        'folioTypeName': !(0, runtime_1.exists)(json, 'folioTypeName') ? undefined : json['folioTypeName'],
        'internalFolioWindowID': !(0, runtime_1.exists)(json, 'internalFolioWindowID') ? undefined : json['internalFolioWindowID'],
        'invoiceNo': !(0, runtime_1.exists)(json, 'invoiceNo') ? undefined : json['invoiceNo'],
        'payeeInfo': !(0, runtime_1.exists)(json, 'payeeInfo') ? undefined : (0, PayeeInfoType_1.PayeeInfoTypeFromJSON)(json['payeeInfo']),
        'postings': !(0, runtime_1.exists)(json, 'postings') ? undefined : (json['postings'].map(SummaryPostingType_1.SummaryPostingTypeFromJSON)),
        'revisionNo': !(0, runtime_1.exists)(json, 'revisionNo') ? undefined : json['revisionNo'],
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : json['start'],
    };
}
exports.FolioTypeFromJSONTyped = FolioTypeFromJSONTyped;
function FolioTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowConvertFolioYn': value.allowConvertFolioYn,
        'end': value.end,
        'fiscalBillNo': value.fiscalBillNo,
        'folioAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.folioAmount),
        'folioDate': value.folioDate,
        'folioNo': value.folioNo,
        'folioNoWithPrefix': value.folioNoWithPrefix,
        'folioSeqNo': value.folioSeqNo,
        'folioStatus': (0, FolioStatusType_1.FolioStatusTypeToJSON)(value.folioStatus),
        'folioTypeName': value.folioTypeName,
        'internalFolioWindowID': value.internalFolioWindowID,
        'invoiceNo': value.invoiceNo,
        'payeeInfo': (0, PayeeInfoType_1.PayeeInfoTypeToJSON)(value.payeeInfo),
        'postings': value.postings === undefined ? undefined : (value.postings.map(SummaryPostingType_1.SummaryPostingTypeToJSON)),
        'revisionNo': value.revisionNo,
        'start': value.start,
    };
}
exports.FolioTypeToJSON = FolioTypeToJSON;
