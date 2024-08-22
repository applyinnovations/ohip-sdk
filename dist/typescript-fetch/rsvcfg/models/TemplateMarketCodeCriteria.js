"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateMarketCodeCriteriaToJSON = exports.TemplateMarketCodeCriteriaFromJSONTyped = exports.TemplateMarketCodeCriteriaFromJSON = exports.instanceOfTemplateMarketCodeCriteria = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const TemplateMarketCodeType_1 = require("./TemplateMarketCodeType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the TemplateMarketCodeCriteria interface.
 */
function instanceOfTemplateMarketCodeCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTemplateMarketCodeCriteria = instanceOfTemplateMarketCodeCriteria;
function TemplateMarketCodeCriteriaFromJSON(json) {
    return TemplateMarketCodeCriteriaFromJSONTyped(json, false);
}
exports.TemplateMarketCodeCriteriaFromJSON = TemplateMarketCodeCriteriaFromJSON;
function TemplateMarketCodeCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'templateMarketCode': !(0, runtime_1.exists)(json, 'templateMarketCode') ? undefined : (0, TemplateMarketCodeType_1.TemplateMarketCodeTypeFromJSON)(json['templateMarketCode']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.TemplateMarketCodeCriteriaFromJSONTyped = TemplateMarketCodeCriteriaFromJSONTyped;
function TemplateMarketCodeCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'templateMarketCode': (0, TemplateMarketCodeType_1.TemplateMarketCodeTypeToJSON)(value.templateMarketCode),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.TemplateMarketCodeCriteriaToJSON = TemplateMarketCodeCriteriaToJSON;
