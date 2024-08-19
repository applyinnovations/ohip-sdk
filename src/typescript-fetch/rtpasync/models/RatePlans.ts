/* tslint:disable */
/* eslint-disable */
/**
 * Opera Cloud Rate Plan Asynchronous Service API
 * APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { RatePlanType } from './RatePlanType';
import {
    RatePlanTypeFromJSON,
    RatePlanTypeFromJSONTyped,
    RatePlanTypeToJSON,
} from './RatePlanType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object to create rate plan.
 * @export
 * @interface RatePlans
 */
export interface RatePlans {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RatePlans
     */
    links?: Array<InstanceLink>;
    /**
     * Rate plan code details to be created.
     * @type {Array<RatePlanType>}
     * @memberof RatePlans
     */
    ratePlans?: Array<RatePlanType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RatePlans
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RatePlans interface.
 */
export function instanceOfRatePlans(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlansFromJSON(json: any): RatePlans {
    return RatePlansFromJSONTyped(json, false);
}

export function RatePlansFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlans {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'ratePlans': !exists(json, 'ratePlans') ? undefined : ((json['ratePlans'] as Array<any>).map(RatePlanTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RatePlansToJSON(value?: RatePlans | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'ratePlans': value.ratePlans === undefined ? undefined : ((value.ratePlans as Array<any>).map(RatePlanTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

