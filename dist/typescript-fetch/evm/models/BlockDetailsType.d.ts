/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockClassificationType } from './BlockClassificationType';
import type { BlockDetailsTypePrimaryOwners } from './BlockDetailsTypePrimaryOwners';
import type { BlockDetailsTypePrimaryProfiles } from './BlockDetailsTypePrimaryProfiles';
import type { BlockNonCompeteType } from './BlockNonCompeteType';
import type { BlockRateProtectionType } from './BlockRateProtectionType';
import type { BlockSourceOfSaleType } from './BlockSourceOfSaleType';
import type { BookingStatusDetailType } from './BookingStatusDetailType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { MarketCodeInfoType } from './MarketCodeInfoType';
import type { ReservationTypeInfoType } from './ReservationTypeInfoType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Information about the Block Details
 * @export
 * @interface BlockDetailsType
 */
export interface BlockDetailsType {
    /**
     *
     * @type {BlockClassificationType}
     * @memberof BlockDetailsType
     */
    blockClassification?: BlockClassificationType;
    /**
     * Block code for the block.
     * @type {string}
     * @memberof BlockDetailsType
     */
    blockCode?: string;
    /**
     *
     * @type {TimeSpanType}
     * @memberof BlockDetailsType
     */
    blockDates?: TimeSpanType;
    /**
     * Name of the block.
     * @type {string}
     * @memberof BlockDetailsType
     */
    blockName?: string;
    /**
     *
     * @type {BookingStatusDetailType}
     * @memberof BlockDetailsType
     */
    blockStatus?: BookingStatusDetailType;
    /**
     * Internal type of the block.
     * @type {string}
     * @memberof BlockDetailsType
     */
    blockType?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof BlockDetailsType
     */
    bookingType?: CodeDescriptionType;
    /**
     * Indicates if this is a catering only block.
     * @type {boolean}
     * @memberof BlockDetailsType
     */
    cateringOnlyBlock?: boolean;
    /**
     * Indicates the likelihood description of the block moving to the next active block status.
     * @type {string}
     * @memberof BlockDetailsType
     */
    conversionCode?: string;
    /**
     * Indicates the likelihood of the block moving to the next active block status.
     * @type {string}
     * @memberof BlockDetailsType
     */
    conversionCodeDescription?: string;
    /**
     * Currency Code attached to the business block.
     * @type {string}
     * @memberof BlockDetailsType
     */
    currencyCode?: string;
    /**
     * Indicates if the block is locked by an external system.
     * @type {boolean}
     * @memberof BlockDetailsType
     */
    externalLocked?: boolean;
    /**
     * Indicates if alternate dates are allowed for the booking.
     * @type {boolean}
     * @memberof BlockDetailsType
     */
    flexibleDates?: boolean;
    /**
     * A text field used to communicate the proper name of the hotel.
     * @type {string}
     * @memberof BlockDetailsType
     */
    hotelName?: string;
    /**
     *
     * @type {MarketCodeInfoType}
     * @memberof BlockDetailsType
     */
    marketCode?: MarketCodeInfoType;
    /**
     *
     * @type {BlockNonCompeteType}
     * @memberof BlockDetailsType
     */
    nonCompeteDetails?: BlockNonCompeteType;
    /**
     *
     * @type {BlockDetailsTypePrimaryOwners}
     * @memberof BlockDetailsType
     */
    primaryOwners?: BlockDetailsTypePrimaryOwners;
    /**
     *
     * @type {BlockDetailsTypePrimaryProfiles}
     * @memberof BlockDetailsType
     */
    primaryProfiles?: BlockDetailsTypePrimaryProfiles;
    /**
     * Indicates the ranking of the block.
     * @type {string}
     * @memberof BlockDetailsType
     */
    rankingCode?: string;
    /**
     * Indicates the ranking description of the block.
     * @type {string}
     * @memberof BlockDetailsType
     */
    rankingCodeDescription?: string;
    /**
     *
     * @type {BlockRateProtectionType}
     * @memberof BlockDetailsType
     */
    rateProtectionDetails?: BlockRateProtectionType;
    /**
     *
     * @type {ReservationTypeInfoType}
     * @memberof BlockDetailsType
     */
    reservationType?: ReservationTypeInfoType;
    /**
     *
     * @type {TimeSpanType}
     * @memberof BlockDetailsType
     */
    shoulderDates?: TimeSpanType;
    /**
     *
     * @type {BlockSourceOfSaleType}
     * @memberof BlockDetailsType
     */
    sourceOfSale?: BlockSourceOfSaleType;
    /**
     * Internal status for the block.
     * @type {string}
     * @memberof BlockDetailsType
     */
    status?: string;
}
/**
 * Check if a given object implements the BlockDetailsType interface.
 */
export declare function instanceOfBlockDetailsType(value: object): boolean;
export declare function BlockDetailsTypeFromJSON(json: any): BlockDetailsType;
export declare function BlockDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDetailsType;
export declare function BlockDetailsTypeToJSON(value?: BlockDetailsType | null): any;
