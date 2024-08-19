"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolioCopyLegendsToJSON = exports.FolioCopyLegendsFromJSONTyped = exports.FolioCopyLegendsFromJSON = exports.instanceOfFolioCopyLegends = void 0;
const runtime_1 = require("../runtime");
const FolioCopyLegendType_1 = require("./FolioCopyLegendType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the FolioCopyLegends interface.
 */
function instanceOfFolioCopyLegends(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFolioCopyLegends = instanceOfFolioCopyLegends;
function FolioCopyLegendsFromJSON(json) {
    return FolioCopyLegendsFromJSONTyped(json, false);
}
exports.FolioCopyLegendsFromJSON = FolioCopyLegendsFromJSON;
function FolioCopyLegendsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'legends': !(0, runtime_1.exists)(json, 'legends') ? undefined : (json['legends'].map(FolioCopyLegendType_1.FolioCopyLegendTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.FolioCopyLegendsFromJSONTyped = FolioCopyLegendsFromJSONTyped;
function FolioCopyLegendsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'legends': value.legends === undefined ? undefined : (value.legends.map(FolioCopyLegendType_1.FolioCopyLegendTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.FolioCopyLegendsToJSON = FolioCopyLegendsToJSON;
