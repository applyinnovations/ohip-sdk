"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResHousekeepingTypeToJSON = exports.ResHousekeepingTypeFromJSONTyped = exports.ResHousekeepingTypeFromJSON = exports.instanceOfResHousekeepingType = void 0;
const runtime_1 = require("../runtime");
const FacilityTaskType_1 = require("./FacilityTaskType");
const HousekeepingRoomStatusType_1 = require("./HousekeepingRoomStatusType");
/**
 * Check if a given object implements the ResHousekeepingType interface.
 */
function instanceOfResHousekeepingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResHousekeepingType = instanceOfResHousekeepingType;
function ResHousekeepingTypeFromJSON(json) {
    return ResHousekeepingTypeFromJSONTyped(json, false);
}
exports.ResHousekeepingTypeFromJSON = ResHousekeepingTypeFromJSON;
function ResHousekeepingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'expectedServiceTime': !(0, runtime_1.exists)(json, 'expectedServiceTime') ? undefined : json['expectedServiceTime'],
        'facilityTaskInfo': !(0, runtime_1.exists)(json, 'facilityTaskInfo') ? undefined : (0, FacilityTaskType_1.FacilityTaskTypeFromJSON)(json['facilityTaskInfo']),
        'instructions': !(0, runtime_1.exists)(json, 'instructions') ? undefined : json['instructions'],
        'linenChange': !(0, runtime_1.exists)(json, 'linenChange') ? undefined : json['linenChange'],
        'roomStatus': !(0, runtime_1.exists)(json, 'roomStatus') ? undefined : (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeFromJSON)(json['roomStatus']),
        'serviceTime': !(0, runtime_1.exists)(json, 'serviceTime') ? undefined : json['serviceTime'],
        'turndownRequested': !(0, runtime_1.exists)(json, 'turndownRequested') ? undefined : json['turndownRequested'],
    };
}
exports.ResHousekeepingTypeFromJSONTyped = ResHousekeepingTypeFromJSONTyped;
function ResHousekeepingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'expectedServiceTime': value.expectedServiceTime,
        'facilityTaskInfo': (0, FacilityTaskType_1.FacilityTaskTypeToJSON)(value.facilityTaskInfo),
        'instructions': value.instructions,
        'linenChange': value.linenChange,
        'roomStatus': (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeToJSON)(value.roomStatus),
        'serviceTime': value.serviceTime,
        'turndownRequested': value.turndownRequested,
    };
}
exports.ResHousekeepingTypeToJSON = ResHousekeepingTypeToJSON;