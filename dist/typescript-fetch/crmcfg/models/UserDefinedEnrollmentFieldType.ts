/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserDefinedEnrollmentFieldNameType } from './UserDefinedEnrollmentFieldNameType';
import {
    UserDefinedEnrollmentFieldNameTypeFromJSON,
    UserDefinedEnrollmentFieldNameTypeFromJSONTyped,
    UserDefinedEnrollmentFieldNameTypeToJSON,
} from './UserDefinedEnrollmentFieldNameType';

/**
 * User Defined Enrollment Field/Attribute.
 * @export
 * @interface UserDefinedEnrollmentFieldType
 */
export interface UserDefinedEnrollmentFieldType {
    /**
     * Indicates if the Field/Attribute is active for Membership Type.
     * @type {boolean}
     * @memberof UserDefinedEnrollmentFieldType
     */
    active?: boolean;
    /**
     * 
     * @type {UserDefinedEnrollmentFieldNameType}
     * @memberof UserDefinedEnrollmentFieldType
     */
    fieldName?: UserDefinedEnrollmentFieldNameType;
    /**
     * Type of the Field/Attribute such as phone, fax, email etc.
     * @type {string}
     * @memberof UserDefinedEnrollmentFieldType
     */
    fieldType?: string;
    /**
     * Indicates if the Field/Attribute is required for Membership Type.
     * @type {boolean}
     * @memberof UserDefinedEnrollmentFieldType
     */
    requiredField?: boolean;
}

/**
 * Check if a given object implements the UserDefinedEnrollmentFieldType interface.
 */
export function instanceOfUserDefinedEnrollmentFieldType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserDefinedEnrollmentFieldTypeFromJSON(json: any): UserDefinedEnrollmentFieldType {
    return UserDefinedEnrollmentFieldTypeFromJSONTyped(json, false);
}

export function UserDefinedEnrollmentFieldTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDefinedEnrollmentFieldType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'fieldName': !exists(json, 'fieldName') ? undefined : UserDefinedEnrollmentFieldNameTypeFromJSON(json['fieldName']),
        'fieldType': !exists(json, 'fieldType') ? undefined : json['fieldType'],
        'requiredField': !exists(json, 'requiredField') ? undefined : json['requiredField'],
    };
}

export function UserDefinedEnrollmentFieldTypeToJSON(value?: UserDefinedEnrollmentFieldType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'fieldName': UserDefinedEnrollmentFieldNameTypeToJSON(value.fieldName),
        'fieldType': value.fieldType,
        'requiredField': value.requiredField,
    };
}

