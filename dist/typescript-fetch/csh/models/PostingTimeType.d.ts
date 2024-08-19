/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Time of posting.
 * @export
 * @interface PostingTimeType
 */
export interface PostingTimeType {
    /**
     * Time of posting.
     * @type {string}
     * @memberof PostingTimeType
     */
    time?: string;
    /**
     * Timezone associated with posting time.
     * @type {string}
     * @memberof PostingTimeType
     */
    timezone?: string;
}
/**
 * Check if a given object implements the PostingTimeType interface.
 */
export declare function instanceOfPostingTimeType(value: object): boolean;
export declare function PostingTimeTypeFromJSON(json: any): PostingTimeType;
export declare function PostingTimeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostingTimeType;
export declare function PostingTimeTypeToJSON(value?: PostingTimeType | null): any;
