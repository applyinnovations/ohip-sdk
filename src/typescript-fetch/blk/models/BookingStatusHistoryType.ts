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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';

/**
 * 
 * @export
 * @interface BookingStatusHistoryType
 */
export interface BookingStatusHistoryType {
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof BookingStatusHistoryType
     */
    bookingStatus?: CodeDescriptionType;
    /**
     * User who modified the status.
     * @type {string}
     * @memberof BookingStatusHistoryType
     */
    modifierId?: string;
    /**
     * Date and time of the status change.
     * @type {string}
     * @memberof BookingStatusHistoryType
     */
    modifyDateTime?: string;
    /**
     * Number indicating the sequence of status change.
     * @type {number}
     * @memberof BookingStatusHistoryType
     */
    sequence?: number;
}

/**
 * Check if a given object implements the BookingStatusHistoryType interface.
 */
export function instanceOfBookingStatusHistoryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BookingStatusHistoryTypeFromJSON(json: any): BookingStatusHistoryType {
    return BookingStatusHistoryTypeFromJSONTyped(json, false);
}

export function BookingStatusHistoryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookingStatusHistoryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingStatus': !exists(json, 'bookingStatus') ? undefined : CodeDescriptionTypeFromJSON(json['bookingStatus']),
        'modifierId': !exists(json, 'modifierId') ? undefined : json['modifierId'],
        'modifyDateTime': !exists(json, 'modifyDateTime') ? undefined : json['modifyDateTime'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
    };
}

export function BookingStatusHistoryTypeToJSON(value?: BookingStatusHistoryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingStatus': CodeDescriptionTypeToJSON(value.bookingStatus),
        'modifierId': value.modifierId,
        'modifyDateTime': value.modifyDateTime,
        'sequence': value.sequence,
    };
}
