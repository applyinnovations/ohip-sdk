/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { StatisticType } from './StatisticType';
import {
    StatisticTypeFromJSON,
    StatisticTypeFromJSONTyped,
    StatisticTypeToJSON,
} from './StatisticType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * FetchReservationStatistics response
 * @export
 * @interface ReservationStatistics
 */
export interface ReservationStatistics {
    /**
     * 
     * @type {Links}
     * @memberof ReservationStatistics
     */
    links?: Links;
    /**
     * Collection of statistic data of a reservation.
     * @type {Array<StatisticType>}
     * @memberof ReservationStatistics
     */
    statisticsType?: Array<StatisticType>;
    /**
     * 
     * @type {WarningsType}
     * @memberof ReservationStatistics
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ReservationStatistics interface.
 */
export function instanceOfReservationStatistics(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationStatisticsFromJSON(json: any): ReservationStatistics {
    return ReservationStatisticsFromJSONTyped(json, false);
}

export function ReservationStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationStatistics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'statisticsType': !exists(json, 'statisticsType') ? undefined : ((json['statisticsType'] as Array<any>).map(StatisticTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ReservationStatisticsToJSON(value?: ReservationStatistics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'statisticsType': value.statisticsType === undefined ? undefined : ((value.statisticsType as Array<any>).map(StatisticTypeToJSON)),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
