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
import type { ProfileAllowedActionsType } from './ProfileAllowedActionsType';
import type { ProfileIdList } from './ProfileIdList';
import type { ProfileType } from './ProfileType';
/**
 *
 * @export
 * @interface ProfilesTypeProfileInfoInner
 */
export interface ProfilesTypeProfileInfoInner {
    /**
     *
     * @type {ProfileAllowedActionsType}
     * @memberof ProfilesTypeProfileInfoInner
     */
    allowedActions?: ProfileAllowedActionsType;
    /**
     * Chain code associated with the profile.
     * @type {string}
     * @memberof ProfilesTypeProfileInfoInner
     */
    chainCode?: string;
    /**
     *
     * @type {ProfileType}
     * @memberof ProfilesTypeProfileInfoInner
     */
    profile?: ProfileType;
    /**
     *
     * @type {ProfileIdList}
     * @memberof ProfilesTypeProfileInfoInner
     */
    profileIdList?: ProfileIdList;
}
/**
 * Check if a given object implements the ProfilesTypeProfileInfoInner interface.
 */
export declare function instanceOfProfilesTypeProfileInfoInner(value: object): boolean;
export declare function ProfilesTypeProfileInfoInnerFromJSON(json: any): ProfilesTypeProfileInfoInner;
export declare function ProfilesTypeProfileInfoInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfilesTypeProfileInfoInner;
export declare function ProfilesTypeProfileInfoInnerToJSON(value?: ProfilesTypeProfileInfoInner | null): any;
