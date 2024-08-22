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
exports.HousekeepingTypeToJSON = exports.HousekeepingTypeFromJSONTyped = exports.HousekeepingTypeFromJSON = exports.instanceOfHousekeepingType = void 0;
const runtime_1 = require("../runtime");
const GuestHousekeepingServiceRequestType_1 = require("./GuestHousekeepingServiceRequestType");
const RoomCleaningPriorityType_1 = require("./RoomCleaningPriorityType");
const RoomConditionType_1 = require("./RoomConditionType");
const RoomPersonsType_1 = require("./RoomPersonsType");
const RoomStatusType_1 = require("./RoomStatusType");
/**
 * Check if a given object implements the HousekeepingType interface.
 */
function instanceOfHousekeepingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHousekeepingType = instanceOfHousekeepingType;
function HousekeepingTypeFromJSON(json) {
    return HousekeepingTypeFromJSONTyped(json, false);
}
exports.HousekeepingTypeFromJSON = HousekeepingTypeFromJSON;
function HousekeepingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cleaningPriority': !(0, runtime_1.exists)(json, 'cleaningPriority') ? undefined : (0, RoomCleaningPriorityType_1.RoomCleaningPriorityTypeFromJSON)(json['cleaningPriority']),
        'facilityTaskCode': !(0, runtime_1.exists)(json, 'facilityTaskCode') ? undefined : json['facilityTaskCode'],
        'guestServiceRequest': !(0, runtime_1.exists)(json, 'guestServiceRequest') ? undefined : (0, GuestHousekeepingServiceRequestType_1.GuestHousekeepingServiceRequestTypeFromJSON)(json['guestServiceRequest']),
        'housekeepingRoomStatus': !(0, runtime_1.exists)(json, 'housekeepingRoomStatus') ? undefined : (0, RoomStatusType_1.RoomStatusTypeFromJSON)(json['housekeepingRoomStatus']),
        'linenChange': !(0, runtime_1.exists)(json, 'linenChange') ? undefined : json['linenChange'],
        'roomCondition': !(0, runtime_1.exists)(json, 'roomCondition') ? undefined : (0, RoomConditionType_1.RoomConditionTypeFromJSON)(json['roomCondition']),
        'roomPersons': !(0, runtime_1.exists)(json, 'roomPersons') ? undefined : (0, RoomPersonsType_1.RoomPersonsTypeFromJSON)(json['roomPersons']),
    };
}
exports.HousekeepingTypeFromJSONTyped = HousekeepingTypeFromJSONTyped;
function HousekeepingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cleaningPriority': (0, RoomCleaningPriorityType_1.RoomCleaningPriorityTypeToJSON)(value.cleaningPriority),
        'facilityTaskCode': value.facilityTaskCode,
        'guestServiceRequest': (0, GuestHousekeepingServiceRequestType_1.GuestHousekeepingServiceRequestTypeToJSON)(value.guestServiceRequest),
        'housekeepingRoomStatus': (0, RoomStatusType_1.RoomStatusTypeToJSON)(value.housekeepingRoomStatus),
        'linenChange': value.linenChange,
        'roomCondition': (0, RoomConditionType_1.RoomConditionTypeToJSON)(value.roomCondition),
        'roomPersons': (0, RoomPersonsType_1.RoomPersonsTypeToJSON)(value.roomPersons),
    };
}
exports.HousekeepingTypeToJSON = HousekeepingTypeToJSON;
