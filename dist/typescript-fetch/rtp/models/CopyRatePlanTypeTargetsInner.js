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
exports.CopyRatePlanTypeTargetsInnerToJSON = exports.CopyRatePlanTypeTargetsInnerFromJSONTyped = exports.CopyRatePlanTypeTargetsInnerFromJSON = exports.instanceOfCopyRatePlanTypeTargetsInner = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
/**
 * Check if a given object implements the CopyRatePlanTypeTargetsInner interface.
 */
function instanceOfCopyRatePlanTypeTargetsInner(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyRatePlanTypeTargetsInner = instanceOfCopyRatePlanTypeTargetsInner;
function CopyRatePlanTypeTargetsInnerFromJSON(json) {
    return CopyRatePlanTypeTargetsInnerFromJSONTyped(json, false);
}
exports.CopyRatePlanTypeTargetsInnerFromJSON = CopyRatePlanTypeTargetsInnerFromJSON;
function CopyRatePlanTypeTargetsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'ratePlanCodes': !(0, runtime_1.exists)(json, 'ratePlanCodes') ? undefined : (json['ratePlanCodes'].map(CodeDescriptionType_1.CodeDescriptionTypeFromJSON)),
    };
}
exports.CopyRatePlanTypeTargetsInnerFromJSONTyped = CopyRatePlanTypeTargetsInnerFromJSONTyped;
function CopyRatePlanTypeTargetsInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'ratePlanCodes': value.ratePlanCodes === undefined ? undefined : (value.ratePlanCodes.map(CodeDescriptionType_1.CodeDescriptionTypeToJSON)),
    };
}
exports.CopyRatePlanTypeTargetsInnerToJSON = CopyRatePlanTypeTargetsInnerToJSON;
