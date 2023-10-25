/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { CancelReservationTypeCancellationInfo } from './CancelReservationTypeCancellationInfo';
import {
    CancelReservationTypeCancellationInfoFromJSON,
    CancelReservationTypeCancellationInfoFromJSONTyped,
    CancelReservationTypeCancellationInfoToJSON,
} from './CancelReservationTypeCancellationInfo';
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
import type { FiscalInfoType } from './FiscalInfoType';
import {
    FiscalInfoTypeFromJSON,
    FiscalInfoTypeFromJSONTyped,
    FiscalInfoTypeToJSON,
} from './FiscalInfoType';
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
import type { ReservationCommissionInfoType } from './ReservationCommissionInfoType';
import {
    ReservationCommissionInfoTypeFromJSON,
    ReservationCommissionInfoTypeFromJSONTyped,
    ReservationCommissionInfoTypeToJSON,
} from './ReservationCommissionInfoType';
import type { ReservationDepositType } from './ReservationDepositType';
import {
    ReservationDepositTypeFromJSON,
    ReservationDepositTypeFromJSONTyped,
    ReservationDepositTypeToJSON,
} from './ReservationDepositType';
import type { ReservationDisplayColorInfoType } from './ReservationDisplayColorInfoType';
import {
    ReservationDisplayColorInfoTypeFromJSON,
    ReservationDisplayColorInfoTypeFromJSONTyped,
    ReservationDisplayColorInfoTypeToJSON,
} from './ReservationDisplayColorInfoType';
import type { ReservationFolioWindowType } from './ReservationFolioWindowType';
import {
    ReservationFolioWindowTypeFromJSON,
    ReservationFolioWindowTypeFromJSONTyped,
    ReservationFolioWindowTypeToJSON,
} from './ReservationFolioWindowType';
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
     * Allowed action.
     * @type {Array<ReservationAllowedActionType>}
     * @memberof ReservationInfoType
     */
    allowedActions?: Array<ReservationAllowedActionType>;
    /**
     * 
     * @type {Array<ResAttachedProfileType>}
     * @memberof ReservationInfoType
     */
    attachedProfiles?: Array<ResAttachedProfileType>;
    /**
     * 
     * @type {CancelReservationTypeCancellationInfo}
     * @memberof ReservationInfoType
     */
    cancellationInfo?: CancelReservationTypeCancellationInfo;
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
     * @type {ReservationCommissionInfoType}
     * @memberof ReservationInfoType
     */
    commissionsInfo?: ReservationCommissionInfoType;
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
     * @type {ReservationDisplayColorInfoType}
     * @memberof ReservationInfoType
     */
    displayColorDetails?: ReservationDisplayColorInfoType;
    /**
     * 
     * @type {string}
     * @memberof ReservationInfoType
     */
    expectedServiceTime?: string;
    /**
     * This type contains unique information of external reference.
     * @type {Array<ExternalReferenceType>}
     * @memberof ReservationInfoType
     */
    externalReferences?: Array<ExternalReferenceType>;
    /**
     * 
     * @type {FiscalInfoType}
     * @memberof ReservationInfoType
     */
    fiscalInfo?: FiscalInfoType;
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
     * Collection of reservation folio windows.
     * @type {Array<ReservationFolioWindowType>}
     * @memberof ReservationInfoType
     */
    reservationFolioWindows?: Array<ReservationFolioWindowType>;
    /**
     * 
     * @type {ResGuestInfoType}
     * @memberof ReservationInfoType
     */
    reservationGuest?: ResGuestInfoType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ReservationInfoType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * Collection of lamp indicators.
     * @type {Array<IndicatorType>}
     * @memberof ReservationInfoType
     */
    reservationIndicators?: Array<IndicatorType>;
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
     * Set of reservation preferences which belongs to the Room Features.
     * @type {string}
     * @memberof ReservationInfoType
     */
    roomFeatures?: string;
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
     * List of Generic Name-Value-Pair Parameters used for super search matches.
     * @type {Array<SearchMatchType>}
     * @memberof ReservationInfoType
     */
    searchMatches?: Array<SearchMatchType>;
    /**
     * Collection of shared guest reservations.
     * @type {Array<ResSharedGuestInfoType>}
     * @memberof ReservationInfoType
     */
    sharedGuests?: Array<ResSharedGuestInfoType>;
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
        
        'accessRestriction': !exists(json, 'accessRestriction') ? undefined : ResAccessRestrictionTypeFromJSON(json['accessRestriction']),
        'advanceCheckIn': !exists(json, 'advanceCheckIn') ? undefined : AdvanceCheckInTypeFromJSON(json['advanceCheckIn']),
        'allowMobileCheckout': !exists(json, 'allowMobileCheckout') ? undefined : json['allowMobileCheckout'],
        'allowMobileViewFolio': !exists(json, 'allowMobileViewFolio') ? undefined : json['allowMobileViewFolio'],
        'allowedActions': !exists(json, 'allowedActions') ? undefined : ((json['allowedActions'] as Array<any>).map(ReservationAllowedActionTypeFromJSON)),
        'attachedProfiles': !exists(json, 'attachedProfiles') ? undefined : ((json['attachedProfiles'] as Array<any>).map(ResAttachedProfileTypeFromJSON)),
        'cancellationInfo': !exists(json, 'cancellationInfo') ? undefined : CancelReservationTypeCancellationInfoFromJSON(json['cancellationInfo']),
        'cashiering': !exists(json, 'cashiering') ? undefined : ResCashieringTypeFromJSON(json['cashiering']),
        'commissionPayoutTo': !exists(json, 'commissionPayoutTo') ? undefined : CommissionPayoutToTypeFromJSON(json['commissionPayoutTo']),
        'commissionsInfo': !exists(json, 'commissionsInfo') ? undefined : ReservationCommissionInfoTypeFromJSON(json['commissionsInfo']),
        'computedReservationStatus': !exists(json, 'computedReservationStatus') ? undefined : PMSResStatusTypeFromJSON(json['computedReservationStatus']),
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'deposit': !exists(json, 'deposit') ? undefined : ReservationDepositTypeFromJSON(json['deposit']),
        'displayColor': !exists(json, 'displayColor') ? undefined : json['displayColor'],
        'displayColorDetails': !exists(json, 'displayColorDetails') ? undefined : ReservationDisplayColorInfoTypeFromJSON(json['displayColorDetails']),
        'expectedServiceTime': !exists(json, 'expectedServiceTime') ? undefined : json['expectedServiceTime'],
        'externalReferences': !exists(json, 'externalReferences') ? undefined : ((json['externalReferences'] as Array<any>).map(ExternalReferenceTypeFromJSON)),
        'fiscalInfo': !exists(json, 'fiscalInfo') ? undefined : FiscalInfoTypeFromJSON(json['fiscalInfo']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelName': !exists(json, 'hotelName') ? undefined : json['hotelName'],
        'housekeeping': !exists(json, 'housekeeping') ? undefined : ResHousekeepingTypeFromJSON(json['housekeeping']),
        'keyCount': !exists(json, 'keyCount') ? undefined : json['keyCount'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'mobileNotifications': !exists(json, 'mobileNotifications') ? undefined : ResMobileNotificationsTypeFromJSON(json['mobileNotifications']),
        'openFolio': !exists(json, 'openFolio') ? undefined : json['openFolio'],
        'optedForCommunication': !exists(json, 'optedForCommunication') ? undefined : json['optedForCommunication'],
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : json['paymentMethod'],
        'preRegistered': !exists(json, 'preRegistered') ? undefined : json['preRegistered'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'queue': !exists(json, 'queue') ? undefined : ReservationQueueInformationTypeFromJSON(json['queue']),
        'reservationCommunication': !exists(json, 'reservationCommunication') ? undefined : ResCommunicationTypeFromJSON(json['reservationCommunication']),
        'reservationFolioWindows': !exists(json, 'reservationFolioWindows') ? undefined : ((json['reservationFolioWindows'] as Array<any>).map(ReservationFolioWindowTypeFromJSON)),
        'reservationGuest': !exists(json, 'reservationGuest') ? undefined : ResGuestInfoTypeFromJSON(json['reservationGuest']),
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'reservationIndicators': !exists(json, 'reservationIndicators') ? undefined : ((json['reservationIndicators'] as Array<any>).map(IndicatorTypeFromJSON)),
        'reservationPaymentMethod': !exists(json, 'reservationPaymentMethod') ? undefined : ReservationPaymentMethodTypeFromJSON(json['reservationPaymentMethod']),
        'reservationStatus': !exists(json, 'reservationStatus') ? undefined : PMSResStatusTypeFromJSON(json['reservationStatus']),
        'revenuesAndBalances': !exists(json, 'revenuesAndBalances') ? undefined : ResRevenueBalanceTypeFromJSON(json['revenuesAndBalances']),
        'roomFeatures': !exists(json, 'roomFeatures') ? undefined : json['roomFeatures'],
        'roomStatus': !exists(json, 'roomStatus') ? undefined : HousekeepingRoomStatusTypeFromJSON(json['roomStatus']),
        'roomStay': !exists(json, 'roomStay') ? undefined : StayInfoTypeFromJSON(json['roomStay']),
        'roomStayReservation': !exists(json, 'roomStayReservation') ? undefined : json['roomStayReservation'],
        'searchMatches': !exists(json, 'searchMatches') ? undefined : ((json['searchMatches'] as Array<any>).map(SearchMatchTypeFromJSON)),
        'sharedGuests': !exists(json, 'sharedGuests') ? undefined : ((json['sharedGuests'] as Array<any>).map(ResSharedGuestInfoTypeFromJSON)),
        'sourceOfSale': !exists(json, 'sourceOfSale') ? undefined : SourceOfSaleTypeFromJSON(json['sourceOfSale']),
        'specials': !exists(json, 'specials') ? undefined : json['specials'],
        'taxType': !exists(json, 'taxType') ? undefined : TaxTypeTypeFromJSON(json['taxType']),
        'waitlist': !exists(json, 'waitlist') ? undefined : WaitlistResTypeFromJSON(json['waitlist']),
        'walkInIndicator': !exists(json, 'walkInIndicator') ? undefined : json['walkInIndicator'],
        'welcomeOffer': !exists(json, 'welcomeOffer') ? undefined : json['welcomeOffer'],
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
        
        'accessRestriction': ResAccessRestrictionTypeToJSON(value.accessRestriction),
        'advanceCheckIn': AdvanceCheckInTypeToJSON(value.advanceCheckIn),
        'allowMobileCheckout': value.allowMobileCheckout,
        'allowMobileViewFolio': value.allowMobileViewFolio,
        'allowedActions': value.allowedActions === undefined ? undefined : ((value.allowedActions as Array<any>).map(ReservationAllowedActionTypeToJSON)),
        'attachedProfiles': value.attachedProfiles === undefined ? undefined : ((value.attachedProfiles as Array<any>).map(ResAttachedProfileTypeToJSON)),
        'cancellationInfo': CancelReservationTypeCancellationInfoToJSON(value.cancellationInfo),
        'cashiering': ResCashieringTypeToJSON(value.cashiering),
        'commissionPayoutTo': CommissionPayoutToTypeToJSON(value.commissionPayoutTo),
        'commissionsInfo': ReservationCommissionInfoTypeToJSON(value.commissionsInfo),
        'computedReservationStatus': PMSResStatusTypeToJSON(value.computedReservationStatus),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'deposit': ReservationDepositTypeToJSON(value.deposit),
        'displayColor': value.displayColor,
        'displayColorDetails': ReservationDisplayColorInfoTypeToJSON(value.displayColorDetails),
        'expectedServiceTime': value.expectedServiceTime,
        'externalReferences': value.externalReferences === undefined ? undefined : ((value.externalReferences as Array<any>).map(ExternalReferenceTypeToJSON)),
        'fiscalInfo': FiscalInfoTypeToJSON(value.fiscalInfo),
        'hotelId': value.hotelId,
        'hotelName': value.hotelName,
        'housekeeping': ResHousekeepingTypeToJSON(value.housekeeping),
        'keyCount': value.keyCount,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'mobileNotifications': ResMobileNotificationsTypeToJSON(value.mobileNotifications),
        'openFolio': value.openFolio,
        'optedForCommunication': value.optedForCommunication,
        'paymentMethod': value.paymentMethod,
        'preRegistered': value.preRegistered,
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0,10)),
        'queue': ReservationQueueInformationTypeToJSON(value.queue),
        'reservationCommunication': ResCommunicationTypeToJSON(value.reservationCommunication),
        'reservationFolioWindows': value.reservationFolioWindows === undefined ? undefined : ((value.reservationFolioWindows as Array<any>).map(ReservationFolioWindowTypeToJSON)),
        'reservationGuest': ResGuestInfoTypeToJSON(value.reservationGuest),
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'reservationIndicators': value.reservationIndicators === undefined ? undefined : ((value.reservationIndicators as Array<any>).map(IndicatorTypeToJSON)),
        'reservationPaymentMethod': ReservationPaymentMethodTypeToJSON(value.reservationPaymentMethod),
        'reservationStatus': PMSResStatusTypeToJSON(value.reservationStatus),
        'revenuesAndBalances': ResRevenueBalanceTypeToJSON(value.revenuesAndBalances),
        'roomFeatures': value.roomFeatures,
        'roomStatus': HousekeepingRoomStatusTypeToJSON(value.roomStatus),
        'roomStay': StayInfoTypeToJSON(value.roomStay),
        'roomStayReservation': value.roomStayReservation,
        'searchMatches': value.searchMatches === undefined ? undefined : ((value.searchMatches as Array<any>).map(SearchMatchTypeToJSON)),
        'sharedGuests': value.sharedGuests === undefined ? undefined : ((value.sharedGuests as Array<any>).map(ResSharedGuestInfoTypeToJSON)),
        'sourceOfSale': SourceOfSaleTypeToJSON(value.sourceOfSale),
        'specials': value.specials,
        'taxType': TaxTypeTypeToJSON(value.taxType),
        'waitlist': WaitlistResTypeToJSON(value.waitlist),
        'walkInIndicator': value.walkInIndicator,
        'welcomeOffer': value.welcomeOffer,
    };
}

