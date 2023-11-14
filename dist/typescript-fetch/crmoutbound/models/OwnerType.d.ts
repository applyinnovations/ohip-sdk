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
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { EmailInfoType } from './EmailInfoType';
import type { PersonNameType } from './PersonNameType';
import type { ProfileId } from './ProfileId';
import type { TelephoneInfoType } from './TelephoneInfoType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Generic type for information about an owner.
 * @export
 * @interface OwnerType
 */
export interface OwnerType {
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof OwnerType
     */
    hotel?: CodeDescriptionType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof OwnerType
     */
    userId?: UniqueIDType;
    /**
     * Unique application user name of the owner.
     * @type {string}
     * @memberof OwnerType
     */
    userName?: string;
    /**
     * Unique Code to identify the owner.
     * @type {string}
     * @memberof OwnerType
     */
    ownerCode?: string;
    /**
     *
     * @type {ProfileId}
     * @memberof OwnerType
     */
    profileId?: ProfileId;
    /**
     *
     * @type {PersonNameType}
     * @memberof OwnerType
     */
    name?: PersonNameType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof OwnerType
     */
    department?: CodeDescriptionType;
    /**
     *
     * @type {EmailInfoType}
     * @memberof OwnerType
     */
    email?: EmailInfoType;
    /**
     *
     * @type {TelephoneInfoType}
     * @memberof OwnerType
     */
    phone?: TelephoneInfoType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof OwnerType
     */
    relationship?: CodeDescriptionType;
    /**
     * When true, this is a primary owner.
     * @type {boolean}
     * @memberof OwnerType
     */
    primary?: boolean;
}
/**
 * Check if a given object implements the OwnerType interface.
 */
export declare function instanceOfOwnerType(value: object): boolean;
export declare function OwnerTypeFromJSON(json: any): OwnerType;
export declare function OwnerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OwnerType;
export declare function OwnerTypeToJSON(value?: OwnerType | null): any;