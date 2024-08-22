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
exports.BillingInstructionTypeToJSON = exports.BillingInstructionTypeFromJSONTyped = exports.BillingInstructionTypeFromJSON = exports.instanceOfBillingInstructionType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BillingInstructionType interface.
 */
function instanceOfBillingInstructionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBillingInstructionType = instanceOfBillingInstructionType;
function BillingInstructionTypeFromJSON(json) {
    return BillingInstructionTypeFromJSONTyped(json, false);
}
exports.BillingInstructionTypeFromJSON = BillingInstructionTypeFromJSON;
function BillingInstructionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'billingCode': !(0, runtime_1.exists)(json, 'billingCode') ? undefined : json['billingCode'],
        'desc': !(0, runtime_1.exists)(json, 'desc') ? undefined : json['desc'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'routingInstructionsId': !(0, runtime_1.exists)(json, 'routingInstructionsId') ? undefined : json['routingInstructionsId'],
    };
}
exports.BillingInstructionTypeFromJSONTyped = BillingInstructionTypeFromJSONTyped;
function BillingInstructionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'billingCode': value.billingCode,
        'desc': value.desc,
        'hotelId': value.hotelId,
        'routingInstructionsId': value.routingInstructionsId,
    };
}
exports.BillingInstructionTypeToJSON = BillingInstructionTypeToJSON;
