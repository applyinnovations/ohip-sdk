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
exports.GuestCountsTypeToJSON = exports.GuestCountsTypeFromJSONTyped = exports.GuestCountsTypeFromJSON = exports.instanceOfGuestCountsType = void 0;
const runtime_1 = require("../runtime");
const ChildAgesType_1 = require("./ChildAgesType");
const ChildBucketsType_1 = require("./ChildBucketsType");
/**
 * Check if a given object implements the GuestCountsType interface.
 */
function instanceOfGuestCountsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGuestCountsType = instanceOfGuestCountsType;
function GuestCountsTypeFromJSON(json) {
    return GuestCountsTypeFromJSONTyped(json, false);
}
exports.GuestCountsTypeFromJSON = GuestCountsTypeFromJSON;
function GuestCountsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adults': !(0, runtime_1.exists)(json, 'adults') ? undefined : json['adults'],
        'childAges': !(0, runtime_1.exists)(json, 'childAges') ? undefined : (0, ChildAgesType_1.ChildAgesTypeFromJSON)(json['childAges']),
        'childBuckets': !(0, runtime_1.exists)(json, 'childBuckets') ? undefined : (0, ChildBucketsType_1.ChildBucketsTypeFromJSON)(json['childBuckets']),
        'children': !(0, runtime_1.exists)(json, 'children') ? undefined : json['children'],
    };
}
exports.GuestCountsTypeFromJSONTyped = GuestCountsTypeFromJSONTyped;
function GuestCountsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adults': value.adults,
        'childAges': (0, ChildAgesType_1.ChildAgesTypeToJSON)(value.childAges),
        'childBuckets': (0, ChildBucketsType_1.ChildBucketsTypeToJSON)(value.childBuckets),
        'children': value.children,
    };
}
exports.GuestCountsTypeToJSON = GuestCountsTypeToJSON;
