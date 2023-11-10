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
import type { ProfileDistributionFilterType } from './ProfileDistributionFilterType';
/**
 * Profile Distribution Filter details.
 * @export
 * @interface ProfileDistributionFiltersType
 */
export interface ProfileDistributionFiltersType extends Array<ProfileDistributionFilterType> {
}
/**
 * Check if a given object implements the ProfileDistributionFiltersType interface.
 */
export declare function instanceOfProfileDistributionFiltersType(value: object): boolean;
export declare function ProfileDistributionFiltersTypeFromJSON(json: any): ProfileDistributionFiltersType;
export declare function ProfileDistributionFiltersTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileDistributionFiltersType;
export declare function ProfileDistributionFiltersTypeToJSON(value?: ProfileDistributionFiltersType | null): any;
