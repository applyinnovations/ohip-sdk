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
exports.OperaRecordLockToJSON = exports.OperaRecordLockFromJSONTyped = exports.OperaRecordLockFromJSON = exports.instanceOfOperaRecordLock = void 0;
const runtime_1 = require("../runtime");
const OperaLockRecordType_1 = require("./OperaLockRecordType");
/**
 * Check if a given object implements the OperaRecordLock interface.
 */
function instanceOfOperaRecordLock(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfOperaRecordLock = instanceOfOperaRecordLock;
function OperaRecordLockFromJSON(json) {
    return OperaRecordLockFromJSONTyped(json, false);
}
exports.OperaRecordLockFromJSON = OperaRecordLockFromJSON;
function OperaRecordLockFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createdBy': !(0, runtime_1.exists)(json, 'createdBy') ? undefined : json['createdBy'],
        'createdOn': !(0, runtime_1.exists)(json, 'createdOn') ? undefined : (new Date(json['createdOn'])),
        'expiresOn': !(0, runtime_1.exists)(json, 'expiresOn') ? undefined : (new Date(json['expiresOn'])),
        'internal': !(0, runtime_1.exists)(json, 'internal') ? undefined : json['internal'],
        'lockHandle': !(0, runtime_1.exists)(json, 'lockHandle') ? undefined : json['lockHandle'],
        'recordId': !(0, runtime_1.exists)(json, 'recordId') ? undefined : json['recordId'],
        'recordType': !(0, runtime_1.exists)(json, 'recordType') ? undefined : (0, OperaLockRecordType_1.OperaLockRecordTypeFromJSON)(json['recordType']),
        'timeToLive': !(0, runtime_1.exists)(json, 'timeToLive') ? undefined : json['timeToLive'],
    };
}
exports.OperaRecordLockFromJSONTyped = OperaRecordLockFromJSONTyped;
function OperaRecordLockToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'createdBy': value.createdBy,
        'createdOn': value.createdOn === undefined ? undefined : (value.createdOn.toISOString().substr(0, 10)),
        'expiresOn': value.expiresOn === undefined ? undefined : (value.expiresOn.toISOString().substr(0, 10)),
        'internal': value.internal,
        'lockHandle': value.lockHandle,
        'recordId': value.recordId,
        'recordType': (0, OperaLockRecordType_1.OperaLockRecordTypeToJSON)(value.recordType),
        'timeToLive': value.timeToLive,
    };
}
exports.OperaRecordLockToJSON = OperaRecordLockToJSON;
