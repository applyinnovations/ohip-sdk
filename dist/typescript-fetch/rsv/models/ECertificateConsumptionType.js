"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECertificateConsumptionTypeToJSON = exports.ECertificateConsumptionTypeFromJSONTyped = exports.ECertificateConsumptionTypeFromJSON = exports.instanceOfECertificateConsumptionType = void 0;
const runtime_1 = require("../runtime");
const ECertificateConsumeSourceType_1 = require("./ECertificateConsumeSourceType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ECertificateConsumptionType interface.
 */
function instanceOfECertificateConsumptionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfECertificateConsumptionType = instanceOfECertificateConsumptionType;
function ECertificateConsumptionTypeFromJSON(json) {
    return ECertificateConsumptionTypeFromJSONTyped(json, false);
}
exports.ECertificateConsumptionTypeFromJSON = ECertificateConsumptionTypeFromJSON;
function ECertificateConsumptionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : (new Date(json['date'])),
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'firstName': !(0, runtime_1.exists)(json, 'firstName') ? undefined : json['firstName'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'middleName': !(0, runtime_1.exists)(json, 'middleName') ? undefined : json['middleName'],
        'referenceId': !(0, runtime_1.exists)(json, 'referenceId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['referenceId']),
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : (0, ECertificateConsumeSourceType_1.ECertificateConsumeSourceTypeFromJSON)(json['source']),
        'surname': !(0, runtime_1.exists)(json, 'surname') ? undefined : json['surname'],
        'userName': !(0, runtime_1.exists)(json, 'userName') ? undefined : json['userName'],
    };
}
exports.ECertificateConsumptionTypeFromJSONTyped = ECertificateConsumptionTypeFromJSONTyped;
function ECertificateConsumptionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0, 10)),
        'email': value.email,
        'firstName': value.firstName,
        'hotelId': value.hotelId,
        'middleName': value.middleName,
        'referenceId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.referenceId),
        'source': (0, ECertificateConsumeSourceType_1.ECertificateConsumeSourceTypeToJSON)(value.source),
        'surname': value.surname,
        'userName': value.userName,
    };
}
exports.ECertificateConsumptionTypeToJSON = ECertificateConsumptionTypeToJSON;
