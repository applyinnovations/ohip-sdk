"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPI Token Exchange Service API
 * Oracle Token Exchange Service Specification<br /><br /> Compatible with OPERA Cloud release 1.0.1.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenPaymentTokenExchange200ResponseToJSON = exports.OpenPaymentTokenExchange200ResponseFromJSONTyped = exports.OpenPaymentTokenExchange200ResponseFromJSON = exports.instanceOfOpenPaymentTokenExchange200Response = void 0;
/**
 * Check if a given object implements the OpenPaymentTokenExchange200Response interface.
 */
function instanceOfOpenPaymentTokenExchange200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "cardType" in value;
    isInstance = isInstance && "expiryDate" in value;
    isInstance = isInstance && "pan" in value;
    isInstance = isInstance && "token" in value;
    return isInstance;
}
exports.instanceOfOpenPaymentTokenExchange200Response = instanceOfOpenPaymentTokenExchange200Response;
function OpenPaymentTokenExchange200ResponseFromJSON(json) {
    return OpenPaymentTokenExchange200ResponseFromJSONTyped(json, false);
}
exports.OpenPaymentTokenExchange200ResponseFromJSON = OpenPaymentTokenExchange200ResponseFromJSON;
function OpenPaymentTokenExchange200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cardType': json['cardType'],
        'expiryDate': json['expiryDate'],
        'pan': json['pan'],
        'token': json['token'],
    };
}
exports.OpenPaymentTokenExchange200ResponseFromJSONTyped = OpenPaymentTokenExchange200ResponseFromJSONTyped;
function OpenPaymentTokenExchange200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cardType': value.cardType,
        'expiryDate': value.expiryDate,
        'pan': value.pan,
        'token': value.token,
    };
}
exports.OpenPaymentTokenExchange200ResponseToJSON = OpenPaymentTokenExchange200ResponseToJSON;
