"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDefinedFieldGroupsToBeChangedToJSON = exports.UserDefinedFieldGroupsToBeChangedFromJSONTyped = exports.UserDefinedFieldGroupsToBeChangedFromJSON = exports.instanceOfUserDefinedFieldGroupsToBeChanged = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const UserDefinedFieldGroupType_1 = require("./UserDefinedFieldGroupType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the UserDefinedFieldGroupsToBeChanged interface.
 */
function instanceOfUserDefinedFieldGroupsToBeChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUserDefinedFieldGroupsToBeChanged = instanceOfUserDefinedFieldGroupsToBeChanged;
function UserDefinedFieldGroupsToBeChangedFromJSON(json) {
    return UserDefinedFieldGroupsToBeChangedFromJSONTyped(json, false);
}
exports.UserDefinedFieldGroupsToBeChangedFromJSON = UserDefinedFieldGroupsToBeChangedFromJSON;
function UserDefinedFieldGroupsToBeChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'userDefinedFieldGroups': !(0, runtime_1.exists)(json, 'userDefinedFieldGroups') ? undefined : (json['userDefinedFieldGroups'].map(UserDefinedFieldGroupType_1.UserDefinedFieldGroupTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.UserDefinedFieldGroupsToBeChangedFromJSONTyped = UserDefinedFieldGroupsToBeChangedFromJSONTyped;
function UserDefinedFieldGroupsToBeChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'userDefinedFieldGroups': value.userDefinedFieldGroups === undefined ? undefined : (value.userDefinedFieldGroups.map(UserDefinedFieldGroupType_1.UserDefinedFieldGroupTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.UserDefinedFieldGroupsToBeChangedToJSON = UserDefinedFieldGroupsToBeChangedToJSON;