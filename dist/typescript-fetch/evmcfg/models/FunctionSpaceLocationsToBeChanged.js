"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionSpaceLocationsToBeChangedToJSON = exports.FunctionSpaceLocationsToBeChangedFromJSONTyped = exports.FunctionSpaceLocationsToBeChangedFromJSON = exports.instanceOfFunctionSpaceLocationsToBeChanged = void 0;
const runtime_1 = require("../runtime");
const FunctionSpaceLocationType_1 = require("./FunctionSpaceLocationType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the FunctionSpaceLocationsToBeChanged interface.
 */
function instanceOfFunctionSpaceLocationsToBeChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFunctionSpaceLocationsToBeChanged = instanceOfFunctionSpaceLocationsToBeChanged;
function FunctionSpaceLocationsToBeChangedFromJSON(json) {
    return FunctionSpaceLocationsToBeChangedFromJSONTyped(json, false);
}
exports.FunctionSpaceLocationsToBeChangedFromJSON = FunctionSpaceLocationsToBeChangedFromJSON;
function FunctionSpaceLocationsToBeChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'locations': !(0, runtime_1.exists)(json, 'locations') ? undefined : (json['locations'].map(FunctionSpaceLocationType_1.FunctionSpaceLocationTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.FunctionSpaceLocationsToBeChangedFromJSONTyped = FunctionSpaceLocationsToBeChangedFromJSONTyped;
function FunctionSpaceLocationsToBeChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'locations': value.locations === undefined ? undefined : (value.locations.map(FunctionSpaceLocationType_1.FunctionSpaceLocationTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.FunctionSpaceLocationsToBeChangedToJSON = FunctionSpaceLocationsToBeChangedToJSON;
