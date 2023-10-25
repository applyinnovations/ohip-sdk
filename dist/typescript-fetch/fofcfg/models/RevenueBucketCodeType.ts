/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BucketTypeType } from './BucketTypeType';
import {
    BucketTypeTypeFromJSON,
    BucketTypeTypeFromJSONTyped,
    BucketTypeTypeToJSON,
} from './BucketTypeType';
import type { TrxInfoType } from './TrxInfoType';
import {
    TrxInfoTypeFromJSON,
    TrxInfoTypeFromJSONTyped,
    TrxInfoTypeToJSON,
} from './TrxInfoType';

/**
 * This gives detailed information about a trx code arrangement.
 * @export
 * @interface RevenueBucketCodeType
 */
export interface RevenueBucketCodeType {
    /**
     * 
     * @type {BucketTypeType}
     * @memberof RevenueBucketCodeType
     */
    bucketType?: BucketTypeType;
    /**
     * Stores the default value for the arrangement code for revenue buckets in order to group transaction codes.
     * @type {string}
     * @memberof RevenueBucketCodeType
     */
    bucketValue?: string;
    /**
     * Code is used to identify a trx code arrangement.
     * @type {string}
     * @memberof RevenueBucketCodeType
     */
    code?: string;
    /**
     * Description of the trx code arrangement code.
     * @type {string}
     * @memberof RevenueBucketCodeType
     */
    description?: string;
    /**
     * Identifies the hotel code for which the trx code arrangement is specified.
     * @type {string}
     * @memberof RevenueBucketCodeType
     */
    hotelId?: string;
    /**
     * Bucket is eligible for membership points
     * @type {boolean}
     * @memberof RevenueBucketCodeType
     */
    pointsEligible?: boolean;
    /**
     * This holds Revenue Bucket Type
     * @type {string}
     * @memberof RevenueBucketCodeType
     */
    revenueBucketType?: string;
    /**
     * List of Transaction codes info.
     * @type {Array<TrxInfoType>}
     * @memberof RevenueBucketCodeType
     */
    transactionCodes?: Array<TrxInfoType>;
}

/**
 * Check if a given object implements the RevenueBucketCodeType interface.
 */
export function instanceOfRevenueBucketCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RevenueBucketCodeTypeFromJSON(json: any): RevenueBucketCodeType {
    return RevenueBucketCodeTypeFromJSONTyped(json, false);
}

export function RevenueBucketCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueBucketCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bucketType': !exists(json, 'bucketType') ? undefined : BucketTypeTypeFromJSON(json['bucketType']),
        'bucketValue': !exists(json, 'bucketValue') ? undefined : json['bucketValue'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'pointsEligible': !exists(json, 'pointsEligible') ? undefined : json['pointsEligible'],
        'revenueBucketType': !exists(json, 'revenueBucketType') ? undefined : json['revenueBucketType'],
        'transactionCodes': !exists(json, 'transactionCodes') ? undefined : ((json['transactionCodes'] as Array<any>).map(TrxInfoTypeFromJSON)),
    };
}

export function RevenueBucketCodeTypeToJSON(value?: RevenueBucketCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bucketType': BucketTypeTypeToJSON(value.bucketType),
        'bucketValue': value.bucketValue,
        'code': value.code,
        'description': value.description,
        'hotelId': value.hotelId,
        'pointsEligible': value.pointsEligible,
        'revenueBucketType': value.revenueBucketType,
        'transactionCodes': value.transactionCodes === undefined ? undefined : ((value.transactionCodes as Array<any>).map(TrxInfoTypeToJSON)),
    };
}

