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
exports.ResCancelPenaltyTypeToJSON = exports.ResCancelPenaltyTypeFromJSONTyped = exports.ResCancelPenaltyTypeFromJSON = exports.instanceOfResCancelPenaltyType = void 0;
const runtime_1 = require("../runtime");
const OffsetUnitType_1 = require("./OffsetUnitType");
const PolicyAmountPercentType_1 = require("./PolicyAmountPercentType");
const PolicyDeadlineType_1 = require("./PolicyDeadlineType");
/**
 * Check if a given object implements the ResCancelPenaltyType interface.
 */
function instanceOfResCancelPenaltyType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResCancelPenaltyType = instanceOfResCancelPenaltyType;
function ResCancelPenaltyTypeFromJSON(json) {
    return ResCancelPenaltyTypeFromJSONTyped(json, false);
}
exports.ResCancelPenaltyTypeFromJSON = ResCancelPenaltyTypeFromJSON;
function ResCancelPenaltyTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amountPercent': !(0, runtime_1.exists)(json, 'amountPercent') ? undefined : (0, PolicyAmountPercentType_1.PolicyAmountPercentTypeFromJSON)(json['amountPercent']),
        'deadline': !(0, runtime_1.exists)(json, 'deadline') ? undefined : (0, PolicyDeadlineType_1.PolicyDeadlineTypeFromJSON)(json['deadline']),
        'effective': !(0, runtime_1.exists)(json, 'effective') ? undefined : json['effective'],
        'formattedRule': !(0, runtime_1.exists)(json, 'formattedRule') ? undefined : json['formattedRule'],
        'manual': !(0, runtime_1.exists)(json, 'manual') ? undefined : json['manual'],
        'nonRefundable': !(0, runtime_1.exists)(json, 'nonRefundable') ? undefined : json['nonRefundable'],
        'offsetUnit': !(0, runtime_1.exists)(json, 'offsetUnit') ? undefined : (0, OffsetUnitType_1.OffsetUnitTypeFromJSON)(json['offsetUnit']),
        'penaltyDescription': !(0, runtime_1.exists)(json, 'penaltyDescription') ? undefined : json['penaltyDescription'],
        'policyCode': !(0, runtime_1.exists)(json, 'policyCode') ? undefined : json['policyCode'],
    };
}
exports.ResCancelPenaltyTypeFromJSONTyped = ResCancelPenaltyTypeFromJSONTyped;
function ResCancelPenaltyTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amountPercent': (0, PolicyAmountPercentType_1.PolicyAmountPercentTypeToJSON)(value.amountPercent),
        'deadline': (0, PolicyDeadlineType_1.PolicyDeadlineTypeToJSON)(value.deadline),
        'effective': value.effective,
        'formattedRule': value.formattedRule,
        'manual': value.manual,
        'nonRefundable': value.nonRefundable,
        'offsetUnit': (0, OffsetUnitType_1.OffsetUnitTypeToJSON)(value.offsetUnit),
        'penaltyDescription': value.penaltyDescription,
        'policyCode': value.policyCode,
    };
}
exports.ResCancelPenaltyTypeToJSON = ResCancelPenaltyTypeToJSON;