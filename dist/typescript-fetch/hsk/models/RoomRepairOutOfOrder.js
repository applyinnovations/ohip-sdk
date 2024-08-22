"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRepairOutOfOrderToJSON = exports.RoomRepairOutOfOrderFromJSONTyped = exports.RoomRepairOutOfOrderFromJSON = exports.instanceOfRoomRepairOutOfOrder = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const RoomRepairOutOfOrderCriteria_1 = require("./RoomRepairOutOfOrderCriteria");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the RoomRepairOutOfOrder interface.
 */
function instanceOfRoomRepairOutOfOrder(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomRepairOutOfOrder = instanceOfRoomRepairOutOfOrder;
function RoomRepairOutOfOrderFromJSON(json) {
    return RoomRepairOutOfOrderFromJSONTyped(json, false);
}
exports.RoomRepairOutOfOrderFromJSON = RoomRepairOutOfOrderFromJSON;
function RoomRepairOutOfOrderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, RoomRepairOutOfOrderCriteria_1.RoomRepairOutOfOrderCriteriaFromJSON)(json['criteria']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.RoomRepairOutOfOrderFromJSONTyped = RoomRepairOutOfOrderFromJSONTyped;
function RoomRepairOutOfOrderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, RoomRepairOutOfOrderCriteria_1.RoomRepairOutOfOrderCriteriaToJSON)(value.criteria),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.RoomRepairOutOfOrderToJSON = RoomRepairOutOfOrderToJSON;
