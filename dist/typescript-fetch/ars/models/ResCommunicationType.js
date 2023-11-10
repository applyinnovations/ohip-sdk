"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResCommunicationTypeToJSON = exports.ResCommunicationTypeFromJSONTyped = exports.ResCommunicationTypeFromJSON = exports.instanceOfResCommunicationType = void 0;
const runtime_1 = require("../runtime");
const ResCommunicationTypeEmails_1 = require("./ResCommunicationTypeEmails");
const ResCommunicationTypeTelephones_1 = require("./ResCommunicationTypeTelephones");
/**
 * Check if a given object implements the ResCommunicationType interface.
 */
function instanceOfResCommunicationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResCommunicationType = instanceOfResCommunicationType;
function ResCommunicationTypeFromJSON(json) {
    return ResCommunicationTypeFromJSONTyped(json, false);
}
exports.ResCommunicationTypeFromJSON = ResCommunicationTypeFromJSON;
function ResCommunicationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'emails': !(0, runtime_1.exists)(json, 'emails') ? undefined : (0, ResCommunicationTypeEmails_1.ResCommunicationTypeEmailsFromJSON)(json['emails']),
        'telephones': !(0, runtime_1.exists)(json, 'telephones') ? undefined : (0, ResCommunicationTypeTelephones_1.ResCommunicationTypeTelephonesFromJSON)(json['telephones']),
    };
}
exports.ResCommunicationTypeFromJSONTyped = ResCommunicationTypeFromJSONTyped;
function ResCommunicationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'emails': (0, ResCommunicationTypeEmails_1.ResCommunicationTypeEmailsToJSON)(value.emails),
        'telephones': (0, ResCommunicationTypeTelephones_1.ResCommunicationTypeTelephonesToJSON)(value.telephones),
    };
}
exports.ResCommunicationTypeToJSON = ResCommunicationTypeToJSON;
