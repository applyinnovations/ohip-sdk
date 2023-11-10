"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutSplitMultiRoomReservationRequestToJSON = exports.PutSplitMultiRoomReservationRequestFromJSONTyped = exports.PutSplitMultiRoomReservationRequestFromJSON = exports.instanceOfPutSplitMultiRoomReservationRequest = void 0;
const runtime_1 = require("../runtime");
const CopyReservationPaymentMethodsType_1 = require("./CopyReservationPaymentMethodsType");
const Links_1 = require("./Links");
const ReservationId_1 = require("./ReservationId");
const SplitMultiRoomReservationResponseInstructions_1 = require("./SplitMultiRoomReservationResponseInstructions");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PutSplitMultiRoomReservationRequest interface.
 */
function instanceOfPutSplitMultiRoomReservationRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPutSplitMultiRoomReservationRequest = instanceOfPutSplitMultiRoomReservationRequest;
function PutSplitMultiRoomReservationRequestFromJSON(json) {
    return PutSplitMultiRoomReservationRequestFromJSONTyped(json, false);
}
exports.PutSplitMultiRoomReservationRequestFromJSON = PutSplitMultiRoomReservationRequestFromJSON;
function PutSplitMultiRoomReservationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'copyPaymentInformation': !(0, runtime_1.exists)(json, 'copyPaymentInformation') ? undefined : json['copyPaymentInformation'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'lockHandle': !(0, runtime_1.exists)(json, 'lockHandle') ? undefined : json['lockHandle'],
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'reservationPaymentMethods': !(0, runtime_1.exists)(json, 'reservationPaymentMethods') ? undefined : (0, CopyReservationPaymentMethodsType_1.CopyReservationPaymentMethodsTypeFromJSON)(json['reservationPaymentMethods']),
        'responseInstructions': !(0, runtime_1.exists)(json, 'responseInstructions') ? undefined : (0, SplitMultiRoomReservationResponseInstructions_1.SplitMultiRoomReservationResponseInstructionsFromJSON)(json['responseInstructions']),
        'splitAll': !(0, runtime_1.exists)(json, 'splitAll') ? undefined : json['splitAll'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PutSplitMultiRoomReservationRequestFromJSONTyped = PutSplitMultiRoomReservationRequestFromJSONTyped;
function PutSplitMultiRoomReservationRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'copyPaymentInformation': value.copyPaymentInformation,
        'links': (0, Links_1.LinksToJSON)(value.links),
        'lockHandle': value.lockHandle,
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'reservationPaymentMethods': (0, CopyReservationPaymentMethodsType_1.CopyReservationPaymentMethodsTypeToJSON)(value.reservationPaymentMethods),
        'responseInstructions': (0, SplitMultiRoomReservationResponseInstructions_1.SplitMultiRoomReservationResponseInstructionsToJSON)(value.responseInstructions),
        'splitAll': value.splitAll,
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PutSplitMultiRoomReservationRequestToJSON = PutSplitMultiRoomReservationRequestToJSON;
