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
import type { TelephoneType } from './TelephoneType';
import type { URLType } from './URLType';
/**
 * Communication information of the hotel.
 * @export
 * @interface HotelBrochureTypeCommunication
 */
export interface HotelBrochureTypeCommunication {
    /**
     * Email address
     * @type {string}
     * @memberof HotelBrochureTypeCommunication
     */
    emailAddress?: string;
    /**
     *
     * @type {TelephoneType}
     * @memberof HotelBrochureTypeCommunication
     */
    faxNumber?: TelephoneType;
    /**
     *
     * @type {TelephoneType}
     * @memberof HotelBrochureTypeCommunication
     */
    phoneNumber?: TelephoneType;
    /**
     *
     * @type {TelephoneType}
     * @memberof HotelBrochureTypeCommunication
     */
    tollFreeNumber?: TelephoneType;
    /**
     *
     * @type {URLType}
     * @memberof HotelBrochureTypeCommunication
     */
    webPage?: URLType;
}
/**
 * Check if a given object implements the HotelBrochureTypeCommunication interface.
 */
export declare function instanceOfHotelBrochureTypeCommunication(value: object): boolean;
export declare function HotelBrochureTypeCommunicationFromJSON(json: any): HotelBrochureTypeCommunication;
export declare function HotelBrochureTypeCommunicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelBrochureTypeCommunication;
export declare function HotelBrochureTypeCommunicationToJSON(value?: HotelBrochureTypeCommunication | null): any;
