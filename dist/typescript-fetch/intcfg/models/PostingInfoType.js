"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostingInfoTypeToJSON = exports.PostingInfoTypeFromJSONTyped = exports.PostingInfoTypeFromJSON = exports.instanceOfPostingInfoType = void 0;
const runtime_1 = require("../runtime");
const MaskDialNumberType_1 = require("./MaskDialNumberType");
/**
 * Check if a given object implements the PostingInfoType interface.
 */
function instanceOfPostingInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostingInfoType = instanceOfPostingInfoType;
function PostingInfoTypeFromJSON(json) {
    return PostingInfoTypeFromJSONTyped(json, false);
}
exports.PostingInfoTypeFromJSON = PostingInfoTypeFromJSON;
function PostingInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'referenceField': !(0, runtime_1.exists)(json, 'referenceField') ? undefined : json['referenceField'],
        'chargeScaling': !(0, runtime_1.exists)(json, 'chargeScaling') ? undefined : json['chargeScaling'],
        'zeroChargePostings': !(0, runtime_1.exists)(json, 'zeroChargePostings') ? undefined : json['zeroChargePostings'],
        'postings': !(0, runtime_1.exists)(json, 'postings') ? undefined : json['postings'],
        'postType': !(0, runtime_1.exists)(json, 'postType') ? undefined : json['postType'],
        'conversion': !(0, runtime_1.exists)(json, 'conversion') ? undefined : json['conversion'],
        'reference': !(0, runtime_1.exists)(json, 'reference') ? undefined : json['reference'],
        'supplement': !(0, runtime_1.exists)(json, 'supplement') ? undefined : json['supplement'],
        'overrideCreditLimit': !(0, runtime_1.exists)(json, 'overrideCreditLimit') ? undefined : json['overrideCreditLimit'],
        'noPostFlag': !(0, runtime_1.exists)(json, 'noPostFlag') ? undefined : json['noPostFlag'],
        'generatesTax': !(0, runtime_1.exists)(json, 'generatesTax') ? undefined : json['generatesTax'],
        'dialedNumberMasking': !(0, runtime_1.exists)(json, 'dialedNumberMasking') ? undefined : (0, MaskDialNumberType_1.MaskDialNumberTypeFromJSON)(json['dialedNumberMasking']),
        'articleNoPrefix': !(0, runtime_1.exists)(json, 'articleNoPrefix') ? undefined : json['articleNoPrefix'],
    };
}
exports.PostingInfoTypeFromJSONTyped = PostingInfoTypeFromJSONTyped;
function PostingInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'referenceField': value.referenceField,
        'chargeScaling': value.chargeScaling,
        'zeroChargePostings': value.zeroChargePostings,
        'postings': value.postings,
        'postType': value.postType,
        'conversion': value.conversion,
        'reference': value.reference,
        'supplement': value.supplement,
        'overrideCreditLimit': value.overrideCreditLimit,
        'noPostFlag': value.noPostFlag,
        'generatesTax': value.generatesTax,
        'dialedNumberMasking': (0, MaskDialNumberType_1.MaskDialNumberTypeToJSON)(value.dialedNumberMasking),
        'articleNoPrefix': value.articleNoPrefix,
    };
}
exports.PostingInfoTypeToJSON = PostingInfoTypeToJSON;
