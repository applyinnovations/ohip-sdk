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
exports.ReservationPackageTypeToJSON = exports.ReservationPackageTypeFromJSONTyped = exports.ReservationPackageTypeFromJSON = exports.instanceOfReservationPackageType = void 0;
const runtime_1 = require("../runtime");
const PackageCodeHeaderType_1 = require("./PackageCodeHeaderType");
const PackageConsumptionType_1 = require("./PackageConsumptionType");
const ProductSourceType_1 = require("./ProductSourceType");
const ReservationPackageScheduleType_1 = require("./ReservationPackageScheduleType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the ReservationPackageType interface.
 */
function instanceOfReservationPackageType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationPackageType = instanceOfReservationPackageType;
function ReservationPackageTypeFromJSON(json) {
    return ReservationPackageTypeFromJSONTyped(json, false);
}
exports.ReservationPackageTypeFromJSON = ReservationPackageTypeFromJSON;
function ReservationPackageTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'awardCode': !(0, runtime_1.exists)(json, 'awardCode') ? undefined : json['awardCode'],
        'consumptionDetails': !(0, runtime_1.exists)(json, 'consumptionDetails') ? undefined : (0, PackageConsumptionType_1.PackageConsumptionTypeFromJSON)(json['consumptionDetails']),
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'internalId': !(0, runtime_1.exists)(json, 'internalId') ? undefined : json['internalId'],
        'newTimeSpan': !(0, runtime_1.exists)(json, 'newTimeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['newTimeSpan']),
        'packageCode': !(0, runtime_1.exists)(json, 'packageCode') ? undefined : json['packageCode'],
        'packageGroup': !(0, runtime_1.exists)(json, 'packageGroup') ? undefined : json['packageGroup'],
        'packageHeaderType': !(0, runtime_1.exists)(json, 'packageHeaderType') ? undefined : (0, PackageCodeHeaderType_1.PackageCodeHeaderTypeFromJSON)(json['packageHeaderType']),
        'points': !(0, runtime_1.exists)(json, 'points') ? undefined : json['points'],
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'scheduleList': !(0, runtime_1.exists)(json, 'scheduleList') ? undefined : (json['scheduleList'].map(ReservationPackageScheduleType_1.ReservationPackageScheduleTypeFromJSON)),
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : (0, ProductSourceType_1.ProductSourceTypeFromJSON)(json['source']),
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : json['startDate'],
    };
}
exports.ReservationPackageTypeFromJSONTyped = ReservationPackageTypeFromJSONTyped;
function ReservationPackageTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'awardCode': value.awardCode,
        'consumptionDetails': (0, PackageConsumptionType_1.PackageConsumptionTypeToJSON)(value.consumptionDetails),
        'endDate': value.endDate,
        'internalId': value.internalId,
        'newTimeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.newTimeSpan),
        'packageCode': value.packageCode,
        'packageGroup': value.packageGroup,
        'packageHeaderType': (0, PackageCodeHeaderType_1.PackageCodeHeaderTypeToJSON)(value.packageHeaderType),
        'points': value.points,
        'ratePlanCode': value.ratePlanCode,
        'scheduleList': value.scheduleList === undefined ? undefined : (value.scheduleList.map(ReservationPackageScheduleType_1.ReservationPackageScheduleTypeToJSON)),
        'source': (0, ProductSourceType_1.ProductSourceTypeToJSON)(value.source),
        'startDate': value.startDate,
    };
}
exports.ReservationPackageTypeToJSON = ReservationPackageTypeToJSON;
