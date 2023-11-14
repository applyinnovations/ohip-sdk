"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractBillingInstructionsToBeChangedToJSON = exports.ContractBillingInstructionsToBeChangedFromJSONTyped = exports.ContractBillingInstructionsToBeChangedFromJSON = exports.instanceOfContractBillingInstructionsToBeChanged = void 0;
const runtime_1 = require("../runtime");
const ContractBillingInstructionsType_1 = require("./ContractBillingInstructionsType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ContractBillingInstructionsToBeChanged interface.
 */
function instanceOfContractBillingInstructionsToBeChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfContractBillingInstructionsToBeChanged = instanceOfContractBillingInstructionsToBeChanged;
function ContractBillingInstructionsToBeChangedFromJSON(json) {
    return ContractBillingInstructionsToBeChangedFromJSONTyped(json, false);
}
exports.ContractBillingInstructionsToBeChangedFromJSON = ContractBillingInstructionsToBeChangedFromJSON;
function ContractBillingInstructionsToBeChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'contractBillingInstructions': !(0, runtime_1.exists)(json, 'contractBillingInstructions') ? undefined : (0, ContractBillingInstructionsType_1.ContractBillingInstructionsTypeFromJSON)(json['contractBillingInstructions']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ContractBillingInstructionsToBeChangedFromJSONTyped = ContractBillingInstructionsToBeChangedFromJSONTyped;
function ContractBillingInstructionsToBeChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'contractBillingInstructions': (0, ContractBillingInstructionsType_1.ContractBillingInstructionsTypeToJSON)(value.contractBillingInstructions),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ContractBillingInstructionsToBeChangedToJSON = ContractBillingInstructionsToBeChangedToJSON;