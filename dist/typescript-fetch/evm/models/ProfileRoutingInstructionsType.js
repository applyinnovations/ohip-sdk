"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoutingInstructionsTypeToJSON = exports.ProfileRoutingInstructionsTypeFromJSONTyped = exports.ProfileRoutingInstructionsTypeFromJSON = exports.instanceOfProfileRoutingInstructionsType = void 0;
const runtime_1 = require("../runtime");
const BillingInstructionType_1 = require("./BillingInstructionType");
const TrxInfoType_1 = require("./TrxInfoType");
/**
 * Check if a given object implements the ProfileRoutingInstructionsType interface.
 */
function instanceOfProfileRoutingInstructionsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileRoutingInstructionsType = instanceOfProfileRoutingInstructionsType;
function ProfileRoutingInstructionsTypeFromJSON(json) {
    return ProfileRoutingInstructionsTypeFromJSONTyped(json, false);
}
exports.ProfileRoutingInstructionsTypeFromJSON = ProfileRoutingInstructionsTypeFromJSON;
function ProfileRoutingInstructionsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'autoPopulateRouting': !(0, runtime_1.exists)(json, 'autoPopulateRouting') ? undefined : json['autoPopulateRouting'],
        'billingInstructions': !(0, runtime_1.exists)(json, 'billingInstructions') ? undefined : (json['billingInstructions'].map(BillingInstructionType_1.BillingInstructionTypeFromJSON)),
        'transactionCodes': !(0, runtime_1.exists)(json, 'transactionCodes') ? undefined : (json['transactionCodes'].map(TrxInfoType_1.TrxInfoTypeFromJSON)),
    };
}
exports.ProfileRoutingInstructionsTypeFromJSONTyped = ProfileRoutingInstructionsTypeFromJSONTyped;
function ProfileRoutingInstructionsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'autoPopulateRouting': value.autoPopulateRouting,
        'billingInstructions': value.billingInstructions === undefined ? undefined : (value.billingInstructions.map(BillingInstructionType_1.BillingInstructionTypeToJSON)),
        'transactionCodes': value.transactionCodes === undefined ? undefined : (value.transactionCodes.map(TrxInfoType_1.TrxInfoTypeToJSON)),
    };
}
exports.ProfileRoutingInstructionsTypeToJSON = ProfileRoutingInstructionsTypeToJSON;
