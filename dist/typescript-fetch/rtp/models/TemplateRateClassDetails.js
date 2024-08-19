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
exports.TemplateRateClassDetailsToJSON = exports.TemplateRateClassDetailsFromJSONTyped = exports.TemplateRateClassDetailsFromJSON = exports.instanceOfTemplateRateClassDetails = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const TemplateRateClassType_1 = require("./TemplateRateClassType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the TemplateRateClassDetails interface.
 */
function instanceOfTemplateRateClassDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTemplateRateClassDetails = instanceOfTemplateRateClassDetails;
function TemplateRateClassDetailsFromJSON(json) {
    return TemplateRateClassDetailsFromJSONTyped(json, false);
}
exports.TemplateRateClassDetailsFromJSON = TemplateRateClassDetailsFromJSON;
function TemplateRateClassDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'templateRateClasses': !(0, runtime_1.exists)(json, 'templateRateClasses') ? undefined : (json['templateRateClasses'].map(TemplateRateClassType_1.TemplateRateClassTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.TemplateRateClassDetailsFromJSONTyped = TemplateRateClassDetailsFromJSONTyped;
function TemplateRateClassDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'templateRateClasses': value.templateRateClasses === undefined ? undefined : (value.templateRateClasses.map(TemplateRateClassType_1.TemplateRateClassTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.TemplateRateClassDetailsToJSON = TemplateRateClassDetailsToJSON;
