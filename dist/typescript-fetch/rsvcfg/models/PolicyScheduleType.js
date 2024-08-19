"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyScheduleTypeToJSON = exports.PolicyScheduleTypeFromJSONTyped = exports.PolicyScheduleTypeFromJSON = exports.instanceOfPolicyScheduleType = void 0;
const runtime_1 = require("../runtime");
const PolicyScheduleDetailType_1 = require("./PolicyScheduleDetailType");
const PolicyTypeType_1 = require("./PolicyTypeType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the PolicyScheduleType interface.
 */
function instanceOfPolicyScheduleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPolicyScheduleType = instanceOfPolicyScheduleType;
function PolicyScheduleTypeFromJSON(json) {
    return PolicyScheduleTypeFromJSONTyped(json, false);
}
exports.PolicyScheduleTypeFromJSON = PolicyScheduleTypeFromJSON;
function PolicyScheduleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'policyType': !(0, runtime_1.exists)(json, 'policyType') ? undefined : (0, PolicyTypeType_1.PolicyTypeTypeFromJSON)(json['policyType']),
        'scheduleDetail': !(0, runtime_1.exists)(json, 'scheduleDetail') ? undefined : (0, PolicyScheduleDetailType_1.PolicyScheduleDetailTypeFromJSON)(json['scheduleDetail']),
        'scheduleId': !(0, runtime_1.exists)(json, 'scheduleId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['scheduleId']),
    };
}
exports.PolicyScheduleTypeFromJSONTyped = PolicyScheduleTypeFromJSONTyped;
function PolicyScheduleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'policyType': (0, PolicyTypeType_1.PolicyTypeTypeToJSON)(value.policyType),
        'scheduleDetail': (0, PolicyScheduleDetailType_1.PolicyScheduleDetailTypeToJSON)(value.scheduleDetail),
        'scheduleId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.scheduleId),
    };
}
exports.PolicyScheduleTypeToJSON = PolicyScheduleTypeToJSON;
