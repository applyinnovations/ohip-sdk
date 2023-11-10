/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelRestaurantsType } from './HotelRestaurantsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object for changing hotel restaurants for hotels.
 * @export
 * @interface HotelRestaurantsToBeChanged
 */
export interface HotelRestaurantsToBeChanged {
    /**
     *
     * @type {HotelRestaurantsType}
     * @memberof HotelRestaurantsToBeChanged
     */
    hotelRestaurants?: HotelRestaurantsType;
    /**
     *
     * @type {Links}
     * @memberof HotelRestaurantsToBeChanged
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof HotelRestaurantsToBeChanged
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the HotelRestaurantsToBeChanged interface.
 */
export declare function instanceOfHotelRestaurantsToBeChanged(value: object): boolean;
export declare function HotelRestaurantsToBeChangedFromJSON(json: any): HotelRestaurantsToBeChanged;
export declare function HotelRestaurantsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRestaurantsToBeChanged;
export declare function HotelRestaurantsToBeChangedToJSON(value?: HotelRestaurantsToBeChanged | null): any;
