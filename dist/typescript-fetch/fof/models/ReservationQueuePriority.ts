/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { ReservationQueueInformationType } from './ReservationQueueInformationType';
import {
    ReservationQueueInformationTypeFromJSON,
    ReservationQueueInformationTypeFromJSONTyped,
    ReservationQueueInformationTypeToJSON,
} from './ReservationQueueInformationType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response to the request to add a reservation to the Queue for Check-In.
 * @export
 * @interface ReservationQueuePriority
 */
export interface ReservationQueuePriority {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ReservationQueuePriority
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ReservationQueueInformationType}
     * @memberof ReservationQueuePriority
     */
    queueInfo?: ReservationQueueInformationType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ReservationQueuePriority
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ReservationQueuePriority interface.
 */
export function instanceOfReservationQueuePriority(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationQueuePriorityFromJSON(json: any): ReservationQueuePriority {
    return ReservationQueuePriorityFromJSONTyped(json, false);
}

export function ReservationQueuePriorityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationQueuePriority {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'queueInfo': !exists(json, 'queueInfo') ? undefined : ReservationQueueInformationTypeFromJSON(json['queueInfo']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ReservationQueuePriorityToJSON(value?: ReservationQueuePriority | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'queueInfo': ReservationQueueInformationTypeToJSON(value.queueInfo),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

