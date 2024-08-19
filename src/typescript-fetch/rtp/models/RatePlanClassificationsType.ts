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
/**
 * 
 * @export
 * @interface RatePlanClassificationsType
 */
export interface RatePlanClassificationsType {
    /**
     * Display set for the rate plan.
     * @type {string}
     * @memberof RatePlanClassificationsType
     */
    displaySet?: string;
    /**
     * Market code for the rate plan.
     * @type {string}
     * @memberof RatePlanClassificationsType
     */
    marketCode?: string;
    /**
     * Rate Category for the rate plan.
     * @type {string}
     * @memberof RatePlanClassificationsType
     */
    rateCategory?: string;
    /**
     * Rate group for the rate plan.
     * @type {string}
     * @memberof RatePlanClassificationsType
     */
    rateGroup?: string;
    /**
     * Source code for the rate plan.
     * @type {string}
     * @memberof RatePlanClassificationsType
     */
    sourceCode?: string;
}

/**
 * Check if a given object implements the RatePlanClassificationsType interface.
 */
export function instanceOfRatePlanClassificationsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanClassificationsTypeFromJSON(json: any): RatePlanClassificationsType {
    return RatePlanClassificationsTypeFromJSONTyped(json, false);
}

export function RatePlanClassificationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanClassificationsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displaySet': !exists(json, 'displaySet') ? undefined : json['displaySet'],
        'marketCode': !exists(json, 'marketCode') ? undefined : json['marketCode'],
        'rateCategory': !exists(json, 'rateCategory') ? undefined : json['rateCategory'],
        'rateGroup': !exists(json, 'rateGroup') ? undefined : json['rateGroup'],
        'sourceCode': !exists(json, 'sourceCode') ? undefined : json['sourceCode'],
    };
}

export function RatePlanClassificationsTypeToJSON(value?: RatePlanClassificationsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displaySet': value.displaySet,
        'marketCode': value.marketCode,
        'rateCategory': value.rateCategory,
        'rateGroup': value.rateGroup,
        'sourceCode': value.sourceCode,
    };
}

