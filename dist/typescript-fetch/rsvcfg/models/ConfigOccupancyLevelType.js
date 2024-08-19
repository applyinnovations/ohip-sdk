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
exports.ConfigOccupancyLevelTypeToJSON = exports.ConfigOccupancyLevelTypeFromJSONTyped = exports.ConfigOccupancyLevelTypeFromJSON = exports.instanceOfConfigOccupancyLevelType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ConfigOccupancyLevelType interface.
 */
function instanceOfConfigOccupancyLevelType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfConfigOccupancyLevelType = instanceOfConfigOccupancyLevelType;
function ConfigOccupancyLevelTypeFromJSON(json) {
    return ConfigOccupancyLevelTypeFromJSONTyped(json, false);
}
exports.ConfigOccupancyLevelTypeFromJSON = ConfigOccupancyLevelTypeFromJSON;
function ConfigOccupancyLevelTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'level': !(0, runtime_1.exists)(json, 'level') ? undefined : json['level'],
        'levelDescription': !(0, runtime_1.exists)(json, 'levelDescription') ? undefined : json['levelDescription'],
        'levelUpsellAmount': !(0, runtime_1.exists)(json, 'levelUpsellAmount') ? undefined : json['levelUpsellAmount'],
    };
}
exports.ConfigOccupancyLevelTypeFromJSONTyped = ConfigOccupancyLevelTypeFromJSONTyped;
function ConfigOccupancyLevelTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'level': value.level,
        'levelDescription': value.levelDescription,
        'levelUpsellAmount': value.levelUpsellAmount,
    };
}
exports.ConfigOccupancyLevelTypeToJSON = ConfigOccupancyLevelTypeToJSON;
