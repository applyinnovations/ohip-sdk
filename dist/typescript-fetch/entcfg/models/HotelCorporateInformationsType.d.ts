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
import type { PrimaryCodeType } from './PrimaryCodeType';
/**
 * Corporate information details of the property
 * @export
 * @interface HotelCorporateInformationsType
 */
export interface HotelCorporateInformationsType {
    /**
     *
     * @type {string}
     * @memberof HotelCorporateInformationsType
     */
    brandCode?: string;
    /**
     *
     * @type {string}
     * @memberof HotelCorporateInformationsType
     */
    hotelCategory?: string;
    /**
     * List of codes with primary flag
     * @type {Array<PrimaryCodeType>}
     * @memberof HotelCorporateInformationsType
     */
    businessUnit?: Array<PrimaryCodeType>;
    /**
     * List of codes with primary flag
     * @type {Array<PrimaryCodeType>}
     * @memberof HotelCorporateInformationsType
     */
    departmentCode?: Array<PrimaryCodeType>;
    /**
     * List of codes with primary flag
     * @type {Array<PrimaryCodeType>}
     * @memberof HotelCorporateInformationsType
     */
    division?: Array<PrimaryCodeType>;
    /**
     * List of codes with primary flag
     * @type {Array<PrimaryCodeType>}
     * @memberof HotelCorporateInformationsType
     */
    opertingUnit?: Array<PrimaryCodeType>;
}
/**
 * Check if a given object implements the HotelCorporateInformationsType interface.
 */
export declare function instanceOfHotelCorporateInformationsType(value: object): boolean;
export declare function HotelCorporateInformationsTypeFromJSON(json: any): HotelCorporateInformationsType;
export declare function HotelCorporateInformationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelCorporateInformationsType;
export declare function HotelCorporateInformationsTypeToJSON(value?: HotelCorporateInformationsType | null): any;
