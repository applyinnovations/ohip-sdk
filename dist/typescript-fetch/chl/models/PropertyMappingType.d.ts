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
import type { ChannelHotelCodeMappingBucketsType } from './ChannelHotelCodeMappingBucketsType';
import type { SystemInfoType } from './SystemInfoType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Base external system mapping info.
 * @export
 * @interface PropertyMappingType
 */
export interface PropertyMappingType {
    /**
     * ADS ARI enabled flag of channel-hotel mapping. Available only if channel type is ADS.
     * @type {boolean}
     * @memberof PropertyMappingType
     */
    aRIEnabled?: boolean;
    /**
     * External system Add-on license. This is mandatory when Channel Type is ADS.
     * @type {string}
     * @memberof PropertyMappingType
     */
    addOnLicense?: string;
    /**
     * Booking limit used by ADS interface for booking limit upload. Available if channel type is ADS and ADS ARI is enabled.
     * @type {number}
     * @memberof PropertyMappingType
     */
    bookingLimit?: number;
    /**
     * Chain code for the channel-hotel mapping.
     * @type {string}
     * @memberof PropertyMappingType
     */
    chainCode?: string;
    /**
     *
     * @type {ChannelHotelCodeMappingBucketsType}
     * @memberof PropertyMappingType
     */
    channelHotelCodeMappingBuckets?: ChannelHotelCodeMappingBucketsType;
    /**
     * City code of the channel hotel.
     * @type {string}
     * @memberof PropertyMappingType
     */
    city?: string;
    /**
     *
     * @type {TimeSpanType}
     * @memberof PropertyMappingType
     */
    dateRange?: TimeSpanType;
    /**
     * Detailed Description of the given entity.
     * @type {string}
     * @memberof PropertyMappingType
     */
    description?: string;
    /**
     * Code used in the External System
     * @type {string}
     * @memberof PropertyMappingType
     */
    externalSystemCode?: string;
    /**
     * Hotel chain ID of channel-hotel mapping. Only available for UA channel. It may not be modified if in myfidelio environment, and user is for a specific hotel.
     * @type {string}
     * @memberof PropertyMappingType
     */
    hotelChainId?: string;
    /**
     * Initial Upload or not.
     * @type {boolean}
     * @memberof PropertyMappingType
     */
    initialUpload?: boolean;
    /**
     * Code used inside the OPERA System
     * @type {string}
     * @memberof PropertyMappingType
     */
    localSystemCode?: string;
    /**
     * Prevailing rates flag of channel-hotel mapping. Available if PREVAILING_RATE_BY_LOS parameter is on.
     * @type {boolean}
     * @memberof PropertyMappingType
     */
    prevailingRates?: boolean;
    /**
     * Maximum room limit for the channel hotel reservation.
     * @type {number}
     * @memberof PropertyMappingType
     */
    roomLimit?: number;
    /**
     *
     * @type {SystemInfoType}
     * @memberof PropertyMappingType
     */
    systemInfo?: SystemInfoType;
}
/**
 * Check if a given object implements the PropertyMappingType interface.
 */
export declare function instanceOfPropertyMappingType(value: object): boolean;
export declare function PropertyMappingTypeFromJSON(json: any): PropertyMappingType;
export declare function PropertyMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyMappingType;
export declare function PropertyMappingTypeToJSON(value?: PropertyMappingType | null): any;
