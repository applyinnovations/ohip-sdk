/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelTurnAwayCodesType } from './HotelTurnAwayCodesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching hotel turnaway codes
 * @export
 * @interface HotelTurnAwayCodes
 */
export interface HotelTurnAwayCodes {
    /**
     *
     * @type {Links}
     * @memberof HotelTurnAwayCodes
     */
    links?: Links;
    /**
     *
     * @type {HotelTurnAwayCodesType}
     * @memberof HotelTurnAwayCodes
     */
    turnAwayCodes?: HotelTurnAwayCodesType;
    /**
     *
     * @type {WarningsType}
     * @memberof HotelTurnAwayCodes
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the HotelTurnAwayCodes interface.
 */
export declare function instanceOfHotelTurnAwayCodes(value: object): boolean;
export declare function HotelTurnAwayCodesFromJSON(json: any): HotelTurnAwayCodes;
export declare function HotelTurnAwayCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelTurnAwayCodes;
export declare function HotelTurnAwayCodesToJSON(value?: HotelTurnAwayCodes | null): any;
