"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VIPLevelsCriteriaToJSON = exports.VIPLevelsCriteriaFromJSONTyped = exports.VIPLevelsCriteriaFromJSON = exports.instanceOfVIPLevelsCriteria = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const VIPLevelType_1 = require("./VIPLevelType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the VIPLevelsCriteria interface.
 */
function instanceOfVIPLevelsCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfVIPLevelsCriteria = instanceOfVIPLevelsCriteria;
function VIPLevelsCriteriaFromJSON(json) {
    return VIPLevelsCriteriaFromJSONTyped(json, false);
}
exports.VIPLevelsCriteriaFromJSON = VIPLevelsCriteriaFromJSON;
function VIPLevelsCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'vIPLevels': !(0, runtime_1.exists)(json, 'vIPLevels') ? undefined : (json['vIPLevels'].map(VIPLevelType_1.VIPLevelTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.VIPLevelsCriteriaFromJSONTyped = VIPLevelsCriteriaFromJSONTyped;
function VIPLevelsCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'vIPLevels': value.vIPLevels === undefined ? undefined : (value.vIPLevels.map(VIPLevelType_1.VIPLevelTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.VIPLevelsCriteriaToJSON = VIPLevelsCriteriaToJSON;
