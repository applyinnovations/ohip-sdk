/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelEventSpaceDetailType } from './HotelEventSpaceDetailType';
import type { HotelEventSpaceSummaryType } from './HotelEventSpaceSummaryType';
/**
 * The Detail and Summary info of event space about the hotel
 * @export
 * @interface HotelEventSpacesType
 */
export interface HotelEventSpacesType {
    /**
     * List of detail info of hotel event space
     * @type {Array<HotelEventSpaceDetailType>}
     * @memberof HotelEventSpacesType
     */
    eventSpaceDetails?: Array<HotelEventSpaceDetailType>;
    /**
     * List of summary info of hotel event space
     * @type {Array<HotelEventSpaceSummaryType>}
     * @memberof HotelEventSpacesType
     */
    eventSpaceSummaries?: Array<HotelEventSpaceSummaryType>;
    /**
     * List of event space setup style codes.
     * @type {Array<string>}
     * @memberof HotelEventSpacesType
     */
    setupStyles?: Array<string>;
}
/**
 * Check if a given object implements the HotelEventSpacesType interface.
 */
export declare function instanceOfHotelEventSpacesType(value: object): boolean;
export declare function HotelEventSpacesTypeFromJSON(json: any): HotelEventSpacesType;
export declare function HotelEventSpacesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelEventSpacesType;
export declare function HotelEventSpacesTypeToJSON(value?: HotelEventSpacesType | null): any;