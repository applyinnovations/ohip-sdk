"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockRateCodeValidationTypeToJSON = exports.BlockRateCodeValidationTypeFromJSONTyped = exports.BlockRateCodeValidationTypeFromJSON = exports.instanceOfBlockRateCodeValidationType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BlockRateCodeValidationType interface.
 */
function instanceOfBlockRateCodeValidationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockRateCodeValidationType = instanceOfBlockRateCodeValidationType;
function BlockRateCodeValidationTypeFromJSON(json) {
    return BlockRateCodeValidationTypeFromJSONTyped(json, false);
}
exports.BlockRateCodeValidationTypeFromJSON = BlockRateCodeValidationTypeFromJSON;
function BlockRateCodeValidationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'rateCode': !(0, runtime_1.exists)(json, 'rateCode') ? undefined : json['rateCode'],
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}
exports.BlockRateCodeValidationTypeFromJSONTyped = BlockRateCodeValidationTypeFromJSONTyped;
function BlockRateCodeValidationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substring(0, 10)),
        'hotelId': value.hotelId,
        'rateCode': value.rateCode,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substring(0, 10)),
    };
}
exports.BlockRateCodeValidationTypeToJSON = BlockRateCodeValidationTypeToJSON;