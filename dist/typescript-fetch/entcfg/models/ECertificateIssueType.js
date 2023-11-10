"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECertificateIssueTypeToJSON = exports.ECertificateIssueTypeFromJSONTyped = exports.ECertificateIssueTypeFromJSON = exports.ECertificateIssueType = void 0;
/**
 * Indicates that guest purchased OPERA E-Certificate.
 * @export
 */
exports.ECertificateIssueType = {
    Assigned: 'Assigned',
    OptedIn: 'OptedIn',
    Purchased: 'Purchased'
};
function ECertificateIssueTypeFromJSON(json) {
    return ECertificateIssueTypeFromJSONTyped(json, false);
}
exports.ECertificateIssueTypeFromJSON = ECertificateIssueTypeFromJSON;
function ECertificateIssueTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ECertificateIssueTypeFromJSONTyped = ECertificateIssueTypeFromJSONTyped;
function ECertificateIssueTypeToJSON(value) {
    return value;
}
exports.ECertificateIssueTypeToJSON = ECertificateIssueTypeToJSON;
