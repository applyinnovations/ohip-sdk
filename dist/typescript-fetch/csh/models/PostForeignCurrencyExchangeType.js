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
exports.PostForeignCurrencyExchangeTypeToJSON = exports.PostForeignCurrencyExchangeTypeFromJSONTyped = exports.PostForeignCurrencyExchangeTypeFromJSON = exports.instanceOfPostForeignCurrencyExchangeType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const CurrencyExchangeType_1 = require("./CurrencyExchangeType");
const ProfileId_1 = require("./ProfileId");
const ReservationId_1 = require("./ReservationId");
/**
 * Check if a given object implements the PostForeignCurrencyExchangeType interface.
 */
function instanceOfPostForeignCurrencyExchangeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostForeignCurrencyExchangeType = instanceOfPostForeignCurrencyExchangeType;
function PostForeignCurrencyExchangeTypeFromJSON(json) {
    return PostForeignCurrencyExchangeTypeFromJSONTyped(json, false);
}
exports.PostForeignCurrencyExchangeTypeFromJSON = PostForeignCurrencyExchangeTypeFromJSON;
function PostForeignCurrencyExchangeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'exchangeDate': !(0, runtime_1.exists)(json, 'exchangeDate') ? undefined : json['exchangeDate'],
        'exchangeReference': !(0, runtime_1.exists)(json, 'exchangeReference') ? undefined : json['exchangeReference'],
        'exchangeType': !(0, runtime_1.exists)(json, 'exchangeType') ? undefined : (0, CurrencyExchangeType_1.CurrencyExchangeTypeFromJSON)(json['exchangeType']),
        'fromCurrencyAmount': !(0, runtime_1.exists)(json, 'fromCurrencyAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['fromCurrencyAmount']),
        'guestName': !(0, runtime_1.exists)(json, 'guestName') ? undefined : json['guestName'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'passerByName': !(0, runtime_1.exists)(json, 'passerByName') ? undefined : json['passerByName'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'room': !(0, runtime_1.exists)(json, 'room') ? undefined : json['room'],
        'sell': !(0, runtime_1.exists)(json, 'sell') ? undefined : json['sell'],
    };
}
exports.PostForeignCurrencyExchangeTypeFromJSONTyped = PostForeignCurrencyExchangeTypeFromJSONTyped;
function PostForeignCurrencyExchangeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierId': value.cashierId,
        'exchangeDate': value.exchangeDate,
        'exchangeReference': value.exchangeReference,
        'exchangeType': (0, CurrencyExchangeType_1.CurrencyExchangeTypeToJSON)(value.exchangeType),
        'fromCurrencyAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.fromCurrencyAmount),
        'guestName': value.guestName,
        'hotelId': value.hotelId,
        'passerByName': value.passerByName,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'room': value.room,
        'sell': value.sell,
    };
}
exports.PostForeignCurrencyExchangeTypeToJSON = PostForeignCurrencyExchangeTypeToJSON;