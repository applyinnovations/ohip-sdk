/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AdvanceCheckInType } from './AdvanceCheckInType';
import type { CancelReservationTypeCancellationInfo } from './CancelReservationTypeCancellationInfo';
import type { CancellationInstructionsType } from './CancellationInstructionsType';
import type { CommissionPayoutToType } from './CommissionPayoutToType';
import type { ExternalReferenceType } from './ExternalReferenceType';
import type { HousekeepingRoomStatusType } from './HousekeepingRoomStatusType';
import type { IndicatorType } from './IndicatorType';
import type { PMSResStatusType } from './PMSResStatusType';
import type { ResAccessRestrictionType } from './ResAccessRestrictionType';
import type { ResAttachedProfileType } from './ResAttachedProfileType';
import type { ResCashieringType } from './ResCashieringType';
import type { ResCommunicationType } from './ResCommunicationType';
import type { ResGuestInfoType } from './ResGuestInfoType';
import type { ResHousekeepingType } from './ResHousekeepingType';
import type { ResMobileNotificationsType } from './ResMobileNotificationsType';
import type { ResRevenueBalanceType } from './ResRevenueBalanceType';
import type { ResSharedGuestInfoType } from './ResSharedGuestInfoType';
import type { ReservationAllowedActionType } from './ReservationAllowedActionType';
import type { ReservationDepositType } from './ReservationDepositType';
import type { ReservationFolioWindowType } from './ReservationFolioWindowType';
import type { ReservationInterfaceStatusType } from './ReservationInterfaceStatusType';
import type { ReservationPaymentMethodType } from './ReservationPaymentMethodType';
import type { ReservationQueueInformationType } from './ReservationQueueInformationType';
import type { ReservationTurndownInfoType } from './ReservationTurndownInfoType';
import type { SearchMatchType } from './SearchMatchType';
import type { SourceOfSaleType } from './SourceOfSaleType';
import type { StayInfoType } from './StayInfoType';
import type { TaxTypeType } from './TaxTypeType';
import type { UniqueIDType } from './UniqueIDType';
import type { WaitlistResType } from './WaitlistResType';
/**
 * The Reservation class contains the current reservation being created or altered.
 * @export
 * @interface CancelReservationType
 */
export interface CancelReservationType {
    /**
     *
     * @type {ResAccessRestrictionType}
     * @memberof CancelReservationType
     */
    accessRestriction?: ResAccessRestrictionType;
    /**
     *
     * @type {AdvanceCheckInType}
     * @memberof CancelReservationType
     */
    advanceCheckIn?: AdvanceCheckInType;
    /**
     * Flag containing true or false value for reservation to be eligible for self-checkout by guest using mobile device . Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is eligible for mobile checkout yes / no. Upon fetch, the current state of the flag will show true or false.
     * @type {boolean}
     * @memberof CancelReservationType
     */
    allowMobileCheckout?: boolean;
    /**
     * Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device.
     * @type {boolean}
     * @memberof CancelReservationType
     */
    allowMobileViewFolio?: boolean;
    /**
     * Allowed action.
     * @type {Array<ReservationAllowedActionType>}
     * @memberof CancelReservationType
     */
    allowedActions?: Array<ReservationAllowedActionType>;
    /**
     *
     * @type {Array<ResAttachedProfileType>}
     * @memberof CancelReservationType
     */
    attachedProfiles?: Array<ResAttachedProfileType>;
    /**
     *
     * @type {CancelReservationTypeCancellationInfo}
     * @memberof CancelReservationType
     */
    cancellationInfo?: CancelReservationTypeCancellationInfo;
    /**
     *
     * @type {ResCashieringType}
     * @memberof CancelReservationType
     */
    cashiering?: ResCashieringType;
    /**
     *
     * @type {CommissionPayoutToType}
     * @memberof CancelReservationType
     */
    commissionPayoutTo?: CommissionPayoutToType;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof CancelReservationType
     */
    computedReservationStatus?: PMSResStatusType;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof CancelReservationType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof CancelReservationType
     */
    creatorId?: string;
    /**
     *
     * @type {CancellationInstructionsType}
     * @memberof CancelReservationType
     */
    cxlInstr?: CancellationInstructionsType;
    /**
     *
     * @type {ReservationDepositType}
     * @memberof CancelReservationType
     */
    deposit?: ReservationDepositType;
    /**
     * Color setting of the reservation.
     * @type {string}
     * @memberof CancelReservationType
     */
    displayColor?: string;
    /**
     *
     * @type {string}
     * @memberof CancelReservationType
     */
    expectedServiceTime?: string;
    /**
     * External cancellation number to be stored as cancellation number of the reservation. This is supported by postCancelShareReservation and postCancelReservation only.
     * @type {string}
     * @memberof CancelReservationType
     */
    externalCancellationId?: string;
    /**
     * This type contains unique information of external reference.
     * @type {Array<ExternalReferenceType>}
     * @memberof CancelReservationType
     */
    externalReferences?: Array<ExternalReferenceType>;
    /**
     *
     * @type {string}
     * @memberof CancelReservationType
     */
    hotelId?: string;
    /**
     * Collection of Hotel Interfaces and rights, this is populated only when fetching interface status for rooms.
     * @type {Array<ReservationInterfaceStatusType>}
     * @memberof CancelReservationType
     */
    hotelInterfaceStatusList?: Array<ReservationInterfaceStatusType>;
    /**
     *
     * @type {string}
     * @memberof CancelReservationType
     */
    hotelName?: string;
    /**
     *
     * @type {ResHousekeepingType}
     * @memberof CancelReservationType
     */
    housekeeping?: ResHousekeepingType;
    /**
     * Number of keys created for the reservation.
     * @type {number}
     * @memberof CancelReservationType
     */
    keyCount?: number;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof CancelReservationType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof CancelReservationType
     */
    lastModifyDateTime?: string;
    /**
     * Last Privacy Prompt Date
     * @type {string}
     * @memberof CancelReservationType
     */
    lastPrivacyPromptDate?: string;
    /**
     *
     * @type {ResMobileNotificationsType}
     * @memberof CancelReservationType
     */
    mobileNotifications?: ResMobileNotificationsType;
    /**
     * Returns true when reservation has an open folio.
     * @type {boolean}
     * @memberof CancelReservationType
     */
    openFolio?: boolean;
    /**
     * Attribute OptedForCommunication is set to true when the guest has opted for receiving communicationsl related to the reservation.
     * @type {boolean}
     * @memberof CancelReservationType
     */
    optedForCommunication?: boolean;
    /**
     * This forcefully overrides the cancel operation on Reservation. For real-time CRS interface, it is used as cancellation override flag.
     * @type {boolean}
     * @memberof CancelReservationType
     */
    overrideExternalChecks?: boolean;
    /**
     * Payment Method.
     * @type {string}
     * @memberof CancelReservationType
     */
    paymentMethod?: string;
    /**
     * Defines if the reservation is pre-registered or not.
     * @type {boolean}
     * @memberof CancelReservationType
     */
    preRegistered?: boolean;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof CancelReservationType
     */
    purgeDate?: string;
    /**
     *
     * @type {ReservationQueueInformationType}
     * @memberof CancelReservationType
     */
    queue?: ReservationQueueInformationType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CancelReservationType
     */
    refResId?: UniqueIDType;
    /**
     *
     * @type {ResCommunicationType}
     * @memberof CancelReservationType
     */
    reservationCommunication?: ResCommunicationType;
    /**
     * Collection of reservation folio windows.
     * @type {Array<ReservationFolioWindowType>}
     * @memberof CancelReservationType
     */
    reservationFolioWindows?: Array<ReservationFolioWindowType>;
    /**
     *
     * @type {ResGuestInfoType}
     * @memberof CancelReservationType
     */
    reservationGuest?: ResGuestInfoType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof CancelReservationType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * Collection of lamp indicators.
     * @type {Array<IndicatorType>}
     * @memberof CancelReservationType
     */
    reservationIndicators?: Array<IndicatorType>;
    /**
     *
     * @type {number}
     * @memberof CancelReservationType
     */
    reservationLockHandle?: number;
    /**
     *
     * @type {ReservationPaymentMethodType}
     * @memberof CancelReservationType
     */
    reservationPaymentMethod?: ReservationPaymentMethodType;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof CancelReservationType
     */
    reservationStatus?: PMSResStatusType;
    /**
     *
     * @type {ResRevenueBalanceType}
     * @memberof CancelReservationType
     */
    revenuesAndBalances?: ResRevenueBalanceType;
    /**
     *
     * @type {HousekeepingRoomStatusType}
     * @memberof CancelReservationType
     */
    roomStatus?: HousekeepingRoomStatusType;
    /**
     *
     * @type {StayInfoType}
     * @memberof CancelReservationType
     */
    roomStay?: StayInfoType;
    /**
     * Boolean True if this reservation is reserving rooms. False if it is only reserving services.
     * @type {boolean}
     * @memberof CancelReservationType
     */
    roomStayReservation?: boolean;
    /**
     * List of Generic Name-Value-Pair Parameters used for super search matches.
     * @type {Array<SearchMatchType>}
     * @memberof CancelReservationType
     */
    searchMatches?: Array<SearchMatchType>;
    /**
     * Collection of shared guest reservations.
     * @type {Array<ResSharedGuestInfoType>}
     * @memberof CancelReservationType
     */
    sharedGuests?: Array<ResSharedGuestInfoType>;
    /**
     *
     * @type {SourceOfSaleType}
     * @memberof CancelReservationType
     */
    sourceOfSale?: SourceOfSaleType;
    /**
     * Set of reservation preferences which belongs to the Specials group.
     * @type {string}
     * @memberof CancelReservationType
     */
    specials?: string;
    /**
     *
     * @type {TaxTypeType}
     * @memberof CancelReservationType
     */
    taxType?: TaxTypeType;
    /**
     *
     * @type {ReservationTurndownInfoType}
     * @memberof CancelReservationType
     */
    turndownInfo?: ReservationTurndownInfoType;
    /**
     *
     * @type {WaitlistResType}
     * @memberof CancelReservationType
     */
    waitlist?: WaitlistResType;
    /**
     * When true, indicates the reservation is for a guest that walks-in without a reservation. When false, the reservation is not a walk-in.
     * @type {boolean}
     * @memberof CancelReservationType
     */
    walkInIndicator?: boolean;
    /**
     * This flag will determine wheather the reservation is eligible for Welcome Offer or not.
     * @type {boolean}
     * @memberof CancelReservationType
     */
    welcomeOffer?: boolean;
}
/**
 * Check if a given object implements the CancelReservationType interface.
 */
export declare function instanceOfCancelReservationType(value: object): boolean;
export declare function CancelReservationTypeFromJSON(json: any): CancelReservationType;
export declare function CancelReservationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelReservationType;
export declare function CancelReservationTypeToJSON(value?: CancelReservationType | null): any;