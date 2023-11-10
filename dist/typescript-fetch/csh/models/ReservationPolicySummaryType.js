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
exports.ReservationPolicySummaryTypeToJSON = exports.ReservationPolicySummaryTypeFromJSONTyped = exports.ReservationPolicySummaryTypeFromJSON = exports.instanceOfReservationPolicySummaryType = void 0;
const runtime_1 = require("../runtime");
const ResCancellationPoliciesType_1 = require("./ResCancellationPoliciesType");
const ResDepositPoliciesType_1 = require("./ResDepositPoliciesType");
const UniqueIDListType_1 = require("./UniqueIDListType");
/**
 * Check if a given object implements the ReservationPolicySummaryType interface.
 */
function instanceOfReservationPolicySummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationPolicySummaryType = instanceOfReservationPolicySummaryType;
function ReservationPolicySummaryTypeFromJSON(json) {
    return ReservationPolicySummaryTypeFromJSONTyped(json, false);
}
exports.ReservationPolicySummaryTypeFromJSON = ReservationPolicySummaryTypeFromJSON;
function ReservationPolicySummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cancellationPolicies': !(0, runtime_1.exists)(json, 'cancellationPolicies') ? undefined : (0, ResCancellationPoliciesType_1.ResCancellationPoliciesTypeFromJSON)(json['cancellationPolicies']),
        'depositPolicies': !(0, runtime_1.exists)(json, 'depositPolicies') ? undefined : (0, ResDepositPoliciesType_1.ResDepositPoliciesTypeFromJSON)(json['depositPolicies']),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (0, UniqueIDListType_1.UniqueIDListTypeFromJSON)(json['reservationIdList']),
    };
}
exports.ReservationPolicySummaryTypeFromJSONTyped = ReservationPolicySummaryTypeFromJSONTyped;
function ReservationPolicySummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cancellationPolicies': (0, ResCancellationPoliciesType_1.ResCancellationPoliciesTypeToJSON)(value.cancellationPolicies),
        'depositPolicies': (0, ResDepositPoliciesType_1.ResDepositPoliciesTypeToJSON)(value.depositPolicies),
        'name': value.name,
        'reservationIdList': (0, UniqueIDListType_1.UniqueIDListTypeToJSON)(value.reservationIdList),
    };
}
exports.ReservationPolicySummaryTypeToJSON = ReservationPolicySummaryTypeToJSON;
