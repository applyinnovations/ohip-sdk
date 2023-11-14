"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoldRoomsToJSON = exports.HoldRoomsFromJSONTyped = exports.HoldRoomsFromJSON = exports.instanceOfHoldRooms = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const RoomsHoldsType_1 = require("./RoomsHoldsType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the HoldRooms interface.
 */
function instanceOfHoldRooms(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHoldRooms = instanceOfHoldRooms;
function HoldRoomsFromJSON(json) {
    return HoldRoomsFromJSONTyped(json, false);
}
exports.HoldRoomsFromJSON = HoldRoomsFromJSON;
function HoldRoomsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'holdRoomsDetails': !(0, runtime_1.exists)(json, 'holdRoomsDetails') ? undefined : (0, RoomsHoldsType_1.RoomsHoldsTypeFromJSON)(json['holdRoomsDetails']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'overrideRoomHold': !(0, runtime_1.exists)(json, 'overrideRoomHold') ? undefined : json['overrideRoomHold'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.HoldRoomsFromJSONTyped = HoldRoomsFromJSONTyped;
function HoldRoomsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'holdRoomsDetails': (0, RoomsHoldsType_1.RoomsHoldsTypeToJSON)(value.holdRoomsDetails),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'overrideRoomHold': value.overrideRoomHold,
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.HoldRoomsToJSON = HoldRoomsToJSON;