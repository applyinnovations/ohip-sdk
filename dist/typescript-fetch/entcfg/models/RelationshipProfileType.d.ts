/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
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
     * @type {CustomerType}
     * @memberof RelationshipProfileType
     */
    customer?: CustomerType;
    /**
     *
     * @type {CompanyType}
     * @memberof RelationshipProfileType
     */
    company?: CompanyType;
    /**
     *
     * @type {TelephoneInfoType}
     * @memberof RelationshipProfileType
     */
    telephone?: TelephoneInfoType;
    /**
     *
     * @type {AddressInfoType}
     * @memberof RelationshipProfileType
     */
    address?: AddressInfoType;
    /**
     *
     * @type {EmailInfoType}
     * @memberof RelationshipProfileType
     */
    email?: EmailInfoType;
    /**
     *
     * @type {URLInfoType}
     * @memberof RelationshipProfileType
     */
    uRLs?: URLInfoType;
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
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof RelationshipProfileType
     */
    changeProfileIdList?: Array<UniqueIDType>;
    /**
     * Indicates if this relationship is the primary relationship.
     * @type {string}
     * @memberof RelationshipProfileType
     */
    primary?: string;
    /**
     * Relationship identifier.
     * @type {string}
     * @memberof RelationshipProfileType
     */
    id?: string;
    /**
     *
     * @type {ProfileStatusType}
     * @memberof RelationshipProfileType
     */
    statusCode?: ProfileStatusType;
    /**
     *
     * @type {ProfileTypeType}
     * @memberof RelationshipProfileType
     */
    profileType?: ProfileTypeType;
}
/**
 * Check if a given object implements the RelationshipProfileType interface.
 */
export declare function instanceOfRelationshipProfileType(value: object): boolean;
export declare function RelationshipProfileTypeFromJSON(json: any): RelationshipProfileType;
export declare function RelationshipProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipProfileType;
export declare function RelationshipProfileTypeToJSON(value?: RelationshipProfileType | null): any;
