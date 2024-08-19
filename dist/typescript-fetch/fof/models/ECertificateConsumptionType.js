"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
        'authorizationCode': !(0, runtime_1.exists)(json, 'authorizationCode') ? undefined : json['authorizationCode'],
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : json['date'],
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'firstName': !(0, runtime_1.exists)(json, 'firstName') ? undefined : json['firstName'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'locationType': !(0, runtime_1.exists)(json, 'locationType') ? undefined : json['locationType'],
        'middleName': !(0, runtime_1.exists)(json, 'middleName') ? undefined : json['middleName'],
        'referenceId': !(0, runtime_1.exists)(json, 'referenceId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['referenceId']),
        'serviceDate': !(0, runtime_1.exists)(json, 'serviceDate') ? undefined : json['serviceDate'],
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : (0, ECertificateConsumeSourceType_1.ECertificateConsumeSourceTypeFromJSON)(json['source']),
        'surname': !(0, runtime_1.exists)(json, 'surname') ? undefined : json['surname'],
        'userName': !(0, runtime_1.exists)(json, 'userName') ? undefined : json['userName'],
        'userNotes': !(0, runtime_1.exists)(json, 'userNotes') ? undefined : json['userNotes'],
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
        'authorizationCode': value.authorizationCode,
        'date': value.date,
        'email': value.email,
        'firstName': value.firstName,
        'hotelId': value.hotelId,
        'locationType': value.locationType,
        'middleName': value.middleName,
        'referenceId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.referenceId),
        'serviceDate': value.serviceDate,
        'source': (0, ECertificateConsumeSourceType_1.ECertificateConsumeSourceTypeToJSON)(value.source),
        'surname': value.surname,
        'userName': value.userName,
        'userNotes': value.userNotes,
    };
}
exports.ECertificateConsumptionTypeToJSON = ECertificateConsumptionTypeToJSON;
