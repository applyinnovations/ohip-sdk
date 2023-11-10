"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvanceRoomChargesInfoTypeToJSON = exports.AdvanceRoomChargesInfoTypeFromJSONTyped = exports.AdvanceRoomChargesInfoTypeFromJSON = exports.instanceOfAdvanceRoomChargesInfoType = void 0;
const runtime_1 = require("../runtime");
const ReservationInfoType_1 = require("./ReservationInfoType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the AdvanceRoomChargesInfoType interface.
 */
function instanceOfAdvanceRoomChargesInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAdvanceRoomChargesInfoType = instanceOfAdvanceRoomChargesInfoType;
function AdvanceRoomChargesInfoTypeFromJSON(json) {
    return AdvanceRoomChargesInfoTypeFromJSONTyped(json, false);
}
exports.AdvanceRoomChargesInfoTypeFromJSON = AdvanceRoomChargesInfoTypeFromJSON;
function AdvanceRoomChargesInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'availablePostingDates': !(0, runtime_1.exists)(json, 'availablePostingDates') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['availablePostingDates']),
        'generatedForEntireStay': !(0, runtime_1.exists)(json, 'generatedForEntireStay') ? undefined : json['generatedForEntireStay'],
        'lastRoomAndTaxPostedDate': !(0, runtime_1.exists)(json, 'lastRoomAndTaxPostedDate') ? undefined : (new Date(json['lastRoomAndTaxPostedDate'])),
        'reservation': !(0, runtime_1.exists)(json, 'reservation') ? undefined : (0, ReservationInfoType_1.ReservationInfoTypeFromJSON)(json['reservation']),
    };
}
exports.AdvanceRoomChargesInfoTypeFromJSONTyped = AdvanceRoomChargesInfoTypeFromJSONTyped;
function AdvanceRoomChargesInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'availablePostingDates': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.availablePostingDates),
        'generatedForEntireStay': value.generatedForEntireStay,
        'lastRoomAndTaxPostedDate': value.lastRoomAndTaxPostedDate === undefined ? undefined : (value.lastRoomAndTaxPostedDate.toISOString().substr(0, 10)),
        'reservation': (0, ReservationInfoType_1.ReservationInfoTypeToJSON)(value.reservation),
    };
}
exports.AdvanceRoomChargesInfoTypeToJSON = AdvanceRoomChargesInfoTypeToJSON;
