"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatePlanRoutingInstructionsTypeToJSON = exports.RatePlanRoutingInstructionsTypeFromJSONTyped = exports.RatePlanRoutingInstructionsTypeFromJSON = exports.instanceOfRatePlanRoutingInstructionsType = void 0;
const runtime_1 = require("../runtime");
const BillingInstructionType_1 = require("./BillingInstructionType");
const RoutingProfileTypeType_1 = require("./RoutingProfileTypeType");
const TrxInfoType_1 = require("./TrxInfoType");
/**
 * Check if a given object implements the RatePlanRoutingInstructionsType interface.
 */
function instanceOfRatePlanRoutingInstructionsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRatePlanRoutingInstructionsType = instanceOfRatePlanRoutingInstructionsType;
function RatePlanRoutingInstructionsTypeFromJSON(json) {
    return RatePlanRoutingInstructionsTypeFromJSONTyped(json, false);
}
exports.RatePlanRoutingInstructionsTypeFromJSON = RatePlanRoutingInstructionsTypeFromJSON;
function RatePlanRoutingInstructionsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'billingInstructions': !(0, runtime_1.exists)(json, 'billingInstructions') ? undefined : (json['billingInstructions'].map(BillingInstructionType_1.BillingInstructionTypeFromJSON)),
        'profileType': !(0, runtime_1.exists)(json, 'profileType') ? undefined : (0, RoutingProfileTypeType_1.RoutingProfileTypeTypeFromJSON)(json['profileType']),
        'transactionCodes': !(0, runtime_1.exists)(json, 'transactionCodes') ? undefined : (json['transactionCodes'].map(TrxInfoType_1.TrxInfoTypeFromJSON)),
    };
}
exports.RatePlanRoutingInstructionsTypeFromJSONTyped = RatePlanRoutingInstructionsTypeFromJSONTyped;
function RatePlanRoutingInstructionsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'billingInstructions': value.billingInstructions === undefined ? undefined : (value.billingInstructions.map(BillingInstructionType_1.BillingInstructionTypeToJSON)),
        'profileType': (0, RoutingProfileTypeType_1.RoutingProfileTypeTypeToJSON)(value.profileType),
        'transactionCodes': value.transactionCodes === undefined ? undefined : (value.transactionCodes.map(TrxInfoType_1.TrxInfoTypeToJSON)),
    };
}
exports.RatePlanRoutingInstructionsTypeToJSON = RatePlanRoutingInstructionsTypeToJSON;
