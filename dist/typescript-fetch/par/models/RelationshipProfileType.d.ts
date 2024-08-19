/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
import type { UniqueIDType } from './UniqueIDType';
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
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof RelationshipProfileType
     */
    changeProfileIdList?: Array<UniqueIDType>;
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
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof RelationshipProfileType
     */
    profileIdList?: Array<UniqueIDType>;
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
