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
exports.TelephoneTypeToJSON = exports.TelephoneTypeFromJSONTyped = exports.TelephoneTypeFromJSON = exports.instanceOfTelephoneType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TelephoneType interface.
 */
function instanceOfTelephoneType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTelephoneType = instanceOfTelephoneType;
function TelephoneTypeFromJSON(json) {
    return TelephoneTypeFromJSONTyped(json, false);
}
exports.TelephoneTypeFromJSON = TelephoneTypeFromJSON;
function TelephoneTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'extension': !(0, runtime_1.exists)(json, 'extension') ? undefined : json['extension'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'phoneNumber': !(0, runtime_1.exists)(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'phoneTechType': !(0, runtime_1.exists)(json, 'phoneTechType') ? undefined : json['phoneTechType'],
        'phoneUseType': !(0, runtime_1.exists)(json, 'phoneUseType') ? undefined : json['phoneUseType'],
        'phoneUseTypeDescription': !(0, runtime_1.exists)(json, 'phoneUseTypeDescription') ? undefined : json['phoneUseTypeDescription'],
        'primaryInd': !(0, runtime_1.exists)(json, 'primaryInd') ? undefined : json['primaryInd'],
    };
}
exports.TelephoneTypeFromJSONTyped = TelephoneTypeFromJSONTyped;
function TelephoneTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'extension': value.extension,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'orderSequence': value.orderSequence,
        'phoneNumber': value.phoneNumber,
        'phoneTechType': value.phoneTechType,
        'phoneUseType': value.phoneUseType,
        'phoneUseTypeDescription': value.phoneUseTypeDescription,
        'primaryInd': value.primaryInd,
    };
}
exports.TelephoneTypeToJSON = TelephoneTypeToJSON;