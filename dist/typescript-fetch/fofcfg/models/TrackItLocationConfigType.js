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
exports.TrackItLocationConfigTypeToJSON = exports.TrackItLocationConfigTypeFromJSONTyped = exports.TrackItLocationConfigTypeFromJSON = exports.instanceOfTrackItLocationConfigType = void 0;
const runtime_1 = require("../runtime");
const TrackItGroupType_1 = require("./TrackItGroupType");
/**
 * Check if a given object implements the TrackItLocationConfigType interface.
 */
function instanceOfTrackItLocationConfigType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTrackItLocationConfigType = instanceOfTrackItLocationConfigType;
function TrackItLocationConfigTypeFromJSON(json) {
    return TrackItLocationConfigTypeFromJSONTyped(json, false);
}
exports.TrackItLocationConfigTypeFromJSON = TrackItLocationConfigTypeFromJSON;
function TrackItLocationConfigTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'displaySequence': !(0, runtime_1.exists)(json, 'displaySequence') ? undefined : json['displaySequence'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'trackItGroup': !(0, runtime_1.exists)(json, 'trackItGroup') ? undefined : (0, TrackItGroupType_1.TrackItGroupTypeFromJSON)(json['trackItGroup']),
    };
}
exports.TrackItLocationConfigTypeFromJSONTyped = TrackItLocationConfigTypeFromJSONTyped;
function TrackItLocationConfigTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'displaySequence': value.displaySequence,
        'hotelId': value.hotelId,
        'inactive': value.inactive,
        'trackItGroup': (0, TrackItGroupType_1.TrackItGroupTypeToJSON)(value.trackItGroup),
    };
}
exports.TrackItLocationConfigTypeToJSON = TrackItLocationConfigTypeToJSON;
