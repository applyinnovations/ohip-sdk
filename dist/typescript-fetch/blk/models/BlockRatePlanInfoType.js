"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockRatePlanInfoTypeToJSON = exports.BlockRatePlanInfoTypeFromJSONTyped = exports.BlockRatePlanInfoTypeFromJSON = exports.instanceOfBlockRatePlanInfoType = void 0;
const runtime_1 = require("../runtime");
const CancelPenaltyType_1 = require("./CancelPenaltyType");
const GuaranteeType_1 = require("./GuaranteeType");
const MealPlanCodeType_1 = require("./MealPlanCodeType");
/**
 * Check if a given object implements the BlockRatePlanInfoType interface.
 */
function instanceOfBlockRatePlanInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockRatePlanInfoType = instanceOfBlockRatePlanInfoType;
function BlockRatePlanInfoTypeFromJSON(json) {
    return BlockRatePlanInfoTypeFromJSONTyped(json, false);
}
exports.BlockRatePlanInfoTypeFromJSON = BlockRatePlanInfoTypeFromJSON;
function BlockRatePlanInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cancelPenalty': !(0, runtime_1.exists)(json, 'cancelPenalty') ? undefined : (0, CancelPenaltyType_1.CancelPenaltyTypeFromJSON)(json['cancelPenalty']),
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'guarantee': !(0, runtime_1.exists)(json, 'guarantee') ? undefined : (0, GuaranteeType_1.GuaranteeTypeFromJSON)(json['guarantee']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'longInfo': !(0, runtime_1.exists)(json, 'longInfo') ? undefined : json['longInfo'],
        'marketCode': !(0, runtime_1.exists)(json, 'marketCode') ? undefined : json['marketCode'],
        'mealPlans': !(0, runtime_1.exists)(json, 'mealPlans') ? undefined : (json['mealPlans'].map(MealPlanCodeType_1.MealPlanCodeTypeFromJSON)),
        'negotiated': !(0, runtime_1.exists)(json, 'negotiated') ? undefined : json['negotiated'],
        'primary': !(0, runtime_1.exists)(json, 'primary') ? undefined : json['primary'],
        'ratePlanCategory': !(0, runtime_1.exists)(json, 'ratePlanCategory') ? undefined : json['ratePlanCategory'],
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'ratePlanLevel': !(0, runtime_1.exists)(json, 'ratePlanLevel') ? undefined : json['ratePlanLevel'],
        'serviceFeeInclusive': !(0, runtime_1.exists)(json, 'serviceFeeInclusive') ? undefined : json['serviceFeeInclusive'],
        'shortInfo': !(0, runtime_1.exists)(json, 'shortInfo') ? undefined : json['shortInfo'],
        'showRateAmount': !(0, runtime_1.exists)(json, 'showRateAmount') ? undefined : json['showRateAmount'],
        'sourceCode': !(0, runtime_1.exists)(json, 'sourceCode') ? undefined : json['sourceCode'],
        'taxInclusive': !(0, runtime_1.exists)(json, 'taxInclusive') ? undefined : json['taxInclusive'],
        'webPage': !(0, runtime_1.exists)(json, 'webPage') ? undefined : json['webPage'],
    };
}
exports.BlockRatePlanInfoTypeFromJSONTyped = BlockRatePlanInfoTypeFromJSONTyped;
function BlockRatePlanInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cancelPenalty': (0, CancelPenaltyType_1.CancelPenaltyTypeToJSON)(value.cancelPenalty),
        'currencyCode': value.currencyCode,
        'description': value.description,
        'guarantee': (0, GuaranteeType_1.GuaranteeTypeToJSON)(value.guarantee),
        'hotelId': value.hotelId,
        'longInfo': value.longInfo,
        'marketCode': value.marketCode,
        'mealPlans': value.mealPlans === undefined ? undefined : (value.mealPlans.map(MealPlanCodeType_1.MealPlanCodeTypeToJSON)),
        'negotiated': value.negotiated,
        'primary': value.primary,
        'ratePlanCategory': value.ratePlanCategory,
        'ratePlanCode': value.ratePlanCode,
        'ratePlanLevel': value.ratePlanLevel,
        'serviceFeeInclusive': value.serviceFeeInclusive,
        'shortInfo': value.shortInfo,
        'showRateAmount': value.showRateAmount,
        'sourceCode': value.sourceCode,
        'taxInclusive': value.taxInclusive,
        'webPage': value.webPage,
    };
}
exports.BlockRatePlanInfoTypeToJSON = BlockRatePlanInfoTypeToJSON;
