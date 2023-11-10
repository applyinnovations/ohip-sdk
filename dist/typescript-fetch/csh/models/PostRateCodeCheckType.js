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
exports.PostRateCodeCheckTypeToJSON = exports.PostRateCodeCheckTypeFromJSONTyped = exports.PostRateCodeCheckTypeFromJSON = exports.instanceOfPostRateCodeCheckType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PostRateCodeCheckType interface.
 */
function instanceOfPostRateCodeCheckType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostRateCodeCheckType = instanceOfPostRateCodeCheckType;
function PostRateCodeCheckTypeFromJSON(json) {
    return PostRateCodeCheckTypeFromJSONTyped(json, false);
}
exports.PostRateCodeCheckTypeFromJSON = PostRateCodeCheckTypeFromJSON;
function PostRateCodeCheckTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'canPostProducts': !(0, runtime_1.exists)(json, 'canPostProducts') ? undefined : json['canPostProducts'],
        'canReverseProducts': !(0, runtime_1.exists)(json, 'canReverseProducts') ? undefined : json['canReverseProducts'],
        'rateCodeHasProducts': !(0, runtime_1.exists)(json, 'rateCodeHasProducts') ? undefined : json['rateCodeHasProducts'],
    };
}
exports.PostRateCodeCheckTypeFromJSONTyped = PostRateCodeCheckTypeFromJSONTyped;
function PostRateCodeCheckTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'canPostProducts': value.canPostProducts,
        'canReverseProducts': value.canReverseProducts,
        'rateCodeHasProducts': value.rateCodeHasProducts,
    };
}
exports.PostRateCodeCheckTypeToJSON = PostRateCodeCheckTypeToJSON;
