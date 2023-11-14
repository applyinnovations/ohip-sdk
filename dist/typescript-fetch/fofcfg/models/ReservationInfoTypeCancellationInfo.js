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
exports.ReservationInfoTypeCancellationInfoToJSON = exports.ReservationInfoTypeCancellationInfoFromJSONTyped = exports.ReservationInfoTypeCancellationInfoFromJSON = exports.instanceOfReservationInfoTypeCancellationInfo = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ReservationInfoTypeCancellationInfo interface.
 */
function instanceOfReservationInfoTypeCancellationInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationInfoTypeCancellationInfo = instanceOfReservationInfoTypeCancellationInfo;
function ReservationInfoTypeCancellationInfoFromJSON(json) {
    return ReservationInfoTypeCancellationInfoFromJSONTyped(json, false);
}
exports.ReservationInfoTypeCancellationInfoFromJSON = ReservationInfoTypeCancellationInfoFromJSON;
function ReservationInfoTypeCancellationInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : (new Date(json['date'])),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
    };
}
exports.ReservationInfoTypeCancellationInfoFromJSONTyped = ReservationInfoTypeCancellationInfoFromJSONTyped;
function ReservationInfoTypeCancellationInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'date': value.date === undefined ? undefined : (value.date.toISOString().substring(0, 10)),
        'description': value.description,
    };
}
exports.ReservationInfoTypeCancellationInfoToJSON = ReservationInfoTypeCancellationInfoToJSON;