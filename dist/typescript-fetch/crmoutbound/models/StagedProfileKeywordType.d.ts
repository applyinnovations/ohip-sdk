/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { KeywordDetailType } from './KeywordDetailType';
/**
 *
 * @export
 * @interface StagedProfileKeywordType
 */
export interface StagedProfileKeywordType {
    /**
     *
     * @type {KeywordDetailType}
     * @memberof StagedProfileKeywordType
     */
    keywordDetail?: KeywordDetailType;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileKeywordType
     */
    type?: string;
    /**
     * The keyword value.
     * @type {string}
     * @memberof StagedProfileKeywordType
     */
    keyword?: string;
    /**
     * The error in keyword information in a staged profile with an invalid status
     * @type {string}
     * @memberof StagedProfileKeywordType
     */
    errorDescription?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileKeywordType
     */
    id?: string;
}
/**
 * Check if a given object implements the StagedProfileKeywordType interface.
 */
export declare function instanceOfStagedProfileKeywordType(value: object): boolean;
export declare function StagedProfileKeywordTypeFromJSON(json: any): StagedProfileKeywordType;
export declare function StagedProfileKeywordTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileKeywordType;
export declare function StagedProfileKeywordTypeToJSON(value?: StagedProfileKeywordType | null): any;