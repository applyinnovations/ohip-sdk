"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResGuaranteeTypeToJSON = exports.ResGuaranteeTypeFromJSONTyped = exports.ResGuaranteeTypeFromJSON = exports.instanceOfResGuaranteeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ResGuaranteeType interface.
 */
function instanceOfResGuaranteeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResGuaranteeType = instanceOfResGuaranteeType;
function ResGuaranteeTypeFromJSON(json) {
    return ResGuaranteeTypeFromJSONTyped(json, false);
}
exports.ResGuaranteeTypeFromJSON = ResGuaranteeTypeFromJSON;
function ResGuaranteeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'guaranteeCode': !(0, runtime_1.exists)(json, 'guaranteeCode') ? undefined : json['guaranteeCode'],
        'onHold': !(0, runtime_1.exists)(json, 'onHold') ? undefined : json['onHold'],
        'shortDescription': !(0, runtime_1.exists)(json, 'shortDescription') ? undefined : json['shortDescription'],
    };
}
exports.ResGuaranteeTypeFromJSONTyped = ResGuaranteeTypeFromJSONTyped;
function ResGuaranteeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'guaranteeCode': value.guaranteeCode,
        'onHold': value.onHold,
        'shortDescription': value.shortDescription,
    };
}
exports.ResGuaranteeTypeToJSON = ResGuaranteeTypeToJSON;
