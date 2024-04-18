"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelBillingStatementSummaryTypeToJSON = exports.ChannelBillingStatementSummaryTypeFromJSONTyped = exports.ChannelBillingStatementSummaryTypeFromJSON = exports.instanceOfChannelBillingStatementSummaryType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ChannelBillingStatementSummaryType interface.
 */
function instanceOfChannelBillingStatementSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelBillingStatementSummaryType = instanceOfChannelBillingStatementSummaryType;
function ChannelBillingStatementSummaryTypeFromJSON(json) {
    return ChannelBillingStatementSummaryTypeFromJSONTyped(json, false);
}
exports.ChannelBillingStatementSummaryTypeFromJSON = ChannelBillingStatementSummaryTypeFromJSON;
function ChannelBillingStatementSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountCodeList': !(0, runtime_1.exists)(json, 'accountCodeList') ? undefined : json['accountCodeList'],
        'beginDate': !(0, runtime_1.exists)(json, 'beginDate') ? undefined : json['beginDate'],
        'dirty': !(0, runtime_1.exists)(json, 'dirty') ? undefined : json['dirty'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'generated': !(0, runtime_1.exists)(json, 'generated') ? undefined : json['generated'],
        'lockDate': !(0, runtime_1.exists)(json, 'lockDate') ? undefined : json['lockDate'],
        'note': !(0, runtime_1.exists)(json, 'note') ? undefined : json['note'],
        'statementDate': !(0, runtime_1.exists)(json, 'statementDate') ? undefined : json['statementDate'],
        'statementId': !(0, runtime_1.exists)(json, 'statementId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['statementId']),
        'totalAmount': !(0, runtime_1.exists)(json, 'totalAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['totalAmount']),
    };
}
exports.ChannelBillingStatementSummaryTypeFromJSONTyped = ChannelBillingStatementSummaryTypeFromJSONTyped;
function ChannelBillingStatementSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountCodeList': value.accountCodeList,
        'beginDate': value.beginDate,
        'dirty': value.dirty,
        'endDate': value.endDate,
        'generated': value.generated,
        'lockDate': value.lockDate,
        'note': value.note,
        'statementDate': value.statementDate,
        'statementId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.statementId),
        'totalAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.totalAmount),
    };
}
exports.ChannelBillingStatementSummaryTypeToJSON = ChannelBillingStatementSummaryTypeToJSON;