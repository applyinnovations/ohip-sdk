"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate Async API
 * APIs to cater for Price and Rate Availability Asynchronous functionality in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionsToJSON = exports.RestrictionsFromJSONTyped = exports.RestrictionsFromJSON = exports.instanceOfRestrictions = void 0;
const runtime_1 = require("../runtime");
const CreateRestrictionType_1 = require("./CreateRestrictionType");
const InstanceLink_1 = require("./InstanceLink");
/**
 * Check if a given object implements the Restrictions interface.
 */
function instanceOfRestrictions(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRestrictions = instanceOfRestrictions;
function RestrictionsFromJSON(json) {
    return RestrictionsFromJSONTyped(json, false);
}
exports.RestrictionsFromJSON = RestrictionsFromJSON;
function RestrictionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'restrictions': !(0, runtime_1.exists)(json, 'restrictions') ? undefined : (json['restrictions'].map(CreateRestrictionType_1.CreateRestrictionTypeFromJSON)),
    };
}
exports.RestrictionsFromJSONTyped = RestrictionsFromJSONTyped;
function RestrictionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'restrictions': value.restrictions === undefined ? undefined : (value.restrictions.map(CreateRestrictionType_1.CreateRestrictionTypeToJSON)),
    };
}
exports.RestrictionsToJSON = RestrictionsToJSON;