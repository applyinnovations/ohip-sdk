"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRestrictionsToJSON = exports.ProfileRestrictionsFromJSONTyped = exports.ProfileRestrictionsFromJSON = exports.instanceOfProfileRestrictions = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ProfileRestrictions interface.
 */
function instanceOfProfileRestrictions(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileRestrictions = instanceOfProfileRestrictions;
function ProfileRestrictionsFromJSON(json) {
    return ProfileRestrictionsFromJSONTyped(json, false);
}
exports.ProfileRestrictionsFromJSON = ProfileRestrictionsFromJSON;
function ProfileRestrictionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'reason': !(0, runtime_1.exists)(json, 'reason') ? undefined : json['reason'],
        'reasonDescription': !(0, runtime_1.exists)(json, 'reasonDescription') ? undefined : json['reasonDescription'],
        'restricted': !(0, runtime_1.exists)(json, 'restricted') ? undefined : json['restricted'],
    };
}
exports.ProfileRestrictionsFromJSONTyped = ProfileRestrictionsFromJSONTyped;
function ProfileRestrictionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'reason': value.reason,
        'reasonDescription': value.reasonDescription,
        'restricted': value.restricted,
    };
}
exports.ProfileRestrictionsToJSON = ProfileRestrictionsToJSON;
