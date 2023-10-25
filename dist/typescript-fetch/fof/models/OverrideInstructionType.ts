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
/**
 * Type for Overrides. Contains information for the override action performed while booking a reservation.
 * @export
 * @interface OverrideInstructionType
 */
export interface OverrideInstructionType {
    /**
     * The date when the override was done.
     * @type {Date}
     * @memberof OverrideInstructionType
     */
    date?: Date;
    /**
     * The description of the restriction for which the override was done.
     * @type {string}
     * @memberof OverrideInstructionType
     */
    description?: string;
    /**
     * The override reason code.
     * @type {string}
     * @memberof OverrideInstructionType
     */
    reasonCode?: string;
    /**
     * The override reason description.
     * @type {string}
     * @memberof OverrideInstructionType
     */
    reasonDescription?: string;
    /**
     * The type of override done. If done for Availability, then it will be AVAILABILITY.
     * @type {string}
     * @memberof OverrideInstructionType
     */
    type?: string;
    /**
     * Login ID of the user who performed the override.
     * @type {string}
     * @memberof OverrideInstructionType
     */
    userId?: string;
}

/**
 * Check if a given object implements the OverrideInstructionType interface.
 */
export function instanceOfOverrideInstructionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OverrideInstructionTypeFromJSON(json: any): OverrideInstructionType {
    return OverrideInstructionTypeFromJSONTyped(json, false);
}

export function OverrideInstructionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverrideInstructionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
        'reasonDescription': !exists(json, 'reasonDescription') ? undefined : json['reasonDescription'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function OverrideInstructionTypeToJSON(value?: OverrideInstructionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0,10)),
        'description': value.description,
        'reasonCode': value.reasonCode,
        'reasonDescription': value.reasonDescription,
        'type': value.type,
        'userId': value.userId,
    };
}

