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
exports.RateInfoToJSON = exports.RateInfoFromJSONTyped = exports.RateInfoFromJSON = exports.instanceOfRateInfo = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const RateInfoDetail_1 = require("./RateInfoDetail");
const ReservationRateSummaryType_1 = require("./ReservationRateSummaryType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the RateInfo interface.
 */
function instanceOfRateInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRateInfo = instanceOfRateInfo;
function RateInfoFromJSON(json) {
    return RateInfoFromJSONTyped(json, false);
}
exports.RateInfoFromJSON = RateInfoFromJSON;
function RateInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'detail': !(0, runtime_1.exists)(json, 'detail') ? undefined : (0, RateInfoDetail_1.RateInfoDetailFromJSON)(json['detail']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'summary': !(0, runtime_1.exists)(json, 'summary') ? undefined : (0, ReservationRateSummaryType_1.ReservationRateSummaryTypeFromJSON)(json['summary']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.RateInfoFromJSONTyped = RateInfoFromJSONTyped;
function RateInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'detail': (0, RateInfoDetail_1.RateInfoDetailToJSON)(value.detail),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'summary': (0, ReservationRateSummaryType_1.ReservationRateSummaryTypeToJSON)(value.summary),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.RateInfoToJSON = RateInfoToJSON;