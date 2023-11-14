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
import type { HotelSummaryType } from './HotelSummaryType';
/**
 * Lists of Hotel summary information.
 * @export
 * @interface HotelsSummaryType
 */
export interface HotelsSummaryType extends Array<HotelSummaryType> {
}
/**
 * Check if a given object implements the HotelsSummaryType interface.
 */
export declare function instanceOfHotelsSummaryType(value: object): boolean;
export declare function HotelsSummaryTypeFromJSON(json: any): HotelsSummaryType;
export declare function HotelsSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelsSummaryType;
export declare function HotelsSummaryTypeToJSON(value?: HotelsSummaryType | null): any;