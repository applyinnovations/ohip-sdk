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
exports.CashierClosureDetailsToJSON = exports.CashierClosureDetailsFromJSONTyped = exports.CashierClosureDetailsFromJSON = exports.instanceOfCashierClosureDetails = void 0;
const runtime_1 = require("../runtime");
const CashierClosureType_1 = require("./CashierClosureType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the CashierClosureDetails interface.
 */
function instanceOfCashierClosureDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCashierClosureDetails = instanceOfCashierClosureDetails;
function CashierClosureDetailsFromJSON(json) {
    return CashierClosureDetailsFromJSONTyped(json, false);
}
exports.CashierClosureDetailsFromJSON = CashierClosureDetailsFromJSON;
function CashierClosureDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierClosureInfo': !(0, runtime_1.exists)(json, 'cashierClosureInfo') ? undefined : (0, CashierClosureType_1.CashierClosureTypeFromJSON)(json['cashierClosureInfo']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.CashierClosureDetailsFromJSONTyped = CashierClosureDetailsFromJSONTyped;
function CashierClosureDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierClosureInfo': (0, CashierClosureType_1.CashierClosureTypeToJSON)(value.cashierClosureInfo),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.CashierClosureDetailsToJSON = CashierClosureDetailsToJSON;