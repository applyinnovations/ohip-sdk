/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Detailed information on the capacity of a room.
 * @export
 * @interface FunctionSpaceDimensionType
 */
export interface FunctionSpaceDimensionType {
    /**
     * Area of the room.
     * @type {number}
     * @memberof FunctionSpaceDimensionType
     */
    area?: number;
    /**
     * Length of the room.
     * @type {number}
     * @memberof FunctionSpaceDimensionType
     */
    length?: number;
    /**
     * Maximum height of the room.
     * @type {number}
     * @memberof FunctionSpaceDimensionType
     */
    maxHeight?: number;
    /**
     * Minimum height of the room.
     * @type {number}
     * @memberof FunctionSpaceDimensionType
     */
    minHeight?: number;
    /**
     * Additional information for the function space.
     * @type {string}
     * @memberof FunctionSpaceDimensionType
     */
    note?: string;
    /**
     * The unit of measure in a code format.
     * @type {string}
     * @memberof FunctionSpaceDimensionType
     */
    unitOfMeasureCode?: string;
    /**
     * The maximum load that can be supported by the floor in this function space.
     * @type {number}
     * @memberof FunctionSpaceDimensionType
     */
    weight?: number;
    /**
     * Width of the room.
     * @type {number}
     * @memberof FunctionSpaceDimensionType
     */
    width?: number;
}

/**
 * Check if a given object implements the FunctionSpaceDimensionType interface.
 */
export function instanceOfFunctionSpaceDimensionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FunctionSpaceDimensionTypeFromJSON(json: any): FunctionSpaceDimensionType {
    return FunctionSpaceDimensionTypeFromJSONTyped(json, false);
}

export function FunctionSpaceDimensionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceDimensionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'area': !exists(json, 'area') ? undefined : json['area'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'maxHeight': !exists(json, 'maxHeight') ? undefined : json['maxHeight'],
        'minHeight': !exists(json, 'minHeight') ? undefined : json['minHeight'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'unitOfMeasureCode': !exists(json, 'unitOfMeasureCode') ? undefined : json['unitOfMeasureCode'],
        'weight': !exists(json, 'weight') ? undefined : json['weight'],
        'width': !exists(json, 'width') ? undefined : json['width'],
    };
}

export function FunctionSpaceDimensionTypeToJSON(value?: FunctionSpaceDimensionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'area': value.area,
        'length': value.length,
        'maxHeight': value.maxHeight,
        'minHeight': value.minHeight,
        'note': value.note,
        'unitOfMeasureCode': value.unitOfMeasureCode,
        'weight': value.weight,
        'width': value.width,
    };
}

