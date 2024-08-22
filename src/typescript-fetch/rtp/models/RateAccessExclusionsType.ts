/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RateAccessExclusionType } from './RateAccessExclusionType';
import {
    RateAccessExclusionTypeFromJSON,
    RateAccessExclusionTypeFromJSONTyped,
    RateAccessExclusionTypeToJSON,
} from './RateAccessExclusionType';

/**
 * 
 * @export
 * @interface RateAccessExclusionsType
 */
export interface RateAccessExclusionsType {
    /**
     * Hotel code for the rate code.
     * @type {string}
     * @memberof RateAccessExclusionsType
     */
    hotelId?: string;
    /**
     * Collection of Rate Access Exclusions.
     * @type {Array<RateAccessExclusionType>}
     * @memberof RateAccessExclusionsType
     */
    rateAccessExclusion?: Array<RateAccessExclusionType>;
    /**
     * Rate code
     * @type {string}
     * @memberof RateAccessExclusionsType
     */
    rateCode?: string;
}

/**
 * Check if a given object implements the RateAccessExclusionsType interface.
 */
export function instanceOfRateAccessExclusionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RateAccessExclusionsTypeFromJSON(json: any): RateAccessExclusionsType {
    return RateAccessExclusionsTypeFromJSONTyped(json, false);
}

export function RateAccessExclusionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateAccessExclusionsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'rateAccessExclusion': !exists(json, 'rateAccessExclusion') ? undefined : ((json['rateAccessExclusion'] as Array<any>).map(RateAccessExclusionTypeFromJSON)),
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
    };
}

export function RateAccessExclusionsTypeToJSON(value?: RateAccessExclusionsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'rateAccessExclusion': value.rateAccessExclusion === undefined ? undefined : ((value.rateAccessExclusion as Array<any>).map(RateAccessExclusionTypeToJSON)),
        'rateCode': value.rateCode,
    };
}

