"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationHistoryTypeStatusToJSON = exports.AuthorizationHistoryTypeStatusFromJSONTyped = exports.AuthorizationHistoryTypeStatusFromJSON = exports.instanceOfAuthorizationHistoryTypeStatus = void 0;
const runtime_1 = require("../runtime");
const AuthorizationHistoryTypeStatusFailed_1 = require("./AuthorizationHistoryTypeStatusFailed");
const AuthorizationHistoryTypeStatusSuccessful_1 = require("./AuthorizationHistoryTypeStatusSuccessful");
/**
 * Check if a given object implements the AuthorizationHistoryTypeStatus interface.
 */
function instanceOfAuthorizationHistoryTypeStatus(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAuthorizationHistoryTypeStatus = instanceOfAuthorizationHistoryTypeStatus;
function AuthorizationHistoryTypeStatusFromJSON(json) {
    return AuthorizationHistoryTypeStatusFromJSONTyped(json, false);
}
exports.AuthorizationHistoryTypeStatusFromJSON = AuthorizationHistoryTypeStatusFromJSON;
function AuthorizationHistoryTypeStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'failed': !(0, runtime_1.exists)(json, 'failed') ? undefined : (0, AuthorizationHistoryTypeStatusFailed_1.AuthorizationHistoryTypeStatusFailedFromJSON)(json['failed']),
        'successful': !(0, runtime_1.exists)(json, 'successful') ? undefined : (0, AuthorizationHistoryTypeStatusSuccessful_1.AuthorizationHistoryTypeStatusSuccessfulFromJSON)(json['successful']),
    };
}
exports.AuthorizationHistoryTypeStatusFromJSONTyped = AuthorizationHistoryTypeStatusFromJSONTyped;
function AuthorizationHistoryTypeStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'failed': (0, AuthorizationHistoryTypeStatusFailed_1.AuthorizationHistoryTypeStatusFailedToJSON)(value.failed),
        'successful': (0, AuthorizationHistoryTypeStatusSuccessful_1.AuthorizationHistoryTypeStatusSuccessfulToJSON)(value.successful),
    };
}
exports.AuthorizationHistoryTypeStatusToJSON = AuthorizationHistoryTypeStatusToJSON;
