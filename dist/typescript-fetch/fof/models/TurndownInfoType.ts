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
import type { TurndownStatusType } from './TurndownStatusType';
import {
    TurndownStatusTypeFromJSON,
    TurndownStatusTypeFromJSONTyped,
    TurndownStatusTypeToJSON,
} from './TurndownStatusType';

/**
 * 
 * @export
 * @interface TurndownInfoType
 */
export interface TurndownInfoType {
    /**
     * 
     * @type {TurndownStatusType}
     * @memberof TurndownInfoType
     */
    turndownStatusInfo?: TurndownStatusType;
}

/**
 * Check if a given object implements the TurndownInfoType interface.
 */
export function instanceOfTurndownInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TurndownInfoTypeFromJSON(json: any): TurndownInfoType {
    return TurndownInfoTypeFromJSONTyped(json, false);
}

export function TurndownInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TurndownInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'turndownStatusInfo': !exists(json, 'turndownStatusInfo') ? undefined : TurndownStatusTypeFromJSON(json['turndownStatusInfo']),
    };
}

export function TurndownInfoTypeToJSON(value?: TurndownInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'turndownStatusInfo': TurndownStatusTypeToJSON(value.turndownStatusInfo),
    };
}

