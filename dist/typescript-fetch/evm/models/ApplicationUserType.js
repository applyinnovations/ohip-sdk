"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationUserTypeToJSON = exports.ApplicationUserTypeFromJSONTyped = exports.ApplicationUserTypeFromJSON = exports.instanceOfApplicationUserType = void 0;
const runtime_1 = require("../runtime");
const AttendantType_1 = require("./AttendantType");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const EmployeeInfoType_1 = require("./EmployeeInfoType");
const UniqueIDType_1 = require("./UniqueIDType");
const UserSessionInfoType_1 = require("./UserSessionInfoType");
/**
 * Check if a given object implements the ApplicationUserType interface.
 */
function instanceOfApplicationUserType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfApplicationUserType = instanceOfApplicationUserType;
function ApplicationUserTypeFromJSON(json) {
    return ApplicationUserTypeFromJSONTyped(json, false);
}
exports.ApplicationUserTypeFromJSON = ApplicationUserTypeFromJSON;
function ApplicationUserTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actAs': !(0, runtime_1.exists)(json, 'actAs') ? undefined : json['actAs'],
        'actAt': !(0, runtime_1.exists)(json, 'actAt') ? undefined : json['actAt'],
        'appUser': !(0, runtime_1.exists)(json, 'appUser') ? undefined : json['appUser'],
        'appUserId': !(0, runtime_1.exists)(json, 'appUserId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['appUserId']),
        'attendantInfo': !(0, runtime_1.exists)(json, 'attendantInfo') ? undefined : (0, AttendantType_1.AttendantTypeFromJSON)(json['attendantInfo']),
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'cashierTitle': !(0, runtime_1.exists)(json, 'cashierTitle') ? undefined : json['cashierTitle'],
        'department': !(0, runtime_1.exists)(json, 'department') ? undefined : json['department'],
        'departmentLocation': !(0, runtime_1.exists)(json, 'departmentLocation') ? undefined : json['departmentLocation'],
        'disabledUntil': !(0, runtime_1.exists)(json, 'disabledUntil') ? undefined : (new Date(json['disabledUntil'])),
        'expiryDate': !(0, runtime_1.exists)(json, 'expiryDate') ? undefined : (new Date(json['expiryDate'])),
        'hotel': !(0, runtime_1.exists)(json, 'hotel') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['hotel']),
        'lDAPUser': !(0, runtime_1.exists)(json, 'lDAPUser') ? undefined : json['lDAPUser'],
        'passwordChangeDate': !(0, runtime_1.exists)(json, 'passwordChangeDate') ? undefined : (new Date(json['passwordChangeDate'])),
        'salesRepCode': !(0, runtime_1.exists)(json, 'salesRepCode') ? undefined : json['salesRepCode'],
        'userDefaultLanguage': !(0, runtime_1.exists)(json, 'userDefaultLanguage') ? undefined : json['userDefaultLanguage'],
        'userInfo': !(0, runtime_1.exists)(json, 'userInfo') ? undefined : (0, EmployeeInfoType_1.EmployeeInfoTypeFromJSON)(json['userInfo']),
        'userSessionInfo': !(0, runtime_1.exists)(json, 'userSessionInfo') ? undefined : (0, UserSessionInfoType_1.UserSessionInfoTypeFromJSON)(json['userSessionInfo']),
    };
}
exports.ApplicationUserTypeFromJSONTyped = ApplicationUserTypeFromJSONTyped;
function ApplicationUserTypeToJSON(value) {
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
        'appUserId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.appUserId),
        'attendantInfo': (0, AttendantType_1.AttendantTypeToJSON)(value.attendantInfo),
        'cashierId': value.cashierId,
        'cashierTitle': value.cashierTitle,
        'department': value.department,
        'departmentLocation': value.departmentLocation,
        'disabledUntil': value.disabledUntil === undefined ? undefined : (value.disabledUntil.toISOString().substr(0, 10)),
        'expiryDate': value.expiryDate === undefined ? undefined : (value.expiryDate.toISOString().substr(0, 10)),
        'hotel': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.hotel),
        'lDAPUser': value.lDAPUser,
        'passwordChangeDate': value.passwordChangeDate === undefined ? undefined : (value.passwordChangeDate.toISOString().substr(0, 10)),
        'salesRepCode': value.salesRepCode,
        'userDefaultLanguage': value.userDefaultLanguage,
        'userInfo': (0, EmployeeInfoType_1.EmployeeInfoTypeToJSON)(value.userInfo),
        'userSessionInfo': (0, UserSessionInfoType_1.UserSessionInfoTypeToJSON)(value.userSessionInfo),
    };
}
exports.ApplicationUserTypeToJSON = ApplicationUserTypeToJSON;
