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
exports.PostBillingChargesInBatchCriteriaTypeToJSON = exports.PostBillingChargesInBatchCriteriaTypeFromJSONTyped = exports.PostBillingChargesInBatchCriteriaTypeFromJSON = exports.instanceOfPostBillingChargesInBatchCriteriaType = void 0;
const runtime_1 = require("../runtime");
const ChargesCriteriaType_1 = require("./ChargesCriteriaType");
const Reservations_1 = require("./Reservations");
/**
 * Check if a given object implements the PostBillingChargesInBatchCriteriaType interface.
 */
function instanceOfPostBillingChargesInBatchCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostBillingChargesInBatchCriteriaType = instanceOfPostBillingChargesInBatchCriteriaType;
function PostBillingChargesInBatchCriteriaTypeFromJSON(json) {
    return PostBillingChargesInBatchCriteriaTypeFromJSONTyped(json, false);
}
exports.PostBillingChargesInBatchCriteriaTypeFromJSON = PostBillingChargesInBatchCriteriaTypeFromJSON;
function PostBillingChargesInBatchCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'charges': !(0, runtime_1.exists)(json, 'charges') ? undefined : (0, ChargesCriteriaType_1.ChargesCriteriaTypeFromJSON)(json['charges']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'reservations': !(0, runtime_1.exists)(json, 'reservations') ? undefined : (0, Reservations_1.ReservationsFromJSON)(json['reservations']),
    };
}
exports.PostBillingChargesInBatchCriteriaTypeFromJSONTyped = PostBillingChargesInBatchCriteriaTypeFromJSONTyped;
function PostBillingChargesInBatchCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'charges': (0, ChargesCriteriaType_1.ChargesCriteriaTypeToJSON)(value.charges),
        'hotelId': value.hotelId,
        'reservations': (0, Reservations_1.ReservationsToJSON)(value.reservations),
    };
}
exports.PostBillingChargesInBatchCriteriaTypeToJSON = PostBillingChargesInBatchCriteriaTypeToJSON;