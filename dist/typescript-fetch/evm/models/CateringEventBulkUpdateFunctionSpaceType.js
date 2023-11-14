"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CateringEventBulkUpdateFunctionSpaceTypeToJSON = exports.CateringEventBulkUpdateFunctionSpaceTypeFromJSONTyped = exports.CateringEventBulkUpdateFunctionSpaceTypeFromJSON = exports.instanceOfCateringEventBulkUpdateFunctionSpaceType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the CateringEventBulkUpdateFunctionSpaceType interface.
 */
function instanceOfCateringEventBulkUpdateFunctionSpaceType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringEventBulkUpdateFunctionSpaceType = instanceOfCateringEventBulkUpdateFunctionSpaceType;
function CateringEventBulkUpdateFunctionSpaceTypeFromJSON(json) {
    return CateringEventBulkUpdateFunctionSpaceTypeFromJSONTyped(json, false);
}
exports.CateringEventBulkUpdateFunctionSpaceTypeFromJSON = CateringEventBulkUpdateFunctionSpaceTypeFromJSON;
function CateringEventBulkUpdateFunctionSpaceTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'discountPercentage': !(0, runtime_1.exists)(json, 'discountPercentage') ? undefined : json['discountPercentage'],
        'functionSpaceCode': !(0, runtime_1.exists)(json, 'functionSpaceCode') ? undefined : json['functionSpaceCode'],
        'rentalAmount': !(0, runtime_1.exists)(json, 'rentalAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['rentalAmount']),
        'rentalCode': !(0, runtime_1.exists)(json, 'rentalCode') ? undefined : json['rentalCode'],
        'setdownTime': !(0, runtime_1.exists)(json, 'setdownTime') ? undefined : json['setdownTime'],
        'setupCode': !(0, runtime_1.exists)(json, 'setupCode') ? undefined : json['setupCode'],
        'setupTime': !(0, runtime_1.exists)(json, 'setupTime') ? undefined : json['setupTime'],
    };
}
exports.CateringEventBulkUpdateFunctionSpaceTypeFromJSONTyped = CateringEventBulkUpdateFunctionSpaceTypeFromJSONTyped;
function CateringEventBulkUpdateFunctionSpaceTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'discountPercentage': value.discountPercentage,
        'functionSpaceCode': value.functionSpaceCode,
        'rentalAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.rentalAmount),
        'rentalCode': value.rentalCode,
        'setdownTime': value.setdownTime,
        'setupCode': value.setupCode,
        'setupTime': value.setupTime,
    };
}
exports.CateringEventBulkUpdateFunctionSpaceTypeToJSON = CateringEventBulkUpdateFunctionSpaceTypeToJSON;