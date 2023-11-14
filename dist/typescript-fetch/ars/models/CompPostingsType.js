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
exports.CompPostingsTypeToJSON = exports.CompPostingsTypeFromJSONTyped = exports.CompPostingsTypeFromJSON = exports.instanceOfCompPostingsType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CompPostingsType interface.
 */
function instanceOfCompPostingsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCompPostingsType = instanceOfCompPostingsType;
function CompPostingsTypeFromJSON(json) {
    return CompPostingsTypeFromJSONTyped(json, false);
}
exports.CompPostingsTypeFromJSON = CompPostingsTypeFromJSON;
function CompPostingsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'approvalStatus': !(0, runtime_1.exists)(json, 'approvalStatus') ? undefined : json['approvalStatus'],
        'authorizer': !(0, runtime_1.exists)(json, 'authorizer') ? undefined : json['authorizer'],
    };
}
exports.CompPostingsTypeFromJSONTyped = CompPostingsTypeFromJSONTyped;
function CompPostingsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'approvalStatus': value.approvalStatus,
        'authorizer': value.authorizer,
    };
}
exports.CompPostingsTypeToJSON = CompPostingsTypeToJSON;