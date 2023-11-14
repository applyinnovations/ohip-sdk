"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRequestToJSON = exports.ServiceRequestFromJSONTyped = exports.ServiceRequestFromJSON = exports.instanceOfServiceRequest = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const ProfileId_1 = require("./ProfileId");
const ReservationIdList_1 = require("./ReservationIdList");
const ServiceRequestStatusType_1 = require("./ServiceRequestStatusType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ServiceRequest interface.
 */
function instanceOfServiceRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfServiceRequest = instanceOfServiceRequest;
function ServiceRequestFromJSON(json) {
    return ServiceRequestFromJSONTyped(json, false);
}
exports.ServiceRequestFromJSON = ServiceRequestFromJSON;
function ServiceRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'action': !(0, runtime_1.exists)(json, 'action') ? undefined : json['action'],
        'closeDescription': !(0, runtime_1.exists)(json, 'closeDescription') ? undefined : json['closeDescription'],
        'closedBy': !(0, runtime_1.exists)(json, 'closedBy') ? undefined : json['closedBy'],
        'closedDate': !(0, runtime_1.exists)(json, 'closedDate') ? undefined : json['closedDate'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'comment': !(0, runtime_1.exists)(json, 'comment') ? undefined : json['comment'],
        'completionDate': !(0, runtime_1.exists)(json, 'completionDate') ? undefined : json['completionDate'],
        'department': !(0, runtime_1.exists)(json, 'department') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['department']),
        'guaranteedBy': !(0, runtime_1.exists)(json, 'guaranteedBy') ? undefined : json['guaranteedBy'],
        'guestContactMethod': !(0, runtime_1.exists)(json, 'guestContactMethod') ? undefined : json['guestContactMethod'],
        'guestName': !(0, runtime_1.exists)(json, 'guestName') ? undefined : json['guestName'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'openDate': !(0, runtime_1.exists)(json, 'openDate') ? undefined : json['openDate'],
        'priority': !(0, runtime_1.exists)(json, 'priority') ? undefined : json['priority'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (0, ReservationIdList_1.ReservationIdListFromJSON)(json['reservationIdList']),
        'room': !(0, runtime_1.exists)(json, 'room') ? undefined : json['room'],
        'serviceRequestId': !(0, runtime_1.exists)(json, 'serviceRequestId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['serviceRequestId']),
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : (0, ServiceRequestStatusType_1.ServiceRequestStatusTypeFromJSON)(json['status']),
    };
}
exports.ServiceRequestFromJSONTyped = ServiceRequestFromJSONTyped;
function ServiceRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'action': value.action,
        'closeDescription': value.closeDescription,
        'closedBy': value.closedBy,
        'closedDate': value.closedDate,
        'code': value.code,
        'comment': value.comment,
        'completionDate': value.completionDate,
        'department': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.department),
        'guaranteedBy': value.guaranteedBy,
        'guestContactMethod': value.guestContactMethod,
        'guestName': value.guestName,
        'hotelId': value.hotelId,
        'openDate': value.openDate,
        'priority': value.priority,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'reservationIdList': (0, ReservationIdList_1.ReservationIdListToJSON)(value.reservationIdList),
        'room': value.room,
        'serviceRequestId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.serviceRequestId),
        'status': (0, ServiceRequestStatusType_1.ServiceRequestStatusTypeToJSON)(value.status),
    };
}
exports.ServiceRequestToJSON = ServiceRequestToJSON;