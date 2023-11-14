/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelFolioTextType } from './HotelFolioTextType';
/**
 * Collection of hotel folio texts
 * @export
 * @interface HotelFolioTextsType
 */
export interface HotelFolioTextsType extends Array<HotelFolioTextType> {
}
/**
 * Check if a given object implements the HotelFolioTextsType interface.
 */
export declare function instanceOfHotelFolioTextsType(value: object): boolean;
export declare function HotelFolioTextsTypeFromJSON(json: any): HotelFolioTextsType;
export declare function HotelFolioTextsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelFolioTextsType;
export declare function HotelFolioTextsTypeToJSON(value?: HotelFolioTextsType | null): any;