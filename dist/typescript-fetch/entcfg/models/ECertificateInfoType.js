"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECertificateInfoTypeToJSON = exports.ECertificateInfoTypeFromJSONTyped = exports.ECertificateInfoTypeFromJSON = exports.instanceOfECertificateInfoType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const ECertificateInfoTypeHotels_1 = require("./ECertificateInfoTypeHotels");
const ECertificateUsageCriteriaType_1 = require("./ECertificateUsageCriteriaType");
/**
 * Check if a given object implements the ECertificateInfoType interface.
 */
function instanceOfECertificateInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfECertificateInfoType = instanceOfECertificateInfoType;
function ECertificateInfoTypeFromJSON(json) {
    return ECertificateInfoTypeFromJSONTyped(json, false);
}
exports.ECertificateInfoTypeFromJSON = ECertificateInfoTypeFromJSON;
function ECertificateInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'awardCode': !(0, runtime_1.exists)(json, 'awardCode') ? undefined : json['awardCode'],
        'benefitSummary': !(0, runtime_1.exists)(json, 'benefitSummary') ? undefined : json['benefitSummary'],
        'certificateType': !(0, runtime_1.exists)(json, 'certificateType') ? undefined : json['certificateType'],
        'cost': !(0, runtime_1.exists)(json, 'cost') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['cost']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotels': !(0, runtime_1.exists)(json, 'hotels') ? undefined : (0, ECertificateInfoTypeHotels_1.ECertificateInfoTypeHotelsFromJSON)(json['hotels']),
        'label': !(0, runtime_1.exists)(json, 'label') ? undefined : json['label'],
        'longDescription': !(0, runtime_1.exists)(json, 'longDescription') ? undefined : json['longDescription'],
        'maxExtensionAllowed': !(0, runtime_1.exists)(json, 'maxExtensionAllowed') ? undefined : json['maxExtensionAllowed'],
        'membershipType': !(0, runtime_1.exists)(json, 'membershipType') ? undefined : json['membershipType'],
        'promotionCode': !(0, runtime_1.exists)(json, 'promotionCode') ? undefined : json['promotionCode'],
        'usageCriteria': !(0, runtime_1.exists)(json, 'usageCriteria') ? undefined : (0, ECertificateUsageCriteriaType_1.ECertificateUsageCriteriaTypeFromJSON)(json['usageCriteria']),
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['value']),
        'voucherBenefitCode': !(0, runtime_1.exists)(json, 'voucherBenefitCode') ? undefined : json['voucherBenefitCode'],
    };
}
exports.ECertificateInfoTypeFromJSONTyped = ECertificateInfoTypeFromJSONTyped;
function ECertificateInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'awardCode': value.awardCode,
        'benefitSummary': value.benefitSummary,
        'certificateType': value.certificateType,
        'cost': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.cost),
        'description': value.description,
        'hotels': (0, ECertificateInfoTypeHotels_1.ECertificateInfoTypeHotelsToJSON)(value.hotels),
        'label': value.label,
        'longDescription': value.longDescription,
        'maxExtensionAllowed': value.maxExtensionAllowed,
        'membershipType': value.membershipType,
        'promotionCode': value.promotionCode,
        'usageCriteria': (0, ECertificateUsageCriteriaType_1.ECertificateUsageCriteriaTypeToJSON)(value.usageCriteria),
        'value': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.value),
        'voucherBenefitCode': value.voucherBenefitCode,
    };
}
exports.ECertificateInfoTypeToJSON = ECertificateInfoTypeToJSON;
