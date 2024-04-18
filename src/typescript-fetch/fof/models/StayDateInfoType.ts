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
import type { ResExpectedTimesType } from './ResExpectedTimesType';
import {
    ResExpectedTimesTypeFromJSON,
    ResExpectedTimesTypeFromJSONTyped,
    ResExpectedTimesTypeToJSON,
} from './ResExpectedTimesType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

/**
 * Room attached with stay detail information
 * @export
 * @interface StayDateInfoType
 */
export interface StayDateInfoType {
    /**
     * 
     * @type {ResExpectedTimesType}
     * @memberof StayDateInfoType
     */
    expectedTimes?: ResExpectedTimesType;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof StayDateInfoType
     */
    timeSpan?: TimeSpanType;
}

/**
 * Check if a given object implements the StayDateInfoType interface.
 */
export function instanceOfStayDateInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StayDateInfoTypeFromJSON(json: any): StayDateInfoType {
    return StayDateInfoTypeFromJSONTyped(json, false);
}

export function StayDateInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StayDateInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expectedTimes': !exists(json, 'expectedTimes') ? undefined : ResExpectedTimesTypeFromJSON(json['expectedTimes']),
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
    };
}

export function StayDateInfoTypeToJSON(value?: StayDateInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expectedTimes': ResExpectedTimesTypeToJSON(value.expectedTimes),
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
    };
}
