/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HousekeepingAttendantsConfigType } from './HousekeepingAttendantsConfigType';
import {
    HousekeepingAttendantsConfigTypeFromJSON,
    HousekeepingAttendantsConfigTypeFromJSONTyped,
    HousekeepingAttendantsConfigTypeToJSON,
} from './HousekeepingAttendantsConfigType';
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
 * Modify housekeeping attendants
 * @export
 * @interface HousekeepingAttendantsToBeChanged
 */
export interface HousekeepingAttendantsToBeChanged {
    /**
     * 
     * @type {HousekeepingAttendantsConfigType}
     * @memberof HousekeepingAttendantsToBeChanged
     */
    attendants?: HousekeepingAttendantsConfigType;
    /**
     * 
     * @type {Links}
     * @memberof HousekeepingAttendantsToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof HousekeepingAttendantsToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the HousekeepingAttendantsToBeChanged interface.
 */
export function instanceOfHousekeepingAttendantsToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingAttendantsToBeChangedFromJSON(json: any): HousekeepingAttendantsToBeChanged {
    return HousekeepingAttendantsToBeChangedFromJSONTyped(json, false);
}

export function HousekeepingAttendantsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingAttendantsToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attendants': !exists(json, 'attendants') ? undefined : HousekeepingAttendantsConfigTypeFromJSON(json['attendants']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function HousekeepingAttendantsToBeChangedToJSON(value?: HousekeepingAttendantsToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attendants': HousekeepingAttendantsConfigTypeToJSON(value.attendants),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
