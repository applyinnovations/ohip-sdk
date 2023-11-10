"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockReservationsTypeToJSON = exports.BlockReservationsTypeFromJSONTyped = exports.BlockReservationsTypeFromJSON = exports.instanceOfBlockReservationsType = void 0;
const runtime_1 = require("../runtime");
const HotelReservationsType_1 = require("./HotelReservationsType");
const RoomingListSharesType_1 = require("./RoomingListSharesType");
/**
 * Check if a given object implements the BlockReservationsType interface.
 */
function instanceOfBlockReservationsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockReservationsType = instanceOfBlockReservationsType;
function BlockReservationsTypeFromJSON(json) {
    return BlockReservationsTypeFromJSONTyped(json, false);
}
exports.BlockReservationsTypeFromJSON = BlockReservationsTypeFromJSON;
function BlockReservationsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'reservations': !(0, runtime_1.exists)(json, 'reservations') ? undefined : (0, HotelReservationsType_1.HotelReservationsTypeFromJSON)(json['reservations']),
        'shares': !(0, runtime_1.exists)(json, 'shares') ? undefined : (0, RoomingListSharesType_1.RoomingListSharesTypeFromJSON)(json['shares']),
    };
}
exports.BlockReservationsTypeFromJSONTyped = BlockReservationsTypeFromJSONTyped;
function BlockReservationsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'reservations': (0, HotelReservationsType_1.HotelReservationsTypeToJSON)(value.reservations),
        'shares': (0, RoomingListSharesType_1.RoomingListSharesTypeToJSON)(value.shares),
    };
}
exports.BlockReservationsTypeToJSON = BlockReservationsTypeToJSON;
