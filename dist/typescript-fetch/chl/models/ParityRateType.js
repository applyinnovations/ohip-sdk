"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParityRateTypeToJSON = exports.ParityRateTypeFromJSONTyped = exports.ParityRateTypeFromJSON = exports.instanceOfParityRateType = void 0;
const runtime_1 = require("../runtime");
const AdditionalAmountListType_1 = require("./AdditionalAmountListType");
const AdditionalDetailListType_1 = require("./AdditionalDetailListType");
const EnhancedDescriptionType_1 = require("./EnhancedDescriptionType");
const ParityRateTypeRateAmounts_1 = require("./ParityRateTypeRateAmounts");
const ParityRateTypeTotalPricingAmounts_1 = require("./ParityRateTypeTotalPricingAmounts");
/**
 * Check if a given object implements the ParityRateType interface.
 */
function instanceOfParityRateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfParityRateType = instanceOfParityRateType;
function ParityRateTypeFromJSON(json) {
    return ParityRateTypeFromJSONTyped(json, false);
}
exports.ParityRateTypeFromJSON = ParityRateTypeFromJSON;
function ParityRateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalAmounts': !(0, runtime_1.exists)(json, 'additionalAmounts') ? undefined : (0, AdditionalAmountListType_1.AdditionalAmountListTypeFromJSON)(json['additionalAmounts']),
        'additionalDetailList': !(0, runtime_1.exists)(json, 'additionalDetailList') ? undefined : (0, AdditionalDetailListType_1.AdditionalDetailListTypeFromJSON)(json['additionalDetailList']),
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'arrivalDate': !(0, runtime_1.exists)(json, 'arrivalDate') ? undefined : (new Date(json['arrivalDate'])),
        'availableRooms': !(0, runtime_1.exists)(json, 'availableRooms') ? undefined : json['availableRooms'],
        'channelRatePlanCategory': !(0, runtime_1.exists)(json, 'channelRatePlanCategory') ? undefined : json['channelRatePlanCategory'],
        'closed': !(0, runtime_1.exists)(json, 'closed') ? undefined : json['closed'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'rateAmounts': !(0, runtime_1.exists)(json, 'rateAmounts') ? undefined : (0, ParityRateTypeRateAmounts_1.ParityRateTypeRateAmountsFromJSON)(json['rateAmounts']),
        'rateChangesOverDays': !(0, runtime_1.exists)(json, 'rateChangesOverDays') ? undefined : json['rateChangesOverDays'],
        'rateDescription': !(0, runtime_1.exists)(json, 'rateDescription') ? undefined : (0, EnhancedDescriptionType_1.EnhancedDescriptionTypeFromJSON)(json['rateDescription']),
        'rateFrequency': !(0, runtime_1.exists)(json, 'rateFrequency') ? undefined : json['rateFrequency'],
        'ratePlanDescription': !(0, runtime_1.exists)(json, 'ratePlanDescription') ? undefined : json['ratePlanDescription'],
        'roomTypeDescription': !(0, runtime_1.exists)(json, 'roomTypeDescription') ? undefined : (0, EnhancedDescriptionType_1.EnhancedDescriptionTypeFromJSON)(json['roomTypeDescription']),
        'statusCode': !(0, runtime_1.exists)(json, 'statusCode') ? undefined : json['statusCode'],
        'statusDescription': !(0, runtime_1.exists)(json, 'statusDescription') ? undefined : json['statusDescription'],
        'totalPricingAmounts': !(0, runtime_1.exists)(json, 'totalPricingAmounts') ? undefined : (0, ParityRateTypeTotalPricingAmounts_1.ParityRateTypeTotalPricingAmountsFromJSON)(json['totalPricingAmounts']),
        'weekendDay': !(0, runtime_1.exists)(json, 'weekendDay') ? undefined : json['weekendDay'],
    };
}
exports.ParityRateTypeFromJSONTyped = ParityRateTypeFromJSONTyped;
function ParityRateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'additionalAmounts': (0, AdditionalAmountListType_1.AdditionalAmountListTypeToJSON)(value.additionalAmounts),
        'additionalDetailList': (0, AdditionalDetailListType_1.AdditionalDetailListTypeToJSON)(value.additionalDetailList),
        'amount': value.amount,
        'arrivalDate': value.arrivalDate === undefined ? undefined : (value.arrivalDate.toISOString().substr(0, 10)),
        'availableRooms': value.availableRooms,
        'channelRatePlanCategory': value.channelRatePlanCategory,
        'closed': value.closed,
        'currencyCode': value.currencyCode,
        'rateAmounts': (0, ParityRateTypeRateAmounts_1.ParityRateTypeRateAmountsToJSON)(value.rateAmounts),
        'rateChangesOverDays': value.rateChangesOverDays,
        'rateDescription': (0, EnhancedDescriptionType_1.EnhancedDescriptionTypeToJSON)(value.rateDescription),
        'rateFrequency': value.rateFrequency,
        'ratePlanDescription': value.ratePlanDescription,
        'roomTypeDescription': (0, EnhancedDescriptionType_1.EnhancedDescriptionTypeToJSON)(value.roomTypeDescription),
        'statusCode': value.statusCode,
        'statusDescription': value.statusDescription,
        'totalPricingAmounts': (0, ParityRateTypeTotalPricingAmounts_1.ParityRateTypeTotalPricingAmountsToJSON)(value.totalPricingAmounts),
        'weekendDay': value.weekendDay,
    };
}
exports.ParityRateTypeToJSON = ParityRateTypeToJSON;
