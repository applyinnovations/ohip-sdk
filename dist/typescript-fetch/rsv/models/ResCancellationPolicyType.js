"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResCancellationPolicyTypeToJSON = exports.ResCancellationPolicyTypeFromJSONTyped = exports.ResCancellationPolicyTypeFromJSON = exports.instanceOfResCancellationPolicyType = void 0;
const runtime_1 = require("../runtime");
const DepositCancelRevenueType_1 = require("./DepositCancelRevenueType");
const ResCancelPenaltyType_1 = require("./ResCancelPenaltyType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ResCancellationPolicyType interface.
 */
function instanceOfResCancellationPolicyType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResCancellationPolicyType = instanceOfResCancellationPolicyType;
function ResCancellationPolicyTypeFromJSON(json) {
    return ResCancellationPolicyTypeFromJSONTyped(json, false);
}
exports.ResCancellationPolicyTypeFromJSON = ResCancellationPolicyTypeFromJSON;
function ResCancellationPolicyTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : json['comments'],
        'percentageDue': !(0, runtime_1.exists)(json, 'percentageDue') ? undefined : json['percentageDue'],
        'policy': !(0, runtime_1.exists)(json, 'policy') ? undefined : (0, ResCancelPenaltyType_1.ResCancelPenaltyTypeFromJSON)(json['policy']),
        'policyId': !(0, runtime_1.exists)(json, 'policyId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['policyId']),
        'revenueType': !(0, runtime_1.exists)(json, 'revenueType') ? undefined : (0, DepositCancelRevenueType_1.DepositCancelRevenueTypeFromJSON)(json['revenueType']),
    };
}
exports.ResCancellationPolicyTypeFromJSONTyped = ResCancellationPolicyTypeFromJSONTyped;
function ResCancellationPolicyTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'comments': value.comments,
        'percentageDue': value.percentageDue,
        'policy': (0, ResCancelPenaltyType_1.ResCancelPenaltyTypeToJSON)(value.policy),
        'policyId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.policyId),
        'revenueType': (0, DepositCancelRevenueType_1.DepositCancelRevenueTypeToJSON)(value.revenueType),
    };
}
exports.ResCancellationPolicyTypeToJSON = ResCancellationPolicyTypeToJSON;
