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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { RateSeasonType } from './RateSeasonType';
import {
    RateSeasonTypeFromJSON,
    RateSeasonTypeFromJSONTyped,
    RateSeasonTypeToJSON,
} from './RateSeasonType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating new rate seasons for a hotel.
 * @export
 * @interface RateSeasonsCriteria
 */
export interface RateSeasonsCriteria {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RateSeasonsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Hotel rate season details.
     * @type {Array<RateSeasonType>}
     * @memberof RateSeasonsCriteria
     */
    rateSeasons?: Array<RateSeasonType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RateSeasonsCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RateSeasonsCriteria interface.
 */
export function instanceOfRateSeasonsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RateSeasonsCriteriaFromJSON(json: any): RateSeasonsCriteria {
    return RateSeasonsCriteriaFromJSONTyped(json, false);
}

export function RateSeasonsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateSeasonsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'rateSeasons': !exists(json, 'rateSeasons') ? undefined : ((json['rateSeasons'] as Array<any>).map(RateSeasonTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RateSeasonsCriteriaToJSON(value?: RateSeasonsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'rateSeasons': value.rateSeasons === undefined ? undefined : ((value.rateSeasons as Array<any>).map(RateSeasonTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
