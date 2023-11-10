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
import type { ProfileTypeType } from './ProfileTypeType';
/**
 * Type which represents suspended profile match statistics information.
 * @export
 * @interface SuspendedProfileMatchStatType
 */
export interface SuspendedProfileMatchStatType {
    /**
     * Suspended profile which associated with a Hotel code.
     * @type {string}
     * @memberof SuspendedProfileMatchStatType
     */
    matchCriteria?: string;
    /**
     * Indicates number of profiles that have met the threshold limit (eg: Upper, Middle and lower)
     * @type {number}
     * @memberof SuspendedProfileMatchStatType
     */
    thresholdPoints?: number;
    /**
     * Indicates threshold level(eg: Upper, Middle and lower)
     * @type {string}
     * @memberof SuspendedProfileMatchStatType
     */
    threshold?: string;
    /**
     *
     * @type {ProfileTypeType}
     * @memberof SuspendedProfileMatchStatType
     */
    profileType?: ProfileTypeType;
}
/**
 * Check if a given object implements the SuspendedProfileMatchStatType interface.
 */
export declare function instanceOfSuspendedProfileMatchStatType(value: object): boolean;
export declare function SuspendedProfileMatchStatTypeFromJSON(json: any): SuspendedProfileMatchStatType;
export declare function SuspendedProfileMatchStatTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuspendedProfileMatchStatType;
export declare function SuspendedProfileMatchStatTypeToJSON(value?: SuspendedProfileMatchStatType | null): any;
