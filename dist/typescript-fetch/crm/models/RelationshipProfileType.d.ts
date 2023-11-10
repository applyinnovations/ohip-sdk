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
import type { AddressInfoType } from './AddressInfoType';
import type { CompanyType } from './CompanyType';
import type { CustomerType } from './CustomerType';
import type { EmailInfoType } from './EmailInfoType';
import type { OwnerType } from './OwnerType';
import type { ProfileStatusType } from './ProfileStatusType';
import type { ProfileTypeType } from './ProfileTypeType';
import type { TelephoneInfoType } from './TelephoneInfoType';
import type { URLInfoType } from './URLInfoType';
import type { UniqueIDListType } from './UniqueIDListType';
/**
 *
 * @export
 * @interface RelationshipProfileType
 */
export interface RelationshipProfileType {
    /**
     *
     * @type {AddressInfoType}
     * @memberof RelationshipProfileType
     */
    address?: AddressInfoType;
    /**
     *
     * @type {UniqueIDListType}
     * @memberof RelationshipProfileType
     */
    changeProfileIdList?: UniqueIDListType;
    /**
     *
     * @type {CompanyType}
     * @memberof RelationshipProfileType
     */
    company?: CompanyType;
    /**
     *
     * @type {CustomerType}
     * @memberof RelationshipProfileType
     */
    customer?: CustomerType;
    /**
     *
     * @type {EmailInfoType}
     * @memberof RelationshipProfileType
     */
    email?: EmailInfoType;
    /**
     * Relationship identifier.
     * @type {string}
     * @memberof RelationshipProfileType
     */
    id?: string;
    /**
     * Indicates if this relationship is the primary relationship.
     * @type {string}
     * @memberof RelationshipProfileType
     */
    primary?: string;
    /**
     *
     * @type {OwnerType}
     * @memberof RelationshipProfileType
     */
    primaryOwner?: OwnerType;
    /**
     *
     * @type {UniqueIDListType}
     * @memberof RelationshipProfileType
     */
    profileIdList?: UniqueIDListType;
    /**
     *
     * @type {ProfileTypeType}
     * @memberof RelationshipProfileType
     */
    profileType?: ProfileTypeType;
    /**
     *
     * @type {ProfileStatusType}
     * @memberof RelationshipProfileType
     */
    statusCode?: ProfileStatusType;
    /**
     *
     * @type {TelephoneInfoType}
     * @memberof RelationshipProfileType
     */
    telephone?: TelephoneInfoType;
    /**
     *
     * @type {URLInfoType}
     * @memberof RelationshipProfileType
     */
    uRLs?: URLInfoType;
}
/**
 * Check if a given object implements the RelationshipProfileType interface.
 */
export declare function instanceOfRelationshipProfileType(value: object): boolean;
export declare function RelationshipProfileTypeFromJSON(json: any): RelationshipProfileType;
export declare function RelationshipProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipProfileType;
export declare function RelationshipProfileTypeToJSON(value?: RelationshipProfileType | null): any;
