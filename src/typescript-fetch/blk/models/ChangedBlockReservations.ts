/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChangeBlockReservationType } from './ChangeBlockReservationType';
import {
    ChangeBlockReservationTypeFromJSON,
    ChangeBlockReservationTypeFromJSONTyped,
    ChangeBlockReservationTypeToJSON,
} from './ChangeBlockReservationType';
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
 * The response object that contains the reservations that were changed for a block along with the status of each change.
 * @export
 * @interface ChangedBlockReservations
 */
export interface ChangedBlockReservations {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChangedBlockReservations
     */
    links?: Array<InstanceLink>;
    /**
     * Contains details of the changed reservation along with a success or error message.
     * @type {Array<ChangeBlockReservationType>}
     * @memberof ChangedBlockReservations
     */
    reservations?: Array<ChangeBlockReservationType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangedBlockReservations
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChangedBlockReservations interface.
 */
export function instanceOfChangedBlockReservations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangedBlockReservationsFromJSON(json: any): ChangedBlockReservations {
    return ChangedBlockReservationsFromJSONTyped(json, false);
}

export function ChangedBlockReservationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangedBlockReservations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reservations': !exists(json, 'reservations') ? undefined : ((json['reservations'] as Array<any>).map(ChangeBlockReservationTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChangedBlockReservationsToJSON(value?: ChangedBlockReservations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reservations': value.reservations === undefined ? undefined : ((value.reservations as Array<any>).map(ChangeBlockReservationTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

