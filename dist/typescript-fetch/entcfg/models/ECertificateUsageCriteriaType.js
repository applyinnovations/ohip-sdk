"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
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
