/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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

