/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AlternateAvailDateType } from './AlternateAvailDateType';
import {
    AlternateAvailDateTypeFromJSON,
    AlternateAvailDateTypeFromJSONTyped,
    AlternateAvailDateTypeToJSON,
} from './AlternateAvailDateType';
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
 * Response object for fetch alternate availability operation
 * @export
 * @interface AlternateAvailability
 */
export interface AlternateAvailability {
    /**
     * List of alternate dates.
     * @type {Array<AlternateAvailDateType>}
     * @memberof AlternateAvailability
     */
    alternates?: Array<AlternateAvailDateType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof AlternateAvailability
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AlternateAvailability
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AlternateAvailability interface.
 */
export function instanceOfAlternateAvailability(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlternateAvailabilityFromJSON(json: any): AlternateAvailability {
    return AlternateAvailabilityFromJSONTyped(json, false);
}

export function AlternateAvailabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternateAvailability {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alternates': !exists(json, 'alternates') ? undefined : ((json['alternates'] as Array<any>).map(AlternateAvailDateTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AlternateAvailabilityToJSON(value?: AlternateAvailability | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alternates': value.alternates === undefined ? undefined : ((value.alternates as Array<any>).map(AlternateAvailDateTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
