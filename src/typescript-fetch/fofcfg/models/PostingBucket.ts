/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Holds the amount that will be stored in each bucket after posting.
 * @export
 * @interface PostingBucket
 */
export interface PostingBucket {
    /**
     * Holds amount for sub-total 1.
     * @type {number}
     * @memberof PostingBucket
     */
    bucket1?: number;
    /**
     * Holds amount for sub-total 2.
     * @type {number}
     * @memberof PostingBucket
     */
    bucket2?: number;
    /**
     * Holds amount for sub-total 3.
     * @type {number}
     * @memberof PostingBucket
     */
    bucket3?: number;
}

/**
 * Check if a given object implements the PostingBucket interface.
 */
export function instanceOfPostingBucket(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostingBucketFromJSON(json: any): PostingBucket {
    return PostingBucketFromJSONTyped(json, false);
}

export function PostingBucketFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostingBucket {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bucket1': !exists(json, 'bucket1') ? undefined : json['bucket1'],
        'bucket2': !exists(json, 'bucket2') ? undefined : json['bucket2'],
        'bucket3': !exists(json, 'bucket3') ? undefined : json['bucket3'],
    };
}

export function PostingBucketToJSON(value?: PostingBucket | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bucket1': value.bucket1,
        'bucket2': value.bucket2,
        'bucket3': value.bucket3,
    };
}
