/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AdvanceCheckInType } from './AdvanceCheckInType';
import type { CommissionPayoutToType } from './CommissionPayoutToType';
import type { ExternalReferencesType } from './ExternalReferencesType';
import type { HousekeepingRoomStatusType } from './HousekeepingRoomStatusType';
import type { IndicatorsType } from './IndicatorsType';
import type { PMSResStatusType } from './PMSResStatusType';
import type { ResAccessRestrictionType } from './ResAccessRestrictionType';
import type { ResAttachedProfileListType } from './ResAttachedProfileListType';
import type { ResCashieringType } from './ResCashieringType';
import type { ResCommunicationType } from './ResCommunicationType';
import type { ResGuestInfoType } from './ResGuestInfoType';
import type { ResHousekeepingType } from './ResHousekeepingType';
import type { ResMobileNotificationsType } from './ResMobileNotificationsType';
import type { ResRevenueBalanceType } from './ResRevenueBalanceType';
import type { ResSharedGuestListType } from './ResSharedGuestListType';
import type { ReservationAllowedActionsType } from './ReservationAllowedActionsType';
import type { ReservationDepositType } from './ReservationDepositType';
import type { ReservationFolioWindowsType } from './ReservationFolioWindowsType';
import type { ReservationIdList } from './ReservationIdList';
import type { ReservationInfoTypeCancellationInfo } from './ReservationInfoTypeCancellationInfo';
import type { ReservationInterfaceStatusType } from './ReservationInterfaceStatusType';
import type { ReservationPaymentMethodType } from './ReservationPaymentMethodType';
import type { ReservationQueueInformationType } from './ReservationQueueInformationType';
import type { ReservationTurndownInfoType } from './ReservationTurndownInfoType';
import type { SearchMatchesType } from './SearchMatchesType';
import type { SourceOfSaleType } from './SourceOfSaleType';
import type { StayInfoType } from './StayInfoType';
import type { TaxTypeType } from './TaxTypeType';
import type { WaitlistResType } from './WaitlistResType';
/**
 * The Reservation class contains the current reservation being created or altered.
 * @export
 * @interface ReservationInfoType
 */
export interface ReservationInfoType {
    /**
     *
     * @type {ResAccessRestrictionType}
     * @memberof ReservationInfoType
     */
    accessRestriction?: ResAccessRestrictionType;
    /**
     *
     * @type {AdvanceCheckInType}
     * @memberof ReservationInfoType
     */
    advanceCheckIn?: AdvanceCheckInType;
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
     *
     * @type {ReservationAllowedActionsType}
     * @memberof ReservationInfoType
     */
    allowedActions?: ReservationAllowedActionsType;
    /**
     *
     * @type {ResAttachedProfileListType}
     * @memberof ReservationInfoType
     */
    attachedProfiles?: ResAttachedProfileListType;
    /**
     *
     * @type {ReservationInfoTypeCancellationInfo}
     * @memberof ReservationInfoType
     */
    cancellationInfo?: ReservationInfoTypeCancellationInfo;
    /**
     *
     * @type {ResCashieringType}
     * @memberof ReservationInfoType
     */
    cashiering?: ResCashieringType;
    /**
     *
     * @type {CommissionPayoutToType}
     * @memberof ReservationInfoType
     */
    commissionPayoutTo?: CommissionPayoutToType;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof ReservationInfoType
     */
    computedReservationStatus?: PMSResStatusType;
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
     *
     * @type {ReservationDepositType}
     * @memberof ReservationInfoType
     */
    deposit?: ReservationDepositType;
    /**
     * Color setting of the reservation.
     * @type {string}
     * @memberof ReservationInfoType
     */
    displayColor?: string;
    /**
     *
     * @type {string}
     * @memberof ReservationInfoType
     */
    expectedServiceTime?: string;
    /**
     *
     * @type {ExternalReferencesType}
     * @memberof ReservationInfoType
     */
    externalReferences?: ExternalReferencesType;
    /**
     * Currency code preferred by guest.
     * @type {string}
     * @memberof ReservationInfoType
     */
    guestPreferredCurrency?: string;
    /**
     *
     * @type {string}
     * @memberof ReservationInfoType
     */
    hotelId?: string;
    /**
     * Collection of Hotel Interfaces and rights, this is populated only when fetching interface status for rooms.
     * @type {Array<ReservationInterfaceStatusType>}
     * @memberof ReservationInfoType
     */
    hotelInterfaceStatusList?: Array<ReservationInterfaceStatusType>;
    /**
     *
     * @type {string}
     * @memberof ReservationInfoType
     */
    hotelName?: string;
    /**
     *
     * @type {ResHousekeepingType}
     * @memberof ReservationInfoType
     */
    housekeeping?: ResHousekeepingType;
    /**
     * Number of keys created for the reservation.
     * @type {number}
     * @memberof ReservationInfoType
     */
    keyCount?: number;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof ReservationInfoType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof ReservationInfoType
     */
    lastModifyDateTime?: string;
    /**
     * Last Privacy Prompt Date
     * @type {Date}
     * @memberof ReservationInfoType
     */
    lastPrivacyPromptDate?: Date;
    /**
     *
     * @type {ResMobileNotificationsType}
     * @memberof ReservationInfoType
     */
    mobileNotifications?: ResMobileNotificationsType;
    /**
     * Returns true when reservation has an open folio.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    openFolio?: boolean;
    /**
     * Attribute OptedForCommunication is set to true when the guest has opted for receiving communicationsl related to the reservation.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    optedForCommunication?: boolean;
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
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof ReservationInfoType
     */
    purgeDate?: Date;
    /**
     *
     * @type {ReservationQueueInformationType}
     * @memberof ReservationInfoType
     */
    queue?: ReservationQueueInformationType;
    /**
     *
     * @type {ResCommunicationType}
     * @memberof ReservationInfoType
     */
    reservationCommunication?: ResCommunicationType;
    /**
     *
     * @type {ReservationFolioWindowsType}
     * @memberof ReservationInfoType
     */
    reservationFolioWindows?: ReservationFolioWindowsType;
    /**
     *
     * @type {ResGuestInfoType}
     * @memberof ReservationInfoType
     */
    reservationGuest?: ResGuestInfoType;
    /**
     *
     * @type {ReservationIdList}
     * @memberof ReservationInfoType
     */
    reservationIdList?: ReservationIdList;
    /**
     *
     * @type {IndicatorsType}
     * @memberof ReservationInfoType
     */
    reservationIndicators?: IndicatorsType;
    /**
     *
     * @type {ReservationPaymentMethodType}
     * @memberof ReservationInfoType
     */
    reservationPaymentMethod?: ReservationPaymentMethodType;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof ReservationInfoType
     */
    reservationStatus?: PMSResStatusType;
    /**
     *
     * @type {ResRevenueBalanceType}
     * @memberof ReservationInfoType
     */
    revenuesAndBalances?: ResRevenueBalanceType;
    /**
     *
     * @type {HousekeepingRoomStatusType}
     * @memberof ReservationInfoType
     */
    roomStatus?: HousekeepingRoomStatusType;
    /**
     *
     * @type {StayInfoType}
     * @memberof ReservationInfoType
     */
    roomStay?: StayInfoType;
    /**
     * Boolean True if this reservation is reserving rooms. False if it is only reserving services.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    roomStayReservation?: boolean;
    /**
     *
     * @type {SearchMatchesType}
     * @memberof ReservationInfoType
     */
    searchMatches?: SearchMatchesType;
    /**
     *
     * @type {ResSharedGuestListType}
     * @memberof ReservationInfoType
     */
    sharedGuests?: ResSharedGuestListType;
    /**
     *
     * @type {SourceOfSaleType}
     * @memberof ReservationInfoType
     */
    sourceOfSale?: SourceOfSaleType;
    /**
     * Set of reservation preferences which belongs to the Specials group.
     * @type {string}
     * @memberof ReservationInfoType
     */
    specials?: string;
    /**
     *
     * @type {TaxTypeType}
     * @memberof ReservationInfoType
     */
    taxType?: TaxTypeType;
    /**
     *
     * @type {ReservationTurndownInfoType}
     * @memberof ReservationInfoType
     */
    turndownInfo?: ReservationTurndownInfoType;
    /**
     *
     * @type {WaitlistResType}
     * @memberof ReservationInfoType
     */
    waitlist?: WaitlistResType;
    /**
     * When true, indicates the reservation is for a guest that walks-in without a reservation. When false, the reservation is not a walk-in.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    walkInIndicator?: boolean;
    /**
     * This flag will determine wheather the reservation is eligible for Welcome Offer or not.
     * @type {boolean}
     * @memberof ReservationInfoType
     */
    welcomeOffer?: boolean;
}
/**
 * Check if a given object implements the ReservationInfoType interface.
 */
export declare function instanceOfReservationInfoType(value: object): boolean;
export declare function ReservationInfoTypeFromJSON(json: any): ReservationInfoType;
export declare function ReservationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationInfoType;
export declare function ReservationInfoTypeToJSON(value?: ReservationInfoType | null): any;
