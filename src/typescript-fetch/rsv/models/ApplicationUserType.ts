/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { AttendantType } from './AttendantType';
import {
    AttendantTypeFromJSON,
    AttendantTypeFromJSONTyped,
    AttendantTypeToJSON,
} from './AttendantType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { EmployeeInfoType } from './EmployeeInfoType';
import {
    EmployeeInfoTypeFromJSON,
    EmployeeInfoTypeFromJSONTyped,
    EmployeeInfoTypeToJSON,
} from './EmployeeInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';
import type { UserSessionInfoType } from './UserSessionInfoType';
import {
    UserSessionInfoTypeFromJSON,
    UserSessionInfoTypeFromJSONTyped,
    UserSessionInfoTypeToJSON,
} from './UserSessionInfoType';

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
export function instanceOfApplicationUserType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApplicationUserTypeFromJSON(json: any): ApplicationUserType {
    return ApplicationUserTypeFromJSONTyped(json, false);
}

export function ApplicationUserTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationUserType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actAs': !exists(json, 'actAs') ? undefined : json['actAs'],
        'actAt': !exists(json, 'actAt') ? undefined : json['actAt'],
        'appUser': !exists(json, 'appUser') ? undefined : json['appUser'],
        'appUserId': !exists(json, 'appUserId') ? undefined : UniqueIDTypeFromJSON(json['appUserId']),
        'attendantInfo': !exists(json, 'attendantInfo') ? undefined : AttendantTypeFromJSON(json['attendantInfo']),
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'cashierTitle': !exists(json, 'cashierTitle') ? undefined : json['cashierTitle'],
        'department': !exists(json, 'department') ? undefined : json['department'],
        'departmentLocation': !exists(json, 'departmentLocation') ? undefined : json['departmentLocation'],
        'disabledUntil': !exists(json, 'disabledUntil') ? undefined : json['disabledUntil'],
        'expiryDate': !exists(json, 'expiryDate') ? undefined : json['expiryDate'],
        'hotel': !exists(json, 'hotel') ? undefined : CodeDescriptionTypeFromJSON(json['hotel']),
        'lDAPUser': !exists(json, 'lDAPUser') ? undefined : json['lDAPUser'],
        'passwordChangeDate': !exists(json, 'passwordChangeDate') ? undefined : json['passwordChangeDate'],
        'salesRepCode': !exists(json, 'salesRepCode') ? undefined : json['salesRepCode'],
        'userDefaultLanguage': !exists(json, 'userDefaultLanguage') ? undefined : json['userDefaultLanguage'],
        'userInfo': !exists(json, 'userInfo') ? undefined : EmployeeInfoTypeFromJSON(json['userInfo']),
        'userSessionInfo': !exists(json, 'userSessionInfo') ? undefined : UserSessionInfoTypeFromJSON(json['userSessionInfo']),
    };
}

export function ApplicationUserTypeToJSON(value?: ApplicationUserType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actAs': value.actAs,
        'actAt': value.actAt,
        'appUser': value.appUser,
        'appUserId': UniqueIDTypeToJSON(value.appUserId),
        'attendantInfo': AttendantTypeToJSON(value.attendantInfo),
        'cashierId': value.cashierId,
        'cashierTitle': value.cashierTitle,
        'department': value.department,
        'departmentLocation': value.departmentLocation,
        'disabledUntil': value.disabledUntil,
        'expiryDate': value.expiryDate,
        'hotel': CodeDescriptionTypeToJSON(value.hotel),
        'lDAPUser': value.lDAPUser,
        'passwordChangeDate': value.passwordChangeDate,
        'salesRepCode': value.salesRepCode,
        'userDefaultLanguage': value.userDefaultLanguage,
        'userInfo': EmployeeInfoTypeToJSON(value.userInfo),
        'userSessionInfo': UserSessionInfoTypeToJSON(value.userSessionInfo),
    };
}

