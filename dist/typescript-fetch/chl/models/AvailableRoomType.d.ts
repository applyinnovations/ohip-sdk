/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Room Type and Room Rate combination.
 * @export
 * @interface AvailableRoomType
 */
export interface AvailableRoomType {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof AvailableRoomType
     */
    amount?: number;
    /**
     *
     * @type {string}
     * @memberof AvailableRoomType
     */
    channelRoomType?: string;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof AvailableRoomType
     */
    currencyCode?: string;
    /**
     *
     * @type {string}
     * @memberof AvailableRoomType
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof AvailableRoomType
     */
    rateChangedYN?: string;
    /**
     *
     * @type {string}
     * @memberof AvailableRoomType
     */
    roomType?: string;
}
/**
 * Check if a given object implements the AvailableRoomType interface.
 */
export declare function instanceOfAvailableRoomType(value: object): boolean;
export declare function AvailableRoomTypeFromJSON(json: any): AvailableRoomType;
export declare function AvailableRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailableRoomType;
export declare function AvailableRoomTypeToJSON(value?: AvailableRoomType | null): any;