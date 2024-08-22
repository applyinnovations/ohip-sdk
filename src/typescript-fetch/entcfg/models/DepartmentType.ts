/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { TranslationTextType30 } from './TranslationTextType30';
import {
    TranslationTextType30FromJSON,
    TranslationTextType30FromJSONTyped,
    TranslationTextType30ToJSON,
} from './TranslationTextType30';

/**
 * Type provides department information.
 * @export
 * @interface DepartmentType
 */
export interface DepartmentType {
    /**
     * Property Code where the department belongs to.
     * @type {string}
     * @memberof DepartmentType
     */
    hotelId?: string;
    /**
     * Department Code.
     * @type {string}
     * @memberof DepartmentType
     */
    departmentCode?: string;
    /**
     * 
     * @type {TranslationTextType30}
     * @memberof DepartmentType
     */
    departmentName?: TranslationTextType30;
    /**
     * Display Sequence for the department.
     * @type {number}
     * @memberof DepartmentType
     */
    displaySequence?: number;
    /**
     * Department email address.
     * @type {string}
     * @memberof DepartmentType
     */
    email?: string;
}

/**
 * Check if a given object implements the DepartmentType interface.
 */
export function instanceOfDepartmentType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DepartmentTypeFromJSON(json: any): DepartmentType {
    return DepartmentTypeFromJSONTyped(json, false);
}

export function DepartmentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepartmentType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'departmentCode': !exists(json, 'departmentCode') ? undefined : json['departmentCode'],
        'departmentName': !exists(json, 'departmentName') ? undefined : TranslationTextType30FromJSON(json['departmentName']),
        'displaySequence': !exists(json, 'displaySequence') ? undefined : json['displaySequence'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function DepartmentTypeToJSON(value?: DepartmentType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'departmentCode': value.departmentCode,
        'departmentName': TranslationTextType30ToJSON(value.departmentName),
        'displaySequence': value.displaySequence,
        'email': value.email,
    };
}

