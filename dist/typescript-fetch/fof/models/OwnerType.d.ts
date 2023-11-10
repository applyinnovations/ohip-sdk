/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
    department?: CodeDescriptionType;
    /**
     *
     * @type {EmailInfoType}
     * @memberof OwnerType
     */
    email?: EmailInfoType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof OwnerType
     */
    hotel?: CodeDescriptionType;
    /**
     *
     * @type {PersonNameType}
     * @memberof OwnerType
     */
    name?: PersonNameType;
    /**
     * Unique Code to identify the owner.
     * @type {string}
     * @memberof OwnerType
     */
    ownerCode?: string;
    /**
     *
     * @type {TelephoneInfoType}
     * @memberof OwnerType
     */
    phone?: TelephoneInfoType;
    /**
     * When true, this is a primary owner.
     * @type {boolean}
     * @memberof OwnerType
     */
    primary?: boolean;
    /**
     *
     * @type {ProfileId}
     * @memberof OwnerType
     */
    profileId?: ProfileId;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof OwnerType
     */
    relationship?: CodeDescriptionType;
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
}
/**
 * Check if a given object implements the OwnerType interface.
 */
export declare function instanceOfOwnerType(value: object): boolean;
export declare function OwnerTypeFromJSON(json: any): OwnerType;
export declare function OwnerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OwnerType;
export declare function OwnerTypeToJSON(value?: OwnerType | null): any;
