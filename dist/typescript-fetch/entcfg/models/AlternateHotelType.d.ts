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
import type { AddressType } from './AddressType';
import type { ChannelSummaryInfoType } from './ChannelSummaryInfoType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { CurrencyExchangeRatesType } from './CurrencyExchangeRatesType';
import type { HotelAmenityType } from './HotelAmenityType';
import type { RateRoomDetailsType } from './RateRoomDetailsType';
import type { RelativePositionType } from './RelativePositionType';
import type { SellMessagesType } from './SellMessagesType';
import type { TelephoneType } from './TelephoneType';
/**
 *
 * @export
 * @interface AlternateHotelType
 */
export interface AlternateHotelType {
    /**
     *
     * @type {AddressType}
     * @memberof AlternateHotelType
     */
    address?: AddressType;
    /**
     *
     * @type {boolean}
     * @memberof AlternateHotelType
     */
    alternate?: boolean;
    /**
     *
     * @type {string}
     * @memberof AlternateHotelType
     */
    alternateHotelCode?: string;
    /**
     *
     * @type {number}
     * @memberof AlternateHotelType
     */
    availableRooms?: number;
    /**
     * The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute.
     * @type {string}
     * @memberof AlternateHotelType
     */
    chainCode?: string;
    /**
     * The name of the hotel chain (e.g., Hilton, Marriott, Hyatt).
     * @type {string}
     * @memberof AlternateHotelType
     */
    chainName?: string;
    /**
     *
     * @type {ChannelSummaryInfoType}
     * @memberof AlternateHotelType
     */
    channelSummaryInfo?: ChannelSummaryInfoType;
    /**
     * Comments of alternate Hotel.
     * @type {string}
     * @memberof AlternateHotelType
     */
    comments?: string;
    /**
     *
     * @type {Array<TelephoneType>}
     * @memberof AlternateHotelType
     */
    contactNumbers?: Array<TelephoneType>;
    /**
     *
     * @type {CurrencyExchangeRatesType}
     * @memberof AlternateHotelType
     */
    currencyExchangeRates?: CurrencyExchangeRatesType;
    /**
     * Compass direction to the attraction from the hotel (North/South, etc).
     * @type {string}
     * @memberof AlternateHotelType
     */
    direction?: string;
    /**
     *
     * @type {number}
     * @memberof AlternateHotelType
     */
    displayOrder?: number;
    /**
     * True if the hotel has any scheduled events within the requested date range.
     * @type {boolean}
     * @memberof AlternateHotelType
     */
    event?: boolean;
    /**
     *
     * @type {Array<HotelAmenityType>}
     * @memberof AlternateHotelType
     */
    hotelAmenities?: Array<HotelAmenityType>;
    /**
     * The IATA city code; for example DCA, ORD.
     * @type {string}
     * @memberof AlternateHotelType
     */
    hotelCityCode?: string;
    /**
     * A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes.
     * @type {string}
     * @memberof AlternateHotelType
     */
    hotelCodeContext?: string;
    /**
     * The code that uniquely identifies a single hotel property. The hotel code is decided between vendors.
     * @type {string}
     * @memberof AlternateHotelType
     */
    hotelId?: string;
    /**
     * A text field used to communicate the proper name of the hotel.
     * @type {string}
     * @memberof AlternateHotelType
     */
    hotelName?: string;
    /**
     *
     * @type {string}
     * @memberof AlternateHotelType
     */
    hotelType?: string;
    /**
     *
     * @type {number}
     * @memberof AlternateHotelType
     */
    inventoryRooms?: number;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof AlternateHotelType
     */
    maxRate?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof AlternateHotelType
     */
    minRate?: CurrencyAmountType;
    /**
     *
     * @type {boolean}
     * @memberof AlternateHotelType
     */
    negotiated?: boolean;
    /**
     *
     * @type {string}
     * @memberof AlternateHotelType
     */
    newAlternateHotelCode?: string;
    /**
     *
     * @type {RateRoomDetailsType}
     * @memberof AlternateHotelType
     */
    rateRoomDetails?: RateRoomDetailsType;
    /**
     * whether the alternate relationship should be applied to the alternate hotel as well. If this flag is true, not only will the AlternateHotelCode hotel be an alternate for HotelCode hotel, but HotelCode hotel will also be an alternate for AlternateHotelCode hotel.
     * @type {boolean}
     * @memberof AlternateHotelType
     */
    reciprocalRelationship?: boolean;
    /**
     *
     * @type {RelativePositionType}
     * @memberof AlternateHotelType
     */
    relativePosition?: RelativePositionType;
    /**
     *
     * @type {SellMessagesType}
     * @memberof AlternateHotelType
     */
    sellMessages?: SellMessagesType;
}
/**
 * Check if a given object implements the AlternateHotelType interface.
 */
export declare function instanceOfAlternateHotelType(value: object): boolean;
export declare function AlternateHotelTypeFromJSON(json: any): AlternateHotelType;
export declare function AlternateHotelTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternateHotelType;
export declare function AlternateHotelTypeToJSON(value?: AlternateHotelType | null): any;
