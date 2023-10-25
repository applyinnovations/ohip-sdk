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
import type { FixedChargeDetailType } from './FixedChargeDetailType';
import {
    FixedChargeDetailTypeFromJSON,
    FixedChargeDetailTypeFromJSONTyped,
    FixedChargeDetailTypeToJSON,
} from './FixedChargeDetailType';
import type { FixedChargeScheduleType } from './FixedChargeScheduleType';
import {
    FixedChargeScheduleTypeFromJSON,
    FixedChargeScheduleTypeFromJSONTyped,
    FixedChargeScheduleTypeToJSON,
} from './FixedChargeScheduleType';

/**
 * Holds fixed charge information.
 * @export
 * @interface FixedChargeType
 */
export interface FixedChargeType {
    /**
     * 
     * @type {FixedChargeDetailType}
     * @memberof FixedChargeType
     */
    charge?: FixedChargeDetailType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof FixedChargeType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof FixedChargeType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof FixedChargeType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof FixedChargeType
     */
    instance?: string;
    /**
     * 
     * @type {FixedChargeScheduleType}
     * @memberof FixedChargeType
     */
    schedule?: FixedChargeScheduleType;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof FixedChargeType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof FixedChargeType
     */
    url?: string;
}

/**
 * Check if a given object implements the FixedChargeType interface.
 */
export function instanceOfFixedChargeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FixedChargeTypeFromJSON(json: any): FixedChargeType {
    return FixedChargeTypeFromJSONTyped(json, false);
}

export function FixedChargeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FixedChargeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'charge': !exists(json, 'charge') ? undefined : FixedChargeDetailTypeFromJSON(json['charge']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !exists(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'schedule': !exists(json, 'schedule') ? undefined : FixedChargeScheduleTypeFromJSON(json['schedule']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function FixedChargeTypeToJSON(value?: FixedChargeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'charge': FixedChargeDetailTypeToJSON(value.charge),
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'schedule': FixedChargeScheduleTypeToJSON(value.schedule),
        'type': value.type,
        'url': value.url,
    };
}

