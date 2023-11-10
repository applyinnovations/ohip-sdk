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
exports.RoomRoutingRefreshToJSON = exports.RoomRoutingRefreshFromJSONTyped = exports.RoomRoutingRefreshFromJSON = exports.instanceOfRoomRoutingRefresh = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const RoomRoutingRefreshCriteriaType_1 = require("./RoomRoutingRefreshCriteriaType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the RoomRoutingRefresh interface.
 */
function instanceOfRoomRoutingRefresh(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomRoutingRefresh = instanceOfRoomRoutingRefresh;
function RoomRoutingRefreshFromJSON(json) {
    return RoomRoutingRefreshFromJSONTyped(json, false);
}
exports.RoomRoutingRefreshFromJSON = RoomRoutingRefreshFromJSON;
function RoomRoutingRefreshFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'roomRoutingRefreshCriteria': !(0, runtime_1.exists)(json, 'roomRoutingRefreshCriteria') ? undefined : (0, RoomRoutingRefreshCriteriaType_1.RoomRoutingRefreshCriteriaTypeFromJSON)(json['roomRoutingRefreshCriteria']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.RoomRoutingRefreshFromJSONTyped = RoomRoutingRefreshFromJSONTyped;
function RoomRoutingRefreshToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'roomRoutingRefreshCriteria': (0, RoomRoutingRefreshCriteriaType_1.RoomRoutingRefreshCriteriaTypeToJSON)(value.roomRoutingRefreshCriteria),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.RoomRoutingRefreshToJSON = RoomRoutingRefreshToJSON;
