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
exports.FiscalCommandsDetailsToJSON = exports.FiscalCommandsDetailsFromJSONTyped = exports.FiscalCommandsDetailsFromJSON = exports.instanceOfFiscalCommandsDetails = void 0;
const runtime_1 = require("../runtime");
const FiscalCommandType_1 = require("./FiscalCommandType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the FiscalCommandsDetails interface.
 */
function instanceOfFiscalCommandsDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFiscalCommandsDetails = instanceOfFiscalCommandsDetails;
function FiscalCommandsDetailsFromJSON(json) {
    return FiscalCommandsDetailsFromJSONTyped(json, false);
}
exports.FiscalCommandsDetailsFromJSON = FiscalCommandsDetailsFromJSON;
function FiscalCommandsDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fiscalPartners': !(0, runtime_1.exists)(json, 'fiscalPartners') ? undefined : (json['fiscalPartners'].map(FiscalCommandType_1.FiscalCommandTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.FiscalCommandsDetailsFromJSONTyped = FiscalCommandsDetailsFromJSONTyped;
function FiscalCommandsDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fiscalPartners': value.fiscalPartners === undefined ? undefined : (value.fiscalPartners.map(FiscalCommandType_1.FiscalCommandTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.FiscalCommandsDetailsToJSON = FiscalCommandsDetailsToJSON;