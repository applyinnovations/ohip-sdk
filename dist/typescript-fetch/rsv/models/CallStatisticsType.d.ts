/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 * Holds Call Statistics Information.
 * @export
 * @interface CallStatisticsType
 */
export interface CallStatisticsType {
    /**
     * Application User for which the Call Statistics is being retrieved.
     * @type {string}
     * @memberof CallStatisticsType
     */
    appUserName?: string;
    /**
     * Holds Average Call Time of Agent.
     * @type {number}
     * @memberof CallStatisticsType
     */
    averageCallTime?: number;
    /**
     * Holds Total Call Time by Agent.
     * @type {number}
     * @memberof CallStatisticsType
     */
    totalCallTime?: number;
    /**
     * Holds Total Calls made by Agent.
     * @type {number}
     * @memberof CallStatisticsType
     */
    totalCalls?: number;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof CallStatisticsType
     */
    totalRevenue?: CurrencyAmountType;
    /**
     * Holds Total Sales by Agent.
     * @type {number}
     * @memberof CallStatisticsType
     */
    totalSales?: number;
}
/**
 * Check if a given object implements the CallStatisticsType interface.
 */
export declare function instanceOfCallStatisticsType(value: object): boolean;
export declare function CallStatisticsTypeFromJSON(json: any): CallStatisticsType;
export declare function CallStatisticsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallStatisticsType;
export declare function CallStatisticsTypeToJSON(value?: CallStatisticsType | null): any;
