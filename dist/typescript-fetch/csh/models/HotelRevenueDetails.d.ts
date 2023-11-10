/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelRevenueType } from './HotelRevenueType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for hotel room revenue for all HHonors redemption reservation.
 * @export
 * @interface HotelRevenueDetails
 */
export interface HotelRevenueDetails {
    /**
     *
     * @type {HotelRevenueType}
     * @memberof HotelRevenueDetails
     */
    hotelRevenue?: HotelRevenueType;
    /**
     *
     * @type {Links}
     * @memberof HotelRevenueDetails
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof HotelRevenueDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the HotelRevenueDetails interface.
 */
export declare function instanceOfHotelRevenueDetails(value: object): boolean;
export declare function HotelRevenueDetailsFromJSON(json: any): HotelRevenueDetails;
export declare function HotelRevenueDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRevenueDetails;
export declare function HotelRevenueDetailsToJSON(value?: HotelRevenueDetails | null): any;
