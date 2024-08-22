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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { RatePlanRatingInfoType } from './RatePlanRatingInfoType';
import {
    RatePlanRatingInfoTypeFromJSON,
    RatePlanRatingInfoTypeFromJSONTyped,
    RatePlanRatingInfoTypeToJSON,
} from './RatePlanRatingInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for modifying rate plan codes and their rating details.
 * @export
 * @interface RatePlanRatingsInfo
 */
export interface RatePlanRatingsInfo {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RatePlanRatingsInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of rate plan Codes and their ratings.
     * @type {Array<RatePlanRatingInfoType>}
     * @memberof RatePlanRatingsInfo
     */
    ratePlanRatingsInfo?: Array<RatePlanRatingInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RatePlanRatingsInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RatePlanRatingsInfo interface.
 */
export function instanceOfRatePlanRatingsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanRatingsInfoFromJSON(json: any): RatePlanRatingsInfo {
    return RatePlanRatingsInfoFromJSONTyped(json, false);
}

export function RatePlanRatingsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanRatingsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'ratePlanRatingsInfo': !exists(json, 'ratePlanRatingsInfo') ? undefined : ((json['ratePlanRatingsInfo'] as Array<any>).map(RatePlanRatingInfoTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RatePlanRatingsInfoToJSON(value?: RatePlanRatingsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'ratePlanRatingsInfo': value.ratePlanRatingsInfo === undefined ? undefined : ((value.ratePlanRatingsInfo as Array<any>).map(RatePlanRatingInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

