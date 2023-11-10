"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagePostingRhythmTypeCertainNightsOfTheWeekToJSON = exports.PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSONTyped = exports.PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSON = exports.instanceOfPackagePostingRhythmTypeCertainNightsOfTheWeek = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PackagePostingRhythmTypeCertainNightsOfTheWeek interface.
 */
function instanceOfPackagePostingRhythmTypeCertainNightsOfTheWeek(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPackagePostingRhythmTypeCertainNightsOfTheWeek = instanceOfPackagePostingRhythmTypeCertainNightsOfTheWeek;
function PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSON(json) {
    return PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSONTyped(json, false);
}
exports.PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSON = PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSON;
function PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'friday': !(0, runtime_1.exists)(json, 'friday') ? undefined : json['friday'],
        'monday': !(0, runtime_1.exists)(json, 'monday') ? undefined : json['monday'],
        'saturday': !(0, runtime_1.exists)(json, 'saturday') ? undefined : json['saturday'],
        'sunday': !(0, runtime_1.exists)(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !(0, runtime_1.exists)(json, 'thursday') ? undefined : json['thursday'],
        'tuesday': !(0, runtime_1.exists)(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !(0, runtime_1.exists)(json, 'wednesday') ? undefined : json['wednesday'],
    };
}
exports.PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSONTyped = PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSONTyped;
function PackagePostingRhythmTypeCertainNightsOfTheWeekToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'friday': value.friday,
        'monday': value.monday,
        'saturday': value.saturday,
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
    };
}
exports.PackagePostingRhythmTypeCertainNightsOfTheWeekToJSON = PackagePostingRhythmTypeCertainNightsOfTheWeekToJSON;
