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
import type { ProfileIdList } from './ProfileIdList';
import type { ProfileMembershipType } from './ProfileMembershipType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface ChangeMembershipRequest
 */
export interface ChangeMembershipRequest {
    /**
     *
     * @type {Links}
     * @memberof ChangeMembershipRequest
     */
    links?: Links;
    /**
     *
     * @type {ProfileIdList}
     * @memberof ChangeMembershipRequest
     */
    profileIdList?: ProfileIdList;
    /**
     * Detailed information of membership related to the profile
     * @type {Array<ProfileMembershipType>}
     * @memberof ChangeMembershipRequest
     */
    profileMemberships?: Array<ProfileMembershipType>;
    /**
     *
     * @type {WarningsType}
     * @memberof ChangeMembershipRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ChangeMembershipRequest interface.
 */
export declare function instanceOfChangeMembershipRequest(value: object): boolean;
export declare function ChangeMembershipRequestFromJSON(json: any): ChangeMembershipRequest;
export declare function ChangeMembershipRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeMembershipRequest;
export declare function ChangeMembershipRequestToJSON(value?: ChangeMembershipRequest | null): any;
