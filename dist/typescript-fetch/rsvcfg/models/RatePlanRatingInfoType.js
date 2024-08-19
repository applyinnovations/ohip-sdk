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
exports.RatePlanRatingInfoTypeToJSON = exports.RatePlanRatingInfoTypeFromJSONTyped = exports.RatePlanRatingInfoTypeFromJSON = exports.instanceOfRatePlanRatingInfoType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const RatePlanRatingType_1 = require("./RatePlanRatingType");
/**
 * Check if a given object implements the RatePlanRatingInfoType interface.
 */
function instanceOfRatePlanRatingInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRatePlanRatingInfoType = instanceOfRatePlanRatingInfoType;
function RatePlanRatingInfoTypeFromJSON(json) {
    return RatePlanRatingInfoTypeFromJSONTyped(json, false);
}
exports.RatePlanRatingInfoTypeFromJSON = RatePlanRatingInfoTypeFromJSON;
function RatePlanRatingInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'rateCategory': !(0, runtime_1.exists)(json, 'rateCategory') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['rateCategory']),
        'ratePlan': !(0, runtime_1.exists)(json, 'ratePlan') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['ratePlan']),
        'rating': !(0, runtime_1.exists)(json, 'rating') ? undefined : (0, RatePlanRatingType_1.RatePlanRatingTypeFromJSON)(json['rating']),
    };
}
exports.RatePlanRatingInfoTypeFromJSONTyped = RatePlanRatingInfoTypeFromJSONTyped;
function RatePlanRatingInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'rateCategory': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.rateCategory),
        'ratePlan': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.ratePlan),
        'rating': (0, RatePlanRatingType_1.RatePlanRatingTypeToJSON)(value.rating),
    };
}
exports.RatePlanRatingInfoTypeToJSON = RatePlanRatingInfoTypeToJSON;
