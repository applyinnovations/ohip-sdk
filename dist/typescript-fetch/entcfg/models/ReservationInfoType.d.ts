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
import type { AdvanceCheckInType } from './AdvanceCheckInType';
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
import type { ReservationInfoTypeCancellationInfo } from './ReservationInfoTypeCancellationInfo';
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
 * @interface ReservationInfoType
 */
export interface ReservationInfoType {
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ReservationInfoType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * This type contains unique information of external reference.
     * @type {Array<ExternalReferenceType>}
     * @memberof ReservationInfoType
     */
    externalReferences?: Array<ExternalReferenceType>;
    /**
     *
     * @type {StayInfoType}
     * @memberof ReservationInfoType
     */
    roomStay?: StayInfoType;
    /**
     *
     * @type {ResGuestInfoType}
     * @memberof ReservationInfoType
     */
    reservationGuest?: ResGuestInfoType;
    /**
     * Collection of shared guest reservations.
     * @type {Array<ResSharedGuestInfoType>}
     * @memberof ReservationInfoType
     */
    sharedGuests?: Array<ResSharedGuestInfoType>;
    /**
     *
     * @type {Array<ResAttachedProfileType>}
     * @memberof ReservationInfoType
     */
    attachedProfiles?: Array<ResAttachedProfileType>;
    /**
     *
     * @type {ReservationPaymentMethodType}
     * @memberof ReservationInfoType
     */
    reservationPaymentMethod?: ReservationPaymentMethodType;
    /**
     * Collection of reservation folio windows.
     * @type {Array<ReservationFolioWindowType>}
     * @memberof ReservationInfoType
     */
    reservationFolioWindows?: Array<ReservationFolioWindowType>;
    /**
     * Set of reservation preferences which belongs to the Specials group.
     * @type {string}
     * @memberof ReservationInfoType
     */
    specials?: string;
    /**
     * Last Privacy Prompt Date
     * @type {string}
     * @memberof ReservationInfoType
     */
    lastPrivacyPromptDate?: string;
    /**
     * Color setting of the reservation.
     * @type {string}
     * @memberof ReservationInfoType
     */
    displayColor?: string;
    /**
     * Collection of lamp indicators.
     * @type {Array<IndicatorType>}
     * @memberof ReservationInfoType
     */
    reservationIndicators?: Array<IndicatorType>;
    /**
     *
     * @type {HousekeepingRoomStatusType}
     * @memberof ReservationInfoType
     */
    roomStatus?: HousekeepingRoomStatusType;
    /**
     * List of Generic Name-Value-Pair Parameters used for super search matches.
     * @type {Array<SearchMatchType>}
     * @memberof ReservationInfoType
     */
    searchMatches?: Array<SearchMatchType>;
    /**
     *
     * @type {SourceOfSaleType}
     * @memberof ReservationInfoType
     */
    sourceOfSale?: SourceOfSaleType;
    /**
     *
     * @type {WaitlistResType}
     * @memberof ReservationInfoType
     */
    waitlist?: WaitlistResType;
    /**
     *
     * @type {ReservationQueueInformationType}
     * @memberof ReservationInfoType
     */
    queue?: ReservationQueueInformationType;
    /**
     *
     * @type {ResHousekeepingType}
     * @memberof ReservationInfoType
     */
    housekeeping?: ResHousekeepingType;
    /**
     *
     * @type {ResCashieringType}
     * @memberof ReservationInfoType
     */
    cashiering?: ResCashieringType;
    /**
     *
     * @type {TaxTypeType}
     * @memberof ReservationInfoType
     */
    taxType?: TaxTypeType;
    /**
     *
     * @type {ReservationDepositType}
     * @memberof ReservationInfoType
     */
    deposit?: ReservationDepositType;
    /**
     * Allowed action.
     * @type {Array<ReservationAllowedActionType>}
     * @memberof ReservationInfoType
     */
    allowedActions?: Array<ReservationAllowedActionType>;
    /**
     *
     * @type {ResRevenueBalanceType}
     * @memberof ReservationInfoType
     */
    revenuesAndBalances?: ResRevenueBalanceType;
    /**
     * Collection of Hotel Interfaces and rights, this is populated only when fetching interface status for rooms.
     * @type {Array<ReservationInterfaceStatusType>}
     * @memberof ReservationInfoType
     */
    hotelInterfaceStatusList?: Array<ReservationInterfaceStatusType>;
    /**
     * Currency code preferred by guest.
     * @type {string}
     * @memberof ReservationInfoType
     */
    guestPreferredCurrency?: string;
    /**
     *
     * @type {ReservationTurndownInfoType}
     * @memberof ReservationInfoType
     */
    turndownInfo?: ReservationTurndownInfoType;
    /**
     *
     * @type {ResMobileNotificationsType}
     * @memberof ReservationInfoType
     */
    mobileNotifications?: ResMobileNotificationsType;
    /**
     *
     * @type {ResCommunicationType}
     * @memberof ReservationInfoType
     */
    reservationCommunication?: ResCommunicationType;
    /**
     *
     * @type {AdvanceCheckInType}
     * @memberof ReservationInfoType
     */
    advanceCheckIn?: AdvanceCheckInType;
    /**
     * This flag will determine wheather the reservation is eligible for Welcome Offer or not.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    welcomeOffer?: boolean;
    /**
     *
     * @type {ReservationInfoTypeCancellationInfo}
     * @memberof ReservationInfoType
     */
    cancellationInfo?: ReservationInfoTypeCancellationInfo;
    /**
     * Number of keys created for the reservation.
     * @type {number}
     * @memberof ReservationInfoType
     */
    keyCount?: number;
    /**
     *
     * @type {string}
     * @memberof ReservationInfoType
     */
    hotelId?: string;
    /**
     *
     * @type {string}
     * @memberof ReservationInfoType
     */
    hotelName?: string;
    /**
     *
     * @type {string}
     * @memberof ReservationInfoType
     */
    expectedServiceTime?: string;
    /**
     * Boolean True if this reservation is reserving rooms. False if it is only reserving services.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    roomStayReservation?: boolean;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof ReservationInfoType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof ReservationInfoType
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof ReservationInfoType
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof ReservationInfoType
     */
    lastModifierId?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof ReservationInfoType
     */
    purgeDate?: string;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof ReservationInfoType
     */
    reservationStatus?: PMSResStatusType;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof ReservationInfoType
     */
    computedReservationStatus?: PMSResStatusType;
    /**
     * When true, indicates the reservation is for a guest that walks-in without a reservation. When false, the reservation is not a walk-in.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    walkInIndicator?: boolean;
    /**
     *
     * @type {ResAccessRestrictionType}
     * @memberof ReservationInfoType
     */
    accessRestriction?: ResAccessRestrictionType;
    /**
     *
     * @type {CommissionPayoutToType}
     * @memberof ReservationInfoType
     */
    commissionPayoutTo?: CommissionPayoutToType;
    /**
     * Payment Method.
     * @type {string}
     * @memberof ReservationInfoType
     */
    paymentMethod?: string;
    /**
     * Defines if the reservation is pre-registered or not.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    preRegistered?: boolean;
    /**
     * Returns true when reservation has an open folio.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    openFolio?: boolean;
    /**
     * Flag containing true or false value for reservation to be eligible for self-checkout by guest using mobile device . Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is eligible for mobile checkout yes / no. Upon fetch, the current state of the flag will show true or false.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    allowMobileCheckout?: boolean;
    /**
     * Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    allowMobileViewFolio?: boolean;
    /**
     * Attribute OptedForCommunication is set to true when the guest has opted for receiving communicationsl related to the reservation.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    optedForCommunication?: boolean;
}
/**
 * Check if a given object implements the ReservationInfoType interface.
 */
export declare function instanceOfReservationInfoType(value: object): boolean;
export declare function ReservationInfoTypeFromJSON(json: any): ReservationInfoType;
export declare function ReservationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationInfoType;
export declare function ReservationInfoTypeToJSON(value?: ReservationInfoType | null): any;
