/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FloorPlanType } from './FloorPlanType';
import {
    FloorPlanTypeFromJSON,
    FloorPlanTypeFromJSONTyped,
    FloorPlanTypeToJSON,
} from './FloorPlanType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object to the Fetch Reservation Request operation. Based on the criteria, reservation information is returned.
 * @export
 * @interface FloorPlans
 */
export interface FloorPlans {
    /**
     * 
     * @type {Array<FloorPlanType>}
     * @memberof FloorPlans
     */
    floorPlansDetails?: Array<FloorPlanType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof FloorPlans
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FloorPlans
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the FloorPlans interface.
 */
export function instanceOfFloorPlans(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FloorPlansFromJSON(json: any): FloorPlans {
    return FloorPlansFromJSONTyped(json, false);
}

export function FloorPlansFromJSONTyped(json: any, ignoreDiscriminator: boolean): FloorPlans {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'floorPlansDetails': !exists(json, 'floorPlansDetails') ? undefined : ((json['floorPlansDetails'] as Array<any>).map(FloorPlanTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function FloorPlansToJSON(value?: FloorPlans | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'floorPlansDetails': value.floorPlansDetails === undefined ? undefined : ((value.floorPlansDetails as Array<any>).map(FloorPlanTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

