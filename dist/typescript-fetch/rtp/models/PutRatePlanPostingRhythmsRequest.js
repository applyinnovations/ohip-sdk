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
exports.PutRatePlanPostingRhythmsRequestToJSON = exports.PutRatePlanPostingRhythmsRequestFromJSONTyped = exports.PutRatePlanPostingRhythmsRequestFromJSON = exports.instanceOfPutRatePlanPostingRhythmsRequest = void 0;
const runtime_1 = require("../runtime");
const GenericHotelCodeCodeType_1 = require("./GenericHotelCodeCodeType");
const Links_1 = require("./Links");
const RatePlanAdvancedPostingRhythmsType_1 = require("./RatePlanAdvancedPostingRhythmsType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PutRatePlanPostingRhythmsRequest interface.
 */
function instanceOfPutRatePlanPostingRhythmsRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPutRatePlanPostingRhythmsRequest = instanceOfPutRatePlanPostingRhythmsRequest;
function PutRatePlanPostingRhythmsRequestFromJSON(json) {
    return PutRatePlanPostingRhythmsRequestFromJSONTyped(json, false);
}
exports.PutRatePlanPostingRhythmsRequestFromJSON = PutRatePlanPostingRhythmsRequestFromJSON;
function PutRatePlanPostingRhythmsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'postingRhythms': !(0, runtime_1.exists)(json, 'postingRhythms') ? undefined : (0, RatePlanAdvancedPostingRhythmsType_1.RatePlanAdvancedPostingRhythmsTypeFromJSON)(json['postingRhythms']),
        'ratePlan': !(0, runtime_1.exists)(json, 'ratePlan') ? undefined : (0, GenericHotelCodeCodeType_1.GenericHotelCodeCodeTypeFromJSON)(json['ratePlan']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PutRatePlanPostingRhythmsRequestFromJSONTyped = PutRatePlanPostingRhythmsRequestFromJSONTyped;
function PutRatePlanPostingRhythmsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'postingRhythms': (0, RatePlanAdvancedPostingRhythmsType_1.RatePlanAdvancedPostingRhythmsTypeToJSON)(value.postingRhythms),
        'ratePlan': (0, GenericHotelCodeCodeType_1.GenericHotelCodeCodeTypeToJSON)(value.ratePlan),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PutRatePlanPostingRhythmsRequestToJSON = PutRatePlanPostingRhythmsRequestToJSON;
