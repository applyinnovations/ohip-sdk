"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECertificateUsageCriteriaTypeToJSON = exports.ECertificateUsageCriteriaTypeFromJSONTyped = exports.ECertificateUsageCriteriaTypeFromJSON = exports.instanceOfECertificateUsageCriteriaType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ECertificateUsageCriteriaType interface.
 */
function instanceOfECertificateUsageCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfECertificateUsageCriteriaType = instanceOfECertificateUsageCriteriaType;
function ECertificateUsageCriteriaTypeFromJSON(json) {
    return ECertificateUsageCriteriaTypeFromJSONTyped(json, false);
}
exports.ECertificateUsageCriteriaTypeFromJSON = ECertificateUsageCriteriaTypeFromJSON;
function ECertificateUsageCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'benefit': !(0, runtime_1.exists)(json, 'benefit') ? undefined : json['benefit'],
        'cancelAllowed': !(0, runtime_1.exists)(json, 'cancelAllowed') ? undefined : json['cancelAllowed'],
        'generateInLieuCertificate': !(0, runtime_1.exists)(json, 'generateInLieuCertificate') ? undefined : json['generateInLieuCertificate'],
        'hotel': !(0, runtime_1.exists)(json, 'hotel') ? undefined : json['hotel'],
        'reservation': !(0, runtime_1.exists)(json, 'reservation') ? undefined : json['reservation'],
        'verifyCertificateNo': !(0, runtime_1.exists)(json, 'verifyCertificateNo') ? undefined : json['verifyCertificateNo'],
        'web': !(0, runtime_1.exists)(json, 'web') ? undefined : json['web'],
        'webAllowed': !(0, runtime_1.exists)(json, 'webAllowed') ? undefined : json['webAllowed'],
    };
}
exports.ECertificateUsageCriteriaTypeFromJSONTyped = ECertificateUsageCriteriaTypeFromJSONTyped;
function ECertificateUsageCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'benefit': value.benefit,
        'cancelAllowed': value.cancelAllowed,
        'generateInLieuCertificate': value.generateInLieuCertificate,
        'hotel': value.hotel,
        'reservation': value.reservation,
        'verifyCertificateNo': value.verifyCertificateNo,
        'web': value.web,
        'webAllowed': value.webAllowed,
    };
}
exports.ECertificateUsageCriteriaTypeToJSON = ECertificateUsageCriteriaTypeToJSON;