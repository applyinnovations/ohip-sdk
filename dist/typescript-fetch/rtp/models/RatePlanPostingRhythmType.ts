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
import type { RatePlanPostingRhythmTypeDoNotPostEveryXNights } from './RatePlanPostingRhythmTypeDoNotPostEveryXNights';
import {
    RatePlanPostingRhythmTypeDoNotPostEveryXNightsFromJSON,
    RatePlanPostingRhythmTypeDoNotPostEveryXNightsFromJSONTyped,
    RatePlanPostingRhythmTypeDoNotPostEveryXNightsToJSON,
} from './RatePlanPostingRhythmTypeDoNotPostEveryXNights';

/**
 * Rate Plan Posting rhythm type.
 * @export
 * @interface RatePlanPostingRhythmType
 */
export interface RatePlanPostingRhythmType {
    /**
     * 
     * @type {RatePlanPostingRhythmTypeDoNotPostEveryXNights}
     * @memberof RatePlanPostingRhythmType
     */
    doNotPostEveryXNights?: RatePlanPostingRhythmTypeDoNotPostEveryXNights;
}

/**
 * Check if a given object implements the RatePlanPostingRhythmType interface.
 */
export function instanceOfRatePlanPostingRhythmType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanPostingRhythmTypeFromJSON(json: any): RatePlanPostingRhythmType {
    return RatePlanPostingRhythmTypeFromJSONTyped(json, false);
}

export function RatePlanPostingRhythmTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanPostingRhythmType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'doNotPostEveryXNights': !exists(json, 'doNotPostEveryXNights') ? undefined : RatePlanPostingRhythmTypeDoNotPostEveryXNightsFromJSON(json['doNotPostEveryXNights']),
    };
}

export function RatePlanPostingRhythmTypeToJSON(value?: RatePlanPostingRhythmType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'doNotPostEveryXNights': RatePlanPostingRhythmTypeDoNotPostEveryXNightsToJSON(value.doNotPostEveryXNights),
    };
}

