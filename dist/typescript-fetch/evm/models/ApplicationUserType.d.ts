/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
     * @type {string}
     * @memberof ApplicationUserType
     */
    disabledUntil?: string;
    /**
     *
     * @type {string}
     * @memberof ApplicationUserType
     */
    expiryDate?: string;
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
     * @type {string}
     * @memberof ApplicationUserType
     */
    passwordChangeDate?: string;
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