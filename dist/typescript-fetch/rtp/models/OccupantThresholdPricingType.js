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
exports.OccupantThresholdPricingTypeToJSON = exports.OccupantThresholdPricingTypeFromJSONTyped = exports.OccupantThresholdPricingTypeFromJSON = exports.instanceOfOccupantThresholdPricingType = void 0;
const runtime_1 = require("../runtime");
const OccupantThresholdPricingTypeAdults_1 = require("./OccupantThresholdPricingTypeAdults");
const OccupantThresholdPricingTypeChildren_1 = require("./OccupantThresholdPricingTypeChildren");
const OccupantThresholdPricingTypeOccupants_1 = require("./OccupantThresholdPricingTypeOccupants");
/**
 * Check if a given object implements the OccupantThresholdPricingType interface.
 */
function instanceOfOccupantThresholdPricingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfOccupantThresholdPricingType = instanceOfOccupantThresholdPricingType;
function OccupantThresholdPricingTypeFromJSON(json) {
    return OccupantThresholdPricingTypeFromJSONTyped(json, false);
}
exports.OccupantThresholdPricingTypeFromJSON = OccupantThresholdPricingTypeFromJSON;
function OccupantThresholdPricingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adults': !(0, runtime_1.exists)(json, 'adults') ? undefined : (0, OccupantThresholdPricingTypeAdults_1.OccupantThresholdPricingTypeAdultsFromJSON)(json['adults']),
        'children': !(0, runtime_1.exists)(json, 'children') ? undefined : (0, OccupantThresholdPricingTypeChildren_1.OccupantThresholdPricingTypeChildrenFromJSON)(json['children']),
        'occupants': !(0, runtime_1.exists)(json, 'occupants') ? undefined : (0, OccupantThresholdPricingTypeOccupants_1.OccupantThresholdPricingTypeOccupantsFromJSON)(json['occupants']),
    };
}
exports.OccupantThresholdPricingTypeFromJSONTyped = OccupantThresholdPricingTypeFromJSONTyped;
function OccupantThresholdPricingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adults': (0, OccupantThresholdPricingTypeAdults_1.OccupantThresholdPricingTypeAdultsToJSON)(value.adults),
        'children': (0, OccupantThresholdPricingTypeChildren_1.OccupantThresholdPricingTypeChildrenToJSON)(value.children),
        'occupants': (0, OccupantThresholdPricingTypeOccupants_1.OccupantThresholdPricingTypeOccupantsToJSON)(value.occupants),
    };
}
exports.OccupantThresholdPricingTypeToJSON = OccupantThresholdPricingTypeToJSON;
