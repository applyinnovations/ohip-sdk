"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileTypeTypeToJSON = exports.ProfileTypeTypeFromJSONTyped = exports.ProfileTypeTypeFromJSON = exports.ProfileTypeType = void 0;
/**
 * The types of Profile handled by the web service.
 * @export
 */
exports.ProfileTypeType = {
    Guest: 'Guest',
    Agent: 'Agent',
    Company: 'Company',
    Group: 'Group',
    Source: 'Source',
    Employee: 'Employee',
    Hotel: 'Hotel',
    Vendor: 'Vendor',
    Contact: 'Contact',
    Purge: 'Purge',
    BusinessHeader: 'BusinessHeader',
    BillingAccount: 'BillingAccount',
    Activity: 'Activity',
    Potential: 'Potential',
    Account: 'Account'
};
function ProfileTypeTypeFromJSON(json) {
    return ProfileTypeTypeFromJSONTyped(json, false);
}
exports.ProfileTypeTypeFromJSON = ProfileTypeTypeFromJSON;
function ProfileTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ProfileTypeTypeFromJSONTyped = ProfileTypeTypeFromJSONTyped;
function ProfileTypeTypeToJSON(value) {
    return value;
}
exports.ProfileTypeTypeToJSON = ProfileTypeTypeToJSON;
