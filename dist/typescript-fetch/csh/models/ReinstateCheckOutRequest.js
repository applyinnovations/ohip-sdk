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
exports.ReinstateCheckOutRequestToJSON = exports.ReinstateCheckOutRequestFromJSONTyped = exports.ReinstateCheckOutRequestFromJSON = exports.instanceOfReinstateCheckOutRequest = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const ReservationId_1 = require("./ReservationId");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ReinstateCheckOutRequest interface.
 */
function instanceOfReinstateCheckOutRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReinstateCheckOutRequest = instanceOfReinstateCheckOutRequest;
function ReinstateCheckOutRequestFromJSON(json) {
    return ReinstateCheckOutRequestFromJSONTyped(json, false);
}
exports.ReinstateCheckOutRequestFromJSON = ReinstateCheckOutRequestFromJSON;
function ReinstateCheckOutRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'notifyInterfaces': !(0, runtime_1.exists)(json, 'notifyInterfaces') ? undefined : json['notifyInterfaces'],
        'overrideFlag': !(0, runtime_1.exists)(json, 'overrideFlag') ? undefined : json['overrideFlag'],
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ReinstateCheckOutRequestFromJSONTyped = ReinstateCheckOutRequestFromJSONTyped;
function ReinstateCheckOutRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierId': value.cashierId,
        'hotelId': value.hotelId,
        'links': (0, Links_1.LinksToJSON)(value.links),
        'notifyInterfaces': value.notifyInterfaces,
        'overrideFlag': value.overrideFlag,
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ReinstateCheckOutRequestToJSON = ReinstateCheckOutRequestToJSON;
