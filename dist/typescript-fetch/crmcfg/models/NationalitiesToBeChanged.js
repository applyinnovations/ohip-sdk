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
exports.NationalitiesToBeChangedToJSON = exports.NationalitiesToBeChangedFromJSONTyped = exports.NationalitiesToBeChangedFromJSON = exports.instanceOfNationalitiesToBeChanged = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const NationalityType_1 = require("./NationalityType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the NationalitiesToBeChanged interface.
 */
function instanceOfNationalitiesToBeChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNationalitiesToBeChanged = instanceOfNationalitiesToBeChanged;
function NationalitiesToBeChangedFromJSON(json) {
    return NationalitiesToBeChangedFromJSONTyped(json, false);
}
exports.NationalitiesToBeChangedFromJSON = NationalitiesToBeChangedFromJSON;
function NationalitiesToBeChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nationalities': !(0, runtime_1.exists)(json, 'nationalities') ? undefined : (json['nationalities'].map(NationalityType_1.NationalityTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.NationalitiesToBeChangedFromJSONTyped = NationalitiesToBeChangedFromJSONTyped;
function NationalitiesToBeChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nationalities': value.nationalities === undefined ? undefined : (value.nationalities.map(NationalityType_1.NationalityTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.NationalitiesToBeChangedToJSON = NationalitiesToBeChangedToJSON;
