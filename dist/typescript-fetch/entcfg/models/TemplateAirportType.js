"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateAirportTypeToJSON = exports.TemplateAirportTypeFromJSONTyped = exports.TemplateAirportTypeFromJSON = exports.instanceOfTemplateAirportType = void 0;
const runtime_1 = require("../runtime");
const TransportationInfoType_1 = require("./TransportationInfoType");
/**
 * Check if a given object implements the TemplateAirportType interface.
 */
function instanceOfTemplateAirportType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTemplateAirportType = instanceOfTemplateAirportType;
function TemplateAirportTypeFromJSON(json) {
    return TemplateAirportTypeFromJSONTyped(json, false);
}
exports.TemplateAirportTypeFromJSON = TemplateAirportTypeFromJSON;
function TemplateAirportTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'direction': !(0, runtime_1.exists)(json, 'direction') ? undefined : json['direction'],
        'distance': !(0, runtime_1.exists)(json, 'distance') ? undefined : json['distance'],
        'distanceType': !(0, runtime_1.exists)(json, 'distanceType') ? undefined : json['distanceType'],
        'drivingTime': !(0, runtime_1.exists)(json, 'drivingTime') ? undefined : json['drivingTime'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
        'transportationOptions': !(0, runtime_1.exists)(json, 'transportationOptions') ? undefined : (json['transportationOptions'].map(TransportationInfoType_1.TransportationInfoTypeFromJSON)),
        'website': !(0, runtime_1.exists)(json, 'website') ? undefined : json['website'],
    };
}
exports.TemplateAirportTypeFromJSONTyped = TemplateAirportTypeFromJSONTyped;
function TemplateAirportTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'direction': value.direction,
        'distance': value.distance,
        'distanceType': value.distanceType,
        'drivingTime': value.drivingTime,
        'sequence': value.sequence,
        'transportationOptions': value.transportationOptions === undefined ? undefined : (value.transportationOptions.map(TransportationInfoType_1.TransportationInfoTypeToJSON)),
        'website': value.website,
    };
}
exports.TemplateAirportTypeToJSON = TemplateAirportTypeToJSON;