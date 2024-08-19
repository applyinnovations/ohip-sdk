"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationInfoTypeToJSON = exports.ReservationInfoTypeFromJSONTyped = exports.ReservationInfoTypeFromJSON = exports.instanceOfReservationInfoType = void 0;
const runtime_1 = require("../runtime");
const AdvanceCheckInType_1 = require("./AdvanceCheckInType");
const CommissionPayoutToType_1 = require("./CommissionPayoutToType");
const ExternalReferenceType_1 = require("./ExternalReferenceType");
const HousekeepingRoomStatusType_1 = require("./HousekeepingRoomStatusType");
const IndicatorType_1 = require("./IndicatorType");
const PMSResStatusType_1 = require("./PMSResStatusType");
const ResAccessRestrictionType_1 = require("./ResAccessRestrictionType");
const ResAttachedProfileType_1 = require("./ResAttachedProfileType");
const ResCashieringType_1 = require("./ResCashieringType");
const ResCommunicationType_1 = require("./ResCommunicationType");
const ResGuestInfoType_1 = require("./ResGuestInfoType");
const ResHousekeepingType_1 = require("./ResHousekeepingType");
const ResMobileNotificationsType_1 = require("./ResMobileNotificationsType");
const ResRevenueBalanceType_1 = require("./ResRevenueBalanceType");
const ResSharedGuestInfoType_1 = require("./ResSharedGuestInfoType");
const ReservationAllowedActionType_1 = require("./ReservationAllowedActionType");
const ReservationDepositType_1 = require("./ReservationDepositType");
const ReservationFolioWindowType_1 = require("./ReservationFolioWindowType");
const ReservationInfoTypeCancellationInfo_1 = require("./ReservationInfoTypeCancellationInfo");
const ReservationInterfaceStatusType_1 = require("./ReservationInterfaceStatusType");
const ReservationPaymentMethodType_1 = require("./ReservationPaymentMethodType");
const ReservationQueueInformationType_1 = require("./ReservationQueueInformationType");
const ReservationTurndownInfoType_1 = require("./ReservationTurndownInfoType");
const SearchMatchType_1 = require("./SearchMatchType");
const SourceOfSaleType_1 = require("./SourceOfSaleType");
const StayInfoType_1 = require("./StayInfoType");
const TaxTypeType_1 = require("./TaxTypeType");
const UniqueIDType_1 = require("./UniqueIDType");
const WaitlistResType_1 = require("./WaitlistResType");
/**
 * Check if a given object implements the ReservationInfoType interface.
 */
function instanceOfReservationInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationInfoType = instanceOfReservationInfoType;
function ReservationInfoTypeFromJSON(json) {
    return ReservationInfoTypeFromJSONTyped(json, false);
}
exports.ReservationInfoTypeFromJSON = ReservationInfoTypeFromJSON;
function ReservationInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessRestriction': !(0, runtime_1.exists)(json, 'accessRestriction') ? undefined : (0, ResAccessRestrictionType_1.ResAccessRestrictionTypeFromJSON)(json['accessRestriction']),
        'advanceCheckIn': !(0, runtime_1.exists)(json, 'advanceCheckIn') ? undefined : (0, AdvanceCheckInType_1.AdvanceCheckInTypeFromJSON)(json['advanceCheckIn']),
        'allowMobileCheckout': !(0, runtime_1.exists)(json, 'allowMobileCheckout') ? undefined : json['allowMobileCheckout'],
        'allowMobileViewFolio': !(0, runtime_1.exists)(json, 'allowMobileViewFolio') ? undefined : json['allowMobileViewFolio'],
        'allowedActions': !(0, runtime_1.exists)(json, 'allowedActions') ? undefined : (json['allowedActions'].map(ReservationAllowedActionType_1.ReservationAllowedActionTypeFromJSON)),
        'attachedProfiles': !(0, runtime_1.exists)(json, 'attachedProfiles') ? undefined : (json['attachedProfiles'].map(ResAttachedProfileType_1.ResAttachedProfileTypeFromJSON)),
        'cancellationInfo': !(0, runtime_1.exists)(json, 'cancellationInfo') ? undefined : (0, ReservationInfoTypeCancellationInfo_1.ReservationInfoTypeCancellationInfoFromJSON)(json['cancellationInfo']),
        'cashiering': !(0, runtime_1.exists)(json, 'cashiering') ? undefined : (0, ResCashieringType_1.ResCashieringTypeFromJSON)(json['cashiering']),
        'commissionPayoutTo': !(0, runtime_1.exists)(json, 'commissionPayoutTo') ? undefined : (0, CommissionPayoutToType_1.CommissionPayoutToTypeFromJSON)(json['commissionPayoutTo']),
        'computedReservationStatus': !(0, runtime_1.exists)(json, 'computedReservationStatus') ? undefined : (0, PMSResStatusType_1.PMSResStatusTypeFromJSON)(json['computedReservationStatus']),
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'deposit': !(0, runtime_1.exists)(json, 'deposit') ? undefined : (0, ReservationDepositType_1.ReservationDepositTypeFromJSON)(json['deposit']),
        'displayColor': !(0, runtime_1.exists)(json, 'displayColor') ? undefined : json['displayColor'],
        'expectedServiceTime': !(0, runtime_1.exists)(json, 'expectedServiceTime') ? undefined : json['expectedServiceTime'],
        'externalReferences': !(0, runtime_1.exists)(json, 'externalReferences') ? undefined : (json['externalReferences'].map(ExternalReferenceType_1.ExternalReferenceTypeFromJSON)),
        'guestPreferredCurrency': !(0, runtime_1.exists)(json, 'guestPreferredCurrency') ? undefined : json['guestPreferredCurrency'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelInterfaceStatusList': !(0, runtime_1.exists)(json, 'hotelInterfaceStatusList') ? undefined : (json['hotelInterfaceStatusList'].map(ReservationInterfaceStatusType_1.ReservationInterfaceStatusTypeFromJSON)),
        'hotelName': !(0, runtime_1.exists)(json, 'hotelName') ? undefined : json['hotelName'],
        'housekeeping': !(0, runtime_1.exists)(json, 'housekeeping') ? undefined : (0, ResHousekeepingType_1.ResHousekeepingTypeFromJSON)(json['housekeeping']),
        'housekeepingRoomStatus': !(0, runtime_1.exists)(json, 'housekeepingRoomStatus') ? undefined : (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeFromJSON)(json['housekeepingRoomStatus']),
        'keyCount': !(0, runtime_1.exists)(json, 'keyCount') ? undefined : json['keyCount'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastPrivacyPromptDate': !(0, runtime_1.exists)(json, 'lastPrivacyPromptDate') ? undefined : json['lastPrivacyPromptDate'],
        'mobileNotifications': !(0, runtime_1.exists)(json, 'mobileNotifications') ? undefined : (0, ResMobileNotificationsType_1.ResMobileNotificationsTypeFromJSON)(json['mobileNotifications']),
        'openFolio': !(0, runtime_1.exists)(json, 'openFolio') ? undefined : json['openFolio'],
        'optedForCommunication': !(0, runtime_1.exists)(json, 'optedForCommunication') ? undefined : json['optedForCommunication'],
        'paymentMethod': !(0, runtime_1.exists)(json, 'paymentMethod') ? undefined : json['paymentMethod'],
        'preRegistered': !(0, runtime_1.exists)(json, 'preRegistered') ? undefined : json['preRegistered'],
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : json['purgeDate'],
        'queue': !(0, runtime_1.exists)(json, 'queue') ? undefined : (0, ReservationQueueInformationType_1.ReservationQueueInformationTypeFromJSON)(json['queue']),
        'reservationCommunication': !(0, runtime_1.exists)(json, 'reservationCommunication') ? undefined : (0, ResCommunicationType_1.ResCommunicationTypeFromJSON)(json['reservationCommunication']),
        'reservationFolioWindows': !(0, runtime_1.exists)(json, 'reservationFolioWindows') ? undefined : (json['reservationFolioWindows'].map(ReservationFolioWindowType_1.ReservationFolioWindowTypeFromJSON)),
        'reservationGuest': !(0, runtime_1.exists)(json, 'reservationGuest') ? undefined : (0, ResGuestInfoType_1.ResGuestInfoTypeFromJSON)(json['reservationGuest']),
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (json['reservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'reservationIndicators': !(0, runtime_1.exists)(json, 'reservationIndicators') ? undefined : (json['reservationIndicators'].map(IndicatorType_1.IndicatorTypeFromJSON)),
        'reservationPaymentMethod': !(0, runtime_1.exists)(json, 'reservationPaymentMethod') ? undefined : (0, ReservationPaymentMethodType_1.ReservationPaymentMethodTypeFromJSON)(json['reservationPaymentMethod']),
        'reservationStatus': !(0, runtime_1.exists)(json, 'reservationStatus') ? undefined : (0, PMSResStatusType_1.PMSResStatusTypeFromJSON)(json['reservationStatus']),
        'revenuesAndBalances': !(0, runtime_1.exists)(json, 'revenuesAndBalances') ? undefined : (0, ResRevenueBalanceType_1.ResRevenueBalanceTypeFromJSON)(json['revenuesAndBalances']),
        'roomStay': !(0, runtime_1.exists)(json, 'roomStay') ? undefined : (0, StayInfoType_1.StayInfoTypeFromJSON)(json['roomStay']),
        'roomStayReservation': !(0, runtime_1.exists)(json, 'roomStayReservation') ? undefined : json['roomStayReservation'],
        'searchMatches': !(0, runtime_1.exists)(json, 'searchMatches') ? undefined : (json['searchMatches'].map(SearchMatchType_1.SearchMatchTypeFromJSON)),
        'sharedGuests': !(0, runtime_1.exists)(json, 'sharedGuests') ? undefined : (json['sharedGuests'].map(ResSharedGuestInfoType_1.ResSharedGuestInfoTypeFromJSON)),
        'sourceOfSale': !(0, runtime_1.exists)(json, 'sourceOfSale') ? undefined : (0, SourceOfSaleType_1.SourceOfSaleTypeFromJSON)(json['sourceOfSale']),
        'specials': !(0, runtime_1.exists)(json, 'specials') ? undefined : json['specials'],
        'taxType': !(0, runtime_1.exists)(json, 'taxType') ? undefined : (0, TaxTypeType_1.TaxTypeTypeFromJSON)(json['taxType']),
        'turndownInfo': !(0, runtime_1.exists)(json, 'turndownInfo') ? undefined : (0, ReservationTurndownInfoType_1.ReservationTurndownInfoTypeFromJSON)(json['turndownInfo']),
        'waitlist': !(0, runtime_1.exists)(json, 'waitlist') ? undefined : (0, WaitlistResType_1.WaitlistResTypeFromJSON)(json['waitlist']),
        'walkInIndicator': !(0, runtime_1.exists)(json, 'walkInIndicator') ? undefined : json['walkInIndicator'],
        'welcomeOffer': !(0, runtime_1.exists)(json, 'welcomeOffer') ? undefined : json['welcomeOffer'],
    };
}
exports.ReservationInfoTypeFromJSONTyped = ReservationInfoTypeFromJSONTyped;
function ReservationInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessRestriction': (0, ResAccessRestrictionType_1.ResAccessRestrictionTypeToJSON)(value.accessRestriction),
        'advanceCheckIn': (0, AdvanceCheckInType_1.AdvanceCheckInTypeToJSON)(value.advanceCheckIn),
        'allowMobileCheckout': value.allowMobileCheckout,
        'allowMobileViewFolio': value.allowMobileViewFolio,
        'allowedActions': value.allowedActions === undefined ? undefined : (value.allowedActions.map(ReservationAllowedActionType_1.ReservationAllowedActionTypeToJSON)),
        'attachedProfiles': value.attachedProfiles === undefined ? undefined : (value.attachedProfiles.map(ResAttachedProfileType_1.ResAttachedProfileTypeToJSON)),
        'cancellationInfo': (0, ReservationInfoTypeCancellationInfo_1.ReservationInfoTypeCancellationInfoToJSON)(value.cancellationInfo),
        'cashiering': (0, ResCashieringType_1.ResCashieringTypeToJSON)(value.cashiering),
        'commissionPayoutTo': (0, CommissionPayoutToType_1.CommissionPayoutToTypeToJSON)(value.commissionPayoutTo),
        'computedReservationStatus': (0, PMSResStatusType_1.PMSResStatusTypeToJSON)(value.computedReservationStatus),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'deposit': (0, ReservationDepositType_1.ReservationDepositTypeToJSON)(value.deposit),
        'displayColor': value.displayColor,
        'expectedServiceTime': value.expectedServiceTime,
        'externalReferences': value.externalReferences === undefined ? undefined : (value.externalReferences.map(ExternalReferenceType_1.ExternalReferenceTypeToJSON)),
        'guestPreferredCurrency': value.guestPreferredCurrency,
        'hotelId': value.hotelId,
        'hotelInterfaceStatusList': value.hotelInterfaceStatusList === undefined ? undefined : (value.hotelInterfaceStatusList.map(ReservationInterfaceStatusType_1.ReservationInterfaceStatusTypeToJSON)),
        'hotelName': value.hotelName,
        'housekeeping': (0, ResHousekeepingType_1.ResHousekeepingTypeToJSON)(value.housekeeping),
        'housekeepingRoomStatus': (0, HousekeepingRoomStatusType_1.HousekeepingRoomStatusTypeToJSON)(value.housekeepingRoomStatus),
        'keyCount': value.keyCount,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastPrivacyPromptDate': value.lastPrivacyPromptDate,
        'mobileNotifications': (0, ResMobileNotificationsType_1.ResMobileNotificationsTypeToJSON)(value.mobileNotifications),
        'openFolio': value.openFolio,
        'optedForCommunication': value.optedForCommunication,
        'paymentMethod': value.paymentMethod,
        'preRegistered': value.preRegistered,
        'purgeDate': value.purgeDate,
        'queue': (0, ReservationQueueInformationType_1.ReservationQueueInformationTypeToJSON)(value.queue),
        'reservationCommunication': (0, ResCommunicationType_1.ResCommunicationTypeToJSON)(value.reservationCommunication),
        'reservationFolioWindows': value.reservationFolioWindows === undefined ? undefined : (value.reservationFolioWindows.map(ReservationFolioWindowType_1.ReservationFolioWindowTypeToJSON)),
        'reservationGuest': (0, ResGuestInfoType_1.ResGuestInfoTypeToJSON)(value.reservationGuest),
        'reservationIdList': value.reservationIdList === undefined ? undefined : (value.reservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'reservationIndicators': value.reservationIndicators === undefined ? undefined : (value.reservationIndicators.map(IndicatorType_1.IndicatorTypeToJSON)),
        'reservationPaymentMethod': (0, ReservationPaymentMethodType_1.ReservationPaymentMethodTypeToJSON)(value.reservationPaymentMethod),
        'reservationStatus': (0, PMSResStatusType_1.PMSResStatusTypeToJSON)(value.reservationStatus),
        'revenuesAndBalances': (0, ResRevenueBalanceType_1.ResRevenueBalanceTypeToJSON)(value.revenuesAndBalances),
        'roomStay': (0, StayInfoType_1.StayInfoTypeToJSON)(value.roomStay),
        'roomStayReservation': value.roomStayReservation,
        'searchMatches': value.searchMatches === undefined ? undefined : (value.searchMatches.map(SearchMatchType_1.SearchMatchTypeToJSON)),
        'sharedGuests': value.sharedGuests === undefined ? undefined : (value.sharedGuests.map(ResSharedGuestInfoType_1.ResSharedGuestInfoTypeToJSON)),
        'sourceOfSale': (0, SourceOfSaleType_1.SourceOfSaleTypeToJSON)(value.sourceOfSale),
        'specials': value.specials,
        'taxType': (0, TaxTypeType_1.TaxTypeTypeToJSON)(value.taxType),
        'turndownInfo': (0, ReservationTurndownInfoType_1.ReservationTurndownInfoTypeToJSON)(value.turndownInfo),
        'waitlist': (0, WaitlistResType_1.WaitlistResTypeToJSON)(value.waitlist),
        'walkInIndicator': value.walkInIndicator,
        'welcomeOffer': value.welcomeOffer,
    };
}
exports.ReservationInfoTypeToJSON = ReservationInfoTypeToJSON;
