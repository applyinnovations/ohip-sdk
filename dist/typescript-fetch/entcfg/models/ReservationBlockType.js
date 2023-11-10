"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationBlockTypeToJSON = exports.ReservationBlockTypeFromJSONTyped = exports.ReservationBlockTypeFromJSON = exports.instanceOfReservationBlockType = void 0;
const runtime_1 = require("../runtime");
const BlockIdList_1 = require("./BlockIdList");
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
        'blockIdList': !(0, runtime_1.exists)(json, 'blockIdList') ? undefined : (0, BlockIdList_1.BlockIdListFromJSON)(json['blockIdList']),
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
        'blockIdList': (0, BlockIdList_1.BlockIdListToJSON)(value.blockIdList),
        'blockName': value.blockName,
        'hotelId': value.hotelId,
    };
}
exports.ReservationBlockTypeToJSON = ReservationBlockTypeToJSON;
