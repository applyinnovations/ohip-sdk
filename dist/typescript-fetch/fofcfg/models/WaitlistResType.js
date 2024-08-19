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
exports.WaitlistResTypeToJSON = exports.WaitlistResTypeFromJSONTyped = exports.WaitlistResTypeFromJSON = exports.instanceOfWaitlistResType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the WaitlistResType interface.
 */
function instanceOfWaitlistResType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfWaitlistResType = instanceOfWaitlistResType;
function WaitlistResTypeFromJSON(json) {
    return WaitlistResTypeFromJSONTyped(json, false);
}
exports.WaitlistResTypeFromJSON = WaitlistResTypeFromJSON;
function WaitlistResTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'priorityCode': !(0, runtime_1.exists)(json, 'priorityCode') ? undefined : json['priorityCode'],
        'priorityDescription': !(0, runtime_1.exists)(json, 'priorityDescription') ? undefined : json['priorityDescription'],
        'reasonCode': !(0, runtime_1.exists)(json, 'reasonCode') ? undefined : json['reasonCode'],
        'reasonDescription': !(0, runtime_1.exists)(json, 'reasonDescription') ? undefined : json['reasonDescription'],
        'telephone': !(0, runtime_1.exists)(json, 'telephone') ? undefined : json['telephone'],
    };
}
exports.WaitlistResTypeFromJSONTyped = WaitlistResTypeFromJSONTyped;
function WaitlistResTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'priorityCode': value.priorityCode,
        'priorityDescription': value.priorityDescription,
        'reasonCode': value.reasonCode,
        'reasonDescription': value.reasonDescription,
        'telephone': value.telephone,
    };
}
exports.WaitlistResTypeToJSON = WaitlistResTypeToJSON;
