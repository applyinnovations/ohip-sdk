/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RatePlanChannelInfoTypeRatePlanId } from './RatePlanChannelInfoTypeRatePlanId';
import {
    RatePlanChannelInfoTypeRatePlanIdFromJSON,
    RatePlanChannelInfoTypeRatePlanIdFromJSONTyped,
    RatePlanChannelInfoTypeRatePlanIdToJSON,
} from './RatePlanChannelInfoTypeRatePlanId';

/**
 * 
 * @export
 * @interface RatePlanChannelInfoType
 */
export interface RatePlanChannelInfoType {
    /**
     * 
     * @type {RatePlanChannelInfoTypeRatePlanId}
     * @memberof RatePlanChannelInfoType
     */
    ratePlanId?: RatePlanChannelInfoTypeRatePlanId;
    /**
     * All rate codes are associated with rate plan level ( or rate category )for Channels. So if rate plans are given in the request, get all rate codes associated with the rate plan level.
     * @type {string}
     * @memberof RatePlanChannelInfoType
     */
    ratePlanLevel?: string;
    /**
     * To populate the RatePlanName, setup for the channel.
     * @type {string}
     * @memberof RatePlanChannelInfoType
     */
    ratePlanWebName?: string;
}

/**
 * Check if a given object implements the RatePlanChannelInfoType interface.
 */
export function instanceOfRatePlanChannelInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanChannelInfoTypeFromJSON(json: any): RatePlanChannelInfoType {
    return RatePlanChannelInfoTypeFromJSONTyped(json, false);
}

export function RatePlanChannelInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanChannelInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ratePlanId': !exists(json, 'ratePlanId') ? undefined : RatePlanChannelInfoTypeRatePlanIdFromJSON(json['ratePlanId']),
        'ratePlanLevel': !exists(json, 'ratePlanLevel') ? undefined : json['ratePlanLevel'],
        'ratePlanWebName': !exists(json, 'ratePlanWebName') ? undefined : json['ratePlanWebName'],
    };
}

export function RatePlanChannelInfoTypeToJSON(value?: RatePlanChannelInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ratePlanId': RatePlanChannelInfoTypeRatePlanIdToJSON(value.ratePlanId),
        'ratePlanLevel': value.ratePlanLevel,
        'ratePlanWebName': value.ratePlanWebName,
    };
}
