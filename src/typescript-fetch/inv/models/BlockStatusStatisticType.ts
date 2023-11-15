/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StatisticUnitType } from './StatisticUnitType';
import {
    StatisticUnitTypeFromJSON,
    StatisticUnitTypeFromJSONTyped,
    StatisticUnitTypeToJSON,
} from './StatisticUnitType';

/**
 * Contains summary statistic for a block on a particular statistic date.
 * @export
 * @interface BlockStatusStatisticType
 */
export interface BlockStatusStatisticType {
    /**
     * Date of the statistic.
     * @type {string}
     * @memberof BlockStatusStatisticType
     */
    statisticDate?: string;
    /**
     * Unit type to hold statistic code and value pair.
     * @type {Array<StatisticUnitType>}
     * @memberof BlockStatusStatisticType
     */
    statusSummaryStatistic?: Array<StatisticUnitType>;
}

/**
 * Check if a given object implements the BlockStatusStatisticType interface.
 */
export function instanceOfBlockStatusStatisticType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockStatusStatisticTypeFromJSON(json: any): BlockStatusStatisticType {
    return BlockStatusStatisticTypeFromJSONTyped(json, false);
}

export function BlockStatusStatisticTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockStatusStatisticType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statisticDate': !exists(json, 'statisticDate') ? undefined : json['statisticDate'],
        'statusSummaryStatistic': !exists(json, 'statusSummaryStatistic') ? undefined : ((json['statusSummaryStatistic'] as Array<any>).map(StatisticUnitTypeFromJSON)),
    };
}

export function BlockStatusStatisticTypeToJSON(value?: BlockStatusStatisticType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statisticDate': value.statisticDate,
        'statusSummaryStatistic': value.statusSummaryStatistic === undefined ? undefined : ((value.statusSummaryStatistic as Array<any>).map(StatisticUnitTypeToJSON)),
    };
}

