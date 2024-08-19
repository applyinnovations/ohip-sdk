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
exports.ServiceRequestCodePrioritiesCriteriaToJSON = exports.ServiceRequestCodePrioritiesCriteriaFromJSONTyped = exports.ServiceRequestCodePrioritiesCriteriaFromJSON = exports.instanceOfServiceRequestCodePrioritiesCriteria = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const ServiceRequestCodePriorityType_1 = require("./ServiceRequestCodePriorityType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ServiceRequestCodePrioritiesCriteria interface.
 */
function instanceOfServiceRequestCodePrioritiesCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfServiceRequestCodePrioritiesCriteria = instanceOfServiceRequestCodePrioritiesCriteria;
function ServiceRequestCodePrioritiesCriteriaFromJSON(json) {
    return ServiceRequestCodePrioritiesCriteriaFromJSONTyped(json, false);
}
exports.ServiceRequestCodePrioritiesCriteriaFromJSON = ServiceRequestCodePrioritiesCriteriaFromJSON;
function ServiceRequestCodePrioritiesCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'serviceRequestCodePriorities': !(0, runtime_1.exists)(json, 'serviceRequestCodePriorities') ? undefined : (json['serviceRequestCodePriorities'].map(ServiceRequestCodePriorityType_1.ServiceRequestCodePriorityTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ServiceRequestCodePrioritiesCriteriaFromJSONTyped = ServiceRequestCodePrioritiesCriteriaFromJSONTyped;
function ServiceRequestCodePrioritiesCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'serviceRequestCodePriorities': value.serviceRequestCodePriorities === undefined ? undefined : (value.serviceRequestCodePriorities.map(ServiceRequestCodePriorityType_1.ServiceRequestCodePriorityTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ServiceRequestCodePrioritiesCriteriaToJSON = ServiceRequestCodePrioritiesCriteriaToJSON;
