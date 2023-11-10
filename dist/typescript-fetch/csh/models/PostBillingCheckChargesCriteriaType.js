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
exports.PostBillingCheckChargesCriteriaTypeToJSON = exports.PostBillingCheckChargesCriteriaTypeFromJSONTyped = exports.PostBillingCheckChargesCriteriaTypeFromJSON = exports.instanceOfPostBillingCheckChargesCriteriaType = void 0;
const runtime_1 = require("../runtime");
const PostBillingCheckChargesItemsCriteriaType_1 = require("./PostBillingCheckChargesItemsCriteriaType");
const ReservationId_1 = require("./ReservationId");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the PostBillingCheckChargesCriteriaType interface.
 */
function instanceOfPostBillingCheckChargesCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostBillingCheckChargesCriteriaType = instanceOfPostBillingCheckChargesCriteriaType;
function PostBillingCheckChargesCriteriaTypeFromJSON(json) {
    return PostBillingCheckChargesCriteriaTypeFromJSONTyped(json, false);
}
exports.PostBillingCheckChargesCriteriaTypeFromJSON = PostBillingCheckChargesCriteriaTypeFromJSON;
function PostBillingCheckChargesCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'checkId': !(0, runtime_1.exists)(json, 'checkId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['checkId']),
        'checkNumber': !(0, runtime_1.exists)(json, 'checkNumber') ? undefined : json['checkNumber'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'items': !(0, runtime_1.exists)(json, 'items') ? undefined : (0, PostBillingCheckChargesItemsCriteriaType_1.PostBillingCheckChargesItemsCriteriaTypeFromJSON)(json['items']),
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'revenueDate': !(0, runtime_1.exists)(json, 'revenueDate') ? undefined : (new Date(json['revenueDate'])),
    };
}
exports.PostBillingCheckChargesCriteriaTypeFromJSONTyped = PostBillingCheckChargesCriteriaTypeFromJSONTyped;
function PostBillingCheckChargesCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierId': value.cashierId,
        'checkId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.checkId),
        'checkNumber': value.checkNumber,
        'hotelId': value.hotelId,
        'items': (0, PostBillingCheckChargesItemsCriteriaType_1.PostBillingCheckChargesItemsCriteriaTypeToJSON)(value.items),
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'revenueDate': value.revenueDate === undefined ? undefined : (value.revenueDate.toISOString().substr(0, 10)),
    };
}
exports.PostBillingCheckChargesCriteriaTypeToJSON = PostBillingCheckChargesCriteriaTypeToJSON;
