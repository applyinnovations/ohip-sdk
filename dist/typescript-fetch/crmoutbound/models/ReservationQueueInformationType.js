"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationQueueInformationTypeToJSON = exports.ReservationQueueInformationTypeFromJSONTyped = exports.ReservationQueueInformationTypeFromJSON = exports.instanceOfReservationQueueInformationType = void 0;
const runtime_1 = require("../runtime");
const QueueTextInfoType_1 = require("./QueueTextInfoType");
const ReservationQueueInformationTypeTimeSpan_1 = require("./ReservationQueueInformationTypeTimeSpan");
/**
 * Check if a given object implements the ReservationQueueInformationType interface.
 */
function instanceOfReservationQueueInformationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationQueueInformationType = instanceOfReservationQueueInformationType;
function ReservationQueueInformationTypeFromJSON(json) {
    return ReservationQueueInformationTypeFromJSONTyped(json, false);
}
exports.ReservationQueueInformationTypeFromJSON = ReservationQueueInformationTypeFromJSON;
function ReservationQueueInformationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, ReservationQueueInformationTypeTimeSpan_1.ReservationQueueInformationTypeTimeSpanFromJSON)(json['timeSpan']),
        'guestTextInfo': !(0, runtime_1.exists)(json, 'guestTextInfo') ? undefined : (0, QueueTextInfoType_1.QueueTextInfoTypeFromJSON)(json['guestTextInfo']),
        'priority': !(0, runtime_1.exists)(json, 'priority') ? undefined : json['priority'],
        'avgQueueTimeToCheckIn': !(0, runtime_1.exists)(json, 'avgQueueTimeToCheckIn') ? undefined : json['avgQueueTimeToCheckIn'],
        'avgQueueTimeCurrentReservations': !(0, runtime_1.exists)(json, 'avgQueueTimeCurrentReservations') ? undefined : json['avgQueueTimeCurrentReservations'],
        'queueDate': !(0, runtime_1.exists)(json, 'queueDate') ? undefined : (new Date(json['queueDate'])),
    };
}
exports.ReservationQueueInformationTypeFromJSONTyped = ReservationQueueInformationTypeFromJSONTyped;
function ReservationQueueInformationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'timeSpan': (0, ReservationQueueInformationTypeTimeSpan_1.ReservationQueueInformationTypeTimeSpanToJSON)(value.timeSpan),
        'guestTextInfo': (0, QueueTextInfoType_1.QueueTextInfoTypeToJSON)(value.guestTextInfo),
        'priority': value.priority,
        'avgQueueTimeToCheckIn': value.avgQueueTimeToCheckIn,
        'avgQueueTimeCurrentReservations': value.avgQueueTimeCurrentReservations,
        'queueDate': value.queueDate === undefined ? undefined : (value.queueDate.toISOString().substring(0, 10)),
    };
}
exports.ReservationQueueInformationTypeToJSON = ReservationQueueInformationTypeToJSON;