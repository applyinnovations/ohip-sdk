/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Base structure for template and hotel Event Code.
 * @export
 * @interface EventCodeType
 */
export interface EventCodeType {
    /**
     * Black Out flag of Event.
     * @type {boolean}
     * @memberof EventCodeType
     */
    blackOut?: boolean;
    /**
     * Code of an Event.
     * @type {string}
     * @memberof EventCodeType
     */
    code?: string;
    /**
     * Description of an Event.
     * @type {string}
     * @memberof EventCodeType
     */
    description?: string;
    /**
     * Hotel code to which the Event Code is associated.
     * @type {string}
     * @memberof EventCodeType
     */
    hotelId?: string;
    /**
     * Inactive flag of Event.
     * @type {boolean}
     * @memberof EventCodeType
     */
    inactive?: boolean;
    /**
     * Sell sequence of Event.
     * @type {number}
     * @memberof EventCodeType
     */
    sellSequence?: number;
}

/**
 * Check if a given object implements the EventCodeType interface.
 */
export function instanceOfEventCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventCodeTypeFromJSON(json: any): EventCodeType {
    return EventCodeTypeFromJSONTyped(json, false);
}

export function EventCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blackOut': !exists(json, 'blackOut') ? undefined : json['blackOut'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'sellSequence': !exists(json, 'sellSequence') ? undefined : json['sellSequence'],
    };
}

export function EventCodeTypeToJSON(value?: EventCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blackOut': value.blackOut,
        'code': value.code,
        'description': value.description,
        'hotelId': value.hotelId,
        'inactive': value.inactive,
        'sellSequence': value.sellSequence,
    };
}

