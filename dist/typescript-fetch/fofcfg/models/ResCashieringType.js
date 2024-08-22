"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResCashieringTypeToJSON = exports.ResCashieringTypeFromJSONTyped = exports.ResCashieringTypeFromJSON = exports.instanceOfResCashieringType = void 0;
const runtime_1 = require("../runtime");
const BedTaxReportingType_1 = require("./BedTaxReportingType");
const BillingPrivilegesType_1 = require("./BillingPrivilegesType");
const FolioTextsTypeInner_1 = require("./FolioTextsTypeInner");
const ResCompAccountingType_1 = require("./ResCompAccountingType");
const ResPeriodicFolioType_1 = require("./ResPeriodicFolioType");
const ResPreConfiguredRoutingInstrType_1 = require("./ResPreConfiguredRoutingInstrType");
const ResRevenueBalanceType_1 = require("./ResRevenueBalanceType");
const ReservationTaxTypeInfo_1 = require("./ReservationTaxTypeInfo");
/**
 * Check if a given object implements the ResCashieringType interface.
 */
function instanceOfResCashieringType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResCashieringType = instanceOfResCashieringType;
function ResCashieringTypeFromJSON(json) {
    return ResCashieringTypeFromJSONTyped(json, false);
}
exports.ResCashieringTypeFromJSON = ResCashieringTypeFromJSON;
function ResCashieringTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bedTaxReporting': !(0, runtime_1.exists)(json, 'bedTaxReporting') ? undefined : (0, BedTaxReportingType_1.BedTaxReportingTypeFromJSON)(json['bedTaxReporting']),
        'billingPrivileges': !(0, runtime_1.exists)(json, 'billingPrivileges') ? undefined : (0, BillingPrivilegesType_1.BillingPrivilegesTypeFromJSON)(json['billingPrivileges']),
        'compAccounting': !(0, runtime_1.exists)(json, 'compAccounting') ? undefined : (0, ResCompAccountingType_1.ResCompAccountingTypeFromJSON)(json['compAccounting']),
        'financiallyResponsible': !(0, runtime_1.exists)(json, 'financiallyResponsible') ? undefined : json['financiallyResponsible'],
        'folioTexts': !(0, runtime_1.exists)(json, 'folioTexts') ? undefined : (json['folioTexts'].map(FolioTextsTypeInner_1.FolioTextsTypeInnerFromJSON)),
        'lastRoomAndTaxPostedDate': !(0, runtime_1.exists)(json, 'lastRoomAndTaxPostedDate') ? undefined : json['lastRoomAndTaxPostedDate'],
        'periodicFolio': !(0, runtime_1.exists)(json, 'periodicFolio') ? undefined : (0, ResPeriodicFolioType_1.ResPeriodicFolioTypeFromJSON)(json['periodicFolio']),
        'proratedBilling': !(0, runtime_1.exists)(json, 'proratedBilling') ? undefined : json['proratedBilling'],
        'reservationPreConfiguredRoutingInstruction': !(0, runtime_1.exists)(json, 'reservationPreConfiguredRoutingInstruction') ? undefined : (0, ResPreConfiguredRoutingInstrType_1.ResPreConfiguredRoutingInstrTypeFromJSON)(json['reservationPreConfiguredRoutingInstruction']),
        'revenuesAndBalances': !(0, runtime_1.exists)(json, 'revenuesAndBalances') ? undefined : (0, ResRevenueBalanceType_1.ResRevenueBalanceTypeFromJSON)(json['revenuesAndBalances']),
        'reverseAdvanceCheckInAllowed': !(0, runtime_1.exists)(json, 'reverseAdvanceCheckInAllowed') ? undefined : json['reverseAdvanceCheckInAllowed'],
        'reverseCheckInAllowed': !(0, runtime_1.exists)(json, 'reverseCheckInAllowed') ? undefined : json['reverseCheckInAllowed'],
        'taxType': !(0, runtime_1.exists)(json, 'taxType') ? undefined : (0, ReservationTaxTypeInfo_1.ReservationTaxTypeInfoFromJSON)(json['taxType']),
        'transactionsPosted': !(0, runtime_1.exists)(json, 'transactionsPosted') ? undefined : json['transactionsPosted'],
    };
}
exports.ResCashieringTypeFromJSONTyped = ResCashieringTypeFromJSONTyped;
function ResCashieringTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bedTaxReporting': (0, BedTaxReportingType_1.BedTaxReportingTypeToJSON)(value.bedTaxReporting),
        'billingPrivileges': (0, BillingPrivilegesType_1.BillingPrivilegesTypeToJSON)(value.billingPrivileges),
        'compAccounting': (0, ResCompAccountingType_1.ResCompAccountingTypeToJSON)(value.compAccounting),
        'financiallyResponsible': value.financiallyResponsible,
        'folioTexts': value.folioTexts === undefined ? undefined : (value.folioTexts.map(FolioTextsTypeInner_1.FolioTextsTypeInnerToJSON)),
        'lastRoomAndTaxPostedDate': value.lastRoomAndTaxPostedDate,
        'periodicFolio': (0, ResPeriodicFolioType_1.ResPeriodicFolioTypeToJSON)(value.periodicFolio),
        'proratedBilling': value.proratedBilling,
        'reservationPreConfiguredRoutingInstruction': (0, ResPreConfiguredRoutingInstrType_1.ResPreConfiguredRoutingInstrTypeToJSON)(value.reservationPreConfiguredRoutingInstruction),
        'revenuesAndBalances': (0, ResRevenueBalanceType_1.ResRevenueBalanceTypeToJSON)(value.revenuesAndBalances),
        'reverseAdvanceCheckInAllowed': value.reverseAdvanceCheckInAllowed,
        'reverseCheckInAllowed': value.reverseCheckInAllowed,
        'taxType': (0, ReservationTaxTypeInfo_1.ReservationTaxTypeInfoToJSON)(value.taxType),
        'transactionsPosted': value.transactionsPosted,
    };
}
exports.ResCashieringTypeToJSON = ResCashieringTypeToJSON;
