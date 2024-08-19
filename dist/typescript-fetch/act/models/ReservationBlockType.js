"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationBlockTypeToJSON = exports.ReservationBlockTypeFromJSONTyped = exports.ReservationBlockTypeFromJSON = exports.instanceOfReservationBlockType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ReservationBlockType interface.
 */
function instanceOfReservationBlockType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationBlockType = instanceOfReservationBlockType;
function ReservationBlockTypeFromJSON(json) {
    return ReservationBlockTypeFromJSONTyped(json, false);
}
exports.ReservationBlockTypeFromJSON = ReservationBlockTypeFromJSON;
function ReservationBlockTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockIdList': !(0, runtime_1.exists)(json, 'blockIdList') ? undefined : (json['blockIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'blockName': !(0, runtime_1.exists)(json, 'blockName') ? undefined : json['blockName'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.ReservationBlockTypeFromJSONTyped = ReservationBlockTypeFromJSONTyped;
function ReservationBlockTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockIdList': value.blockIdList === undefined ? undefined : (value.blockIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'blockName': value.blockName,
        'hotelId': value.hotelId,
    };
}
exports.ReservationBlockTypeToJSON = ReservationBlockTypeToJSON;
