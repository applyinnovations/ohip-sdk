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
        'reservation': !(0, runtime_1.exists)(json, 'reservation') ? undefined : json['reservation'],
        'web': !(0, runtime_1.exists)(json, 'web') ? undefined : json['web'],
        'webAllowed': !(0, runtime_1.exists)(json, 'webAllowed') ? undefined : json['webAllowed'],
        'benefit': !(0, runtime_1.exists)(json, 'benefit') ? undefined : json['benefit'],
        'hotel': !(0, runtime_1.exists)(json, 'hotel') ? undefined : json['hotel'],
        'verifyCertificateNo': !(0, runtime_1.exists)(json, 'verifyCertificateNo') ? undefined : json['verifyCertificateNo'],
        'cancelAllowed': !(0, runtime_1.exists)(json, 'cancelAllowed') ? undefined : json['cancelAllowed'],
        'generateInLieuCertificate': !(0, runtime_1.exists)(json, 'generateInLieuCertificate') ? undefined : json['generateInLieuCertificate'],
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
        'reservation': value.reservation,
        'web': value.web,
        'webAllowed': value.webAllowed,
        'benefit': value.benefit,
        'hotel': value.hotel,
        'verifyCertificateNo': value.verifyCertificateNo,
        'cancelAllowed': value.cancelAllowed,
        'generateInLieuCertificate': value.generateInLieuCertificate,
    };
}
exports.ECertificateUsageCriteriaTypeToJSON = ECertificateUsageCriteriaTypeToJSON;
