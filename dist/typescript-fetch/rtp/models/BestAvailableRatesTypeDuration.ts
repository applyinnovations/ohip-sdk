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
 * Days for which best available rates will be considered
 * @export
 * @interface BestAvailableRatesTypeDuration
 */
export interface BestAvailableRatesTypeDuration {
    /**
     * 
     * @type {boolean}
     * @memberof BestAvailableRatesTypeDuration
     */
    friday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BestAvailableRatesTypeDuration
     */
    monday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BestAvailableRatesTypeDuration
     */
    saturday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BestAvailableRatesTypeDuration
     */
    sunday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BestAvailableRatesTypeDuration
     */
    thursday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BestAvailableRatesTypeDuration
     */
    tuesday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BestAvailableRatesTypeDuration
     */
    wednesday?: boolean;
}

/**
 * Check if a given object implements the BestAvailableRatesTypeDuration interface.
 */
export function instanceOfBestAvailableRatesTypeDuration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BestAvailableRatesTypeDurationFromJSON(json: any): BestAvailableRatesTypeDuration {
    return BestAvailableRatesTypeDurationFromJSONTyped(json, false);
}

export function BestAvailableRatesTypeDurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BestAvailableRatesTypeDuration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'friday': !exists(json, 'friday') ? undefined : json['friday'],
        'monday': !exists(json, 'monday') ? undefined : json['monday'],
        'saturday': !exists(json, 'saturday') ? undefined : json['saturday'],
        'sunday': !exists(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !exists(json, 'thursday') ? undefined : json['thursday'],
        'tuesday': !exists(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !exists(json, 'wednesday') ? undefined : json['wednesday'],
    };
}

export function BestAvailableRatesTypeDurationToJSON(value?: BestAvailableRatesTypeDuration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'friday': value.friday,
        'monday': value.monday,
        'saturday': value.saturday,
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
    };
}

