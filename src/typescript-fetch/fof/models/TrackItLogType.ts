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
import type { TrackItId } from './TrackItId';
import {
    TrackItIdFromJSON,
    TrackItIdFromJSONTyped,
    TrackItIdToJSON,
} from './TrackItId';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Individual activity log related to the Track It ticket.
 * @export
 * @interface TrackItLogType
 */
export interface TrackItLogType {
    /**
     * 
     * @type {string}
     * @memberof TrackItLogType
     */
    businessDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackItLogType
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackItLogType
     */
    hotelId?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackItLogType
     */
    logDate?: string;
    /**
     * 
     * @type {number}
     * @memberof TrackItLogType
     */
    logUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrackItLogType
     */
    logUserName?: string;
    /**
     * 
     * @type {TrackItId}
     * @memberof TrackItLogType
     */
    trackItId?: TrackItId;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof TrackItLogType
     */
    trackItLogId?: UniqueIDType;
    /**
     * 
     * @type {string}
     * @memberof TrackItLogType
     */
    type?: string;
}

/**
 * Check if a given object implements the TrackItLogType interface.
 */
export function instanceOfTrackItLogType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackItLogTypeFromJSON(json: any): TrackItLogType {
    return TrackItLogTypeFromJSONTyped(json, false);
}

export function TrackItLogTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackItLogType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessDate': !exists(json, 'businessDate') ? undefined : json['businessDate'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'logDate': !exists(json, 'logDate') ? undefined : json['logDate'],
        'logUserId': !exists(json, 'logUserId') ? undefined : json['logUserId'],
        'logUserName': !exists(json, 'logUserName') ? undefined : json['logUserName'],
        'trackItId': !exists(json, 'trackItId') ? undefined : TrackItIdFromJSON(json['trackItId']),
        'trackItLogId': !exists(json, 'trackItLogId') ? undefined : UniqueIDTypeFromJSON(json['trackItLogId']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function TrackItLogTypeToJSON(value?: TrackItLogType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'businessDate': value.businessDate,
        'description': value.description,
        'hotelId': value.hotelId,
        'logDate': value.logDate,
        'logUserId': value.logUserId,
        'logUserName': value.logUserName,
        'trackItId': TrackItIdToJSON(value.trackItId),
        'trackItLogId': UniqueIDTypeToJSON(value.trackItLogId),
        'type': value.type,
    };
}
