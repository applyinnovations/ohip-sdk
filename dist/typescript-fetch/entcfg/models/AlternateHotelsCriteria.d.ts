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
import type { AlternateHotelsType } from './AlternateHotelsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object for creating new Alternate Hotels for hotels.
 * @export
 * @interface AlternateHotelsCriteria
 */
export interface AlternateHotelsCriteria {
    /**
     *
     * @type {AlternateHotelsType}
     * @memberof AlternateHotelsCriteria
     */
    alternateHotels?: AlternateHotelsType;
    /**
     *
     * @type {Links}
     * @memberof AlternateHotelsCriteria
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof AlternateHotelsCriteria
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the AlternateHotelsCriteria interface.
 */
export declare function instanceOfAlternateHotelsCriteria(value: object): boolean;
export declare function AlternateHotelsCriteriaFromJSON(json: any): AlternateHotelsCriteria;
export declare function AlternateHotelsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternateHotelsCriteria;
export declare function AlternateHotelsCriteriaToJSON(value?: AlternateHotelsCriteria | null): any;