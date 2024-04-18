"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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