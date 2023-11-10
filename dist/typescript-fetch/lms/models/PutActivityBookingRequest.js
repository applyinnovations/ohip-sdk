"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutActivityBookingRequestToJSON = exports.PutActivityBookingRequestFromJSONTyped = exports.PutActivityBookingRequestFromJSON = exports.instanceOfPutActivityBookingRequest = void 0;
const runtime_1 = require("../runtime");
const ActivityBookingRQType_1 = require("./ActivityBookingRQType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PutActivityBookingRequest interface.
 */
function instanceOfPutActivityBookingRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPutActivityBookingRequest = instanceOfPutActivityBookingRequest;
function PutActivityBookingRequestFromJSON(json) {
    return PutActivityBookingRequestFromJSONTyped(json, false);
}
exports.PutActivityBookingRequestFromJSON = PutActivityBookingRequestFromJSON;
function PutActivityBookingRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activityBooking': !(0, runtime_1.exists)(json, 'activityBooking') ? undefined : (0, ActivityBookingRQType_1.ActivityBookingRQTypeFromJSON)(json['activityBooking']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PutActivityBookingRequestFromJSONTyped = PutActivityBookingRequestFromJSONTyped;
function PutActivityBookingRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activityBooking': (0, ActivityBookingRQType_1.ActivityBookingRQTypeToJSON)(value.activityBooking),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PutActivityBookingRequestToJSON = PutActivityBookingRequestToJSON;
