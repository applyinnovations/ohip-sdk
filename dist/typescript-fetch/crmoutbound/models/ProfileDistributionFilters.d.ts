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
import type { Links } from './Links';
import type { ProfileDistributionFiltersType } from './ProfileDistributionFiltersType';
/**
 * Response object for fetching Profile Distribution Filters.
 * @export
 * @interface ProfileDistributionFilters
 */
export interface ProfileDistributionFilters {
    /**
     *
     * @type {ProfileDistributionFiltersType}
     * @memberof ProfileDistributionFilters
     */
    profileDistributionFiltersDetail?: ProfileDistributionFiltersType;
    /**
     *
     * @type {Links}
     * @memberof ProfileDistributionFilters
     */
    links?: Links;
}
/**
 * Check if a given object implements the ProfileDistributionFilters interface.
 */
export declare function instanceOfProfileDistributionFilters(value: object): boolean;
export declare function ProfileDistributionFiltersFromJSON(json: any): ProfileDistributionFilters;
export declare function ProfileDistributionFiltersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileDistributionFilters;
export declare function ProfileDistributionFiltersToJSON(value?: ProfileDistributionFilters | null): any;
