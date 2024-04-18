"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
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
        'averageQueueTimeToCheckIn': !(0, runtime_1.exists)(json, 'averageQueueTimeToCheckIn') ? undefined : json['averageQueueTimeToCheckIn'],
        'averageQueueTimeCurrentReservations': !(0, runtime_1.exists)(json, 'averageQueueTimeCurrentReservations') ? undefined : json['averageQueueTimeCurrentReservations'],
        'queueDate': !(0, runtime_1.exists)(json, 'queueDate') ? undefined : json['queueDate'],
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
        'averageQueueTimeToCheckIn': value.averageQueueTimeToCheckIn,
        'averageQueueTimeCurrentReservations': value.averageQueueTimeCurrentReservations,
        'queueDate': value.queueDate,
    };
}
exports.ReservationQueueInformationTypeToJSON = ReservationQueueInformationTypeToJSON;