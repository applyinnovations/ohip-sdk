/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddtionalCodeInfoTypeInner } from './AddtionalCodeInfoTypeInner';
import {
    AddtionalCodeInfoTypeInnerFromJSON,
    AddtionalCodeInfoTypeInnerFromJSONTyped,
    AddtionalCodeInfoTypeInnerToJSON,
} from './AddtionalCodeInfoTypeInner';

/**
 * 
 * @export
 * @interface CodeInfoType
 */
export interface CodeInfoType {
    /**
     * Holds name of additional code information
     * @type {Array<AddtionalCodeInfoTypeInner>}
     * @memberof CodeInfoType
     */
    addtionalCodeInfo?: Array<AddtionalCodeInfoTypeInner>;
    /**
     * 
     * @type {string}
     * @memberof CodeInfoType
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof CodeInfoType
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CodeInfoType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the CodeInfoType interface.
 */
export function instanceOfCodeInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CodeInfoTypeFromJSON(json: any): CodeInfoType {
    return CodeInfoTypeFromJSONTyped(json, false);
}

export function CodeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CodeInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addtionalCodeInfo': !exists(json, 'addtionalCodeInfo') ? undefined : ((json['addtionalCodeInfo'] as Array<any>).map(AddtionalCodeInfoTypeInnerFromJSON)),
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function CodeInfoTypeToJSON(value?: CodeInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addtionalCodeInfo': value.addtionalCodeInfo === undefined ? undefined : ((value.addtionalCodeInfo as Array<any>).map(AddtionalCodeInfoTypeInnerToJSON)),
        'code': value.code,
        'description': value.description,
        'hotelId': value.hotelId,
    };
}

