/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { ResHousekeepingSetType } from './ResHousekeepingSetType';
import {
    ResHousekeepingSetTypeFromJSON,
    ResHousekeepingSetTypeFromJSONTyped,
    ResHousekeepingSetTypeToJSON,
} from './ResHousekeepingSetType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Operation to get set guest housekeeping instructions for the room.
 * @export
 * @interface GuestHousekeepingServiceRequest
 */
export interface GuestHousekeepingServiceRequest {
    /**
     * 
     * @type {ResHousekeepingSetType}
     * @memberof GuestHousekeepingServiceRequest
     */
    guestHousekeepingInstructions?: ResHousekeepingSetType;
    /**
     * 
     * @type {Links}
     * @memberof GuestHousekeepingServiceRequest
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof GuestHousekeepingServiceRequest
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the GuestHousekeepingServiceRequest interface.
 */
export function instanceOfGuestHousekeepingServiceRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GuestHousekeepingServiceRequestFromJSON(json: any): GuestHousekeepingServiceRequest {
    return GuestHousekeepingServiceRequestFromJSONTyped(json, false);
}

export function GuestHousekeepingServiceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestHousekeepingServiceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guestHousekeepingInstructions': !exists(json, 'guestHousekeepingInstructions') ? undefined : ResHousekeepingSetTypeFromJSON(json['guestHousekeepingInstructions']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function GuestHousekeepingServiceRequestToJSON(value?: GuestHousekeepingServiceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guestHousekeepingInstructions': ResHousekeepingSetTypeToJSON(value.guestHousekeepingInstructions),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
