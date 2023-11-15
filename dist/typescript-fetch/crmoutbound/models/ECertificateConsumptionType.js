"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
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
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : (0, ECertificateConsumeSourceType_1.ECertificateConsumeSourceTypeFromJSON)(json['source']),
        'surname': !(0, runtime_1.exists)(json, 'surname') ? undefined : json['surname'],
        'firstName': !(0, runtime_1.exists)(json, 'firstName') ? undefined : json['firstName'],
        'middleName': !(0, runtime_1.exists)(json, 'middleName') ? undefined : json['middleName'],
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : json['date'],
        'userName': !(0, runtime_1.exists)(json, 'userName') ? undefined : json['userName'],
        'userNotes': !(0, runtime_1.exists)(json, 'userNotes') ? undefined : json['userNotes'],
        'referenceId': !(0, runtime_1.exists)(json, 'referenceId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['referenceId']),
        'locationType': !(0, runtime_1.exists)(json, 'locationType') ? undefined : json['locationType'],
        'authCode': !(0, runtime_1.exists)(json, 'authCode') ? undefined : json['authCode'],
        'serviceDate': !(0, runtime_1.exists)(json, 'serviceDate') ? undefined : json['serviceDate'],
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
        'hotelId': value.hotelId,
        'source': (0, ECertificateConsumeSourceType_1.ECertificateConsumeSourceTypeToJSON)(value.source),
        'surname': value.surname,
        'firstName': value.firstName,
        'middleName': value.middleName,
        'email': value.email,
        'date': value.date,
        'userName': value.userName,
        'userNotes': value.userNotes,
        'referenceId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.referenceId),
        'locationType': value.locationType,
        'authCode': value.authCode,
        'serviceDate': value.serviceDate,
    };
}
exports.ECertificateConsumptionTypeToJSON = ECertificateConsumptionTypeToJSON;
