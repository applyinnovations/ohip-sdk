"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatePlanPackagesToJSON = exports.RatePlanPackagesFromJSONTyped = exports.RatePlanPackagesFromJSON = exports.instanceOfRatePlanPackages = void 0;
const runtime_1 = require("../runtime");
const GenericHotelCodeCodeType_1 = require("./GenericHotelCodeCodeType");
const InstanceLink_1 = require("./InstanceLink");
const RatePackagesType_1 = require("./RatePackagesType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the RatePlanPackages interface.
 */
function instanceOfRatePlanPackages(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRatePlanPackages = instanceOfRatePlanPackages;
function RatePlanPackagesFromJSON(json) {
    return RatePlanPackagesFromJSONTyped(json, false);
}
exports.RatePlanPackagesFromJSON = RatePlanPackagesFromJSON;
function RatePlanPackagesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'packages': !(0, runtime_1.exists)(json, 'packages') ? undefined : (0, RatePackagesType_1.RatePackagesTypeFromJSON)(json['packages']),
        'ratePlan': !(0, runtime_1.exists)(json, 'ratePlan') ? undefined : (0, GenericHotelCodeCodeType_1.GenericHotelCodeCodeTypeFromJSON)(json['ratePlan']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.RatePlanPackagesFromJSONTyped = RatePlanPackagesFromJSONTyped;
function RatePlanPackagesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'packages': (0, RatePackagesType_1.RatePackagesTypeToJSON)(value.packages),
        'ratePlan': (0, GenericHotelCodeCodeType_1.GenericHotelCodeCodeTypeToJSON)(value.ratePlan),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.RatePlanPackagesToJSON = RatePlanPackagesToJSON;
