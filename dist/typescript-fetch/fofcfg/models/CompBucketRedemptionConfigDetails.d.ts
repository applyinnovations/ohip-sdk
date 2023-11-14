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
import type { BucketRedemptionCodesType } from './BucketRedemptionCodesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching Comp Bucket Redemption Codes configurations.
 * @export
 * @interface CompBucketRedemptionConfigDetails
 */
export interface CompBucketRedemptionConfigDetails {
    /**
     *
     * @type {BucketRedemptionCodesType}
     * @memberof CompBucketRedemptionConfigDetails
     */
    bucketRedemptionCodes?: BucketRedemptionCodesType;
    /**
     *
     * @type {Links}
     * @memberof CompBucketRedemptionConfigDetails
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CompBucketRedemptionConfigDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CompBucketRedemptionConfigDetails interface.
 */
export declare function instanceOfCompBucketRedemptionConfigDetails(value: object): boolean;
export declare function CompBucketRedemptionConfigDetailsFromJSON(json: any): CompBucketRedemptionConfigDetails;
export declare function CompBucketRedemptionConfigDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompBucketRedemptionConfigDetails;
export declare function CompBucketRedemptionConfigDetailsToJSON(value?: CompBucketRedemptionConfigDetails | null): any;