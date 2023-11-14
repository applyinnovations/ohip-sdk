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
import type { HotelRateCategoryType } from './HotelRateCategoryType';
import {
    HotelRateCategoryTypeFromJSON,
    HotelRateCategoryTypeFromJSONTyped,
    HotelRateCategoryTypeToJSON,
} from './HotelRateCategoryType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for modifying a Rate Category for a property.
 * @export
 * @interface RateCategoryToBeChanged
 */
export interface RateCategoryToBeChanged {
    /**
     * 
     * @type {HotelRateCategoryType}
     * @memberof RateCategoryToBeChanged
     */
    hotelRateCategory?: HotelRateCategoryType;
    /**
     * 
     * @type {Links}
     * @memberof RateCategoryToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof RateCategoryToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the RateCategoryToBeChanged interface.
 */
export function instanceOfRateCategoryToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RateCategoryToBeChangedFromJSON(json: any): RateCategoryToBeChanged {
    return RateCategoryToBeChangedFromJSONTyped(json, false);
}

export function RateCategoryToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateCategoryToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelRateCategory': !exists(json, 'hotelRateCategory') ? undefined : HotelRateCategoryTypeFromJSON(json['hotelRateCategory']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function RateCategoryToBeChangedToJSON(value?: RateCategoryToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelRateCategory': HotelRateCategoryTypeToJSON(value.hotelRateCategory),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
