/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Details of event.
 * @export
 * @interface HotelCalendarEventType
 */
export interface HotelCalendarEventType {
    /**
     * Code for a specific event.
     * @type {string}
     * @memberof HotelCalendarEventType
     */
    code?: string;
    /**
     * Description for a specific event.
     * @type {string}
     * @memberof HotelCalendarEventType
     */
    description?: string;
}

/**
 * Check if a given object implements the HotelCalendarEventType interface.
 */
export function instanceOfHotelCalendarEventType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelCalendarEventTypeFromJSON(json: any): HotelCalendarEventType {
    return HotelCalendarEventTypeFromJSONTyped(json, false);
}

export function HotelCalendarEventTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelCalendarEventType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function HotelCalendarEventTypeToJSON(value?: HotelCalendarEventType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
    };
}

