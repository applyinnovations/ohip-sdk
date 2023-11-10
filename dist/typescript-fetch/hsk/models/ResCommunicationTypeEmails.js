"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResCommunicationTypeEmailsToJSON = exports.ResCommunicationTypeEmailsFromJSONTyped = exports.ResCommunicationTypeEmailsFromJSON = exports.instanceOfResCommunicationTypeEmails = void 0;
const runtime_1 = require("../runtime");
const EmailInfoType_1 = require("./EmailInfoType");
/**
 * Check if a given object implements the ResCommunicationTypeEmails interface.
 */
function instanceOfResCommunicationTypeEmails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResCommunicationTypeEmails = instanceOfResCommunicationTypeEmails;
function ResCommunicationTypeEmailsFromJSON(json) {
    return ResCommunicationTypeEmailsFromJSONTyped(json, false);
}
exports.ResCommunicationTypeEmailsFromJSON = ResCommunicationTypeEmailsFromJSON;
function ResCommunicationTypeEmailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'emailInfo': !(0, runtime_1.exists)(json, 'emailInfo') ? undefined : (json['emailInfo'].map(EmailInfoType_1.EmailInfoTypeFromJSON)),
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.ResCommunicationTypeEmailsFromJSONTyped = ResCommunicationTypeEmailsFromJSONTyped;
function ResCommunicationTypeEmailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'emailInfo': value.emailInfo === undefined ? undefined : (value.emailInfo.map(EmailInfoType_1.EmailInfoTypeToJSON)),
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
    };
}
exports.ResCommunicationTypeEmailsToJSON = ResCommunicationTypeEmailsToJSON;
