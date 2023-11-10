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
import type { HotelDetailValueType } from './HotelDetailValueType';
/**
 * Collection of property level hotel detail values.
 * @export
 * @interface HotelDetailValuesType
 */
export interface HotelDetailValuesType extends Array<HotelDetailValueType> {
}
/**
 * Check if a given object implements the HotelDetailValuesType interface.
 */
export declare function instanceOfHotelDetailValuesType(value: object): boolean;
export declare function HotelDetailValuesTypeFromJSON(json: any): HotelDetailValuesType;
export declare function HotelDetailValuesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelDetailValuesType;
export declare function HotelDetailValuesTypeToJSON(value?: HotelDetailValuesType | null): any;
