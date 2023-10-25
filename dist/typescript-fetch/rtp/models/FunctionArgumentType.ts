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
/**
 * This type provided details of a function argument and the value it holds.
 * @export
 * @interface FunctionArgumentType
 */
export interface FunctionArgumentType {
    /**
     * Specifies the datatype of the function argument.
     * @type {string}
     * @memberof FunctionArgumentType
     */
    dataType?: string;
    /**
     * Specifies if the function argument lov is single select or multi select lov.
     * @type {boolean}
     * @memberof FunctionArgumentType
     */
    lovAllowMultiSelectYn?: boolean;
    /**
     * Specifies the lov name of the function argument.
     * @type {string}
     * @memberof FunctionArgumentType
     */
    lovName?: string;
    /**
     * Specifies the name of the function argument.
     * @type {string}
     * @memberof FunctionArgumentType
     */
    name?: string;
    /**
     * Specifies the position of the function argument in the argument list.
     * @type {number}
     * @memberof FunctionArgumentType
     */
    position?: number;
    /**
     * Argument of the function mandatory or not.
     * @type {boolean}
     * @memberof FunctionArgumentType
     */
    required?: boolean;
    /**
     * Specifies if the function argument is an lov or not.
     * @type {boolean}
     * @memberof FunctionArgumentType
     */
    useLovYn?: boolean;
    /**
     * Specifies the value held by the function argument.
     * @type {string}
     * @memberof FunctionArgumentType
     */
    value?: string;
}

/**
 * Check if a given object implements the FunctionArgumentType interface.
 */
export function instanceOfFunctionArgumentType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FunctionArgumentTypeFromJSON(json: any): FunctionArgumentType {
    return FunctionArgumentTypeFromJSONTyped(json, false);
}

export function FunctionArgumentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionArgumentType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'lovAllowMultiSelectYn': !exists(json, 'lovAllowMultiSelectYn') ? undefined : json['lovAllowMultiSelectYn'],
        'lovName': !exists(json, 'lovName') ? undefined : json['lovName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'useLovYn': !exists(json, 'useLovYn') ? undefined : json['useLovYn'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function FunctionArgumentTypeToJSON(value?: FunctionArgumentType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataType': value.dataType,
        'lovAllowMultiSelectYn': value.lovAllowMultiSelectYn,
        'lovName': value.lovName,
        'name': value.name,
        'position': value.position,
        'required': value.required,
        'useLovYn': value.useLovYn,
        'value': value.value,
    };
}

