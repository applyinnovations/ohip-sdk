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
exports.PackagePostingRhythmTypeEveryXNightsStartingNightYToJSON = exports.PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSONTyped = exports.PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSON = exports.instanceOfPackagePostingRhythmTypeEveryXNightsStartingNightY = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PackagePostingRhythmTypeEveryXNightsStartingNightY interface.
 */
function instanceOfPackagePostingRhythmTypeEveryXNightsStartingNightY(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPackagePostingRhythmTypeEveryXNightsStartingNightY = instanceOfPackagePostingRhythmTypeEveryXNightsStartingNightY;
function PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSON(json) {
    return PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSONTyped(json, false);
}
exports.PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSON = PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSON;
function PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'postEveryXNights': !(0, runtime_1.exists)(json, 'postEveryXNights') ? undefined : json['postEveryXNights'],
        'startOnNightY': !(0, runtime_1.exists)(json, 'startOnNightY') ? undefined : json['startOnNightY'],
    };
}
exports.PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSONTyped = PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSONTyped;
function PackagePostingRhythmTypeEveryXNightsStartingNightYToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'postEveryXNights': value.postEveryXNights,
        'startOnNightY': value.startOnNightY,
    };
}
exports.PackagePostingRhythmTypeEveryXNightsStartingNightYToJSON = PackagePostingRhythmTypeEveryXNightsStartingNightYToJSON;