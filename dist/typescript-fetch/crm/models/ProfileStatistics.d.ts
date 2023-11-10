/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { ProfileStatisticsType } from './ProfileStatisticsType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching profile stay/reservation/revenue statistics. This object contains collection of summary or detail,Success,Warnings and Errors related to this operation.
 * @export
 * @interface ProfileStatistics
 */
export interface ProfileStatistics {
    /**
     *
     * @type {Links}
     * @memberof ProfileStatistics
     */
    links?: Links;
    /**
     *
     * @type {ProfileStatisticsType}
     * @memberof ProfileStatistics
     */
    profileStatistic?: ProfileStatisticsType;
    /**
     *
     * @type {WarningsType}
     * @memberof ProfileStatistics
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ProfileStatistics interface.
 */
export declare function instanceOfProfileStatistics(value: object): boolean;
export declare function ProfileStatisticsFromJSON(json: any): ProfileStatistics;
export declare function ProfileStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileStatistics;
export declare function ProfileStatisticsToJSON(value?: ProfileStatistics | null): any;
