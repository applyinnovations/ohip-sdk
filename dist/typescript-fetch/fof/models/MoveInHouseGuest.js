"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveInHouseGuestToJSON = exports.MoveInHouseGuestFromJSONTyped = exports.MoveInHouseGuestFromJSON = exports.instanceOfMoveInHouseGuest = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const MoveInHouseGuestCriteria_1 = require("./MoveInHouseGuestCriteria");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the MoveInHouseGuest interface.
 */
function instanceOfMoveInHouseGuest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMoveInHouseGuest = instanceOfMoveInHouseGuest;
function MoveInHouseGuestFromJSON(json) {
    return MoveInHouseGuestFromJSONTyped(json, false);
}
exports.MoveInHouseGuestFromJSON = MoveInHouseGuestFromJSON;
function MoveInHouseGuestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, MoveInHouseGuestCriteria_1.MoveInHouseGuestCriteriaFromJSON)(json['criteria']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.MoveInHouseGuestFromJSONTyped = MoveInHouseGuestFromJSONTyped;
function MoveInHouseGuestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, MoveInHouseGuestCriteria_1.MoveInHouseGuestCriteriaToJSON)(value.criteria),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.MoveInHouseGuestToJSON = MoveInHouseGuestToJSON;
