"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationPaymentMethodTypeEmailFolioInfoToJSON = exports.ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped = exports.ReservationPaymentMethodTypeEmailFolioInfoFromJSON = exports.instanceOfReservationPaymentMethodTypeEmailFolioInfo = void 0;
const runtime_1 = require("../runtime");
const EmailType_1 = require("./EmailType");
/**
 * Check if a given object implements the ReservationPaymentMethodTypeEmailFolioInfo interface.
 */
function instanceOfReservationPaymentMethodTypeEmailFolioInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationPaymentMethodTypeEmailFolioInfo = instanceOfReservationPaymentMethodTypeEmailFolioInfo;
function ReservationPaymentMethodTypeEmailFolioInfoFromJSON(json) {
    return ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped(json, false);
}
exports.ReservationPaymentMethodTypeEmailFolioInfoFromJSON = ReservationPaymentMethodTypeEmailFolioInfoFromJSON;
function ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : (0, EmailType_1.EmailTypeFromJSON)(json['email']),
        'emailFolio': !(0, runtime_1.exists)(json, 'emailFolio') ? undefined : json['emailFolio'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped = ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped;
function ReservationPaymentMethodTypeEmailFolioInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': (0, EmailType_1.EmailTypeToJSON)(value.email),
        'emailFolio': value.emailFolio,
        'id': value.id,
        'type': value.type,
    };
}
exports.ReservationPaymentMethodTypeEmailFolioInfoToJSON = ReservationPaymentMethodTypeEmailFolioInfoToJSON;
