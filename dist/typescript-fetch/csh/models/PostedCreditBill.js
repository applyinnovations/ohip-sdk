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
exports.PostedCreditBillToJSON = exports.PostedCreditBillFromJSONTyped = exports.PostedCreditBillFromJSON = exports.instanceOfPostedCreditBill = void 0;
const runtime_1 = require("../runtime");
const DetailPostingType_1 = require("./DetailPostingType");
const FolioWindowType_1 = require("./FolioWindowType");
const InstanceLink_1 = require("./InstanceLink");
const TrxInfoType_1 = require("./TrxInfoType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the PostedCreditBill interface.
 */
function instanceOfPostedCreditBill(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostedCreditBill = instanceOfPostedCreditBill;
function PostedCreditBillFromJSON(json) {
    return PostedCreditBillFromJSONTyped(json, false);
}
exports.PostedCreditBillFromJSON = PostedCreditBillFromJSON;
function PostedCreditBillFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'folioWindow': !(0, runtime_1.exists)(json, 'folioWindow') ? undefined : (json['folioWindow'].map(FolioWindowType_1.FolioWindowTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'payments': !(0, runtime_1.exists)(json, 'payments') ? undefined : (json['payments'].map(DetailPostingType_1.DetailPostingTypeFromJSON)),
        'trxCodesInfo': !(0, runtime_1.exists)(json, 'trxCodesInfo') ? undefined : (json['trxCodesInfo'].map(TrxInfoType_1.TrxInfoTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.PostedCreditBillFromJSONTyped = PostedCreditBillFromJSONTyped;
function PostedCreditBillToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'folioWindow': value.folioWindow === undefined ? undefined : (value.folioWindow.map(FolioWindowType_1.FolioWindowTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'payments': value.payments === undefined ? undefined : (value.payments.map(DetailPostingType_1.DetailPostingTypeToJSON)),
        'trxCodesInfo': value.trxCodesInfo === undefined ? undefined : (value.trxCodesInfo.map(TrxInfoType_1.TrxInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.PostedCreditBillToJSON = PostedCreditBillToJSON;
