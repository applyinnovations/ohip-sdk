"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateAccessExclusionsToJSON = exports.RateAccessExclusionsFromJSONTyped = exports.RateAccessExclusionsFromJSON = exports.instanceOfRateAccessExclusions = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const RateAccessExclusionsType_1 = require("./RateAccessExclusionsType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the RateAccessExclusions interface.
 */
function instanceOfRateAccessExclusions(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRateAccessExclusions = instanceOfRateAccessExclusions;
function RateAccessExclusionsFromJSON(json) {
    return RateAccessExclusionsFromJSONTyped(json, false);
}
exports.RateAccessExclusionsFromJSON = RateAccessExclusionsFromJSON;
function RateAccessExclusionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'rateAccessExclusions': !(0, runtime_1.exists)(json, 'rateAccessExclusions') ? undefined : (0, RateAccessExclusionsType_1.RateAccessExclusionsTypeFromJSON)(json['rateAccessExclusions']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.RateAccessExclusionsFromJSONTyped = RateAccessExclusionsFromJSONTyped;
function RateAccessExclusionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'rateAccessExclusions': (0, RateAccessExclusionsType_1.RateAccessExclusionsTypeToJSON)(value.rateAccessExclusions),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.RateAccessExclusionsToJSON = RateAccessExclusionsToJSON;
