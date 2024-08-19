"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StayReservationInfoTypeToJSON = exports.StayReservationInfoTypeFromJSONTyped = exports.StayReservationInfoTypeFromJSON = exports.instanceOfStayReservationInfoType = void 0;
const runtime_1 = require("../runtime");
const PMSResStatusType_1 = require("./PMSResStatusType");
const ResAttachedProfileType_1 = require("./ResAttachedProfileType");
const StayInfoType_1 = require("./StayInfoType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the StayReservationInfoType interface.
 */
function instanceOfStayReservationInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStayReservationInfoType = instanceOfStayReservationInfoType;
function StayReservationInfoTypeFromJSON(json) {
    return StayReservationInfoTypeFromJSONTyped(json, false);
}
exports.StayReservationInfoTypeFromJSON = StayReservationInfoTypeFromJSON;
function StayReservationInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attachedProfiles': !(0, runtime_1.exists)(json, 'attachedProfiles') ? undefined : (json['attachedProfiles'].map(ResAttachedProfileType_1.ResAttachedProfileTypeFromJSON)),
        'computedReservationStatus': !(0, runtime_1.exists)(json, 'computedReservationStatus') ? undefined : (0, PMSResStatusType_1.PMSResStatusTypeFromJSON)(json['computedReservationStatus']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (json['reservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'reservationStatus': !(0, runtime_1.exists)(json, 'reservationStatus') ? undefined : (0, PMSResStatusType_1.PMSResStatusTypeFromJSON)(json['reservationStatus']),
        'roomStay': !(0, runtime_1.exists)(json, 'roomStay') ? undefined : (0, StayInfoType_1.StayInfoTypeFromJSON)(json['roomStay']),
    };
}
exports.StayReservationInfoTypeFromJSONTyped = StayReservationInfoTypeFromJSONTyped;
function StayReservationInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attachedProfiles': value.attachedProfiles === undefined ? undefined : (value.attachedProfiles.map(ResAttachedProfileType_1.ResAttachedProfileTypeToJSON)),
        'computedReservationStatus': (0, PMSResStatusType_1.PMSResStatusTypeToJSON)(value.computedReservationStatus),
        'hotelId': value.hotelId,
        'reservationIdList': value.reservationIdList === undefined ? undefined : (value.reservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'reservationStatus': (0, PMSResStatusType_1.PMSResStatusTypeToJSON)(value.reservationStatus),
        'roomStay': (0, StayInfoType_1.StayInfoTypeToJSON)(value.roomStay),
    };
}
exports.StayReservationInfoTypeToJSON = StayReservationInfoTypeToJSON;
