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
import type { HotelBrochureType } from './HotelBrochureType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching Basic Property information.
 * @export
 * @interface HotelBrochureDetails
 */
export interface HotelBrochureDetails {
    /**
     *
     * @type {HotelBrochureType}
     * @memberof HotelBrochureDetails
     */
    hotelBrochure?: HotelBrochureType;
    /**
     *
     * @type {Links}
     * @memberof HotelBrochureDetails
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof HotelBrochureDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the HotelBrochureDetails interface.
 */
export declare function instanceOfHotelBrochureDetails(value: object): boolean;
export declare function HotelBrochureDetailsFromJSON(json: any): HotelBrochureDetails;
export declare function HotelBrochureDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelBrochureDetails;
export declare function HotelBrochureDetailsToJSON(value?: HotelBrochureDetails | null): any;
