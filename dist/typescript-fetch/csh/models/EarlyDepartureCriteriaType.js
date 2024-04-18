"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarlyDepartureCriteriaTypeToJSON = exports.EarlyDepartureCriteriaTypeFromJSONTyped = exports.EarlyDepartureCriteriaTypeFromJSON = exports.instanceOfEarlyDepartureCriteriaType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the EarlyDepartureCriteriaType interface.
 */
function instanceOfEarlyDepartureCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEarlyDepartureCriteriaType = instanceOfEarlyDepartureCriteriaType;
function EarlyDepartureCriteriaTypeFromJSON(json) {
    return EarlyDepartureCriteriaTypeFromJSONTyped(json, false);
}
exports.EarlyDepartureCriteriaTypeFromJSON = EarlyDepartureCriteriaTypeFromJSON;
function EarlyDepartureCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'ignoreCheckOnTieredRate': !(0, runtime_1.exists)(json, 'ignoreCheckOnTieredRate') ? undefined : json['ignoreCheckOnTieredRate'],
        'ignoreRateRestriction': !(0, runtime_1.exists)(json, 'ignoreRateRestriction') ? undefined : json['ignoreRateRestriction'],
        'postConsumedAllowanceToGuest': !(0, runtime_1.exists)(json, 'postConsumedAllowanceToGuest') ? undefined : json['postConsumedAllowanceToGuest'],
        'postEarlyDeparturePenalty': !(0, runtime_1.exists)(json, 'postEarlyDeparturePenalty') ? undefined : json['postEarlyDeparturePenalty'],
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (json['reservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
    };
}
exports.EarlyDepartureCriteriaTypeFromJSONTyped = EarlyDepartureCriteriaTypeFromJSONTyped;
function EarlyDepartureCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierId': value.cashierId,
        'hotelId': value.hotelId,
        'ignoreCheckOnTieredRate': value.ignoreCheckOnTieredRate,
        'ignoreRateRestriction': value.ignoreRateRestriction,
        'postConsumedAllowanceToGuest': value.postConsumedAllowanceToGuest,
        'postEarlyDeparturePenalty': value.postEarlyDeparturePenalty,
        'reservationIdList': value.reservationIdList === undefined ? undefined : (value.reservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
    };
}
exports.EarlyDepartureCriteriaTypeToJSON = EarlyDepartureCriteriaTypeToJSON;