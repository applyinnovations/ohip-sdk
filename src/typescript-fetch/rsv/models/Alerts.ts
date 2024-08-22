/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AlertType } from './AlertType';
import {
    AlertTypeFromJSON,
    AlertTypeFromJSONTyped,
    AlertTypeToJSON,
} from './AlertType';
import type { CommentInfoType } from './CommentInfoType';
import {
    CommentInfoTypeFromJSON,
    CommentInfoTypeFromJSONTyped,
    CommentInfoTypeToJSON,
} from './CommentInfoType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ResvGuestMessageType } from './ResvGuestMessageType';
import {
    ResvGuestMessageTypeFromJSON,
    ResvGuestMessageTypeFromJSONTyped,
    ResvGuestMessageTypeToJSON,
} from './ResvGuestMessageType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response with the fetched alerts, includes global alerts, notes and undelivered guest messages.
 * @export
 * @interface Alerts
 */
export interface Alerts {
    /**
     * List of alerts.
     * @type {Array<AlertType>}
     * @memberof Alerts
     */
    alerts?: Array<AlertType>;
    /**
     * List of Notes for the Guest related to the reservation.
     * @type {Array<CommentInfoType>}
     * @memberof Alerts
     */
    comments?: Array<CommentInfoType>;
    /**
     * Holds the Message Information
     * @type {Array<ResvGuestMessageType>}
     * @memberof Alerts
     */
    guestMessages?: Array<ResvGuestMessageType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof Alerts
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof Alerts
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the Alerts interface.
 */
export function instanceOfAlerts(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlertsFromJSON(json: any): Alerts {
    return AlertsFromJSONTyped(json, false);
}

export function AlertsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Alerts {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alerts': !exists(json, 'alerts') ? undefined : ((json['alerts'] as Array<any>).map(AlertTypeFromJSON)),
        'comments': !exists(json, 'comments') ? undefined : ((json['comments'] as Array<any>).map(CommentInfoTypeFromJSON)),
        'guestMessages': !exists(json, 'guestMessages') ? undefined : ((json['guestMessages'] as Array<any>).map(ResvGuestMessageTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AlertsToJSON(value?: Alerts | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alerts': value.alerts === undefined ? undefined : ((value.alerts as Array<any>).map(AlertTypeToJSON)),
        'comments': value.comments === undefined ? undefined : ((value.comments as Array<any>).map(CommentInfoTypeToJSON)),
        'guestMessages': value.guestMessages === undefined ? undefined : ((value.guestMessages as Array<any>).map(ResvGuestMessageTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

