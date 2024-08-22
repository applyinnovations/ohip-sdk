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
exports.BlockDetailsTypePrimaryProfilesToJSON = exports.BlockDetailsTypePrimaryProfilesFromJSONTyped = exports.BlockDetailsTypePrimaryProfilesFromJSON = exports.instanceOfBlockDetailsTypePrimaryProfiles = void 0;
const runtime_1 = require("../runtime");
const BlockProfilesType_1 = require("./BlockProfilesType");
const ImageSetType_1 = require("./ImageSetType");
/**
 * Check if a given object implements the BlockDetailsTypePrimaryProfiles interface.
 */
function instanceOfBlockDetailsTypePrimaryProfiles(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockDetailsTypePrimaryProfiles = instanceOfBlockDetailsTypePrimaryProfiles;
function BlockDetailsTypePrimaryProfilesFromJSON(json) {
    return BlockDetailsTypePrimaryProfilesFromJSONTyped(json, false);
}
exports.BlockDetailsTypePrimaryProfilesFromJSON = BlockDetailsTypePrimaryProfilesFromJSON;
function BlockDetailsTypePrimaryProfilesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'account': !(0, runtime_1.exists)(json, 'account') ? undefined : (0, BlockProfilesType_1.BlockProfilesTypeFromJSON)(json['account']),
        'contact': !(0, runtime_1.exists)(json, 'contact') ? undefined : (0, BlockProfilesType_1.BlockProfilesTypeFromJSON)(json['contact']),
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : (0, ImageSetType_1.ImageSetTypeFromJSON)(json['image']),
    };
}
exports.BlockDetailsTypePrimaryProfilesFromJSONTyped = BlockDetailsTypePrimaryProfilesFromJSONTyped;
function BlockDetailsTypePrimaryProfilesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account': (0, BlockProfilesType_1.BlockProfilesTypeToJSON)(value.account),
        'contact': (0, BlockProfilesType_1.BlockProfilesTypeToJSON)(value.contact),
        'image': (0, ImageSetType_1.ImageSetTypeToJSON)(value.image),
    };
}
exports.BlockDetailsTypePrimaryProfilesToJSON = BlockDetailsTypePrimaryProfilesToJSON;
