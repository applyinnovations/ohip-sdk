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
exports.LinkedAllowanceReservationsInfoTypeToJSON = exports.LinkedAllowanceReservationsInfoTypeFromJSONTyped = exports.LinkedAllowanceReservationsInfoTypeFromJSON = exports.instanceOfLinkedAllowanceReservationsInfoType = void 0;
const runtime_1 = require("../runtime");
const LinkedAllowanceReservationInfoType_1 = require("./LinkedAllowanceReservationInfoType");
/**
 * Check if a given object implements the LinkedAllowanceReservationsInfoType interface.
 */
function instanceOfLinkedAllowanceReservationsInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfLinkedAllowanceReservationsInfoType = instanceOfLinkedAllowanceReservationsInfoType;
function LinkedAllowanceReservationsInfoTypeFromJSON(json) {
    return LinkedAllowanceReservationsInfoTypeFromJSONTyped(json, false);
}
exports.LinkedAllowanceReservationsInfoTypeFromJSON = LinkedAllowanceReservationsInfoTypeFromJSON;
function LinkedAllowanceReservationsInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'sourceReservations': !(0, runtime_1.exists)(json, 'sourceReservations') ? undefined : (json['sourceReservations'].map(LinkedAllowanceReservationInfoType_1.LinkedAllowanceReservationInfoTypeFromJSON)),
        'targetReservation': !(0, runtime_1.exists)(json, 'targetReservation') ? undefined : (0, LinkedAllowanceReservationInfoType_1.LinkedAllowanceReservationInfoTypeFromJSON)(json['targetReservation']),
    };
}
exports.LinkedAllowanceReservationsInfoTypeFromJSONTyped = LinkedAllowanceReservationsInfoTypeFromJSONTyped;
function LinkedAllowanceReservationsInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'sourceReservations': value.sourceReservations === undefined ? undefined : (value.sourceReservations.map(LinkedAllowanceReservationInfoType_1.LinkedAllowanceReservationInfoTypeToJSON)),
        'targetReservation': (0, LinkedAllowanceReservationInfoType_1.LinkedAllowanceReservationInfoTypeToJSON)(value.targetReservation),
    };
}
exports.LinkedAllowanceReservationsInfoTypeToJSON = LinkedAllowanceReservationsInfoTypeToJSON;
