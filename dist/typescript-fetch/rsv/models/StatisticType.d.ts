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
import type { StatisticCodeType } from './StatisticCodeType';
/**
 * Defines all details needed to create a statistical report.
 * @export
 * @interface StatisticType
 */
export interface StatisticType {
    /**
     * The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute.
     * @type {string}
     * @memberof StatisticType
     */
    chainCode?: string;
    /**
     * The name of the hotel chain (e.g., Hilton, Marriott, Hyatt).
     * @type {string}
     * @memberof StatisticType
     */
    chainName?: string;
    /**
     * This element has revenue amount data for its revenue category such as Room Revenue, Food and Beverage Revenue.
     * @type {string}
     * @memberof StatisticType
     */
    description?: string;
    /**
     * Hotel fiscal date for statistics.
     * @type {Date}
     * @memberof StatisticType
     */
    fiscalDate?: Date;
    /**
     * The IATA city code; for example DCA, ORD.
     * @type {string}
     * @memberof StatisticType
     */
    hotelCityCode?: string;
    /**
     * A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes.
     * @type {string}
     * @memberof StatisticType
     */
    hotelCodeContext?: string;
    /**
     * The code that uniquely identifies a single hotel property. The hotel code is decided between vendors.
     * @type {string}
     * @memberof StatisticType
     */
    hotelId?: string;
    /**
     * A text field used to communicate the proper name of the hotel.
     * @type {string}
     * @memberof StatisticType
     */
    hotelName?: string;
    /**
     * Identifies the type of statistics collected. Each ReportCode corresponds to a set of category summaries based upon a predetermined agreement.
     * @type {string}
     * @memberof StatisticType
     */
    reportCode?: string;
    /**
     * Statistic Codes.
     * @type {Array<StatisticCodeType>}
     * @memberof StatisticType
     */
    statisticCodesType?: Array<StatisticCodeType>;
}
/**
 * Check if a given object implements the StatisticType interface.
 */
export declare function instanceOfStatisticType(value: object): boolean;
export declare function StatisticTypeFromJSON(json: any): StatisticType;
export declare function StatisticTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatisticType;
export declare function StatisticTypeToJSON(value?: StatisticType | null): any;
