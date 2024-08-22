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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

/**
 * A hotel rate class.
 * @export
 * @interface RateClassType
 */
export interface RateClassType {
    /**
     * Description of the rate class.
     * @type {string}
     * @memberof RateClassType
     */
    description?: string;
    /**
     * Hotel Code the rate class belongs to.
     * @type {string}
     * @memberof RateClassType
     */
    hotelId?: string;
    /**
     * List of Rate Categories with description.
     * @type {Array<CodeDescriptionType>}
     * @memberof RateClassType
     */
    rateCategories?: Array<CodeDescriptionType>;
    /**
     * Code that uniquely identifies the rate class.
     * @type {string}
     * @memberof RateClassType
     */
    rateClass?: string;
    /**
     * Display Sequence of the rate class.
     * @type {number}
     * @memberof RateClassType
     */
    sequence?: number;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof RateClassType
     */
    timeSpan?: TimeSpanType;
}

/**
 * Check if a given object implements the RateClassType interface.
 */
export function instanceOfRateClassType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RateClassTypeFromJSON(json: any): RateClassType {
    return RateClassTypeFromJSONTyped(json, false);
}

export function RateClassTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateClassType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'rateCategories': !exists(json, 'rateCategories') ? undefined : ((json['rateCategories'] as Array<any>).map(CodeDescriptionTypeFromJSON)),
        'rateClass': !exists(json, 'rateClass') ? undefined : json['rateClass'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
    };
}

export function RateClassTypeToJSON(value?: RateClassType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'hotelId': value.hotelId,
        'rateCategories': value.rateCategories === undefined ? undefined : ((value.rateCategories as Array<any>).map(CodeDescriptionTypeToJSON)),
        'rateClass': value.rateClass,
        'sequence': value.sequence,
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
    };
}

