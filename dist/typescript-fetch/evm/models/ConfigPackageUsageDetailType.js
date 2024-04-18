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
exports.ConfigPackageUsageDetailTypeToJSON = exports.ConfigPackageUsageDetailTypeFromJSONTyped = exports.ConfigPackageUsageDetailTypeFromJSON = exports.instanceOfConfigPackageUsageDetailType = void 0;
const runtime_1 = require("../runtime");
const ProductSourceType_1 = require("./ProductSourceType");
/**
 * Check if a given object implements the ConfigPackageUsageDetailType interface.
 */
function instanceOfConfigPackageUsageDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfConfigPackageUsageDetailType = instanceOfConfigPackageUsageDetailType;
function ConfigPackageUsageDetailTypeFromJSON(json) {
    return ConfigPackageUsageDetailTypeFromJSONTyped(json, false);
}
exports.ConfigPackageUsageDetailTypeFromJSON = ConfigPackageUsageDetailTypeFromJSON;
function ConfigPackageUsageDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : (0, ProductSourceType_1.ProductSourceTypeFromJSON)(json['source']),
        'usedInHouseReservations': !(0, runtime_1.exists)(json, 'usedInHouseReservations') ? undefined : json['usedInHouseReservations'],
        'usedInRates': !(0, runtime_1.exists)(json, 'usedInRates') ? undefined : json['usedInRates'],
        'usedInReservations': !(0, runtime_1.exists)(json, 'usedInReservations') ? undefined : json['usedInReservations'],
    };
}
exports.ConfigPackageUsageDetailTypeFromJSONTyped = ConfigPackageUsageDetailTypeFromJSONTyped;
function ConfigPackageUsageDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'source': (0, ProductSourceType_1.ProductSourceTypeToJSON)(value.source),
        'usedInHouseReservations': value.usedInHouseReservations,
        'usedInRates': value.usedInRates,
        'usedInReservations': value.usedInReservations,
    };
}
exports.ConfigPackageUsageDetailTypeToJSON = ConfigPackageUsageDetailTypeToJSON;