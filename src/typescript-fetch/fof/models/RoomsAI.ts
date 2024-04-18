/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request to run AI Room Assignment and allocate rooms to incoming reservations.
 * @export
 * @interface RoomsAI
 */
export interface RoomsAI {
    /**
     * 
     * @type {Array<string>}
     * @memberof RoomsAI
     */
    hotelCodes?: Array<string>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomsAI
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomsAI interface.
 */
export function instanceOfRoomsAI(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomsAIFromJSON(json: any): RoomsAI {
    return RoomsAIFromJSONTyped(json, false);
}

export function RoomsAIFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomsAI {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelCodes': !exists(json, 'hotelCodes') ? undefined : json['hotelCodes'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomsAIToJSON(value?: RoomsAI | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelCodes': value.hotelCodes,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
