/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { KeywordType } from './KeywordType';
/**
 * List of customer keywords.
 * @export
 * @interface ProfileTypeKeywords
 */
export interface ProfileTypeKeywords {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeKeywords
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeKeywords
     */
    hasMore?: boolean;
    /**
     * Collection of keywords attached to the profile.
     * @type {Array<KeywordType>}
     * @memberof ProfileTypeKeywords
     */
    keyword?: Array<KeywordType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeKeywords
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the ProfileTypeKeywords interface.
 */
export declare function instanceOfProfileTypeKeywords(value: object): boolean;
export declare function ProfileTypeKeywordsFromJSON(json: any): ProfileTypeKeywords;
export declare function ProfileTypeKeywordsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeKeywords;
export declare function ProfileTypeKeywordsToJSON(value?: ProfileTypeKeywords | null): any;
