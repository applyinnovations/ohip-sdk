"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertGuestInfoTypeToJSON = exports.AlertGuestInfoTypeFromJSONTyped = exports.AlertGuestInfoTypeFromJSON = exports.instanceOfAlertGuestInfoType = void 0;
const runtime_1 = require("../runtime");
const MembershipType_1 = require("./MembershipType");
const VIPStatusType_1 = require("./VIPStatusType");
/**
 * Check if a given object implements the AlertGuestInfoType interface.
 */
function instanceOfAlertGuestInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAlertGuestInfoType = instanceOfAlertGuestInfoType;
function AlertGuestInfoTypeFromJSON(json) {
    return AlertGuestInfoTypeFromJSONTyped(json, false);
}
exports.AlertGuestInfoTypeFromJSON = AlertGuestInfoTypeFromJSON;
function AlertGuestInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'birthDate': !(0, runtime_1.exists)(json, 'birthDate') ? undefined : json['birthDate'],
        'birthDateMasked': !(0, runtime_1.exists)(json, 'birthDateMasked') ? undefined : json['birthDateMasked'],
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : json['comments'],
        'guestName': !(0, runtime_1.exists)(json, 'guestName') ? undefined : json['guestName'],
        'guestPreferredLanguage': !(0, runtime_1.exists)(json, 'guestPreferredLanguage') ? undefined : json['guestPreferredLanguage'],
        'lastHotelCode': !(0, runtime_1.exists)(json, 'lastHotelCode') ? undefined : json['lastHotelCode'],
        'lastStayDate': !(0, runtime_1.exists)(json, 'lastStayDate') ? undefined : json['lastStayDate'],
        'membership': !(0, runtime_1.exists)(json, 'membership') ? undefined : (0, MembershipType_1.MembershipTypeFromJSON)(json['membership']),
        'preference': !(0, runtime_1.exists)(json, 'preference') ? undefined : json['preference'],
        'preference2': !(0, runtime_1.exists)(json, 'preference2') ? undefined : json['preference2'],
        'totalBrandStay': !(0, runtime_1.exists)(json, 'totalBrandStay') ? undefined : json['totalBrandStay'],
        'totalStay': !(0, runtime_1.exists)(json, 'totalStay') ? undefined : json['totalStay'],
        'vipStatus': !(0, runtime_1.exists)(json, 'vipStatus') ? undefined : (0, VIPStatusType_1.VIPStatusTypeFromJSON)(json['vipStatus']),
    };
}
exports.AlertGuestInfoTypeFromJSONTyped = AlertGuestInfoTypeFromJSONTyped;
function AlertGuestInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'birthDate': value.birthDate,
        'birthDateMasked': value.birthDateMasked,
        'comments': value.comments,
        'guestName': value.guestName,
        'guestPreferredLanguage': value.guestPreferredLanguage,
        'lastHotelCode': value.lastHotelCode,
        'lastStayDate': value.lastStayDate,
        'membership': (0, MembershipType_1.MembershipTypeToJSON)(value.membership),
        'preference': value.preference,
        'preference2': value.preference2,
        'totalBrandStay': value.totalBrandStay,
        'totalStay': value.totalStay,
        'vipStatus': (0, VIPStatusType_1.VIPStatusTypeToJSON)(value.vipStatus),
    };
}
exports.AlertGuestInfoTypeToJSON = AlertGuestInfoTypeToJSON;
