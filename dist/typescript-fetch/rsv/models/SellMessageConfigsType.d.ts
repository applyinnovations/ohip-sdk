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
import type { SellMessageConfigType } from './SellMessageConfigType';
/**
 * The SellMessageConfigsType is the list of sell messages, each comprising of all the sell message attributes and other details.
 * @export
 * @interface SellMessageConfigsType
 */
export interface SellMessageConfigsType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof SellMessageConfigsType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof SellMessageConfigsType
     */
    hasMore?: boolean;
    /**
     *
     * @type {Array<SellMessageConfigType>}
     * @memberof SellMessageConfigsType
     */
    sellMessageConfig?: Array<SellMessageConfigType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof SellMessageConfigsType
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the SellMessageConfigsType interface.
 */
export declare function instanceOfSellMessageConfigsType(value: object): boolean;
export declare function SellMessageConfigsTypeFromJSON(json: any): SellMessageConfigsType;
export declare function SellMessageConfigsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SellMessageConfigsType;
export declare function SellMessageConfigsTypeToJSON(value?: SellMessageConfigsType | null): any;
