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
exports.ChangeChargeCriteriaTypeToJSON = exports.ChangeChargeCriteriaTypeFromJSONTyped = exports.ChangeChargeCriteriaTypeFromJSON = exports.instanceOfChangeChargeCriteriaType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the ChangeChargeCriteriaType interface.
 */
function instanceOfChangeChargeCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeChargeCriteriaType = instanceOfChangeChargeCriteriaType;
function ChangeChargeCriteriaTypeFromJSON(json) {
    return ChangeChargeCriteriaTypeFromJSONTyped(json, false);
}
exports.ChangeChargeCriteriaTypeFromJSON = ChangeChargeCriteriaTypeFromJSON;
function ChangeChargeCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'approvalCode': !(0, runtime_1.exists)(json, 'approvalCode') ? undefined : json['approvalCode'],
        'approvalDate': !(0, runtime_1.exists)(json, 'approvalDate') ? undefined : json['approvalDate'],
        'approvalStatus': !(0, runtime_1.exists)(json, 'approvalStatus') ? undefined : json['approvalStatus'],
        'arrangementCode': !(0, runtime_1.exists)(json, 'arrangementCode') ? undefined : json['arrangementCode'],
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'checkNumber': !(0, runtime_1.exists)(json, 'checkNumber') ? undefined : json['checkNumber'],
        'covers': !(0, runtime_1.exists)(json, 'covers') ? undefined : json['covers'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['price']),
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'reference': !(0, runtime_1.exists)(json, 'reference') ? undefined : json['reference'],
        'remark': !(0, runtime_1.exists)(json, 'remark') ? undefined : json['remark'],
        'revenueDate': !(0, runtime_1.exists)(json, 'revenueDate') ? undefined : json['revenueDate'],
        'transactionNo': !(0, runtime_1.exists)(json, 'transactionNo') ? undefined : json['transactionNo'],
    };
}
exports.ChangeChargeCriteriaTypeFromJSONTyped = ChangeChargeCriteriaTypeFromJSONTyped;
function ChangeChargeCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'approvalCode': value.approvalCode,
        'approvalDate': value.approvalDate,
        'approvalStatus': value.approvalStatus,
        'arrangementCode': value.arrangementCode,
        'cashierId': value.cashierId,
        'checkNumber': value.checkNumber,
        'covers': value.covers,
        'hotelId': value.hotelId,
        'message': value.message,
        'price': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.price),
        'quantity': value.quantity,
        'reference': value.reference,
        'remark': value.remark,
        'revenueDate': value.revenueDate,
        'transactionNo': value.transactionNo,
    };
}
exports.ChangeChargeCriteriaTypeToJSON = ChangeChargeCriteriaTypeToJSON;
