"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingPrivilegesTypeToJSON = exports.BillingPrivilegesTypeFromJSONTyped = exports.BillingPrivilegesTypeFromJSON = exports.instanceOfBillingPrivilegesType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BillingPrivilegesType interface.
 */
function instanceOfBillingPrivilegesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBillingPrivilegesType = instanceOfBillingPrivilegesType;
function BillingPrivilegesTypeFromJSON(json) {
    return BillingPrivilegesTypeFromJSONTyped(json, false);
}
exports.BillingPrivilegesTypeFromJSON = BillingPrivilegesTypeFromJSON;
function BillingPrivilegesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowAutoCheckin': !(0, runtime_1.exists)(json, 'allowAutoCheckin') ? undefined : json['allowAutoCheckin'],
        'autoSettlement': !(0, runtime_1.exists)(json, 'autoSettlement') ? undefined : json['autoSettlement'],
        'autoSettlementFreq': !(0, runtime_1.exists)(json, 'autoSettlementFreq') ? undefined : json['autoSettlementFreq'],
        'autoSettlementType': !(0, runtime_1.exists)(json, 'autoSettlementType') ? undefined : json['autoSettlementType'],
        'creditLimitAutoPay': !(0, runtime_1.exists)(json, 'creditLimitAutoPay') ? undefined : json['creditLimitAutoPay'],
        'directBillAuthorized': !(0, runtime_1.exists)(json, 'directBillAuthorized') ? undefined : json['directBillAuthorized'],
        'folioCloseDate': !(0, runtime_1.exists)(json, 'folioCloseDate') ? undefined : (new Date(json['folioCloseDate'])),
        'postStayCharging': !(0, runtime_1.exists)(json, 'postStayCharging') ? undefined : json['postStayCharging'],
        'postingRestriction': !(0, runtime_1.exists)(json, 'postingRestriction') ? undefined : json['postingRestriction'],
        'preStayCharging': !(0, runtime_1.exists)(json, 'preStayCharging') ? undefined : json['preStayCharging'],
        'scheduledCheckout': !(0, runtime_1.exists)(json, 'scheduledCheckout') ? undefined : json['scheduledCheckout'],
        'scheduledCheckoutTime': !(0, runtime_1.exists)(json, 'scheduledCheckoutTime') ? undefined : (new Date(json['scheduledCheckoutTime'])),
        'videoCheckout': !(0, runtime_1.exists)(json, 'videoCheckout') ? undefined : json['videoCheckout'],
    };
}
exports.BillingPrivilegesTypeFromJSONTyped = BillingPrivilegesTypeFromJSONTyped;
function BillingPrivilegesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowAutoCheckin': value.allowAutoCheckin,
        'autoSettlement': value.autoSettlement,
        'autoSettlementFreq': value.autoSettlementFreq,
        'autoSettlementType': value.autoSettlementType,
        'creditLimitAutoPay': value.creditLimitAutoPay,
        'directBillAuthorized': value.directBillAuthorized,
        'folioCloseDate': value.folioCloseDate === undefined ? undefined : (value.folioCloseDate.toISOString().substr(0, 10)),
        'postStayCharging': value.postStayCharging,
        'postingRestriction': value.postingRestriction,
        'preStayCharging': value.preStayCharging,
        'scheduledCheckout': value.scheduledCheckout,
        'scheduledCheckoutTime': value.scheduledCheckoutTime === undefined ? undefined : (value.scheduledCheckoutTime.toISOString().substr(0, 10)),
        'videoCheckout': value.videoCheckout,
    };
}
exports.BillingPrivilegesTypeToJSON = BillingPrivilegesTypeToJSON;
