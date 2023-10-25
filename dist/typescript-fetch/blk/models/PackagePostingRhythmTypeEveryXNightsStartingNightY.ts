/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Post the package every X nights Staring from Night Y.
 * @export
 * @interface PackagePostingRhythmTypeEveryXNightsStartingNightY
 */
export interface PackagePostingRhythmTypeEveryXNightsStartingNightY {
    /**
     * Occurance of nights when the package needs to be posted and consumed.
     * @type {number}
     * @memberof PackagePostingRhythmTypeEveryXNightsStartingNightY
     */
    postEveryXNights?: number;
    /**
     * Starting night for consumption and posting prices.
     * @type {number}
     * @memberof PackagePostingRhythmTypeEveryXNightsStartingNightY
     */
    startOnNightY?: number;
}

/**
 * Check if a given object implements the PackagePostingRhythmTypeEveryXNightsStartingNightY interface.
 */
export function instanceOfPackagePostingRhythmTypeEveryXNightsStartingNightY(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSON(json: any): PackagePostingRhythmTypeEveryXNightsStartingNightY {
    return PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSONTyped(json, false);
}

export function PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackagePostingRhythmTypeEveryXNightsStartingNightY {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'postEveryXNights': !exists(json, 'postEveryXNights') ? undefined : json['postEveryXNights'],
        'startOnNightY': !exists(json, 'startOnNightY') ? undefined : json['startOnNightY'],
    };
}

export function PackagePostingRhythmTypeEveryXNightsStartingNightYToJSON(value?: PackagePostingRhythmTypeEveryXNightsStartingNightY | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'postEveryXNights': value.postEveryXNights,
        'startOnNightY': value.startOnNightY,
    };
}

