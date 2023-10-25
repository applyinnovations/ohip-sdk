/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { WaitlistPriorityType } from './WaitlistPriorityType';
import {
    WaitlistPriorityTypeFromJSON,
    WaitlistPriorityTypeFromJSONTyped,
    WaitlistPriorityTypeToJSON,
} from './WaitlistPriorityType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating Waitlist Priorities.
 * @export
 * @interface WaitlistPrioritiesCriteria
 */
export interface WaitlistPrioritiesCriteria {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof WaitlistPrioritiesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * List of Waitlist Priorities.
     * @type {Array<WaitlistPriorityType>}
     * @memberof WaitlistPrioritiesCriteria
     */
    waitlistPriorities?: Array<WaitlistPriorityType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof WaitlistPrioritiesCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the WaitlistPrioritiesCriteria interface.
 */
export function instanceOfWaitlistPrioritiesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WaitlistPrioritiesCriteriaFromJSON(json: any): WaitlistPrioritiesCriteria {
    return WaitlistPrioritiesCriteriaFromJSONTyped(json, false);
}

export function WaitlistPrioritiesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): WaitlistPrioritiesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'waitlistPriorities': !exists(json, 'waitlistPriorities') ? undefined : ((json['waitlistPriorities'] as Array<any>).map(WaitlistPriorityTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function WaitlistPrioritiesCriteriaToJSON(value?: WaitlistPrioritiesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'waitlistPriorities': value.waitlistPriorities === undefined ? undefined : ((value.waitlistPriorities as Array<any>).map(WaitlistPriorityTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

