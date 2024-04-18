/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { AdvanceCheckInType } from './AdvanceCheckInType';
import {
    AdvanceCheckInTypeFromJSON,
    AdvanceCheckInTypeFromJSONTyped,
    AdvanceCheckInTypeToJSON,
} from './AdvanceCheckInType';
import type { CommissionPayoutToType } from './CommissionPayoutToType';
import {
    CommissionPayoutToTypeFromJSON,
    CommissionPayoutToTypeFromJSONTyped,
    CommissionPayoutToTypeToJSON,
} from './CommissionPayoutToType';
import type { ExternalReferenceType } from './ExternalReferenceType';
import {
    ExternalReferenceTypeFromJSON,
    ExternalReferenceTypeFromJSONTyped,
    ExternalReferenceTypeToJSON,
} from './ExternalReferenceType';
import type { HousekeepingRoomStatusType } from './HousekeepingRoomStatusType';
import {
    HousekeepingRoomStatusTypeFromJSON,
    HousekeepingRoomStatusTypeFromJSONTyped,
    HousekeepingRoomStatusTypeToJSON,
} from './HousekeepingRoomStatusType';
import type { IndicatorType } from './IndicatorType';
import {
    IndicatorTypeFromJSON,
    IndicatorTypeFromJSONTyped,
    IndicatorTypeToJSON,
} from './IndicatorType';
import type { PMSResStatusType } from './PMSResStatusType';
import {
    PMSResStatusTypeFromJSON,
    PMSResStatusTypeFromJSONTyped,
    PMSResStatusTypeToJSON,
} from './PMSResStatusType';
import type { ResAccessRestrictionType } from './ResAccessRestrictionType';
import {
    ResAccessRestrictionTypeFromJSON,
    ResAccessRestrictionTypeFromJSONTyped,
    ResAccessRestrictionTypeToJSON,
} from './ResAccessRestrictionType';
import type { ResAttachedProfileType } from './ResAttachedProfileType';
import {
    ResAttachedProfileTypeFromJSON,
    ResAttachedProfileTypeFromJSONTyped,
    ResAttachedProfileTypeToJSON,
} from './ResAttachedProfileType';
import type { ResCashieringType } from './ResCashieringType';
import {
    ResCashieringTypeFromJSON,
    ResCashieringTypeFromJSONTyped,
    ResCashieringTypeToJSON,
} from './ResCashieringType';
import type { ResCommunicationType } from './ResCommunicationType';
import {
    ResCommunicationTypeFromJSON,
    ResCommunicationTypeFromJSONTyped,
    ResCommunicationTypeToJSON,
} from './ResCommunicationType';
import type { ResGuestInfoType } from './ResGuestInfoType';
import {
    ResGuestInfoTypeFromJSON,
    ResGuestInfoTypeFromJSONTyped,
    ResGuestInfoTypeToJSON,
} from './ResGuestInfoType';
import type { ResHousekeepingType } from './ResHousekeepingType';
import {
    ResHousekeepingTypeFromJSON,
    ResHousekeepingTypeFromJSONTyped,
    ResHousekeepingTypeToJSON,
} from './ResHousekeepingType';
import type { ResMobileNotificationsType } from './ResMobileNotificationsType';
import {
    ResMobileNotificationsTypeFromJSON,
    ResMobileNotificationsTypeFromJSONTyped,
    ResMobileNotificationsTypeToJSON,
} from './ResMobileNotificationsType';
import type { ResRevenueBalanceType } from './ResRevenueBalanceType';
import {
    ResRevenueBalanceTypeFromJSON,
    ResRevenueBalanceTypeFromJSONTyped,
    ResRevenueBalanceTypeToJSON,
} from './ResRevenueBalanceType';
import type { ResSharedGuestInfoType } from './ResSharedGuestInfoType';
import {
    ResSharedGuestInfoTypeFromJSON,
    ResSharedGuestInfoTypeFromJSONTyped,
    ResSharedGuestInfoTypeToJSON,
} from './ResSharedGuestInfoType';
import type { ReservationAllowedActionType } from './ReservationAllowedActionType';
import {
    ReservationAllowedActionTypeFromJSON,
    ReservationAllowedActionTypeFromJSONTyped,
    ReservationAllowedActionTypeToJSON,
} from './ReservationAllowedActionType';
import type { ReservationDepositType } from './ReservationDepositType';
import {
    ReservationDepositTypeFromJSON,
    ReservationDepositTypeFromJSONTyped,
    ReservationDepositTypeToJSON,
} from './ReservationDepositType';
import type { ReservationFolioWindowType } from './ReservationFolioWindowType';
import {
    ReservationFolioWindowTypeFromJSON,
    ReservationFolioWindowTypeFromJSONTyped,
    ReservationFolioWindowTypeToJSON,
} from './ReservationFolioWindowType';
import type { ReservationInfoTypeCancellationInfo } from './ReservationInfoTypeCancellationInfo';
import {
    ReservationInfoTypeCancellationInfoFromJSON,
    ReservationInfoTypeCancellationInfoFromJSONTyped,
    ReservationInfoTypeCancellationInfoToJSON,
} from './ReservationInfoTypeCancellationInfo';
import type { ReservationInterfaceStatusType } from './ReservationInterfaceStatusType';
import {
    ReservationInterfaceStatusTypeFromJSON,
    ReservationInterfaceStatusTypeFromJSONTyped,
    ReservationInterfaceStatusTypeToJSON,
} from './ReservationInterfaceStatusType';
import type { ReservationPaymentMethodType } from './ReservationPaymentMethodType';
import {
    ReservationPaymentMethodTypeFromJSON,
    ReservationPaymentMethodTypeFromJSONTyped,
    ReservationPaymentMethodTypeToJSON,
} from './ReservationPaymentMethodType';
import type { ReservationQueueInformationType } from './ReservationQueueInformationType';
import {
    ReservationQueueInformationTypeFromJSON,
    ReservationQueueInformationTypeFromJSONTyped,
    ReservationQueueInformationTypeToJSON,
} from './ReservationQueueInformationType';
import type { ReservationTurndownInfoType } from './ReservationTurndownInfoType';
import {
    ReservationTurndownInfoTypeFromJSON,
    ReservationTurndownInfoTypeFromJSONTyped,
    ReservationTurndownInfoTypeToJSON,
} from './ReservationTurndownInfoType';
import type { SearchMatchType } from './SearchMatchType';
import {
    SearchMatchTypeFromJSON,
    SearchMatchTypeFromJSONTyped,
    SearchMatchTypeToJSON,
} from './SearchMatchType';
import type { SourceOfSaleType } from './SourceOfSaleType';
import {
    SourceOfSaleTypeFromJSON,
    SourceOfSaleTypeFromJSONTyped,
    SourceOfSaleTypeToJSON,
} from './SourceOfSaleType';
import type { StayInfoType } from './StayInfoType';
import {
    StayInfoTypeFromJSON,
    StayInfoTypeFromJSONTyped,
    StayInfoTypeToJSON,
} from './StayInfoType';
import type { TaxTypeType } from './TaxTypeType';
import {
    TaxTypeTypeFromJSON,
    TaxTypeTypeFromJSONTyped,
    TaxTypeTypeToJSON,
} from './TaxTypeType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';
import type { WaitlistResType } from './WaitlistResType';
import {
    WaitlistResTypeFromJSON,
    WaitlistResTypeFromJSONTyped,
    WaitlistResTypeToJSON,
} from './WaitlistResType';

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
export function instanceOfReservationInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationInfoTypeFromJSON(json: any): ReservationInfoType {
    return ReservationInfoTypeFromJSONTyped(json, false);
}

export function ReservationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'externalReferences': !exists(json, 'externalReferences') ? undefined : ((json['externalReferences'] as Array<any>).map(ExternalReferenceTypeFromJSON)),
        'roomStay': !exists(json, 'roomStay') ? undefined : StayInfoTypeFromJSON(json['roomStay']),
        'reservationGuest': !exists(json, 'reservationGuest') ? undefined : ResGuestInfoTypeFromJSON(json['reservationGuest']),
        'sharedGuests': !exists(json, 'sharedGuests') ? undefined : ((json['sharedGuests'] as Array<any>).map(ResSharedGuestInfoTypeFromJSON)),
        'attachedProfiles': !exists(json, 'attachedProfiles') ? undefined : ((json['attachedProfiles'] as Array<any>).map(ResAttachedProfileTypeFromJSON)),
        'reservationPaymentMethod': !exists(json, 'reservationPaymentMethod') ? undefined : ReservationPaymentMethodTypeFromJSON(json['reservationPaymentMethod']),
        'reservationFolioWindows': !exists(json, 'reservationFolioWindows') ? undefined : ((json['reservationFolioWindows'] as Array<any>).map(ReservationFolioWindowTypeFromJSON)),
        'specials': !exists(json, 'specials') ? undefined : json['specials'],
        'lastPrivacyPromptDate': !exists(json, 'lastPrivacyPromptDate') ? undefined : json['lastPrivacyPromptDate'],
        'displayColor': !exists(json, 'displayColor') ? undefined : json['displayColor'],
        'reservationIndicators': !exists(json, 'reservationIndicators') ? undefined : ((json['reservationIndicators'] as Array<any>).map(IndicatorTypeFromJSON)),
        'roomStatus': !exists(json, 'roomStatus') ? undefined : HousekeepingRoomStatusTypeFromJSON(json['roomStatus']),
        'searchMatches': !exists(json, 'searchMatches') ? undefined : ((json['searchMatches'] as Array<any>).map(SearchMatchTypeFromJSON)),
        'sourceOfSale': !exists(json, 'sourceOfSale') ? undefined : SourceOfSaleTypeFromJSON(json['sourceOfSale']),
        'waitlist': !exists(json, 'waitlist') ? undefined : WaitlistResTypeFromJSON(json['waitlist']),
        'queue': !exists(json, 'queue') ? undefined : ReservationQueueInformationTypeFromJSON(json['queue']),
        'housekeeping': !exists(json, 'housekeeping') ? undefined : ResHousekeepingTypeFromJSON(json['housekeeping']),
        'cashiering': !exists(json, 'cashiering') ? undefined : ResCashieringTypeFromJSON(json['cashiering']),
        'taxType': !exists(json, 'taxType') ? undefined : TaxTypeTypeFromJSON(json['taxType']),
        'deposit': !exists(json, 'deposit') ? undefined : ReservationDepositTypeFromJSON(json['deposit']),
        'allowedActions': !exists(json, 'allowedActions') ? undefined : ((json['allowedActions'] as Array<any>).map(ReservationAllowedActionTypeFromJSON)),
        'revenuesAndBalances': !exists(json, 'revenuesAndBalances') ? undefined : ResRevenueBalanceTypeFromJSON(json['revenuesAndBalances']),
        'hotelInterfaceStatusList': !exists(json, 'hotelInterfaceStatusList') ? undefined : ((json['hotelInterfaceStatusList'] as Array<any>).map(ReservationInterfaceStatusTypeFromJSON)),
        'guestPreferredCurrency': !exists(json, 'guestPreferredCurrency') ? undefined : json['guestPreferredCurrency'],
        'turndownInfo': !exists(json, 'turndownInfo') ? undefined : ReservationTurndownInfoTypeFromJSON(json['turndownInfo']),
        'mobileNotifications': !exists(json, 'mobileNotifications') ? undefined : ResMobileNotificationsTypeFromJSON(json['mobileNotifications']),
        'reservationCommunication': !exists(json, 'reservationCommunication') ? undefined : ResCommunicationTypeFromJSON(json['reservationCommunication']),
        'advanceCheckIn': !exists(json, 'advanceCheckIn') ? undefined : AdvanceCheckInTypeFromJSON(json['advanceCheckIn']),
        'welcomeOffer': !exists(json, 'welcomeOffer') ? undefined : json['welcomeOffer'],
        'cancellationInfo': !exists(json, 'cancellationInfo') ? undefined : ReservationInfoTypeCancellationInfoFromJSON(json['cancellationInfo']),
        'keyCount': !exists(json, 'keyCount') ? undefined : json['keyCount'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelName': !exists(json, 'hotelName') ? undefined : json['hotelName'],
        'expectedServiceTime': !exists(json, 'expectedServiceTime') ? undefined : json['expectedServiceTime'],
        'roomStayReservation': !exists(json, 'roomStayReservation') ? undefined : json['roomStayReservation'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
        'reservationStatus': !exists(json, 'reservationStatus') ? undefined : PMSResStatusTypeFromJSON(json['reservationStatus']),
        'computedReservationStatus': !exists(json, 'computedReservationStatus') ? undefined : PMSResStatusTypeFromJSON(json['computedReservationStatus']),
        'walkInIndicator': !exists(json, 'walkInIndicator') ? undefined : json['walkInIndicator'],
        'accessRestriction': !exists(json, 'accessRestriction') ? undefined : ResAccessRestrictionTypeFromJSON(json['accessRestriction']),
        'commissionPayoutTo': !exists(json, 'commissionPayoutTo') ? undefined : CommissionPayoutToTypeFromJSON(json['commissionPayoutTo']),
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : json['paymentMethod'],
        'preRegistered': !exists(json, 'preRegistered') ? undefined : json['preRegistered'],
        'openFolio': !exists(json, 'openFolio') ? undefined : json['openFolio'],
        'allowMobileCheckout': !exists(json, 'allowMobileCheckout') ? undefined : json['allowMobileCheckout'],
        'allowMobileViewFolio': !exists(json, 'allowMobileViewFolio') ? undefined : json['allowMobileViewFolio'],
        'optedForCommunication': !exists(json, 'optedForCommunication') ? undefined : json['optedForCommunication'],
    };
}

export function ReservationInfoTypeToJSON(value?: ReservationInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'externalReferences': value.externalReferences === undefined ? undefined : ((value.externalReferences as Array<any>).map(ExternalReferenceTypeToJSON)),
        'roomStay': StayInfoTypeToJSON(value.roomStay),
        'reservationGuest': ResGuestInfoTypeToJSON(value.reservationGuest),
        'sharedGuests': value.sharedGuests === undefined ? undefined : ((value.sharedGuests as Array<any>).map(ResSharedGuestInfoTypeToJSON)),
        'attachedProfiles': value.attachedProfiles === undefined ? undefined : ((value.attachedProfiles as Array<any>).map(ResAttachedProfileTypeToJSON)),
        'reservationPaymentMethod': ReservationPaymentMethodTypeToJSON(value.reservationPaymentMethod),
        'reservationFolioWindows': value.reservationFolioWindows === undefined ? undefined : ((value.reservationFolioWindows as Array<any>).map(ReservationFolioWindowTypeToJSON)),
        'specials': value.specials,
        'lastPrivacyPromptDate': value.lastPrivacyPromptDate,
        'displayColor': value.displayColor,
        'reservationIndicators': value.reservationIndicators === undefined ? undefined : ((value.reservationIndicators as Array<any>).map(IndicatorTypeToJSON)),
        'roomStatus': HousekeepingRoomStatusTypeToJSON(value.roomStatus),
        'searchMatches': value.searchMatches === undefined ? undefined : ((value.searchMatches as Array<any>).map(SearchMatchTypeToJSON)),
        'sourceOfSale': SourceOfSaleTypeToJSON(value.sourceOfSale),
        'waitlist': WaitlistResTypeToJSON(value.waitlist),
        'queue': ReservationQueueInformationTypeToJSON(value.queue),
        'housekeeping': ResHousekeepingTypeToJSON(value.housekeeping),
        'cashiering': ResCashieringTypeToJSON(value.cashiering),
        'taxType': TaxTypeTypeToJSON(value.taxType),
        'deposit': ReservationDepositTypeToJSON(value.deposit),
        'allowedActions': value.allowedActions === undefined ? undefined : ((value.allowedActions as Array<any>).map(ReservationAllowedActionTypeToJSON)),
        'revenuesAndBalances': ResRevenueBalanceTypeToJSON(value.revenuesAndBalances),
        'hotelInterfaceStatusList': value.hotelInterfaceStatusList === undefined ? undefined : ((value.hotelInterfaceStatusList as Array<any>).map(ReservationInterfaceStatusTypeToJSON)),
        'guestPreferredCurrency': value.guestPreferredCurrency,
        'turndownInfo': ReservationTurndownInfoTypeToJSON(value.turndownInfo),
        'mobileNotifications': ResMobileNotificationsTypeToJSON(value.mobileNotifications),
        'reservationCommunication': ResCommunicationTypeToJSON(value.reservationCommunication),
        'advanceCheckIn': AdvanceCheckInTypeToJSON(value.advanceCheckIn),
        'welcomeOffer': value.welcomeOffer,
        'cancellationInfo': ReservationInfoTypeCancellationInfoToJSON(value.cancellationInfo),
        'keyCount': value.keyCount,
        'hotelId': value.hotelId,
        'hotelName': value.hotelName,
        'expectedServiceTime': value.expectedServiceTime,
        'roomStayReservation': value.roomStayReservation,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastModifierId': value.lastModifierId,
        'purgeDate': value.purgeDate,
        'reservationStatus': PMSResStatusTypeToJSON(value.reservationStatus),
        'computedReservationStatus': PMSResStatusTypeToJSON(value.computedReservationStatus),
        'walkInIndicator': value.walkInIndicator,
        'accessRestriction': ResAccessRestrictionTypeToJSON(value.accessRestriction),
        'commissionPayoutTo': CommissionPayoutToTypeToJSON(value.commissionPayoutTo),
        'paymentMethod': value.paymentMethod,
        'preRegistered': value.preRegistered,
        'openFolio': value.openFolio,
        'allowMobileCheckout': value.allowMobileCheckout,
        'allowMobileViewFolio': value.allowMobileViewFolio,
        'optedForCommunication': value.optedForCommunication,
    };
}
