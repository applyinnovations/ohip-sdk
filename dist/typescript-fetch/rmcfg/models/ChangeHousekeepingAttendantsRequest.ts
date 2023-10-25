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
 * 
 * @export
 * @interface ChangeHousekeepingAttendantsRequest
 */
export interface ChangeHousekeepingAttendantsRequest {
    /**
     * Housekeeping Attendant Information.
     * @type {Array<HousekeepingAttendantType>}
     * @memberof ChangeHousekeepingAttendantsRequest
     */
    attendants?: Array<HousekeepingAttendantType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChangeHousekeepingAttendantsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeHousekeepingAttendantsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChangeHousekeepingAttendantsRequest interface.
 */
export function instanceOfChangeHousekeepingAttendantsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeHousekeepingAttendantsRequestFromJSON(json: any): ChangeHousekeepingAttendantsRequest {
    return ChangeHousekeepingAttendantsRequestFromJSONTyped(json, false);
}

export function ChangeHousekeepingAttendantsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeHousekeepingAttendantsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attendants': !exists(json, 'attendants') ? undefined : ((json['attendants'] as Array<any>).map(HousekeepingAttendantTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChangeHousekeepingAttendantsRequestToJSON(value?: ChangeHousekeepingAttendantsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attendants': value.attendants === undefined ? undefined : ((value.attendants as Array<any>).map(HousekeepingAttendantTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

