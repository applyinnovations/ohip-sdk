/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockOwnershipType } from './BlockOwnershipType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { EmailInfoType } from './EmailInfoType';
import type { PersonNameType } from './PersonNameType';
import type { ProfileId } from './ProfileId';
import type { TelephoneInfoType } from './TelephoneInfoType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Generic type for information about an owner.
 * @export
 * @interface BlockOwnerType
 */
export interface BlockOwnerType {
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof BlockOwnerType
     */
    department?: CodeDescriptionType;
    /**
     *
     * @type {EmailInfoType}
     * @memberof BlockOwnerType
     */
    email?: EmailInfoType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof BlockOwnerType
     */
    hotel?: CodeDescriptionType;
    /**
     *
     * @type {PersonNameType}
     * @memberof BlockOwnerType
     */
    name?: PersonNameType;
    /**
     * Unique Code to identify the owner.
     * @type {string}
     * @memberof BlockOwnerType
     */
    ownerCode?: string;
    /**
     *
     * @type {BlockOwnershipType}
     * @memberof BlockOwnerType
     */
    ownership?: BlockOwnershipType;
    /**
     *
     * @type {TelephoneInfoType}
     * @memberof BlockOwnerType
     */
    phone?: TelephoneInfoType;
    /**
     * When true, this is a primary owner.
     * @type {boolean}
     * @memberof BlockOwnerType
     */
    primary?: boolean;
    /**
     *
     * @type {ProfileId}
     * @memberof BlockOwnerType
     */
    profileId?: ProfileId;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof BlockOwnerType
     */
    relationship?: CodeDescriptionType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof BlockOwnerType
     */
    userId?: UniqueIDType;
    /**
     * Unique application user name of the owner.
     * @type {string}
     * @memberof BlockOwnerType
     */
    userName?: string;
}
/**
 * Check if a given object implements the BlockOwnerType interface.
 */
export declare function instanceOfBlockOwnerType(value: object): boolean;
export declare function BlockOwnerTypeFromJSON(json: any): BlockOwnerType;
export declare function BlockOwnerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockOwnerType;
export declare function BlockOwnerTypeToJSON(value?: BlockOwnerType | null): any;
