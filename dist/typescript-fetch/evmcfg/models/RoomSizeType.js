"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomSizeTypeToJSON = exports.RoomSizeTypeFromJSONTyped = exports.RoomSizeTypeFromJSON = exports.instanceOfRoomSizeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RoomSizeType interface.
 */
function instanceOfRoomSizeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomSizeType = instanceOfRoomSizeType;
function RoomSizeTypeFromJSON(json) {
    return RoomSizeTypeFromJSONTyped(json, false);
}
exports.RoomSizeTypeFromJSON = RoomSizeTypeFromJSON;
function RoomSizeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'area': !(0, runtime_1.exists)(json, 'area') ? undefined : json['area'],
        'length': !(0, runtime_1.exists)(json, 'length') ? undefined : json['length'],
        'maxHeight': !(0, runtime_1.exists)(json, 'maxHeight') ? undefined : json['maxHeight'],
        'minHeight': !(0, runtime_1.exists)(json, 'minHeight') ? undefined : json['minHeight'],
        'unitOfMeasureCode': !(0, runtime_1.exists)(json, 'unitOfMeasureCode') ? undefined : json['unitOfMeasureCode'],
        'width': !(0, runtime_1.exists)(json, 'width') ? undefined : json['width'],
    };
}
exports.RoomSizeTypeFromJSONTyped = RoomSizeTypeFromJSONTyped;
function RoomSizeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'area': value.area,
        'length': value.length,
        'maxHeight': value.maxHeight,
        'minHeight': value.minHeight,
        'unitOfMeasureCode': value.unitOfMeasureCode,
        'width': value.width,
    };
}
exports.RoomSizeTypeToJSON = RoomSizeTypeToJSON;
