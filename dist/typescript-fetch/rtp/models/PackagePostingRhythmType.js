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
exports.PackagePostingRhythmTypeToJSON = exports.PackagePostingRhythmTypeFromJSONTyped = exports.PackagePostingRhythmTypeFromJSON = exports.instanceOfPackagePostingRhythmType = void 0;
const runtime_1 = require("../runtime");
const PackagePostingRhythmTypeCertainNightsOfTheWeek_1 = require("./PackagePostingRhythmTypeCertainNightsOfTheWeek");
const PackagePostingRhythmTypeCustomNightSchedule_1 = require("./PackagePostingRhythmTypeCustomNightSchedule");
const PackagePostingRhythmTypeCustomStaySchedule_1 = require("./PackagePostingRhythmTypeCustomStaySchedule");
const PackagePostingRhythmTypeEveryXNightsStartingNightY_1 = require("./PackagePostingRhythmTypeEveryXNightsStartingNightY");
const PostingRhythmType_1 = require("./PostingRhythmType");
/**
 * Check if a given object implements the PackagePostingRhythmType interface.
 */
function instanceOfPackagePostingRhythmType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPackagePostingRhythmType = instanceOfPackagePostingRhythmType;
function PackagePostingRhythmTypeFromJSON(json) {
    return PackagePostingRhythmTypeFromJSONTyped(json, false);
}
exports.PackagePostingRhythmTypeFromJSON = PackagePostingRhythmTypeFromJSON;
function PackagePostingRhythmTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'certainNightsOfTheWeek': !(0, runtime_1.exists)(json, 'certainNightsOfTheWeek') ? undefined : (0, PackagePostingRhythmTypeCertainNightsOfTheWeek_1.PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSON)(json['certainNightsOfTheWeek']),
        'customNightSchedule': !(0, runtime_1.exists)(json, 'customNightSchedule') ? undefined : (0, PackagePostingRhythmTypeCustomNightSchedule_1.PackagePostingRhythmTypeCustomNightScheduleFromJSON)(json['customNightSchedule']),
        'customStaySchedule': !(0, runtime_1.exists)(json, 'customStaySchedule') ? undefined : (0, PackagePostingRhythmTypeCustomStaySchedule_1.PackagePostingRhythmTypeCustomStayScheduleFromJSON)(json['customStaySchedule']),
        'everyXNightsStartingNightY': !(0, runtime_1.exists)(json, 'everyXNightsStartingNightY') ? undefined : (0, PackagePostingRhythmTypeEveryXNightsStartingNightY_1.PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSON)(json['everyXNightsStartingNightY']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : (0, PostingRhythmType_1.PostingRhythmTypeFromJSON)(json['type']),
    };
}
exports.PackagePostingRhythmTypeFromJSONTyped = PackagePostingRhythmTypeFromJSONTyped;
function PackagePostingRhythmTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'certainNightsOfTheWeek': (0, PackagePostingRhythmTypeCertainNightsOfTheWeek_1.PackagePostingRhythmTypeCertainNightsOfTheWeekToJSON)(value.certainNightsOfTheWeek),
        'customNightSchedule': (0, PackagePostingRhythmTypeCustomNightSchedule_1.PackagePostingRhythmTypeCustomNightScheduleToJSON)(value.customNightSchedule),
        'customStaySchedule': (0, PackagePostingRhythmTypeCustomStaySchedule_1.PackagePostingRhythmTypeCustomStayScheduleToJSON)(value.customStaySchedule),
        'everyXNightsStartingNightY': (0, PackagePostingRhythmTypeEveryXNightsStartingNightY_1.PackagePostingRhythmTypeEveryXNightsStartingNightYToJSON)(value.everyXNightsStartingNightY),
        'type': (0, PostingRhythmType_1.PostingRhythmTypeToJSON)(value.type),
    };
}
exports.PackagePostingRhythmTypeToJSON = PackagePostingRhythmTypeToJSON;
