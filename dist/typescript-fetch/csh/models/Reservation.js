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
exports.ReservationToJSON = exports.ReservationFromJSONTyped = exports.ReservationFromJSON = exports.instanceOfReservation = void 0;
const runtime_1 = require("../runtime");
const CheckoutReservationType_1 = require("./CheckoutReservationType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the Reservation interface.
 */
function instanceOfReservation(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservation = instanceOfReservation;
function ReservationFromJSON(json) {
    return ReservationFromJSONTyped(json, false);
}
exports.ReservationFromJSON = ReservationFromJSON;
function ReservationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'reservation': !(0, runtime_1.exists)(json, 'reservation') ? undefined : (0, CheckoutReservationType_1.CheckoutReservationTypeFromJSON)(json['reservation']),
        'verificationOnly': !(0, runtime_1.exists)(json, 'verificationOnly') ? undefined : json['verificationOnly'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ReservationFromJSONTyped = ReservationFromJSONTyped;
function ReservationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'reservation': (0, CheckoutReservationType_1.CheckoutReservationTypeToJSON)(value.reservation),
        'verificationOnly': value.verificationOnly,
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ReservationToJSON = ReservationToJSON;
