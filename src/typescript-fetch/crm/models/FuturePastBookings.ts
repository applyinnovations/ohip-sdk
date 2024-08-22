/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * This is the Response Message to information regarding existence of profile in future and/or past business blocks and/or reservations.
 * @export
 * @interface FuturePastBookings
 */
export interface FuturePastBookings {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof FuturePastBookings
     */
    links?: Array<InstanceLink>;
    /**
     * response - whether there are future and/or past business blocks or reservations for the profile.
     * @type {boolean}
     * @memberof FuturePastBookings
     */
    response?: boolean;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FuturePastBookings
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the FuturePastBookings interface.
 */
export function instanceOfFuturePastBookings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FuturePastBookingsFromJSON(json: any): FuturePastBookings {
    return FuturePastBookingsFromJSONTyped(json, false);
}

export function FuturePastBookingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FuturePastBookings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'response': !exists(json, 'response') ? undefined : json['response'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function FuturePastBookingsToJSON(value?: FuturePastBookings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'response': value.response,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

