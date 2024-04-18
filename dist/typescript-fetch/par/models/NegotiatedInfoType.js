"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegotiatedInfoTypeToJSON = exports.NegotiatedInfoTypeFromJSONTyped = exports.NegotiatedInfoTypeFromJSON = exports.instanceOfNegotiatedInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the NegotiatedInfoType interface.
 */
function instanceOfNegotiatedInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNegotiatedInfoType = instanceOfNegotiatedInfoType;
function NegotiatedInfoTypeFromJSON(json) {
    return NegotiatedInfoTypeFromJSONTyped(json, false);
}
exports.NegotiatedInfoTypeFromJSON = NegotiatedInfoTypeFromJSON;
function NegotiatedInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'comissionCode': !(0, runtime_1.exists)(json, 'comissionCode') ? undefined : json['comissionCode'],
        'corporateAgreementId': !(0, runtime_1.exists)(json, 'corporateAgreementId') ? undefined : json['corporateAgreementId'],
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : json['end'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : json['start'],
    };
}
exports.NegotiatedInfoTypeFromJSONTyped = NegotiatedInfoTypeFromJSONTyped;
function NegotiatedInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'comissionCode': value.comissionCode,
        'corporateAgreementId': value.corporateAgreementId,
        'end': value.end,
        'inactive': value.inactive,
        'order': value.order,
        'start': value.start,
    };
}
exports.NegotiatedInfoTypeToJSON = NegotiatedInfoTypeToJSON;