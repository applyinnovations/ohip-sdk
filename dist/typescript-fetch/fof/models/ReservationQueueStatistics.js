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
exports.ReservationQueueStatisticsToJSON = exports.ReservationQueueStatisticsFromJSONTyped = exports.ReservationQueueStatisticsFromJSON = exports.instanceOfReservationQueueStatistics = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const ReservationQueueStatisticsType_1 = require("./ReservationQueueStatisticsType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ReservationQueueStatistics interface.
 */
function instanceOfReservationQueueStatistics(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationQueueStatistics = instanceOfReservationQueueStatistics;
function ReservationQueueStatisticsFromJSON(json) {
    return ReservationQueueStatisticsFromJSONTyped(json, false);
}
exports.ReservationQueueStatisticsFromJSON = ReservationQueueStatisticsFromJSON;
function ReservationQueueStatisticsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'statistics': !(0, runtime_1.exists)(json, 'statistics') ? undefined : (0, ReservationQueueStatisticsType_1.ReservationQueueStatisticsTypeFromJSON)(json['statistics']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ReservationQueueStatisticsFromJSONTyped = ReservationQueueStatisticsFromJSONTyped;
function ReservationQueueStatisticsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'statistics': (0, ReservationQueueStatisticsType_1.ReservationQueueStatisticsTypeToJSON)(value.statistics),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ReservationQueueStatisticsToJSON = ReservationQueueStatisticsToJSON;
