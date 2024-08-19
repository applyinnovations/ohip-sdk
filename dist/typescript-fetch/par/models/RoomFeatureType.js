"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomFeatureTypeToJSON = exports.RoomFeatureTypeFromJSONTyped = exports.RoomFeatureTypeFromJSON = exports.instanceOfRoomFeatureType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RoomFeatureType interface.
 */
function instanceOfRoomFeatureType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomFeatureType = instanceOfRoomFeatureType;
function RoomFeatureTypeFromJSON(json) {
    return RoomFeatureTypeFromJSONTyped(json, false);
}
exports.RoomFeatureTypeFromJSON = RoomFeatureTypeFromJSON;
function RoomFeatureTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
    };
}
exports.RoomFeatureTypeFromJSONTyped = RoomFeatureTypeFromJSONTyped;
function RoomFeatureTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'orderSequence': value.orderSequence,
        'quantity': value.quantity,
    };
}
exports.RoomFeatureTypeToJSON = RoomFeatureTypeToJSON;
