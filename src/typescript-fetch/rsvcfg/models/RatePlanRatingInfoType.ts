/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { RatePlanRatingType } from './RatePlanRatingType';
import {
    RatePlanRatingTypeFromJSON,
    RatePlanRatingTypeFromJSONTyped,
    RatePlanRatingTypeToJSON,
} from './RatePlanRatingType';

/**
 * Rating details for a rate plan.
 * @export
 * @interface RatePlanRatingInfoType
 */
export interface RatePlanRatingInfoType {
    /**
     * Property code of the rate plan codes.
     * @type {string}
     * @memberof RatePlanRatingInfoType
     */
    hotelId?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof RatePlanRatingInfoType
     */
    rateCategory?: CodeDescriptionType;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof RatePlanRatingInfoType
     */
    ratePlan?: CodeDescriptionType;
    /**
     * 
     * @type {RatePlanRatingType}
     * @memberof RatePlanRatingInfoType
     */
    rating?: RatePlanRatingType;
}

/**
 * Check if a given object implements the RatePlanRatingInfoType interface.
 */
export function instanceOfRatePlanRatingInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanRatingInfoTypeFromJSON(json: any): RatePlanRatingInfoType {
    return RatePlanRatingInfoTypeFromJSONTyped(json, false);
}

export function RatePlanRatingInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanRatingInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'rateCategory': !exists(json, 'rateCategory') ? undefined : CodeDescriptionTypeFromJSON(json['rateCategory']),
        'ratePlan': !exists(json, 'ratePlan') ? undefined : CodeDescriptionTypeFromJSON(json['ratePlan']),
        'rating': !exists(json, 'rating') ? undefined : RatePlanRatingTypeFromJSON(json['rating']),
    };
}

export function RatePlanRatingInfoTypeToJSON(value?: RatePlanRatingInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'rateCategory': CodeDescriptionTypeToJSON(value.rateCategory),
        'ratePlan': CodeDescriptionTypeToJSON(value.ratePlan),
        'rating': RatePlanRatingTypeToJSON(value.rating),
    };
}
