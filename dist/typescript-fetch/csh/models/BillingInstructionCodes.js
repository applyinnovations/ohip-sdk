"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingInstructionCodesToJSON = exports.BillingInstructionCodesFromJSONTyped = exports.BillingInstructionCodesFromJSON = exports.instanceOfBillingInstructionCodes = void 0;
const runtime_1 = require("../runtime");
const BillingInstructionsType_1 = require("./BillingInstructionsType");
const Links_1 = require("./Links");
const TrxCodesInfoType_1 = require("./TrxCodesInfoType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the BillingInstructionCodes interface.
 */
function instanceOfBillingInstructionCodes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBillingInstructionCodes = instanceOfBillingInstructionCodes;
function BillingInstructionCodesFromJSON(json) {
    return BillingInstructionCodesFromJSONTyped(json, false);
}
exports.BillingInstructionCodesFromJSON = BillingInstructionCodesFromJSON;
function BillingInstructionCodesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'billingInstructions': !(0, runtime_1.exists)(json, 'billingInstructions') ? undefined : (0, BillingInstructionsType_1.BillingInstructionsTypeFromJSON)(json['billingInstructions']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'transactionCodes': !(0, runtime_1.exists)(json, 'transactionCodes') ? undefined : (0, TrxCodesInfoType_1.TrxCodesInfoTypeFromJSON)(json['transactionCodes']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.BillingInstructionCodesFromJSONTyped = BillingInstructionCodesFromJSONTyped;
function BillingInstructionCodesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'billingInstructions': (0, BillingInstructionsType_1.BillingInstructionsTypeToJSON)(value.billingInstructions),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'transactionCodes': (0, TrxCodesInfoType_1.TrxCodesInfoTypeToJSON)(value.transactionCodes),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.BillingInstructionCodesToJSON = BillingInstructionCodesToJSON;
