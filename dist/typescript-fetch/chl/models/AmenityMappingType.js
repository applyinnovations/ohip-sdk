"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmenityMappingTypeToJSON = exports.AmenityMappingTypeFromJSONTyped = exports.AmenityMappingTypeFromJSON = exports.instanceOfAmenityMappingType = void 0;
const runtime_1 = require("../runtime");
const AmenityGroupType_1 = require("./AmenityGroupType");
const SystemInfoType_1 = require("./SystemInfoType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the AmenityMappingType interface.
 */
function instanceOfAmenityMappingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAmenityMappingType = instanceOfAmenityMappingType;
function AmenityMappingTypeFromJSON(json) {
    return AmenityMappingTypeFromJSONTyped(json, false);
}
exports.AmenityMappingTypeFromJSON = AmenityMappingTypeFromJSON;
function AmenityMappingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amenityGroup': !(0, runtime_1.exists)(json, 'amenityGroup') ? undefined : (0, AmenityGroupType_1.AmenityGroupTypeFromJSON)(json['amenityGroup']),
        'dateRange': !(0, runtime_1.exists)(json, 'dateRange') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['dateRange']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'externalSystemCode': !(0, runtime_1.exists)(json, 'externalSystemCode') ? undefined : json['externalSystemCode'],
        'localSystemCode': !(0, runtime_1.exists)(json, 'localSystemCode') ? undefined : json['localSystemCode'],
        'systemInfo': !(0, runtime_1.exists)(json, 'systemInfo') ? undefined : (0, SystemInfoType_1.SystemInfoTypeFromJSON)(json['systemInfo']),
    };
}
exports.AmenityMappingTypeFromJSONTyped = AmenityMappingTypeFromJSONTyped;
function AmenityMappingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amenityGroup': (0, AmenityGroupType_1.AmenityGroupTypeToJSON)(value.amenityGroup),
        'dateRange': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.dateRange),
        'description': value.description,
        'externalSystemCode': value.externalSystemCode,
        'localSystemCode': value.localSystemCode,
        'systemInfo': (0, SystemInfoType_1.SystemInfoTypeToJSON)(value.systemInfo),
    };
}
exports.AmenityMappingTypeToJSON = AmenityMappingTypeToJSON;
