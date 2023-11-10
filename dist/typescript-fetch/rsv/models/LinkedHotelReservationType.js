"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedHotelReservationTypeToJSON = exports.LinkedHotelReservationTypeFromJSONTyped = exports.LinkedHotelReservationTypeFromJSON = exports.instanceOfLinkedHotelReservationType = void 0;
const runtime_1 = require("../runtime");
const ActivityLookUpList_1 = require("./ActivityLookUpList");
const AdvanceCheckInType_1 = require("./AdvanceCheckInType");
const AlertsType_1 = require("./AlertsType");
const AttachmentsType_1 = require("./AttachmentsType");
const AwardsType_1 = require("./AwardsType");
const CallHistoryType_1 = require("./CallHistoryType");
const CateringResInfoType_1 = require("./CateringResInfoType");
const CommentInfoType_1 = require("./CommentInfoType");
const CompAuthorizerInfoType_1 = require("./CompAuthorizerInfoType");
const ConfirmationsType_1 = require("./ConfirmationsType");
const CustomChargeExemptionsType_1 = require("./CustomChargeExemptionsType");
const ECouponsType_1 = require("./ECouponsType");
const ExternalReferencesType_1 = require("./ExternalReferencesType");
const FixedChargesType_1 = require("./FixedChargesType");
const FoliosShortInfoType_1 = require("./FoliosShortInfoType");
const GuestMessagesType_1 = require("./GuestMessagesType");
const HotelReservationInstructionTypeCancellation_1 = require("./HotelReservationInstructionTypeCancellation");
const HotelReservationInstructionTypeReservationProfiles_1 = require("./HotelReservationInstructionTypeReservationProfiles");
const HotelReservationInstructionTypeTransactionDiversions_1 = require("./HotelReservationInstructionTypeTransactionDiversions");
const HotelReservationTracesType_1 = require("./HotelReservationTracesType");
const HotelReservationsType_1 = require("./HotelReservationsType");
const IndicatorsType_1 = require("./IndicatorsType");
const LinkedReservationType_1 = require("./LinkedReservationType");
const LinkedReservationsInfoType_1 = require("./LinkedReservationsInfoType");
const MembershipType_1 = require("./MembershipType");
const NameValueDetailType_1 = require("./NameValueDetailType");
const OverrideInstructionsType_1 = require("./OverrideInstructionsType");
const PMSResStatusType_1 = require("./PMSResStatusType");
const PreferenceTypeType_1 = require("./PreferenceTypeType");
const PrepaidCardsType_1 = require("./PrepaidCardsType");
const ResAccessRestrictionType_1 = require("./ResAccessRestrictionType");
const ResCashieringType_1 = require("./ResCashieringType");
const ResCommunicationType_1 = require("./ResCommunicationType");
const ResGuestAdditionalInfoType_1 = require("./ResGuestAdditionalInfoType");
const ResGuestType_1 = require("./ResGuestType");
const ResHousekeepingType_1 = require("./ResHousekeepingType");
const ResInventoryItemsType_1 = require("./ResInventoryItemsType");
const ResSharedGuestListType_1 = require("./ResSharedGuestListType");
const ResStatClassificationType_1 = require("./ResStatClassificationType");
const ReservationAllowedActionsType_1 = require("./ReservationAllowedActionsType");
const ReservationECertificatesType_1 = require("./ReservationECertificatesType");
const ReservationIdList_1 = require("./ReservationIdList");
const ReservationLocatorsType_1 = require("./ReservationLocatorsType");
const ReservationMembershipType_1 = require("./ReservationMembershipType");
const ReservationPackageType_1 = require("./ReservationPackageType");
const ReservationPaymentMethodsType_1 = require("./ReservationPaymentMethodsType");
const ReservationPoliciesType_1 = require("./ReservationPoliciesType");
const ReservationQueueInformationType_1 = require("./ReservationQueueInformationType");
const RoomStayType_1 = require("./RoomStayType");
const RoutingInfoListType_1 = require("./RoutingInfoListType");
const ServiceRequests_1 = require("./ServiceRequests");
const SourceOfSaleType_1 = require("./SourceOfSaleType");
const TicketsType_1 = require("./TicketsType");
const TrackItItemsType_1 = require("./TrackItItemsType");
const UserDefinedFieldsType_1 = require("./UserDefinedFieldsType");
const WaitlistResType_1 = require("./WaitlistResType");
/**
 * Check if a given object implements the LinkedHotelReservationType interface.
 */
function instanceOfLinkedHotelReservationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfLinkedHotelReservationType = instanceOfLinkedHotelReservationType;
function LinkedHotelReservationTypeFromJSON(json) {
    return LinkedHotelReservationTypeFromJSONTyped(json, false);
}
exports.LinkedHotelReservationTypeFromJSON = LinkedHotelReservationTypeFromJSON;
function LinkedHotelReservationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessRestriction': !(0, runtime_1.exists)(json, 'accessRestriction') ? undefined : (0, ResAccessRestrictionType_1.ResAccessRestrictionTypeFromJSON)(json['accessRestriction']),
        'accessRestrictionMessage': !(0, runtime_1.exists)(json, 'accessRestrictionMessage') ? undefined : json['accessRestrictionMessage'],
        'additionalGuestInfo': !(0, runtime_1.exists)(json, 'additionalGuestInfo') ? undefined : (0, ResGuestAdditionalInfoType_1.ResGuestAdditionalInfoTypeFromJSON)(json['additionalGuestInfo']),
        'advanceCheckIn': !(0, runtime_1.exists)(json, 'advanceCheckIn') ? undefined : (0, AdvanceCheckInType_1.AdvanceCheckInTypeFromJSON)(json['advanceCheckIn']),
        'alerts': !(0, runtime_1.exists)(json, 'alerts') ? undefined : (0, AlertsType_1.AlertsTypeFromJSON)(json['alerts']),
        'allowAutoCheckin': !(0, runtime_1.exists)(json, 'allowAutoCheckin') ? undefined : json['allowAutoCheckin'],
        'allowMobileCheckout': !(0, runtime_1.exists)(json, 'allowMobileCheckout') ? undefined : json['allowMobileCheckout'],
        'allowMobileViewFolio': !(0, runtime_1.exists)(json, 'allowMobileViewFolio') ? undefined : json['allowMobileViewFolio'],
        'allowPreRegistration': !(0, runtime_1.exists)(json, 'allowPreRegistration') ? undefined : json['allowPreRegistration'],
        'allowedActions': !(0, runtime_1.exists)(json, 'allowedActions') ? undefined : (0, ReservationAllowedActionsType_1.ReservationAllowedActionsTypeFromJSON)(json['allowedActions']),
        'associatedReservations': !(0, runtime_1.exists)(json, 'associatedReservations') ? undefined : json['associatedReservations'],
        'attachments': !(0, runtime_1.exists)(json, 'attachments') ? undefined : (0, AttachmentsType_1.AttachmentsTypeFromJSON)(json['attachments']),
        'autoBorrowFromHouse': !(0, runtime_1.exists)(json, 'autoBorrowFromHouse') ? undefined : json['autoBorrowFromHouse'],
        'callHistory': !(0, runtime_1.exists)(json, 'callHistory') ? undefined : (0, CallHistoryType_1.CallHistoryTypeFromJSON)(json['callHistory']),
        'cancellation': !(0, runtime_1.exists)(json, 'cancellation') ? undefined : (0, HotelReservationInstructionTypeCancellation_1.HotelReservationInstructionTypeCancellationFromJSON)(json['cancellation']),
        'cashiering': !(0, runtime_1.exists)(json, 'cashiering') ? undefined : (0, ResCashieringType_1.ResCashieringTypeFromJSON)(json['cashiering']),
        'catering': !(0, runtime_1.exists)(json, 'catering') ? undefined : (0, CateringResInfoType_1.CateringResInfoTypeFromJSON)(json['catering']),
        'chargeCardNumber': !(0, runtime_1.exists)(json, 'chargeCardNumber') ? undefined : json['chargeCardNumber'],
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : (json['comments'].map(CommentInfoType_1.CommentInfoTypeFromJSON)),
        'compAuthorizer': !(0, runtime_1.exists)(json, 'compAuthorizer') ? undefined : (0, CompAuthorizerInfoType_1.CompAuthorizerInfoTypeFromJSON)(json['compAuthorizer']),
        'computedReservationStatus': !(0, runtime_1.exists)(json, 'computedReservationStatus') ? undefined : (0, PMSResStatusType_1.PMSResStatusTypeFromJSON)(json['computedReservationStatus']),
        'confirmationLetters': !(0, runtime_1.exists)(json, 'confirmationLetters') ? undefined : (0, ConfirmationsType_1.ConfirmationsTypeFromJSON)(json['confirmationLetters']),
        'createBusinessDate': !(0, runtime_1.exists)(json, 'createBusinessDate') ? undefined : (new Date(json['createBusinessDate'])),
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'customChargeExemptionDetails': !(0, runtime_1.exists)(json, 'customChargeExemptionDetails') ? undefined : (0, CustomChargeExemptionsType_1.CustomChargeExemptionsTypeFromJSON)(json['customChargeExemptionDetails']),
        'customNameValueDetail': !(0, runtime_1.exists)(json, 'customNameValueDetail') ? undefined : (0, NameValueDetailType_1.NameValueDetailTypeFromJSON)(json['customNameValueDetail']),
        'customReference': !(0, runtime_1.exists)(json, 'customReference') ? undefined : json['customReference'],
        'displayColor': !(0, runtime_1.exists)(json, 'displayColor') ? undefined : json['displayColor'],
        'eCertificates': !(0, runtime_1.exists)(json, 'eCertificates') ? undefined : (0, ReservationECertificatesType_1.ReservationECertificatesTypeFromJSON)(json['eCertificates']),
        'eCoupons': !(0, runtime_1.exists)(json, 'eCoupons') ? undefined : (0, ECouponsType_1.ECouponsTypeFromJSON)(json['eCoupons']),
        'extSystemSync': !(0, runtime_1.exists)(json, 'extSystemSync') ? undefined : json['extSystemSync'],
        'externalReferences': !(0, runtime_1.exists)(json, 'externalReferences') ? undefined : (0, ExternalReferencesType_1.ExternalReferencesTypeFromJSON)(json['externalReferences']),
        'fixedCharges': !(0, runtime_1.exists)(json, 'fixedCharges') ? undefined : (0, FixedChargesType_1.FixedChargesTypeFromJSON)(json['fixedCharges']),
        'folios': !(0, runtime_1.exists)(json, 'folios') ? undefined : (0, FoliosShortInfoType_1.FoliosShortInfoTypeFromJSON)(json['folios']),
        'guestComments': !(0, runtime_1.exists)(json, 'guestComments') ? undefined : (json['guestComments'].map(CommentInfoType_1.CommentInfoTypeFromJSON)),
        'guestMemberships': !(0, runtime_1.exists)(json, 'guestMemberships') ? undefined : (json['guestMemberships'].map(MembershipType_1.MembershipTypeFromJSON)),
        'guestMessages': !(0, runtime_1.exists)(json, 'guestMessages') ? undefined : (0, GuestMessagesType_1.GuestMessagesTypeFromJSON)(json['guestMessages']),
        'hasOpenFolio': !(0, runtime_1.exists)(json, 'hasOpenFolio') ? undefined : json['hasOpenFolio'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'housekeeping': !(0, runtime_1.exists)(json, 'housekeeping') ? undefined : (0, ResHousekeepingType_1.ResHousekeepingTypeFromJSON)(json['housekeeping']),
        'inventoryItems': !(0, runtime_1.exists)(json, 'inventoryItems') ? undefined : (0, ResInventoryItemsType_1.ResInventoryItemsTypeFromJSON)(json['inventoryItems']),
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'linkReservationType': !(0, runtime_1.exists)(json, 'linkReservationType') ? undefined : (0, LinkedReservationType_1.LinkedReservationTypeFromJSON)(json['linkReservationType']),
        'linkedReservation': !(0, runtime_1.exists)(json, 'linkedReservation') ? undefined : (0, LinkedReservationsInfoType_1.LinkedReservationsInfoTypeFromJSON)(json['linkedReservation']),
        'locators': !(0, runtime_1.exists)(json, 'locators') ? undefined : (0, ReservationLocatorsType_1.ReservationLocatorsTypeFromJSON)(json['locators']),
        'lockHandle': !(0, runtime_1.exists)(json, 'lockHandle') ? undefined : json['lockHandle'],
        'markAsRecentlyAccessed': !(0, runtime_1.exists)(json, 'markAsRecentlyAccessed') ? undefined : json['markAsRecentlyAccessed'],
        'optedForCommunication': !(0, runtime_1.exists)(json, 'optedForCommunication') ? undefined : json['optedForCommunication'],
        'overrideBlockRestriction': !(0, runtime_1.exists)(json, 'overrideBlockRestriction') ? undefined : json['overrideBlockRestriction'],
        'overrideExternalChecks': !(0, runtime_1.exists)(json, 'overrideExternalChecks') ? undefined : json['overrideExternalChecks'],
        'overrideInstructions': !(0, runtime_1.exists)(json, 'overrideInstructions') ? undefined : (0, OverrideInstructionsType_1.OverrideInstructionsTypeFromJSON)(json['overrideInstructions']),
        'overrideInventoryCheck': !(0, runtime_1.exists)(json, 'overrideInventoryCheck') ? undefined : json['overrideInventoryCheck'],
        'overrideOutOfServiceCheck': !(0, runtime_1.exists)(json, 'overrideOutOfServiceCheck') ? undefined : json['overrideOutOfServiceCheck'],
        'party': !(0, runtime_1.exists)(json, 'party') ? undefined : json['party'],
        'preRegistered': !(0, runtime_1.exists)(json, 'preRegistered') ? undefined : json['preRegistered'],
        'preferenceCollection': !(0, runtime_1.exists)(json, 'preferenceCollection') ? undefined : (json['preferenceCollection'].map(PreferenceTypeType_1.PreferenceTypeTypeFromJSON)),
        'prepaidCards': !(0, runtime_1.exists)(json, 'prepaidCards') ? undefined : (0, PrepaidCardsType_1.PrepaidCardsTypeFromJSON)(json['prepaidCards']),
        'primaryEnrollmentChain': !(0, runtime_1.exists)(json, 'primaryEnrollmentChain') ? undefined : json['primaryEnrollmentChain'],
        'primaryEnrollmentResort': !(0, runtime_1.exists)(json, 'primaryEnrollmentResort') ? undefined : json['primaryEnrollmentResort'],
        'printRate': !(0, runtime_1.exists)(json, 'printRate') ? undefined : json['printRate'],
        'profileAwards': !(0, runtime_1.exists)(json, 'profileAwards') ? undefined : (0, AwardsType_1.AwardsTypeFromJSON)(json['profileAwards']),
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'queue': !(0, runtime_1.exists)(json, 'queue') ? undefined : (0, ReservationQueueInformationType_1.ReservationQueueInformationTypeFromJSON)(json['queue']),
        'reinstateDate': !(0, runtime_1.exists)(json, 'reinstateDate') ? undefined : (new Date(json['reinstateDate'])),
        'reservationActivities': !(0, runtime_1.exists)(json, 'reservationActivities') ? undefined : (0, ActivityLookUpList_1.ActivityLookUpListFromJSON)(json['reservationActivities']),
        'reservationAwards': !(0, runtime_1.exists)(json, 'reservationAwards') ? undefined : (0, AwardsType_1.AwardsTypeFromJSON)(json['reservationAwards']),
        'reservationCommunication': !(0, runtime_1.exists)(json, 'reservationCommunication') ? undefined : (0, ResCommunicationType_1.ResCommunicationTypeFromJSON)(json['reservationCommunication']),
        'reservationGuests': !(0, runtime_1.exists)(json, 'reservationGuests') ? undefined : (json['reservationGuests'].map(ResGuestType_1.ResGuestTypeFromJSON)),
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (0, ReservationIdList_1.ReservationIdListFromJSON)(json['reservationIdList']),
        'reservationIndicators': !(0, runtime_1.exists)(json, 'reservationIndicators') ? undefined : (0, IndicatorsType_1.IndicatorsTypeFromJSON)(json['reservationIndicators']),
        'reservationMemberships': !(0, runtime_1.exists)(json, 'reservationMemberships') ? undefined : (json['reservationMemberships'].map(ReservationMembershipType_1.ReservationMembershipTypeFromJSON)),
        'reservationPackages': !(0, runtime_1.exists)(json, 'reservationPackages') ? undefined : (json['reservationPackages'].map(ReservationPackageType_1.ReservationPackageTypeFromJSON)),
        'reservationPaymentMethods': !(0, runtime_1.exists)(json, 'reservationPaymentMethods') ? undefined : (0, ReservationPaymentMethodsType_1.ReservationPaymentMethodsTypeFromJSON)(json['reservationPaymentMethods']),
        'reservationPolicies': !(0, runtime_1.exists)(json, 'reservationPolicies') ? undefined : (0, ReservationPoliciesType_1.ReservationPoliciesTypeFromJSON)(json['reservationPolicies']),
        'reservationProfiles': !(0, runtime_1.exists)(json, 'reservationProfiles') ? undefined : (0, HotelReservationInstructionTypeReservationProfiles_1.HotelReservationInstructionTypeReservationProfilesFromJSON)(json['reservationProfiles']),
        'reservationStatus': !(0, runtime_1.exists)(json, 'reservationStatus') ? undefined : (0, PMSResStatusType_1.PMSResStatusTypeFromJSON)(json['reservationStatus']),
        'roomStay': !(0, runtime_1.exists)(json, 'roomStay') ? undefined : (0, RoomStayType_1.RoomStayTypeFromJSON)(json['roomStay']),
        'roomStayReservation': !(0, runtime_1.exists)(json, 'roomStayReservation') ? undefined : json['roomStayReservation'],
        'routingInstructions': !(0, runtime_1.exists)(json, 'routingInstructions') ? undefined : (0, RoutingInfoListType_1.RoutingInfoListTypeFromJSON)(json['routingInstructions']),
        'scheduledActivities': !(0, runtime_1.exists)(json, 'scheduledActivities') ? undefined : (0, ActivityLookUpList_1.ActivityLookUpListFromJSON)(json['scheduledActivities']),
        'serviceRequests': !(0, runtime_1.exists)(json, 'serviceRequests') ? undefined : (0, ServiceRequests_1.ServiceRequestsFromJSON)(json['serviceRequests']),
        'sharedGuests': !(0, runtime_1.exists)(json, 'sharedGuests') ? undefined : (0, ResSharedGuestListType_1.ResSharedGuestListTypeFromJSON)(json['sharedGuests']),
        'shares': !(0, runtime_1.exists)(json, 'shares') ? undefined : (0, HotelReservationsType_1.HotelReservationsTypeFromJSON)(json['shares']),
        'sourceOfSale': !(0, runtime_1.exists)(json, 'sourceOfSale') ? undefined : (0, SourceOfSaleType_1.SourceOfSaleTypeFromJSON)(json['sourceOfSale']),
        'statisticalClassification': !(0, runtime_1.exists)(json, 'statisticalClassification') ? undefined : (0, ResStatClassificationType_1.ResStatClassificationTypeFromJSON)(json['statisticalClassification']),
        'tickets': !(0, runtime_1.exists)(json, 'tickets') ? undefined : (0, TicketsType_1.TicketsTypeFromJSON)(json['tickets']),
        'traces': !(0, runtime_1.exists)(json, 'traces') ? undefined : (0, HotelReservationTracesType_1.HotelReservationTracesTypeFromJSON)(json['traces']),
        'trackItItems': !(0, runtime_1.exists)(json, 'trackItItems') ? undefined : (0, TrackItItemsType_1.TrackItItemsTypeFromJSON)(json['trackItItems']),
        'transactionDiversions': !(0, runtime_1.exists)(json, 'transactionDiversions') ? undefined : (0, HotelReservationInstructionTypeTransactionDiversions_1.HotelReservationInstructionTypeTransactionDiversionsFromJSON)(json['transactionDiversions']),
        'upgradeEligible': !(0, runtime_1.exists)(json, 'upgradeEligible') ? undefined : json['upgradeEligible'],
        'userDefinedFields': !(0, runtime_1.exists)(json, 'userDefinedFields') ? undefined : (0, UserDefinedFieldsType_1.UserDefinedFieldsTypeFromJSON)(json['userDefinedFields']),
        'waitlist': !(0, runtime_1.exists)(json, 'waitlist') ? undefined : (0, WaitlistResType_1.WaitlistResTypeFromJSON)(json['waitlist']),
        'walkIn': !(0, runtime_1.exists)(json, 'walkIn') ? undefined : json['walkIn'],
        'webRegistrationCards': !(0, runtime_1.exists)(json, 'webRegistrationCards') ? undefined : (0, AttachmentsType_1.AttachmentsTypeFromJSON)(json['webRegistrationCards']),
    };
}
exports.LinkedHotelReservationTypeFromJSONTyped = LinkedHotelReservationTypeFromJSONTyped;
function LinkedHotelReservationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessRestriction': (0, ResAccessRestrictionType_1.ResAccessRestrictionTypeToJSON)(value.accessRestriction),
        'accessRestrictionMessage': value.accessRestrictionMessage,
        'additionalGuestInfo': (0, ResGuestAdditionalInfoType_1.ResGuestAdditionalInfoTypeToJSON)(value.additionalGuestInfo),
        'advanceCheckIn': (0, AdvanceCheckInType_1.AdvanceCheckInTypeToJSON)(value.advanceCheckIn),
        'alerts': (0, AlertsType_1.AlertsTypeToJSON)(value.alerts),
        'allowAutoCheckin': value.allowAutoCheckin,
        'allowMobileCheckout': value.allowMobileCheckout,
        'allowMobileViewFolio': value.allowMobileViewFolio,
        'allowPreRegistration': value.allowPreRegistration,
        'allowedActions': (0, ReservationAllowedActionsType_1.ReservationAllowedActionsTypeToJSON)(value.allowedActions),
        'associatedReservations': value.associatedReservations,
        'attachments': (0, AttachmentsType_1.AttachmentsTypeToJSON)(value.attachments),
        'autoBorrowFromHouse': value.autoBorrowFromHouse,
        'callHistory': (0, CallHistoryType_1.CallHistoryTypeToJSON)(value.callHistory),
        'cancellation': (0, HotelReservationInstructionTypeCancellation_1.HotelReservationInstructionTypeCancellationToJSON)(value.cancellation),
        'cashiering': (0, ResCashieringType_1.ResCashieringTypeToJSON)(value.cashiering),
        'catering': (0, CateringResInfoType_1.CateringResInfoTypeToJSON)(value.catering),
        'chargeCardNumber': value.chargeCardNumber,
        'comments': value.comments === undefined ? undefined : (value.comments.map(CommentInfoType_1.CommentInfoTypeToJSON)),
        'compAuthorizer': (0, CompAuthorizerInfoType_1.CompAuthorizerInfoTypeToJSON)(value.compAuthorizer),
        'computedReservationStatus': (0, PMSResStatusType_1.PMSResStatusTypeToJSON)(value.computedReservationStatus),
        'confirmationLetters': (0, ConfirmationsType_1.ConfirmationsTypeToJSON)(value.confirmationLetters),
        'createBusinessDate': value.createBusinessDate === undefined ? undefined : (value.createBusinessDate.toISOString().substr(0, 10)),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'customChargeExemptionDetails': (0, CustomChargeExemptionsType_1.CustomChargeExemptionsTypeToJSON)(value.customChargeExemptionDetails),
        'customNameValueDetail': (0, NameValueDetailType_1.NameValueDetailTypeToJSON)(value.customNameValueDetail),
        'customReference': value.customReference,
        'displayColor': value.displayColor,
        'eCertificates': (0, ReservationECertificatesType_1.ReservationECertificatesTypeToJSON)(value.eCertificates),
        'eCoupons': (0, ECouponsType_1.ECouponsTypeToJSON)(value.eCoupons),
        'extSystemSync': value.extSystemSync,
        'externalReferences': (0, ExternalReferencesType_1.ExternalReferencesTypeToJSON)(value.externalReferences),
        'fixedCharges': (0, FixedChargesType_1.FixedChargesTypeToJSON)(value.fixedCharges),
        'folios': (0, FoliosShortInfoType_1.FoliosShortInfoTypeToJSON)(value.folios),
        'guestComments': value.guestComments === undefined ? undefined : (value.guestComments.map(CommentInfoType_1.CommentInfoTypeToJSON)),
        'guestMemberships': value.guestMemberships === undefined ? undefined : (value.guestMemberships.map(MembershipType_1.MembershipTypeToJSON)),
        'guestMessages': (0, GuestMessagesType_1.GuestMessagesTypeToJSON)(value.guestMessages),
        'hasOpenFolio': value.hasOpenFolio,
        'hotelId': value.hotelId,
        'housekeeping': (0, ResHousekeepingType_1.ResHousekeepingTypeToJSON)(value.housekeeping),
        'inventoryItems': (0, ResInventoryItemsType_1.ResInventoryItemsTypeToJSON)(value.inventoryItems),
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'linkReservationType': (0, LinkedReservationType_1.LinkedReservationTypeToJSON)(value.linkReservationType),
        'linkedReservation': (0, LinkedReservationsInfoType_1.LinkedReservationsInfoTypeToJSON)(value.linkedReservation),
        'locators': (0, ReservationLocatorsType_1.ReservationLocatorsTypeToJSON)(value.locators),
        'lockHandle': value.lockHandle,
        'markAsRecentlyAccessed': value.markAsRecentlyAccessed,
        'optedForCommunication': value.optedForCommunication,
        'overrideBlockRestriction': value.overrideBlockRestriction,
        'overrideExternalChecks': value.overrideExternalChecks,
        'overrideInstructions': (0, OverrideInstructionsType_1.OverrideInstructionsTypeToJSON)(value.overrideInstructions),
        'overrideInventoryCheck': value.overrideInventoryCheck,
        'overrideOutOfServiceCheck': value.overrideOutOfServiceCheck,
        'party': value.party,
        'preRegistered': value.preRegistered,
        'preferenceCollection': value.preferenceCollection === undefined ? undefined : (value.preferenceCollection.map(PreferenceTypeType_1.PreferenceTypeTypeToJSON)),
        'prepaidCards': (0, PrepaidCardsType_1.PrepaidCardsTypeToJSON)(value.prepaidCards),
        'primaryEnrollmentChain': value.primaryEnrollmentChain,
        'primaryEnrollmentResort': value.primaryEnrollmentResort,
        'printRate': value.printRate,
        'profileAwards': (0, AwardsType_1.AwardsTypeToJSON)(value.profileAwards),
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0, 10)),
        'queue': (0, ReservationQueueInformationType_1.ReservationQueueInformationTypeToJSON)(value.queue),
        'reinstateDate': value.reinstateDate === undefined ? undefined : (value.reinstateDate.toISOString().substr(0, 10)),
        'reservationActivities': (0, ActivityLookUpList_1.ActivityLookUpListToJSON)(value.reservationActivities),
        'reservationAwards': (0, AwardsType_1.AwardsTypeToJSON)(value.reservationAwards),
        'reservationCommunication': (0, ResCommunicationType_1.ResCommunicationTypeToJSON)(value.reservationCommunication),
        'reservationGuests': value.reservationGuests === undefined ? undefined : (value.reservationGuests.map(ResGuestType_1.ResGuestTypeToJSON)),
        'reservationIdList': (0, ReservationIdList_1.ReservationIdListToJSON)(value.reservationIdList),
        'reservationIndicators': (0, IndicatorsType_1.IndicatorsTypeToJSON)(value.reservationIndicators),
        'reservationMemberships': value.reservationMemberships === undefined ? undefined : (value.reservationMemberships.map(ReservationMembershipType_1.ReservationMembershipTypeToJSON)),
        'reservationPackages': value.reservationPackages === undefined ? undefined : (value.reservationPackages.map(ReservationPackageType_1.ReservationPackageTypeToJSON)),
        'reservationPaymentMethods': (0, ReservationPaymentMethodsType_1.ReservationPaymentMethodsTypeToJSON)(value.reservationPaymentMethods),
        'reservationPolicies': (0, ReservationPoliciesType_1.ReservationPoliciesTypeToJSON)(value.reservationPolicies),
        'reservationProfiles': (0, HotelReservationInstructionTypeReservationProfiles_1.HotelReservationInstructionTypeReservationProfilesToJSON)(value.reservationProfiles),
        'reservationStatus': (0, PMSResStatusType_1.PMSResStatusTypeToJSON)(value.reservationStatus),
        'roomStay': (0, RoomStayType_1.RoomStayTypeToJSON)(value.roomStay),
        'roomStayReservation': value.roomStayReservation,
        'routingInstructions': (0, RoutingInfoListType_1.RoutingInfoListTypeToJSON)(value.routingInstructions),
        'scheduledActivities': (0, ActivityLookUpList_1.ActivityLookUpListToJSON)(value.scheduledActivities),
        'serviceRequests': (0, ServiceRequests_1.ServiceRequestsToJSON)(value.serviceRequests),
        'sharedGuests': (0, ResSharedGuestListType_1.ResSharedGuestListTypeToJSON)(value.sharedGuests),
        'shares': (0, HotelReservationsType_1.HotelReservationsTypeToJSON)(value.shares),
        'sourceOfSale': (0, SourceOfSaleType_1.SourceOfSaleTypeToJSON)(value.sourceOfSale),
        'statisticalClassification': (0, ResStatClassificationType_1.ResStatClassificationTypeToJSON)(value.statisticalClassification),
        'tickets': (0, TicketsType_1.TicketsTypeToJSON)(value.tickets),
        'traces': (0, HotelReservationTracesType_1.HotelReservationTracesTypeToJSON)(value.traces),
        'trackItItems': (0, TrackItItemsType_1.TrackItItemsTypeToJSON)(value.trackItItems),
        'transactionDiversions': (0, HotelReservationInstructionTypeTransactionDiversions_1.HotelReservationInstructionTypeTransactionDiversionsToJSON)(value.transactionDiversions),
        'upgradeEligible': value.upgradeEligible,
        'userDefinedFields': (0, UserDefinedFieldsType_1.UserDefinedFieldsTypeToJSON)(value.userDefinedFields),
        'waitlist': (0, WaitlistResType_1.WaitlistResTypeToJSON)(value.waitlist),
        'walkIn': value.walkIn,
        'webRegistrationCards': (0, AttachmentsType_1.AttachmentsTypeToJSON)(value.webRegistrationCards),
    };
}
exports.LinkedHotelReservationTypeToJSON = LinkedHotelReservationTypeToJSON;
