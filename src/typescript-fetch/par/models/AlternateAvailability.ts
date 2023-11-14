/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AlternateAvailDatesType } from './AlternateAvailDatesType';
import {
    AlternateAvailDatesTypeFromJSON,
    AlternateAvailDatesTypeFromJSONTyped,
    AlternateAvailDatesTypeToJSON,
} from './AlternateAvailDatesType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for fetch alternate availability operation
 * @export
 * @interface AlternateAvailability
 */
export interface AlternateAvailability {
    /**
     * 
     * @type {AlternateAvailDatesType}
     * @memberof AlternateAvailability
     */
    alternates?: AlternateAvailDatesType;
    /**
     * 
     * @type {Links}
     * @memberof AlternateAvailability
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof AlternateAvailability
     */
    warnings?: WarningsType;
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
        
        'alternates': !exists(json, 'alternates') ? undefined : AlternateAvailDatesTypeFromJSON(json['alternates']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
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
        
        'alternates': AlternateAvailDatesTypeToJSON(value.alternates),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
