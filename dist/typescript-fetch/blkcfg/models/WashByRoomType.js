"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WashByRoomTypeToJSON = exports.WashByRoomTypeFromJSONTyped = exports.WashByRoomTypeFromJSON = exports.instanceOfWashByRoomType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the WashByRoomType interface.
 */
function instanceOfWashByRoomType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfWashByRoomType = instanceOfWashByRoomType;
function WashByRoomTypeFromJSON(json) {
    return WashByRoomTypeFromJSONTyped(json, false);
}
exports.WashByRoomTypeFromJSON = WashByRoomTypeFromJSON;
function WashByRoomTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'occupancy1': !(0, runtime_1.exists)(json, 'occupancy1') ? undefined : json['occupancy1'],
        'occupancy2': !(0, runtime_1.exists)(json, 'occupancy2') ? undefined : json['occupancy2'],
        'occupancy3': !(0, runtime_1.exists)(json, 'occupancy3') ? undefined : json['occupancy3'],
        'occupancy4': !(0, runtime_1.exists)(json, 'occupancy4') ? undefined : json['occupancy4'],
        'sell': !(0, runtime_1.exists)(json, 'sell') ? undefined : json['sell'],
    };
}
exports.WashByRoomTypeFromJSONTyped = WashByRoomTypeFromJSONTyped;
function WashByRoomTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'occupancy1': value.occupancy1,
        'occupancy2': value.occupancy2,
        'occupancy3': value.occupancy3,
        'occupancy4': value.occupancy4,
        'sell': value.sell,
    };
}
exports.WashByRoomTypeToJSON = WashByRoomTypeToJSON;
