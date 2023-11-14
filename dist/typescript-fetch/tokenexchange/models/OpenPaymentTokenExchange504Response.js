"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPI Token Exchange Service API
 * Oracle Token Exchange Service Specification<br /><br /> Compatible with OPERA Cloud release 1.0.1.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenPaymentTokenExchange504ResponseToJSON = exports.OpenPaymentTokenExchange504ResponseFromJSONTyped = exports.OpenPaymentTokenExchange504ResponseFromJSON = exports.instanceOfOpenPaymentTokenExchange504Response = void 0;
const runtime_1 = require("../runtime");
const ProblemDetail_1 = require("./ProblemDetail");
/**
 * Check if a given object implements the OpenPaymentTokenExchange504Response interface.
 */
function instanceOfOpenPaymentTokenExchange504Response(value) {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfOpenPaymentTokenExchange504Response = instanceOfOpenPaymentTokenExchange504Response;
function OpenPaymentTokenExchange504ResponseFromJSON(json) {
    return OpenPaymentTokenExchange504ResponseFromJSONTyped(json, false);
}
exports.OpenPaymentTokenExchange504ResponseFromJSON = OpenPaymentTokenExchange504ResponseFromJSON;
function OpenPaymentTokenExchange504ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'correlationId': !(0, runtime_1.exists)(json, 'correlationId') ? undefined : json['correlationId'],
        'detail': !(0, runtime_1.exists)(json, 'detail') ? undefined : json['detail'],
        'oerrorCode': !(0, runtime_1.exists)(json, 'o:errorCode') ? undefined : json['o:errorCode'],
        'oerrorDetails': !(0, runtime_1.exists)(json, 'o:errorDetails') ? undefined : (json['o:errorDetails'].map(ProblemDetail_1.ProblemDetailFromJSON)),
        'oerrorPath': !(0, runtime_1.exists)(json, 'o:errorPath') ? undefined : json['o:errorPath'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'title': json['title'],
        'type': json['type'],
    };
}
exports.OpenPaymentTokenExchange504ResponseFromJSONTyped = OpenPaymentTokenExchange504ResponseFromJSONTyped;
function OpenPaymentTokenExchange504ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'correlationId': value.correlationId,
        'detail': value.detail,
        'o:errorCode': value.oerrorCode,
        'o:errorDetails': value.oerrorDetails === undefined ? undefined : (value.oerrorDetails.map(ProblemDetail_1.ProblemDetailToJSON)),
        'o:errorPath': value.oerrorPath,
        'status': value.status,
        'title': value.title,
        'type': value.type,
    };
}
exports.OpenPaymentTokenExchange504ResponseToJSON = OpenPaymentTokenExchange504ResponseToJSON;