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
import type { HSKStatType } from './HSKStatType';
import {
    HSKStatTypeFromJSON,
    HSKStatTypeFromJSONTyped,
    HSKStatTypeToJSON,
} from './HSKStatType';

/**
 * .
 * @export
 * @interface StatisticsMetricSetInner
 */
export interface StatisticsMetricSetInner {
    /**
     * 
     * @type {string}
     * @memberof StatisticsMetricSetInner
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof StatisticsMetricSetInner
     */
    end?: string;
    /**
     * 
     * @type {Array<HSKStatType>}
     * @memberof StatisticsMetricSetInner
     */
    metrics?: Array<HSKStatType>;
    /**
     * 
     * @type {string}
     * @memberof StatisticsMetricSetInner
     */
    start?: string;
}

/**
 * Check if a given object implements the StatisticsMetricSetInner interface.
 */
export function instanceOfStatisticsMetricSetInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StatisticsMetricSetInnerFromJSON(json: any): StatisticsMetricSetInner {
    return StatisticsMetricSetInnerFromJSONTyped(json, false);
}

export function StatisticsMetricSetInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatisticsMetricSetInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'end': !exists(json, 'end') ? undefined : json['end'],
        'metrics': !exists(json, 'metrics') ? undefined : ((json['metrics'] as Array<any>).map(HSKStatTypeFromJSON)),
        'start': !exists(json, 'start') ? undefined : json['start'],
    };
}

export function StatisticsMetricSetInnerToJSON(value?: StatisticsMetricSetInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'end': value.end,
        'metrics': value.metrics === undefined ? undefined : ((value.metrics as Array<any>).map(HSKStatTypeToJSON)),
        'start': value.start,
    };
}
