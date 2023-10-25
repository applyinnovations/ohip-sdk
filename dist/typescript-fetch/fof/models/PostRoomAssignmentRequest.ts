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
import type { ReservationRoomSelectionType } from './ReservationRoomSelectionType';
import {
    ReservationRoomSelectionTypeFromJSON,
    ReservationRoomSelectionTypeFromJSONTyped,
    ReservationRoomSelectionTypeToJSON,
} from './ReservationRoomSelectionType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PostRoomAssignmentRequest
 */
export interface PostRoomAssignmentRequest {
    /**
     * 
     * @type {ReservationRoomSelectionType}
     * @memberof PostRoomAssignmentRequest
     */
    criteria?: ReservationRoomSelectionType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostRoomAssignmentRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostRoomAssignmentRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostRoomAssignmentRequest interface.
 */
export function instanceOfPostRoomAssignmentRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostRoomAssignmentRequestFromJSON(json: any): PostRoomAssignmentRequest {
    return PostRoomAssignmentRequestFromJSONTyped(json, false);
}

export function PostRoomAssignmentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostRoomAssignmentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : ReservationRoomSelectionTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostRoomAssignmentRequestToJSON(value?: PostRoomAssignmentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': ReservationRoomSelectionTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

