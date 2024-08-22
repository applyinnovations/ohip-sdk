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
exports.CommunicationStatusTypeToJSON = exports.CommunicationStatusTypeFromJSONTyped = exports.CommunicationStatusTypeFromJSON = exports.CommunicationStatusType = void 0;
/**
 * Enum to denote the Status of Readiness messages sent to Guest Devices.
 * @export
 */
exports.CommunicationStatusType = {
    Pending: 'Pending',
    Completed: 'Completed',
    Failed: 'Failed',
    Sent: 'Sent',
    Received: 'Received',
    Cancelled: 'Cancelled',
    PendingAvailability: 'PendingAvailability'
};
function CommunicationStatusTypeFromJSON(json) {
    return CommunicationStatusTypeFromJSONTyped(json, false);
}
exports.CommunicationStatusTypeFromJSON = CommunicationStatusTypeFromJSON;
function CommunicationStatusTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CommunicationStatusTypeFromJSONTyped = CommunicationStatusTypeFromJSONTyped;
function CommunicationStatusTypeToJSON(value) {
    return value;
}
exports.CommunicationStatusTypeToJSON = CommunicationStatusTypeToJSON;
