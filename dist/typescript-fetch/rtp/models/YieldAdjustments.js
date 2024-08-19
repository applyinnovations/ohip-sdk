"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.YieldAdjustmentsToJSON = exports.YieldAdjustmentsFromJSONTyped = exports.YieldAdjustmentsFromJSON = exports.instanceOfYieldAdjustments = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
const YieldAdjustmentsType_1 = require("./YieldAdjustmentsType");
/**
 * Check if a given object implements the YieldAdjustments interface.
 */
function instanceOfYieldAdjustments(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfYieldAdjustments = instanceOfYieldAdjustments;
function YieldAdjustmentsFromJSON(json) {
    return YieldAdjustmentsFromJSONTyped(json, false);
}
exports.YieldAdjustmentsFromJSON = YieldAdjustmentsFromJSON;
function YieldAdjustmentsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
        'yieldAdjustments': !(0, runtime_1.exists)(json, 'yieldAdjustments') ? undefined : (0, YieldAdjustmentsType_1.YieldAdjustmentsTypeFromJSON)(json['yieldAdjustments']),
    };
}
exports.YieldAdjustmentsFromJSONTyped = YieldAdjustmentsFromJSONTyped;
function YieldAdjustmentsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
        'yieldAdjustments': (0, YieldAdjustmentsType_1.YieldAdjustmentsTypeToJSON)(value.yieldAdjustments),
    };
}
exports.YieldAdjustmentsToJSON = YieldAdjustmentsToJSON;
