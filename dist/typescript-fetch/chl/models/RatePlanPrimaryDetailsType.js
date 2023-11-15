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
exports.RatePlanPrimaryDetailsTypeToJSON = exports.RatePlanPrimaryDetailsTypeFromJSONTyped = exports.RatePlanPrimaryDetailsTypeFromJSON = exports.instanceOfRatePlanPrimaryDetailsType = void 0;
const runtime_1 = require("../runtime");
const BaseType_1 = require("./BaseType");
const RateCodeLockStatusType_1 = require("./RateCodeLockStatusType");
const RatePlanApprovalStatusType_1 = require("./RatePlanApprovalStatusType");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
/**
 * Check if a given object implements the RatePlanPrimaryDetailsType interface.
 */
function instanceOfRatePlanPrimaryDetailsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRatePlanPrimaryDetailsType = instanceOfRatePlanPrimaryDetailsType;
function RatePlanPrimaryDetailsTypeFromJSON(json) {
    return RatePlanPrimaryDetailsTypeFromJSONTyped(json, false);
}
exports.RatePlanPrimaryDetailsTypeFromJSON = RatePlanPrimaryDetailsTypeFromJSON;
function RatePlanPrimaryDetailsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'approvalStatus': !(0, runtime_1.exists)(json, 'approvalStatus') ? undefined : (0, RatePlanApprovalStatusType_1.RatePlanApprovalStatusTypeFromJSON)(json['approvalStatus']),
        'baseType': !(0, runtime_1.exists)(json, 'baseType') ? undefined : (0, BaseType_1.BaseTypeFromJSON)(json['baseType']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['description']),
        'endSellDate': !(0, runtime_1.exists)(json, 'endSellDate') ? undefined : json['endSellDate'],
        'lockStatus': !(0, runtime_1.exists)(json, 'lockStatus') ? undefined : (0, RateCodeLockStatusType_1.RateCodeLockStatusTypeFromJSON)(json['lockStatus']),
        'privilegedRate': !(0, runtime_1.exists)(json, 'privilegedRate') ? undefined : json['privilegedRate'],
        'privilegedRateRestriction': !(0, runtime_1.exists)(json, 'privilegedRateRestriction') ? undefined : json['privilegedRateRestriction'],
        'sellSequence': !(0, runtime_1.exists)(json, 'sellSequence') ? undefined : json['sellSequence'],
        'startSellDate': !(0, runtime_1.exists)(json, 'startSellDate') ? undefined : json['startSellDate'],
    };
}
exports.RatePlanPrimaryDetailsTypeFromJSONTyped = RatePlanPrimaryDetailsTypeFromJSONTyped;
function RatePlanPrimaryDetailsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'approvalStatus': (0, RatePlanApprovalStatusType_1.RatePlanApprovalStatusTypeToJSON)(value.approvalStatus),
        'baseType': (0, BaseType_1.BaseTypeToJSON)(value.baseType),
        'description': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.description),
        'endSellDate': value.endSellDate,
        'lockStatus': (0, RateCodeLockStatusType_1.RateCodeLockStatusTypeToJSON)(value.lockStatus),
        'privilegedRate': value.privilegedRate,
        'privilegedRateRestriction': value.privilegedRateRestriction,
        'sellSequence': value.sellSequence,
        'startSellDate': value.startSellDate,
    };
}
exports.RatePlanPrimaryDetailsTypeToJSON = RatePlanPrimaryDetailsTypeToJSON;
