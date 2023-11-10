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
exports.JobTitlesDetailsToJSON = exports.JobTitlesDetailsFromJSONTyped = exports.JobTitlesDetailsFromJSON = exports.instanceOfJobTitlesDetails = void 0;
const runtime_1 = require("../runtime");
const JobTitlesType_1 = require("./JobTitlesType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the JobTitlesDetails interface.
 */
function instanceOfJobTitlesDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfJobTitlesDetails = instanceOfJobTitlesDetails;
function JobTitlesDetailsFromJSON(json) {
    return JobTitlesDetailsFromJSONTyped(json, false);
}
exports.JobTitlesDetailsFromJSON = JobTitlesDetailsFromJSON;
function JobTitlesDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'jobTitles': !(0, runtime_1.exists)(json, 'jobTitles') ? undefined : (0, JobTitlesType_1.JobTitlesTypeFromJSON)(json['jobTitles']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.JobTitlesDetailsFromJSONTyped = JobTitlesDetailsFromJSONTyped;
function JobTitlesDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'jobTitles': (0, JobTitlesType_1.JobTitlesTypeToJSON)(value.jobTitles),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.JobTitlesDetailsToJSON = JobTitlesDetailsToJSON;
