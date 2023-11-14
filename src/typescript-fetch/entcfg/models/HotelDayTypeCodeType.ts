/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ColorType } from './ColorType';
import {
    ColorTypeFromJSON,
    ColorTypeFromJSONTyped,
    ColorTypeToJSON,
} from './ColorType';

/**
 * Base structure for Day Type Code at both template and hotel levels.
 * @export
 * @interface HotelDayTypeCodeType
 */
export interface HotelDayTypeCodeType {
    /**
     * Value that will be added to rate on a day.
     * @type {number}
     * @memberof HotelDayTypeCodeType
     */
    adder?: number;
    /**
     * Code of a Day Type.
     * @type {string}
     * @memberof HotelDayTypeCodeType
     */
    code?: string;
    /**
     * 
     * @type {ColorType}
     * @memberof HotelDayTypeCodeType
     */
    color?: ColorType;
    /**
     * Description of a Day Type.
     * @type {string}
     * @memberof HotelDayTypeCodeType
     */
    description?: string;
    /**
     * Hotel code to which the Day Type is associated.
     * @type {string}
     * @memberof HotelDayTypeCodeType
     */
    hotel?: string;
    /**
     * Value by which the rates will be multiplied on a day.
     * @type {number}
     * @memberof HotelDayTypeCodeType
     */
    multiplier?: number;
    /**
     * Sell sequence for a Day Type.
     * @type {number}
     * @memberof HotelDayTypeCodeType
     */
    sellSequence?: number;
}

/**
 * Check if a given object implements the HotelDayTypeCodeType interface.
 */
export function instanceOfHotelDayTypeCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelDayTypeCodeTypeFromJSON(json: any): HotelDayTypeCodeType {
    return HotelDayTypeCodeTypeFromJSONTyped(json, false);
}

export function HotelDayTypeCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelDayTypeCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adder': !exists(json, 'adder') ? undefined : json['adder'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'color': !exists(json, 'color') ? undefined : ColorTypeFromJSON(json['color']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotel': !exists(json, 'hotel') ? undefined : json['hotel'],
        'multiplier': !exists(json, 'multiplier') ? undefined : json['multiplier'],
        'sellSequence': !exists(json, 'sellSequence') ? undefined : json['sellSequence'],
    };
}

export function HotelDayTypeCodeTypeToJSON(value?: HotelDayTypeCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adder': value.adder,
        'code': value.code,
        'color': ColorTypeToJSON(value.color),
        'description': value.description,
        'hotel': value.hotel,
        'multiplier': value.multiplier,
        'sellSequence': value.sellSequence,
    };
}
