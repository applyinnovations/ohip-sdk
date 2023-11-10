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
exports.RevenueBucketCodeTypeToJSON = exports.RevenueBucketCodeTypeFromJSONTyped = exports.RevenueBucketCodeTypeFromJSON = exports.instanceOfRevenueBucketCodeType = void 0;
const runtime_1 = require("../runtime");
const BucketTypeType_1 = require("./BucketTypeType");
const TrxCodesInfoType_1 = require("./TrxCodesInfoType");
/**
 * Check if a given object implements the RevenueBucketCodeType interface.
 */
function instanceOfRevenueBucketCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRevenueBucketCodeType = instanceOfRevenueBucketCodeType;
function RevenueBucketCodeTypeFromJSON(json) {
    return RevenueBucketCodeTypeFromJSONTyped(json, false);
}
exports.RevenueBucketCodeTypeFromJSON = RevenueBucketCodeTypeFromJSON;
function RevenueBucketCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bucketType': !(0, runtime_1.exists)(json, 'bucketType') ? undefined : (0, BucketTypeType_1.BucketTypeTypeFromJSON)(json['bucketType']),
        'bucketValue': !(0, runtime_1.exists)(json, 'bucketValue') ? undefined : json['bucketValue'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'pointsEligible': !(0, runtime_1.exists)(json, 'pointsEligible') ? undefined : json['pointsEligible'],
        'revenueBucketType': !(0, runtime_1.exists)(json, 'revenueBucketType') ? undefined : json['revenueBucketType'],
        'transactionCodes': !(0, runtime_1.exists)(json, 'transactionCodes') ? undefined : (0, TrxCodesInfoType_1.TrxCodesInfoTypeFromJSON)(json['transactionCodes']),
    };
}
exports.RevenueBucketCodeTypeFromJSONTyped = RevenueBucketCodeTypeFromJSONTyped;
function RevenueBucketCodeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bucketType': (0, BucketTypeType_1.BucketTypeTypeToJSON)(value.bucketType),
        'bucketValue': value.bucketValue,
        'code': value.code,
        'description': value.description,
        'hotelId': value.hotelId,
        'pointsEligible': value.pointsEligible,
        'revenueBucketType': value.revenueBucketType,
        'transactionCodes': (0, TrxCodesInfoType_1.TrxCodesInfoTypeToJSON)(value.transactionCodes),
    };
}
exports.RevenueBucketCodeTypeToJSON = RevenueBucketCodeTypeToJSON;
