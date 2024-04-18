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
import type { ChannelHotelLetterType } from './ChannelHotelLetterType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object after fetch Hotel Letters associated with the Booking Channels
 * @export
 * @interface FetchedChannelHotelLetters
 */
export interface FetchedChannelHotelLetters {
    /**
     * Collection of Hotel Letters Type
     * @type {Array<ChannelHotelLetterType>}
     * @memberof FetchedChannelHotelLetters
     */
    channelHotelLetters?: Array<ChannelHotelLetterType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof FetchedChannelHotelLetters
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FetchedChannelHotelLetters
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the FetchedChannelHotelLetters interface.
 */
export declare function instanceOfFetchedChannelHotelLetters(value: object): boolean;
export declare function FetchedChannelHotelLettersFromJSON(json: any): FetchedChannelHotelLetters;
export declare function FetchedChannelHotelLettersFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchedChannelHotelLetters;
export declare function FetchedChannelHotelLettersToJSON(value?: FetchedChannelHotelLetters | null): any;