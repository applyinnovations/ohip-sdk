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
/**
 * Generic Type to specify unique/primary id for the code. mostly used for Hotel level configuration codes removal request.
 * @export
 * @interface GenericHotelCodeCodeType
 */
export interface GenericHotelCodeCodeType {
    /**
     * Hotel where the code is configured.
     * @type {string}
     * @memberof GenericHotelCodeCodeType
     */
    hotelId?: string;
    /**
     * Configuration code.
     * @type {string}
     * @memberof GenericHotelCodeCodeType
     */
    code?: string;
}
/**
 * Check if a given object implements the GenericHotelCodeCodeType interface.
 */
export declare function instanceOfGenericHotelCodeCodeType(value: object): boolean;
export declare function GenericHotelCodeCodeTypeFromJSON(json: any): GenericHotelCodeCodeType;
export declare function GenericHotelCodeCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericHotelCodeCodeType;
export declare function GenericHotelCodeCodeTypeToJSON(value?: GenericHotelCodeCodeType | null): any;
