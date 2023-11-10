/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockIdList } from './BlockIdList';
import type { BookingStatusType } from './BookingStatusType';
import type { CateringEventLinkType } from './CateringEventLinkType';
import type { CateringStatusTypeType } from './CateringStatusTypeType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { EventId } from './EventId';
import type { IndicatorsType } from './IndicatorsType';
/**
 * Contains information about an event.
 * @export
 * @interface EventSummaryInfoType
 */
export interface EventSummaryInfoType {
    /**
     * Indicates whether the event has posted all charges.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    allPosted?: boolean;
    /**
     * Flag to indicate if the event is booked as a backup for another event.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    alternateEvent?: boolean;
    /**
     * Number of event attendees.
     * @type {number}
     * @memberof EventSummaryInfoType
     */
    attendees?: number;
    /**
     * Indicates whether any event in the block has postings.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    blockHasPostings?: boolean;
    /**
     * Hotel where the Block is created for the event.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    blockHotelCode?: string;
    /**
     *
     * @type {BlockIdList}
     * @memberof EventSummaryInfoType
     */
    blockIdList?: BlockIdList;
    /**
     * Name of the block.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    blockName?: string;
    /**
     * Currency code when base currency of the property is different than the catering currency.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    cateringCurrency?: string;
    /**
     * Currency code which is been quoted for Catering Events
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    cateringQuotedCurrency?: string;
    /**
     * Flag to indicate if the Catering event deducts resources from inventory.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    cateringStatusDeductInventory?: boolean;
    /**
     * Flag to indicate if the Catering event returns resources to inventory.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    cateringStatusReturnToInventory?: boolean;
    /**
     *
     * @type {CateringStatusTypeType}
     * @memberof EventSummaryInfoType
     */
    cateringStatusType?: CateringStatusTypeType;
    /**
     * Discount Percentage applied to Rent Amount.
     * @type {number}
     * @memberof EventSummaryInfoType
     */
    discountPercentage?: number;
    /**
     * Flag to indicate if the doorcard has been selected to display on reports or external readerboard systems.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    displayDoorCard?: boolean;
    /**
     * The doorcard to be displayed on reports or external readerboard systems.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    doorCard?: string;
    /**
     * The ending value of the time span.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    eventEndDate?: string;
    /**
     *
     * @type {EventId}
     * @memberof EventSummaryInfoType
     */
    eventId?: EventId;
    /**
     *
     * @type {IndicatorsType}
     * @memberof EventSummaryInfoType
     */
    eventIndicators?: IndicatorsType;
    /**
     *
     * @type {CateringEventLinkType}
     * @memberof EventSummaryInfoType
     */
    eventLink?: CateringEventLinkType;
    /**
     * Name of event. This is used to describe the event.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    eventName?: string;
    /**
     * Flag to indicate if the event is shareable with other events.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    eventShared?: boolean;
    /**
     * The starting value of the time span.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    eventStartDate?: string;
    /**
     *
     * @type {BookingStatusType}
     * @memberof EventSummaryInfoType
     */
    eventStatus?: BookingStatusType;
    /**
     * Flag to indicate if the event revenue should be excluded from the forecast.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    excludeFromForecast?: boolean;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof EventSummaryInfoType
     */
    functionSpaceDetails?: CodeDescriptionType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof EventSummaryInfoType
     */
    functionSpaceSetup?: CodeDescriptionType;
    /**
     * Indicates whether the event has posted some charges, but not all.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    hasPartialPostings?: boolean;
    /**
     * Indicates whether the event has postings.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    hasPostings?: boolean;
    /**
     * Hotel where the event is booked.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    hotelId?: string;
    /**
     * Inactivation date of the event.
     * @type {Date}
     * @memberof EventSummaryInfoType
     */
    inactiveDate?: Date;
    /**
     * Flag to indicate if the event space is associated from the Package.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    includeSpaceInPackage?: boolean;
    /**
     *
     * @type {IndicatorsType}
     * @memberof EventSummaryInfoType
     */
    indicators?: IndicatorsType;
    /**
     * Indicates whether the event is expected to be noisy and might possibly disturb other events.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    loudEvent?: boolean;
    /**
     * Flag to indicate if the event is a master event.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    masterEvent?: boolean;
    /**
     * Maximum Occupancy for the SetupCode of Catring Event.
     * @type {number}
     * @memberof EventSummaryInfoType
     */
    maximumOccupancy?: number;
    /**
     * Minimum Occupancy for the SetupCode of Catring Event.
     * @type {number}
     * @memberof EventSummaryInfoType
     */
    minimumOccupancy?: number;
    /**
     * Indicates that none of the charges on the event have been posted.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    nothingPosted?: boolean;
    /**
     * Package Code of the Event if it has a Package Enabled in it.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    packageCode?: string;
    /**
     * Flag to indicate if the event is part of a package.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    packageEvent?: boolean;
    /**
     * Package Id of the Event.
     * @type {number}
     * @memberof EventSummaryInfoType
     */
    packageId?: number;
    /**
     * Package Name of the Event.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    packageName?: string;
    /**
     * Rental amount for the event function space.
     * @type {number}
     * @memberof EventSummaryInfoType
     */
    rentalAmount?: number;
    /**
     * Rate Code for function space.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    rentalCode?: string;
    /**
     * Setup style code.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    setupCode?: string;
    /**
     * Event space setupCode time in minutes.
     * @type {number}
     * @memberof EventSummaryInfoType
     */
    setupTime?: number;
    /**
     * Flag to indicate if the event functionSpaceDetails is shareable.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    shareable?: boolean;
    /**
     * Flag to indicate if the event is a sub event.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    subEvent?: boolean;
    /**
     * Event space tear down time in minutes.
     * @type {number}
     * @memberof EventSummaryInfoType
     */
    tearDownTime?: number;
    /**
     * Type of event. Examples are LUN, DIN, etc.
     * @type {string}
     * @memberof EventSummaryInfoType
     */
    type?: string;
    /**
     * Flag to indicate whether to only use the forecasted values when reporting, regardless of whether resources are booked on an event.
     * @type {boolean}
     * @memberof EventSummaryInfoType
     */
    useForecastRevenue?: boolean;
    /**
     *
     * @type {BookingStatusType}
     * @memberof EventSummaryInfoType
     */
    waitlistReturnStatus?: BookingStatusType;
}
/**
 * Check if a given object implements the EventSummaryInfoType interface.
 */
export declare function instanceOfEventSummaryInfoType(value: object): boolean;
export declare function EventSummaryInfoTypeFromJSON(json: any): EventSummaryInfoType;
export declare function EventSummaryInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventSummaryInfoType;
export declare function EventSummaryInfoTypeToJSON(value?: EventSummaryInfoType | null): any;
