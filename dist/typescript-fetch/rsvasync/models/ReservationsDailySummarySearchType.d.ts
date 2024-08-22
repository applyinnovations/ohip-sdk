/**
 * OPERA Cloud Reservation Asynchronous API
 * APIs to cater for Reservation Asynchronous functionality in OPERA Cloud. This includes viewing reservation data along with its revenue. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { LastModifiedDateType } from './LastModifiedDateType';
import type { TimeSpanType } from './TimeSpanType';
/**
 *
 * @export
 * @interface ReservationsDailySummarySearchType
 */
export interface ReservationsDailySummarySearchType {
    /**
     * The Hotel Code for which the reservation search will be performed.
     * @type {string}
     * @memberof ReservationsDailySummarySearchType
     */
    hotelId?: string;
    /**
     *
     * @type {LastModifiedDateType}
     * @memberof ReservationsDailySummarySearchType
     */
    lastModifiedDate?: LastModifiedDateType;
    /**
     *
     * @type {TimeSpanType}
     * @memberof ReservationsDailySummarySearchType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the ReservationsDailySummarySearchType interface.
 */
export declare function instanceOfReservationsDailySummarySearchType(value: object): boolean;
export declare function ReservationsDailySummarySearchTypeFromJSON(json: any): ReservationsDailySummarySearchType;
export declare function ReservationsDailySummarySearchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationsDailySummarySearchType;
export declare function ReservationsDailySummarySearchTypeToJSON(value?: ReservationsDailySummarySearchType | null): any;
