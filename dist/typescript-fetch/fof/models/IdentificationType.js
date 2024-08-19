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
exports.IdentificationTypeToJSON = exports.IdentificationTypeFromJSONTyped = exports.IdentificationTypeFromJSON = exports.instanceOfIdentificationType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the IdentificationType interface.
 */
function instanceOfIdentificationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfIdentificationType = instanceOfIdentificationType;
function IdentificationTypeFromJSON(json) {
    return IdentificationTypeFromJSONTyped(json, false);
}
exports.IdentificationTypeFromJSON = IdentificationTypeFromJSON;
function IdentificationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'expirationDate': !(0, runtime_1.exists)(json, 'expirationDate') ? undefined : json['expirationDate'],
        'idNumber': !(0, runtime_1.exists)(json, 'idNumber') ? undefined : json['idNumber'],
        'idNumberMasked': !(0, runtime_1.exists)(json, 'idNumberMasked') ? undefined : json['idNumberMasked'],
        'idType': !(0, runtime_1.exists)(json, 'idType') ? undefined : json['idType'],
        'issuedCountry': !(0, runtime_1.exists)(json, 'issuedCountry') ? undefined : json['issuedCountry'],
        'issuedDate': !(0, runtime_1.exists)(json, 'issuedDate') ? undefined : json['issuedDate'],
        'issuedPlace': !(0, runtime_1.exists)(json, 'issuedPlace') ? undefined : json['issuedPlace'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'primaryInd': !(0, runtime_1.exists)(json, 'primaryInd') ? undefined : json['primaryInd'],
        'registeredProperty': !(0, runtime_1.exists)(json, 'registeredProperty') ? undefined : json['registeredProperty'],
    };
}
exports.IdentificationTypeFromJSONTyped = IdentificationTypeFromJSONTyped;
function IdentificationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'expirationDate': value.expirationDate,
        'idNumber': value.idNumber,
        'idNumberMasked': value.idNumberMasked,
        'idType': value.idType,
        'issuedCountry': value.issuedCountry,
        'issuedDate': value.issuedDate,
        'issuedPlace': value.issuedPlace,
        'orderSequence': value.orderSequence,
        'primaryInd': value.primaryInd,
        'registeredProperty': value.registeredProperty,
    };
}
exports.IdentificationTypeToJSON = IdentificationTypeToJSON;
