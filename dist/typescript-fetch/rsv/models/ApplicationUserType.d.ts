/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AttendantType } from './AttendantType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { EmployeeInfoType } from './EmployeeInfoType';
import type { UniqueIDType } from './UniqueIDType';
import type { UserSessionInfoType } from './UserSessionInfoType';
/**
 *
 * @export
 * @interface ApplicationUserType
 */
export interface ApplicationUserType {
    /**
     *
     * @type {string}
     * @memberof ApplicationUserType
     */
    actAs?: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationUserType
     */
    actAt?: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationUserType
     */
    appUser?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ApplicationUserType
     */
    appUserId?: UniqueIDType;
    /**
     *
     * @type {AttendantType}
     * @memberof ApplicationUserType
     */
    attendantInfo?: AttendantType;
    /**
     *
     * @type {number}
     * @memberof ApplicationUserType
     */
    cashierId?: number;
    /**
     * Cashier title.
     * @type {string}
     * @memberof ApplicationUserType
     */
    cashierTitle?: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationUserType
     */
    department?: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationUserType
     */
    departmentLocation?: string;
    /**
     *
     * @type {Date}
     * @memberof ApplicationUserType
     */
    disabledUntil?: Date;
    /**
     *
     * @type {Date}
     * @memberof ApplicationUserType
     */
    expiryDate?: Date;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof ApplicationUserType
     */
    hotel?: CodeDescriptionType;
    /**
     *
     * @type {string}
     * @memberof ApplicationUserType
     */
    lDAPUser?: string;
    /**
     *
     * @type {Date}
     * @memberof ApplicationUserType
     */
    passwordChangeDate?: Date;
    /**
     *
     * @type {string}
     * @memberof ApplicationUserType
     */
    salesRepCode?: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationUserType
     */
    userDefaultLanguage?: string;
    /**
     *
     * @type {EmployeeInfoType}
     * @memberof ApplicationUserType
     */
    userInfo?: EmployeeInfoType;
    /**
     *
     * @type {UserSessionInfoType}
     * @memberof ApplicationUserType
     */
    userSessionInfo?: UserSessionInfoType;
}
/**
 * Check if a given object implements the ApplicationUserType interface.
 */
export declare function instanceOfApplicationUserType(value: object): boolean;
export declare function ApplicationUserTypeFromJSON(json: any): ApplicationUserType;
export declare function ApplicationUserTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationUserType;
export declare function ApplicationUserTypeToJSON(value?: ApplicationUserType | null): any;
