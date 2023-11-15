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
exports.TrackItItemTypeToJSON = exports.TrackItItemTypeFromJSONTyped = exports.TrackItItemTypeFromJSON = exports.instanceOfTrackItItemType = void 0;
const runtime_1 = require("../runtime");
const ApplicationUserType_1 = require("./ApplicationUserType");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const TrackItActionType_1 = require("./TrackItActionType");
const TrackItGroup_1 = require("./TrackItGroup");
const TrackItId_1 = require("./TrackItId");
const TrackItLogType_1 = require("./TrackItLogType");
const TrackItReservationInfoType_1 = require("./TrackItReservationInfoType");
const TrackItType_1 = require("./TrackItType");
/**
 * Check if a given object implements the TrackItItemType interface.
 */
function instanceOfTrackItItemType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTrackItItemType = instanceOfTrackItItemType;
function TrackItItemTypeFromJSON(json) {
    return TrackItItemTypeFromJSONTyped(json, false);
}
exports.TrackItItemTypeFromJSON = TrackItItemTypeFromJSON;
function TrackItItemTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'action': !(0, runtime_1.exists)(json, 'action') ? undefined : (0, TrackItActionType_1.TrackItActionTypeFromJSON)(json['action']),
        'assignedTo': !(0, runtime_1.exists)(json, 'assignedTo') ? undefined : (0, ApplicationUserType_1.ApplicationUserTypeFromJSON)(json['assignedTo']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'followUpDate': !(0, runtime_1.exists)(json, 'followUpDate') ? undefined : json['followUpDate'],
        'group': !(0, runtime_1.exists)(json, 'group') ? undefined : (0, TrackItGroup_1.TrackItGroupFromJSON)(json['group']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'location': !(0, runtime_1.exists)(json, 'location') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['location']),
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'referenceNumber': !(0, runtime_1.exists)(json, 'referenceNumber') ? undefined : json['referenceNumber'],
        'reservationInfo': !(0, runtime_1.exists)(json, 'reservationInfo') ? undefined : (0, TrackItReservationInfoType_1.TrackItReservationInfoTypeFromJSON)(json['reservationInfo']),
        'ticketNumber': !(0, runtime_1.exists)(json, 'ticketNumber') ? undefined : json['ticketNumber'],
        'trackItId': !(0, runtime_1.exists)(json, 'trackItId') ? undefined : (0, TrackItId_1.TrackItIdFromJSON)(json['trackItId']),
        'trackItLogList': !(0, runtime_1.exists)(json, 'trackItLogList') ? undefined : (json['trackItLogList'].map(TrackItLogType_1.TrackItLogTypeFromJSON)),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : (0, TrackItType_1.TrackItTypeFromJSON)(json['type']),
    };
}
exports.TrackItItemTypeFromJSONTyped = TrackItItemTypeFromJSONTyped;
function TrackItItemTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'action': (0, TrackItActionType_1.TrackItActionTypeToJSON)(value.action),
        'assignedTo': (0, ApplicationUserType_1.ApplicationUserTypeToJSON)(value.assignedTo),
        'description': value.description,
        'followUpDate': value.followUpDate,
        'group': (0, TrackItGroup_1.TrackItGroupToJSON)(value.group),
        'hotelId': value.hotelId,
        'location': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.location),
        'quantity': value.quantity,
        'referenceNumber': value.referenceNumber,
        'reservationInfo': (0, TrackItReservationInfoType_1.TrackItReservationInfoTypeToJSON)(value.reservationInfo),
        'ticketNumber': value.ticketNumber,
        'trackItId': (0, TrackItId_1.TrackItIdToJSON)(value.trackItId),
        'trackItLogList': value.trackItLogList === undefined ? undefined : (value.trackItLogList.map(TrackItLogType_1.TrackItLogTypeToJSON)),
        'type': (0, TrackItType_1.TrackItTypeToJSON)(value.type),
    };
}
exports.TrackItItemTypeToJSON = TrackItItemTypeToJSON;
