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
import type { StatusStatisticType } from './StatusStatisticType';
import {
    StatusStatisticTypeFromJSON,
    StatusStatisticTypeFromJSONTyped,
    StatusStatisticTypeToJSON,
} from './StatusStatisticType';

/**
 * Statistic units group by status, booking and daily targets.
 * @export
 * @interface BlockSummaryStatisticType
 */
export interface BlockSummaryStatisticType {
    /**
     * Unit type to hold statistic code and value pair.
     * @type {Array<StatisticUnitType>}
     * @memberof BlockSummaryStatisticType
     */
    bookingSummaryStatistic?: Array<StatisticUnitType>;
    /**
     * Unit type to hold statistic code and value pair.
     * @type {Array<StatisticUnitType>}
     * @memberof BlockSummaryStatisticType
     */
    dailyTargetsSummaryStatistic?: Array<StatisticUnitType>;
    /**
     * Date of the block inventory statistic.
     * @type {Date}
     * @memberof BlockSummaryStatisticType
     */
    statisticDate?: Date;
    /**
     * Statistic summary for a particular status.
     * @type {Array<StatusStatisticType>}
     * @memberof BlockSummaryStatisticType
     */
    statusSummaryStatistic?: Array<StatusStatisticType>;
}

/**
 * Check if a given object implements the BlockSummaryStatisticType interface.
 */
export function instanceOfBlockSummaryStatisticType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockSummaryStatisticTypeFromJSON(json: any): BlockSummaryStatisticType {
    return BlockSummaryStatisticTypeFromJSONTyped(json, false);
}

export function BlockSummaryStatisticTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockSummaryStatisticType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingSummaryStatistic': !exists(json, 'bookingSummaryStatistic') ? undefined : ((json['bookingSummaryStatistic'] as Array<any>).map(StatisticUnitTypeFromJSON)),
        'dailyTargetsSummaryStatistic': !exists(json, 'dailyTargetsSummaryStatistic') ? undefined : ((json['dailyTargetsSummaryStatistic'] as Array<any>).map(StatisticUnitTypeFromJSON)),
        'statisticDate': !exists(json, 'statisticDate') ? undefined : (new Date(json['statisticDate'])),
        'statusSummaryStatistic': !exists(json, 'statusSummaryStatistic') ? undefined : ((json['statusSummaryStatistic'] as Array<any>).map(StatusStatisticTypeFromJSON)),
    };
}

export function BlockSummaryStatisticTypeToJSON(value?: BlockSummaryStatisticType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingSummaryStatistic': value.bookingSummaryStatistic === undefined ? undefined : ((value.bookingSummaryStatistic as Array<any>).map(StatisticUnitTypeToJSON)),
        'dailyTargetsSummaryStatistic': value.dailyTargetsSummaryStatistic === undefined ? undefined : ((value.dailyTargetsSummaryStatistic as Array<any>).map(StatisticUnitTypeToJSON)),
        'statisticDate': value.statisticDate === undefined ? undefined : (value.statisticDate.toISOString().substr(0,10)),
        'statusSummaryStatistic': value.statusSummaryStatistic === undefined ? undefined : ((value.statusSummaryStatistic as Array<any>).map(StatusStatisticTypeToJSON)),
    };
}

