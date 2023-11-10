/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { PromotionGroupsType } from './PromotionGroupsType';
/**
 * Collection of promotion groups
 * @export
 * @interface PromotionGroupsPromotionGroups
 */
export interface PromotionGroupsPromotionGroups {
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof PromotionGroupsPromotionGroups
     */
    allRowsFetched?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof PromotionGroupsPromotionGroups
     */
    limit?: number;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof PromotionGroupsPromotionGroups
     */
    offset?: number;
    /**
     *
     * @type {PromotionGroupsType}
     * @memberof PromotionGroupsPromotionGroups
     */
    promotionGroups?: PromotionGroupsType;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof PromotionGroupsPromotionGroups
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof PromotionGroupsPromotionGroups
     */
    totalRows?: number;
}
/**
 * Check if a given object implements the PromotionGroupsPromotionGroups interface.
 */
export declare function instanceOfPromotionGroupsPromotionGroups(value: object): boolean;
export declare function PromotionGroupsPromotionGroupsFromJSON(json: any): PromotionGroupsPromotionGroups;
export declare function PromotionGroupsPromotionGroupsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotionGroupsPromotionGroups;
export declare function PromotionGroupsPromotionGroupsToJSON(value?: PromotionGroupsPromotionGroups | null): any;
