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
import type { ParityRateType } from './ParityRateType';
/**
 * Rate for Room Type and Rate Plan combination.
 * @export
 * @interface ParityRoomRateType
 */
export interface ParityRoomRateType {
    /**
     * The code that identifies a Booking Channel Rate Plan Code.
     * @type {string}
     * @memberof ParityRoomRateType
     */
    channelRatePlanCode?: string;
    /**
     * The code that identifies a Booking Channel Room Type.
     * @type {string}
     * @memberof ParityRoomRateType
     */
    channelRoomType?: string;
    /**
     * Rate on specific arrival date.
     * @type {Array<ParityRateType>}
     * @memberof ParityRoomRateType
     */
    parityRates?: Array<ParityRateType>;
    /**
     * The code that identifies a Rate Plan Code.
     * @type {string}
     * @memberof ParityRoomRateType
     */
    ratePlanCode?: string;
    /**
     * The code that identifies a Room Type.
     * @type {string}
     * @memberof ParityRoomRateType
     */
    roomType?: string;
}
/**
 * Check if a given object implements the ParityRoomRateType interface.
 */
export declare function instanceOfParityRoomRateType(value: object): boolean;
export declare function ParityRoomRateTypeFromJSON(json: any): ParityRoomRateType;
export declare function ParityRoomRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParityRoomRateType;
export declare function ParityRoomRateTypeToJSON(value?: ParityRoomRateType | null): any;
