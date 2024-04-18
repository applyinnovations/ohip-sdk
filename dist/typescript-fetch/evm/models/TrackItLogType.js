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
exports.TrackItLogTypeToJSON = exports.TrackItLogTypeFromJSONTyped = exports.TrackItLogTypeFromJSON = exports.instanceOfTrackItLogType = void 0;
const runtime_1 = require("../runtime");
const TrackItId_1 = require("./TrackItId");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the TrackItLogType interface.
 */
function instanceOfTrackItLogType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTrackItLogType = instanceOfTrackItLogType;
function TrackItLogTypeFromJSON(json) {
    return TrackItLogTypeFromJSONTyped(json, false);
}
exports.TrackItLogTypeFromJSON = TrackItLogTypeFromJSON;
function TrackItLogTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'businessDate': !(0, runtime_1.exists)(json, 'businessDate') ? undefined : json['businessDate'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'logDate': !(0, runtime_1.exists)(json, 'logDate') ? undefined : json['logDate'],
        'logUserId': !(0, runtime_1.exists)(json, 'logUserId') ? undefined : json['logUserId'],
        'logUserName': !(0, runtime_1.exists)(json, 'logUserName') ? undefined : json['logUserName'],
        'trackItId': !(0, runtime_1.exists)(json, 'trackItId') ? undefined : (0, TrackItId_1.TrackItIdFromJSON)(json['trackItId']),
        'trackItLogId': !(0, runtime_1.exists)(json, 'trackItLogId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['trackItLogId']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.TrackItLogTypeFromJSONTyped = TrackItLogTypeFromJSONTyped;
function TrackItLogTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'businessDate': value.businessDate,
        'description': value.description,
        'hotelId': value.hotelId,
        'logDate': value.logDate,
        'logUserId': value.logUserId,
        'logUserName': value.logUserName,
        'trackItId': (0, TrackItId_1.TrackItIdToJSON)(value.trackItId),
        'trackItLogId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.trackItLogId),
        'type': value.type,
    };
}
exports.TrackItLogTypeToJSON = TrackItLogTypeToJSON;