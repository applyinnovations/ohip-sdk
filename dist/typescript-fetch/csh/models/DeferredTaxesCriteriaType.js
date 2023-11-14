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
exports.DeferredTaxesCriteriaTypeToJSON = exports.DeferredTaxesCriteriaTypeFromJSONTyped = exports.DeferredTaxesCriteriaTypeFromJSON = exports.instanceOfDeferredTaxesCriteriaType = void 0;
const runtime_1 = require("../runtime");
const ReservationId_1 = require("./ReservationId");
/**
 * Check if a given object implements the DeferredTaxesCriteriaType interface.
 */
function instanceOfDeferredTaxesCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDeferredTaxesCriteriaType = instanceOfDeferredTaxesCriteriaType;
function DeferredTaxesCriteriaTypeFromJSON(json) {
    return DeferredTaxesCriteriaTypeFromJSONTyped(json, false);
}
exports.DeferredTaxesCriteriaTypeFromJSON = DeferredTaxesCriteriaTypeFromJSON;
function DeferredTaxesCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'refreshAlways': !(0, runtime_1.exists)(json, 'refreshAlways') ? undefined : json['refreshAlways'],
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
    };
}
exports.DeferredTaxesCriteriaTypeFromJSONTyped = DeferredTaxesCriteriaTypeFromJSONTyped;
function DeferredTaxesCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierId': value.cashierId,
        'hotelId': value.hotelId,
        'refreshAlways': value.refreshAlways,
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
    };
}
exports.DeferredTaxesCriteriaTypeToJSON = DeferredTaxesCriteriaTypeToJSON;