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
exports.PolicyAmountPercentTypeToJSON = exports.PolicyAmountPercentTypeFromJSONTyped = exports.PolicyAmountPercentTypeFromJSON = exports.instanceOfPolicyAmountPercentType = void 0;
const runtime_1 = require("../runtime");
const PolicyBasisTypeType_1 = require("./PolicyBasisTypeType");
/**
 * Check if a given object implements the PolicyAmountPercentType interface.
 */
function instanceOfPolicyAmountPercentType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPolicyAmountPercentType = instanceOfPolicyAmountPercentType;
function PolicyAmountPercentTypeFromJSON(json) {
    return PolicyAmountPercentTypeFromJSONTyped(json, false);
}
exports.PolicyAmountPercentTypeFromJSON = PolicyAmountPercentTypeFromJSON;
function PolicyAmountPercentTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'basisType': !(0, runtime_1.exists)(json, 'basisType') ? undefined : (0, PolicyBasisTypeType_1.PolicyBasisTypeTypeFromJSON)(json['basisType']),
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'nights': !(0, runtime_1.exists)(json, 'nights') ? undefined : json['nights'],
        'percent': !(0, runtime_1.exists)(json, 'percent') ? undefined : json['percent'],
    };
}
exports.PolicyAmountPercentTypeFromJSONTyped = PolicyAmountPercentTypeFromJSONTyped;
function PolicyAmountPercentTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'basisType': (0, PolicyBasisTypeType_1.PolicyBasisTypeTypeToJSON)(value.basisType),
        'currencyCode': value.currencyCode,
        'nights': value.nights,
        'percent': value.percent,
    };
}
exports.PolicyAmountPercentTypeToJSON = PolicyAmountPercentTypeToJSON;
