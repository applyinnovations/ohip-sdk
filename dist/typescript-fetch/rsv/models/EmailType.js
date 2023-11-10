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
exports.EmailTypeToJSON = exports.EmailTypeFromJSONTyped = exports.EmailTypeFromJSON = exports.instanceOfEmailType = exports.EmailTypeEmailFormatEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.EmailTypeEmailFormatEnum = {
    Html: 'Html',
    Text: 'Text'
};
/**
 * Check if a given object implements the EmailType interface.
 */
function instanceOfEmailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEmailType = instanceOfEmailType;
function EmailTypeFromJSON(json) {
    return EmailTypeFromJSONTyped(json, false);
}
exports.EmailTypeFromJSON = EmailTypeFromJSON;
function EmailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'emailAddress': !(0, runtime_1.exists)(json, 'emailAddress') ? undefined : json['emailAddress'],
        'emailFormat': !(0, runtime_1.exists)(json, 'emailFormat') ? undefined : json['emailFormat'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'primaryInd': !(0, runtime_1.exists)(json, 'primaryInd') ? undefined : json['primaryInd'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'typeDescription': !(0, runtime_1.exists)(json, 'typeDescription') ? undefined : json['typeDescription'],
    };
}
exports.EmailTypeFromJSONTyped = EmailTypeFromJSONTyped;
function EmailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'emailAddress': value.emailAddress,
        'emailFormat': value.emailFormat,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'orderSequence': value.orderSequence,
        'primaryInd': value.primaryInd,
        'type': value.type,
        'typeDescription': value.typeDescription,
    };
}
exports.EmailTypeToJSON = EmailTypeToJSON;
