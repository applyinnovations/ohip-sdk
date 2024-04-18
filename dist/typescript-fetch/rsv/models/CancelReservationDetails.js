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
exports.CancelReservationDetailsToJSON = exports.CancelReservationDetailsFromJSONTyped = exports.CancelReservationDetailsFromJSON = exports.instanceOfCancelReservationDetails = void 0;
const runtime_1 = require("../runtime");
const CancelReservationType_1 = require("./CancelReservationType");
const CancellationActivityType_1 = require("./CancellationActivityType");
const ChannelResvRSInfoType_1 = require("./ChannelResvRSInfoType");
const DailyRateType_1 = require("./DailyRateType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the CancelReservationDetails interface.
 */
function instanceOfCancelReservationDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCancelReservationDetails = instanceOfCancelReservationDetails;
function CancelReservationDetailsFromJSON(json) {
    return CancelReservationDetailsFromJSONTyped(json, false);
}
exports.CancelReservationDetailsFromJSON = CancelReservationDetailsFromJSON;
function CancelReservationDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelInformation': !(0, runtime_1.exists)(json, 'channelInformation') ? undefined : (0, ChannelResvRSInfoType_1.ChannelResvRSInfoTypeFromJSON)(json['channelInformation']),
        'cxlActivityLog': !(0, runtime_1.exists)(json, 'cxlActivityLog') ? undefined : (json['cxlActivityLog'].map(CancellationActivityType_1.CancellationActivityTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'newRates': !(0, runtime_1.exists)(json, 'newRates') ? undefined : (json['newRates'].map(DailyRateType_1.DailyRateTypeFromJSON)),
        'oldRates': !(0, runtime_1.exists)(json, 'oldRates') ? undefined : (json['oldRates'].map(DailyRateType_1.DailyRateTypeFromJSON)),
        'reservations': !(0, runtime_1.exists)(json, 'reservations') ? undefined : (json['reservations'].map(CancelReservationType_1.CancelReservationTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.CancelReservationDetailsFromJSONTyped = CancelReservationDetailsFromJSONTyped;
function CancelReservationDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channelInformation': (0, ChannelResvRSInfoType_1.ChannelResvRSInfoTypeToJSON)(value.channelInformation),
        'cxlActivityLog': value.cxlActivityLog === undefined ? undefined : (value.cxlActivityLog.map(CancellationActivityType_1.CancellationActivityTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'newRates': value.newRates === undefined ? undefined : (value.newRates.map(DailyRateType_1.DailyRateTypeToJSON)),
        'oldRates': value.oldRates === undefined ? undefined : (value.oldRates.map(DailyRateType_1.DailyRateTypeToJSON)),
        'reservations': value.reservations === undefined ? undefined : (value.reservations.map(CancelReservationType_1.CancelReservationTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.CancelReservationDetailsToJSON = CancelReservationDetailsToJSON;