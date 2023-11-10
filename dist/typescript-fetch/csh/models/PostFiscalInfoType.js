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
exports.PostFiscalInfoTypeToJSON = exports.PostFiscalInfoTypeFromJSONTyped = exports.PostFiscalInfoTypeFromJSON = exports.instanceOfPostFiscalInfoType = void 0;
const runtime_1 = require("../runtime");
const PayloadType_1 = require("./PayloadType");
/**
 * Check if a given object implements the PostFiscalInfoType interface.
 */
function instanceOfPostFiscalInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostFiscalInfoType = instanceOfPostFiscalInfoType;
function PostFiscalInfoTypeFromJSON(json) {
    return PostFiscalInfoTypeFromJSONTyped(json, false);
}
exports.PostFiscalInfoTypeFromJSON = PostFiscalInfoTypeFromJSON;
function PostFiscalInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fiscalPayloadType': !(0, runtime_1.exists)(json, 'fiscalPayloadType') ? undefined : (0, PayloadType_1.PayloadTypeFromJSON)(json['fiscalPayloadType']),
    };
}
exports.PostFiscalInfoTypeFromJSONTyped = PostFiscalInfoTypeFromJSONTyped;
function PostFiscalInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fiscalPayloadType': (0, PayloadType_1.PayloadTypeToJSON)(value.fiscalPayloadType),
    };
}
exports.PostFiscalInfoTypeToJSON = PostFiscalInfoTypeToJSON;
