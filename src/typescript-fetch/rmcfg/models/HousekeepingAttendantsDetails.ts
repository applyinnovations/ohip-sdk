/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HousekeepingAttendantType } from './HousekeepingAttendantType';
import {
    HousekeepingAttendantTypeFromJSON,
    HousekeepingAttendantTypeFromJSONTyped,
    HousekeepingAttendantTypeToJSON,
} from './HousekeepingAttendantType';
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
 * Response object for fetching Housekeeping Attendants.
 * @export
 * @interface HousekeepingAttendantsDetails
 */
export interface HousekeepingAttendantsDetails {
    /**
     * Housekeeping Attendant Information.
     * @type {Array<HousekeepingAttendantType>}
     * @memberof HousekeepingAttendantsDetails
     */
    housekeepingAttendants?: Array<HousekeepingAttendantType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof HousekeepingAttendantsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HousekeepingAttendantsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the HousekeepingAttendantsDetails interface.
 */
export function instanceOfHousekeepingAttendantsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingAttendantsDetailsFromJSON(json: any): HousekeepingAttendantsDetails {
    return HousekeepingAttendantsDetailsFromJSONTyped(json, false);
}

export function HousekeepingAttendantsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingAttendantsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'housekeepingAttendants': !exists(json, 'housekeepingAttendants') ? undefined : ((json['housekeepingAttendants'] as Array<any>).map(HousekeepingAttendantTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function HousekeepingAttendantsDetailsToJSON(value?: HousekeepingAttendantsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'housekeepingAttendants': value.housekeepingAttendants === undefined ? undefined : ((value.housekeepingAttendants as Array<any>).map(HousekeepingAttendantTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

