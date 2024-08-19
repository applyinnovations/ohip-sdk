"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationPackageScheduleTypeToJSON = exports.ReservationPackageScheduleTypeFromJSONTyped = exports.ReservationPackageScheduleTypeFromJSON = exports.instanceOfReservationPackageScheduleType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ReservationPackageScheduleType interface.
 */
function instanceOfReservationPackageScheduleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationPackageScheduleType = instanceOfReservationPackageScheduleType;
function ReservationPackageScheduleTypeFromJSON(json) {
    return ReservationPackageScheduleTypeFromJSONTyped(json, false);
}
exports.ReservationPackageScheduleTypeFromJSON = ReservationPackageScheduleTypeFromJSON;
function ReservationPackageScheduleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'computedResvPrice': !(0, runtime_1.exists)(json, 'computedResvPrice') ? undefined : json['computedResvPrice'],
        'consumptionDate': !(0, runtime_1.exists)(json, 'consumptionDate') ? undefined : json['consumptionDate'],
        'originalUnitAllowance': !(0, runtime_1.exists)(json, 'originalUnitAllowance') ? undefined : json['originalUnitAllowance'],
        'originalUnitPrice': !(0, runtime_1.exists)(json, 'originalUnitPrice') ? undefined : json['originalUnitPrice'],
        'reservationDate': !(0, runtime_1.exists)(json, 'reservationDate') ? undefined : json['reservationDate'],
        'totalQuantity': !(0, runtime_1.exists)(json, 'totalQuantity') ? undefined : json['totalQuantity'],
        'unitAllowance': !(0, runtime_1.exists)(json, 'unitAllowance') ? undefined : json['unitAllowance'],
        'unitPrice': !(0, runtime_1.exists)(json, 'unitPrice') ? undefined : json['unitPrice'],
    };
}
exports.ReservationPackageScheduleTypeFromJSONTyped = ReservationPackageScheduleTypeFromJSONTyped;
function ReservationPackageScheduleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'computedResvPrice': value.computedResvPrice,
        'consumptionDate': value.consumptionDate,
        'originalUnitAllowance': value.originalUnitAllowance,
        'originalUnitPrice': value.originalUnitPrice,
        'reservationDate': value.reservationDate,
        'totalQuantity': value.totalQuantity,
        'unitAllowance': value.unitAllowance,
        'unitPrice': value.unitPrice,
    };
}
exports.ReservationPackageScheduleTypeToJSON = ReservationPackageScheduleTypeToJSON;
