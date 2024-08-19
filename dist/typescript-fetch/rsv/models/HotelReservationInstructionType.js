"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelReservationInstructionTypeToJSON = exports.HotelReservationInstructionTypeFromJSONTyped = exports.HotelReservationInstructionTypeFromJSON = exports.instanceOfHotelReservationInstructionType = void 0;
const runtime_1 = require("../runtime");
const AdvanceCheckInType_1 = require("./AdvanceCheckInType");
const AlertType_1 = require("./AlertType");
const AttachmentType_1 = require("./AttachmentType");
const AwardType_1 = require("./AwardType");
const CallType_1 = require("./CallType");
const CateringResInfoType_1 = require("./CateringResInfoType");
const ChangeInstructionType_1 = require("./ChangeInstructionType");
const CommentInfoType_1 = require("./CommentInfoType");
const CompAuthorizerInfoType_1 = require("./CompAuthorizerInfoType");
const ConfirmationType_1 = require("./ConfirmationType");
const CustomChargeExemptionType_1 = require("./CustomChargeExemptionType");
const ECouponType_1 = require("./ECouponType");
const ExternalReferenceType_1 = require("./ExternalReferenceType");
const FetchActivityBookingsType_1 = require("./FetchActivityBookingsType");
const FixedChargeType_1 = require("./FixedChargeType");
const FolioShortInfoType_1 = require("./FolioShortInfoType");
const GuestMessageType_1 = require("./GuestMessageType");
const HotelReservationInstructionTypeCancellation_1 = require("./HotelReservationInstructionTypeCancellation");
const HotelReservationInstructionTypeReservationProfiles_1 = require("./HotelReservationInstructionTypeReservationProfiles");
const HotelReservationInstructionTypeResponseInstructions_1 = require("./HotelReservationInstructionTypeResponseInstructions");
const HotelReservationInstructionTypeTransactionDiversions_1 = require("./HotelReservationInstructionTypeTransactionDiversions");
const HotelReservationTraceType_1 = require("./HotelReservationTraceType");
const HotelReservationsType_1 = require("./HotelReservationsType");
const IndicatorType_1 = require("./IndicatorType");
const LinkedReservationsInfoType_1 = require("./LinkedReservationsInfoType");
const MembershipType_1 = require("./MembershipType");
const NameValueDetailType_1 = require("./NameValueDetailType");
const OverrideInstructionType_1 = require("./OverrideInstructionType");
const PMSResStatusType_1 = require("./PMSResStatusType");
const PreferenceTypeType_1 = require("./PreferenceTypeType");
const PrepaidCardType_1 = require("./PrepaidCardType");
const ResAccessRestrictionType_1 = require("./ResAccessRestrictionType");
const ResCashieringType_1 = require("./ResCashieringType");
const ResCommunicationType_1 = require("./ResCommunicationType");
const ResGuestAdditionalInfoType_1 = require("./ResGuestAdditionalInfoType");
const ResGuestType_1 = require("./ResGuestType");
const ResHousekeepingType_1 = require("./ResHousekeepingType");
const ResInventoryItemsType_1 = require("./ResInventoryItemsType");
const ResSharedGuestInfoType_1 = require("./ResSharedGuestInfoType");
const ResStatClassificationType_1 = require("./ResStatClassificationType");
const ReservationAllowedActionType_1 = require("./ReservationAllowedActionType");
const ReservationECertificateType_1 = require("./ReservationECertificateType");
const ReservationLocatorType_1 = require("./ReservationLocatorType");
const ReservationMembershipType_1 = require("./ReservationMembershipType");
const ReservationPackageType_1 = require("./ReservationPackageType");
const ReservationPaymentMethodType_1 = require("./ReservationPaymentMethodType");
const ReservationPoliciesType_1 = require("./ReservationPoliciesType");
const ReservationQueueInformationType_1 = require("./ReservationQueueInformationType");
const RoomStayType_1 = require("./RoomStayType");
const RoutingInfoType_1 = require("./RoutingInfoType");
const ServiceRequest_1 = require("./ServiceRequest");
const SourceOfSaleType_1 = require("./SourceOfSaleType");
const TicketType_1 = require("./TicketType");
const TrackItItemType_1 = require("./TrackItItemType");
const UniqueIDType_1 = require("./UniqueIDType");
const UserDefinedFieldsType_1 = require("./UserDefinedFieldsType");
const WaitlistResType_1 = require("./WaitlistResType");
/**
 * Check if a given object implements the HotelReservationInstructionType interface.
 */
function instanceOfHotelReservationInstructionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelReservationInstructionType = instanceOfHotelReservationInstructionType;
function HotelReservationInstructionTypeFromJSON(json) {
    return HotelReservationInstructionTypeFromJSONTyped(json, false);
}
exports.HotelReservationInstructionTypeFromJSON = HotelReservationInstructionTypeFromJSON;
function HotelReservationInstructionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessRestriction': !(0, runtime_1.exists)(json, 'accessRestriction') ? undefined : (0, ResAccessRestrictionType_1.ResAccessRestrictionTypeFromJSON)(json['accessRestriction']),
        'accessRestrictionMessage': !(0, runtime_1.exists)(json, 'accessRestrictionMessage') ? undefined : json['accessRestrictionMessage'],
        'additionalGuestInfo': !(0, runtime_1.exists)(json, 'additionalGuestInfo') ? undefined : (0, ResGuestAdditionalInfoType_1.ResGuestAdditionalInfoTypeFromJSON)(json['additionalGuestInfo']),
        'advanceCheckIn': !(0, runtime_1.exists)(json, 'advanceCheckIn') ? undefined : (0, AdvanceCheckInType_1.AdvanceCheckInTypeFromJSON)(json['advanceCheckIn']),
        'alerts': !(0, runtime_1.exists)(json, 'alerts') ? undefined : (json['alerts'].map(AlertType_1.AlertTypeFromJSON)),
        'allowAutoCheckin': !(0, runtime_1.exists)(json, 'allowAutoCheckin') ? undefined : json['allowAutoCheckin'],
        'allowMobileCheckout': !(0, runtime_1.exists)(json, 'allowMobileCheckout') ? undefined : json['allowMobileCheckout'],
        'allowMobileViewFolio': !(0, runtime_1.exists)(json, 'allowMobileViewFolio') ? undefined : json['allowMobileViewFolio'],
        'allowPreRegistration': !(0, runtime_1.exists)(json, 'allowPreRegistration') ? undefined : json['allowPreRegistration'],
        'allowedActions': !(0, runtime_1.exists)(json, 'allowedActions') ? undefined : (json['allowedActions'].map(ReservationAllowedActionType_1.ReservationAllowedActionTypeFromJSON)),
        'associatedReservations': !(0, runtime_1.exists)(json, 'associatedReservations') ? undefined : json['associatedReservations'],
        'attachments': !(0, runtime_1.exists)(json, 'attachments') ? undefined : (json['attachments'].map(AttachmentType_1.AttachmentTypeFromJSON)),
        'autoBorrowFromHouse': !(0, runtime_1.exists)(json, 'autoBorrowFromHouse') ? undefined : json['autoBorrowFromHouse'],
        'callHistory': !(0, runtime_1.exists)(json, 'callHistory') ? undefined : (json['callHistory'].map(CallType_1.CallTypeFromJSON)),
        'cancellation': !(0, runtime_1.exists)(json, 'cancellation') ? undefined : (0, HotelReservationInstructionTypeCancellation_1.HotelReservationInstructionTypeCancellationFromJSON)(json['cancellation']),
        'cashiering': !(0, runtime_1.exists)(json, 'cashiering') ? undefined : (0, ResCashieringType_1.ResCashieringTypeFromJSON)(json['cashiering']),
        'catering': !(0, runtime_1.exists)(json, 'catering') ? undefined : (0, CateringResInfoType_1.CateringResInfoTypeFromJSON)(json['catering']),
        'changeInstrunctions': !(0, runtime_1.exists)(json, 'changeInstrunctions') ? undefined : (0, ChangeInstructionType_1.ChangeInstructionTypeFromJSON)(json['changeInstrunctions']),
        'chargeCardNumber': !(0, runtime_1.exists)(json, 'chargeCardNumber') ? undefined : json['chargeCardNumber'],
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : (json['comments'].map(CommentInfoType_1.CommentInfoTypeFromJSON)),
        'compAuthorizer': !(0, runtime_1.exists)(json, 'compAuthorizer') ? undefined : (0, CompAuthorizerInfoType_1.CompAuthorizerInfoTypeFromJSON)(json['compAuthorizer']),
        'computedReservationStatus': !(0, runtime_1.exists)(json, 'computedReservationStatus') ? undefined : (0, PMSResStatusType_1.PMSResStatusTypeFromJSON)(json['computedReservationStatus']),
        'confirmationLetters': !(0, runtime_1.exists)(json, 'confirmationLetters') ? undefined : (json['confirmationLetters'].map(ConfirmationType_1.ConfirmationTypeFromJSON)),
        'createBusinessDate': !(0, runtime_1.exists)(json, 'createBusinessDate') ? undefined : json['createBusinessDate'],
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'customChargeExemptionDetails': !(0, runtime_1.exists)(json, 'customChargeExemptionDetails') ? undefined : (json['customChargeExemptionDetails'].map(CustomChargeExemptionType_1.CustomChargeExemptionTypeFromJSON)),
        'customNameValueDetail': !(0, runtime_1.exists)(json, 'customNameValueDetail') ? undefined : (0, NameValueDetailType_1.NameValueDetailTypeFromJSON)(json['customNameValueDetail']),
        'customReference': !(0, runtime_1.exists)(json, 'customReference') ? undefined : json['customReference'],
        'displayColor': !(0, runtime_1.exists)(json, 'displayColor') ? undefined : json['displayColor'],
        'eCertificates': !(0, runtime_1.exists)(json, 'eCertificates') ? undefined : (json['eCertificates'].map(ReservationECertificateType_1.ReservationECertificateTypeFromJSON)),
        'eCoupons': !(0, runtime_1.exists)(json, 'eCoupons') ? undefined : (json['eCoupons'].map(ECouponType_1.ECouponTypeFromJSON)),
        'extSystemSync': !(0, runtime_1.exists)(json, 'extSystemSync') ? undefined : json['extSystemSync'],
        'externalReferences': !(0, runtime_1.exists)(json, 'externalReferences') ? undefined : (json['externalReferences'].map(ExternalReferenceType_1.ExternalReferenceTypeFromJSON)),
        'fixedCharges': !(0, runtime_1.exists)(json, 'fixedCharges') ? undefined : (json['fixedCharges'].map(FixedChargeType_1.FixedChargeTypeFromJSON)),
        'folios': !(0, runtime_1.exists)(json, 'folios') ? undefined : (json['folios'].map(FolioShortInfoType_1.FolioShortInfoTypeFromJSON)),
        'guestComments': !(0, runtime_1.exists)(json, 'guestComments') ? undefined : (json['guestComments'].map(CommentInfoType_1.CommentInfoTypeFromJSON)),
        'guestMemberships': !(0, runtime_1.exists)(json, 'guestMemberships') ? undefined : (json['guestMemberships'].map(MembershipType_1.MembershipTypeFromJSON)),
        'guestMessages': !(0, runtime_1.exists)(json, 'guestMessages') ? undefined : (json['guestMessages'].map(GuestMessageType_1.GuestMessageTypeFromJSON)),
        'hasOpenFolio': !(0, runtime_1.exists)(json, 'hasOpenFolio') ? undefined : json['hasOpenFolio'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'housekeeping': !(0, runtime_1.exists)(json, 'housekeeping') ? undefined : (0, ResHousekeepingType_1.ResHousekeepingTypeFromJSON)(json['housekeeping']),
        'inventoryItems': !(0, runtime_1.exists)(json, 'inventoryItems') ? undefined : (0, ResInventoryItemsType_1.ResInventoryItemsTypeFromJSON)(json['inventoryItems']),
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'linkedReservation': !(0, runtime_1.exists)(json, 'linkedReservation') ? undefined : (0, LinkedReservationsInfoType_1.LinkedReservationsInfoTypeFromJSON)(json['linkedReservation']),
        'locators': !(0, runtime_1.exists)(json, 'locators') ? undefined : (json['locators'].map(ReservationLocatorType_1.ReservationLocatorTypeFromJSON)),
        'lockHandle': !(0, runtime_1.exists)(json, 'lockHandle') ? undefined : json['lockHandle'],
        'markAsRecentlyAccessed': !(0, runtime_1.exists)(json, 'markAsRecentlyAccessed') ? undefined : json['markAsRecentlyAccessed'],
        'optedForCommunication': !(0, runtime_1.exists)(json, 'optedForCommunication') ? undefined : json['optedForCommunication'],
        'overrideBlockRestriction': !(0, runtime_1.exists)(json, 'overrideBlockRestriction') ? undefined : json['overrideBlockRestriction'],
        'overrideExternalChecks': !(0, runtime_1.exists)(json, 'overrideExternalChecks') ? undefined : json['overrideExternalChecks'],
        'overrideInstructions': !(0, runtime_1.exists)(json, 'overrideInstructions') ? undefined : (json['overrideInstructions'].map(OverrideInstructionType_1.OverrideInstructionTypeFromJSON)),
        'overrideInventoryCheck': !(0, runtime_1.exists)(json, 'overrideInventoryCheck') ? undefined : json['overrideInventoryCheck'],
        'overrideOutOfServiceCheck': !(0, runtime_1.exists)(json, 'overrideOutOfServiceCheck') ? undefined : json['overrideOutOfServiceCheck'],
        'overrideRoomOwnership': !(0, runtime_1.exists)(json, 'overrideRoomOwnership') ? undefined : json['overrideRoomOwnership'],
        'overrideRotationRoom': !(0, runtime_1.exists)(json, 'overrideRotationRoom') ? undefined : json['overrideRotationRoom'],
        'party': !(0, runtime_1.exists)(json, 'party') ? undefined : json['party'],
        'preRegistered': !(0, runtime_1.exists)(json, 'preRegistered') ? undefined : json['preRegistered'],
        'preferenceCollection': !(0, runtime_1.exists)(json, 'preferenceCollection') ? undefined : (json['preferenceCollection'].map(PreferenceTypeType_1.PreferenceTypeTypeFromJSON)),
        'prepaidCards': !(0, runtime_1.exists)(json, 'prepaidCards') ? undefined : (json['prepaidCards'].map(PrepaidCardType_1.PrepaidCardTypeFromJSON)),
        'primaryEnrollmentChain': !(0, runtime_1.exists)(json, 'primaryEnrollmentChain') ? undefined : json['primaryEnrollmentChain'],
        'primaryEnrollmentResort': !(0, runtime_1.exists)(json, 'primaryEnrollmentResort') ? undefined : json['primaryEnrollmentResort'],
        'printRate': !(0, runtime_1.exists)(json, 'printRate') ? undefined : json['printRate'],
        'profileAwards': !(0, runtime_1.exists)(json, 'profileAwards') ? undefined : (json['profileAwards'].map(AwardType_1.AwardTypeFromJSON)),
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : json['purgeDate'],
        'queue': !(0, runtime_1.exists)(json, 'queue') ? undefined : (0, ReservationQueueInformationType_1.ReservationQueueInformationTypeFromJSON)(json['queue']),
        'reinstateDate': !(0, runtime_1.exists)(json, 'reinstateDate') ? undefined : json['reinstateDate'],
        'reservationActivities': !(0, runtime_1.exists)(json, 'reservationActivities') ? undefined : (json['reservationActivities'].map(FetchActivityBookingsType_1.FetchActivityBookingsTypeFromJSON)),
        'reservationAwards': !(0, runtime_1.exists)(json, 'reservationAwards') ? undefined : (json['reservationAwards'].map(AwardType_1.AwardTypeFromJSON)),
        'reservationCommunication': !(0, runtime_1.exists)(json, 'reservationCommunication') ? undefined : (0, ResCommunicationType_1.ResCommunicationTypeFromJSON)(json['reservationCommunication']),
        'reservationGuests': !(0, runtime_1.exists)(json, 'reservationGuests') ? undefined : (json['reservationGuests'].map(ResGuestType_1.ResGuestTypeFromJSON)),
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (json['reservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'reservationIndicators': !(0, runtime_1.exists)(json, 'reservationIndicators') ? undefined : (json['reservationIndicators'].map(IndicatorType_1.IndicatorTypeFromJSON)),
        'reservationMemberships': !(0, runtime_1.exists)(json, 'reservationMemberships') ? undefined : (json['reservationMemberships'].map(ReservationMembershipType_1.ReservationMembershipTypeFromJSON)),
        'reservationPackages': !(0, runtime_1.exists)(json, 'reservationPackages') ? undefined : (json['reservationPackages'].map(ReservationPackageType_1.ReservationPackageTypeFromJSON)),
        'reservationPaymentMethods': !(0, runtime_1.exists)(json, 'reservationPaymentMethods') ? undefined : (json['reservationPaymentMethods'].map(ReservationPaymentMethodType_1.ReservationPaymentMethodTypeFromJSON)),
        'reservationPolicies': !(0, runtime_1.exists)(json, 'reservationPolicies') ? undefined : (0, ReservationPoliciesType_1.ReservationPoliciesTypeFromJSON)(json['reservationPolicies']),
        'reservationProfiles': !(0, runtime_1.exists)(json, 'reservationProfiles') ? undefined : (0, HotelReservationInstructionTypeReservationProfiles_1.HotelReservationInstructionTypeReservationProfilesFromJSON)(json['reservationProfiles']),
        'reservationStatus': !(0, runtime_1.exists)(json, 'reservationStatus') ? undefined : (0, PMSResStatusType_1.PMSResStatusTypeFromJSON)(json['reservationStatus']),
        'responseInstructions': !(0, runtime_1.exists)(json, 'responseInstructions') ? undefined : (0, HotelReservationInstructionTypeResponseInstructions_1.HotelReservationInstructionTypeResponseInstructionsFromJSON)(json['responseInstructions']),
        'roomStay': !(0, runtime_1.exists)(json, 'roomStay') ? undefined : (0, RoomStayType_1.RoomStayTypeFromJSON)(json['roomStay']),
        'roomStayReservation': !(0, runtime_1.exists)(json, 'roomStayReservation') ? undefined : json['roomStayReservation'],
        'routingInstructions': !(0, runtime_1.exists)(json, 'routingInstructions') ? undefined : (json['routingInstructions'].map(RoutingInfoType_1.RoutingInfoTypeFromJSON)),
        'scheduledActivities': !(0, runtime_1.exists)(json, 'scheduledActivities') ? undefined : (json['scheduledActivities'].map(FetchActivityBookingsType_1.FetchActivityBookingsTypeFromJSON)),
        'serviceRequests': !(0, runtime_1.exists)(json, 'serviceRequests') ? undefined : (json['serviceRequests'].map(ServiceRequest_1.ServiceRequestFromJSON)),
        'sharedGuests': !(0, runtime_1.exists)(json, 'sharedGuests') ? undefined : (json['sharedGuests'].map(ResSharedGuestInfoType_1.ResSharedGuestInfoTypeFromJSON)),
        'shares': !(0, runtime_1.exists)(json, 'shares') ? undefined : (0, HotelReservationsType_1.HotelReservationsTypeFromJSON)(json['shares']),
        'sourceOfSale': !(0, runtime_1.exists)(json, 'sourceOfSale') ? undefined : (0, SourceOfSaleType_1.SourceOfSaleTypeFromJSON)(json['sourceOfSale']),
        'statisticalClassification': !(0, runtime_1.exists)(json, 'statisticalClassification') ? undefined : (0, ResStatClassificationType_1.ResStatClassificationTypeFromJSON)(json['statisticalClassification']),
        'tickets': !(0, runtime_1.exists)(json, 'tickets') ? undefined : (json['tickets'].map(TicketType_1.TicketTypeFromJSON)),
        'traces': !(0, runtime_1.exists)(json, 'traces') ? undefined : (json['traces'].map(HotelReservationTraceType_1.HotelReservationTraceTypeFromJSON)),
        'trackItItems': !(0, runtime_1.exists)(json, 'trackItItems') ? undefined : (json['trackItItems'].map(TrackItItemType_1.TrackItItemTypeFromJSON)),
        'transactionDiversions': !(0, runtime_1.exists)(json, 'transactionDiversions') ? undefined : (0, HotelReservationInstructionTypeTransactionDiversions_1.HotelReservationInstructionTypeTransactionDiversionsFromJSON)(json['transactionDiversions']),
        'upgradeEligible': !(0, runtime_1.exists)(json, 'upgradeEligible') ? undefined : json['upgradeEligible'],
        'userDefinedFields': !(0, runtime_1.exists)(json, 'userDefinedFields') ? undefined : (0, UserDefinedFieldsType_1.UserDefinedFieldsTypeFromJSON)(json['userDefinedFields']),
        'waitlist': !(0, runtime_1.exists)(json, 'waitlist') ? undefined : (0, WaitlistResType_1.WaitlistResTypeFromJSON)(json['waitlist']),
        'walkIn': !(0, runtime_1.exists)(json, 'walkIn') ? undefined : json['walkIn'],
        'webRegistrationCards': !(0, runtime_1.exists)(json, 'webRegistrationCards') ? undefined : (json['webRegistrationCards'].map(AttachmentType_1.AttachmentTypeFromJSON)),
    };
}
exports.HotelReservationInstructionTypeFromJSONTyped = HotelReservationInstructionTypeFromJSONTyped;
function HotelReservationInstructionTypeToJSON(value) {
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
        'alerts': value.alerts === undefined ? undefined : (value.alerts.map(AlertType_1.AlertTypeToJSON)),
        'allowAutoCheckin': value.allowAutoCheckin,
        'allowMobileCheckout': value.allowMobileCheckout,
        'allowMobileViewFolio': value.allowMobileViewFolio,
        'allowPreRegistration': value.allowPreRegistration,
        'allowedActions': value.allowedActions === undefined ? undefined : (value.allowedActions.map(ReservationAllowedActionType_1.ReservationAllowedActionTypeToJSON)),
        'associatedReservations': value.associatedReservations,
        'attachments': value.attachments === undefined ? undefined : (value.attachments.map(AttachmentType_1.AttachmentTypeToJSON)),
        'autoBorrowFromHouse': value.autoBorrowFromHouse,
        'callHistory': value.callHistory === undefined ? undefined : (value.callHistory.map(CallType_1.CallTypeToJSON)),
        'cancellation': (0, HotelReservationInstructionTypeCancellation_1.HotelReservationInstructionTypeCancellationToJSON)(value.cancellation),
        'cashiering': (0, ResCashieringType_1.ResCashieringTypeToJSON)(value.cashiering),
        'catering': (0, CateringResInfoType_1.CateringResInfoTypeToJSON)(value.catering),
        'changeInstrunctions': (0, ChangeInstructionType_1.ChangeInstructionTypeToJSON)(value.changeInstrunctions),
        'chargeCardNumber': value.chargeCardNumber,
        'comments': value.comments === undefined ? undefined : (value.comments.map(CommentInfoType_1.CommentInfoTypeToJSON)),
        'compAuthorizer': (0, CompAuthorizerInfoType_1.CompAuthorizerInfoTypeToJSON)(value.compAuthorizer),
        'computedReservationStatus': (0, PMSResStatusType_1.PMSResStatusTypeToJSON)(value.computedReservationStatus),
        'confirmationLetters': value.confirmationLetters === undefined ? undefined : (value.confirmationLetters.map(ConfirmationType_1.ConfirmationTypeToJSON)),
        'createBusinessDate': value.createBusinessDate,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'customChargeExemptionDetails': value.customChargeExemptionDetails === undefined ? undefined : (value.customChargeExemptionDetails.map(CustomChargeExemptionType_1.CustomChargeExemptionTypeToJSON)),
        'customNameValueDetail': (0, NameValueDetailType_1.NameValueDetailTypeToJSON)(value.customNameValueDetail),
        'customReference': value.customReference,
        'displayColor': value.displayColor,
        'eCertificates': value.eCertificates === undefined ? undefined : (value.eCertificates.map(ReservationECertificateType_1.ReservationECertificateTypeToJSON)),
        'eCoupons': value.eCoupons === undefined ? undefined : (value.eCoupons.map(ECouponType_1.ECouponTypeToJSON)),
        'extSystemSync': value.extSystemSync,
        'externalReferences': value.externalReferences === undefined ? undefined : (value.externalReferences.map(ExternalReferenceType_1.ExternalReferenceTypeToJSON)),
        'fixedCharges': value.fixedCharges === undefined ? undefined : (value.fixedCharges.map(FixedChargeType_1.FixedChargeTypeToJSON)),
        'folios': value.folios === undefined ? undefined : (value.folios.map(FolioShortInfoType_1.FolioShortInfoTypeToJSON)),
        'guestComments': value.guestComments === undefined ? undefined : (value.guestComments.map(CommentInfoType_1.CommentInfoTypeToJSON)),
        'guestMemberships': value.guestMemberships === undefined ? undefined : (value.guestMemberships.map(MembershipType_1.MembershipTypeToJSON)),
        'guestMessages': value.guestMessages === undefined ? undefined : (value.guestMessages.map(GuestMessageType_1.GuestMessageTypeToJSON)),
        'hasOpenFolio': value.hasOpenFolio,
        'hotelId': value.hotelId,
        'housekeeping': (0, ResHousekeepingType_1.ResHousekeepingTypeToJSON)(value.housekeeping),
        'inventoryItems': (0, ResInventoryItemsType_1.ResInventoryItemsTypeToJSON)(value.inventoryItems),
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'linkedReservation': (0, LinkedReservationsInfoType_1.LinkedReservationsInfoTypeToJSON)(value.linkedReservation),
        'locators': value.locators === undefined ? undefined : (value.locators.map(ReservationLocatorType_1.ReservationLocatorTypeToJSON)),
        'lockHandle': value.lockHandle,
        'markAsRecentlyAccessed': value.markAsRecentlyAccessed,
        'optedForCommunication': value.optedForCommunication,
        'overrideBlockRestriction': value.overrideBlockRestriction,
        'overrideExternalChecks': value.overrideExternalChecks,
        'overrideInstructions': value.overrideInstructions === undefined ? undefined : (value.overrideInstructions.map(OverrideInstructionType_1.OverrideInstructionTypeToJSON)),
        'overrideInventoryCheck': value.overrideInventoryCheck,
        'overrideOutOfServiceCheck': value.overrideOutOfServiceCheck,
        'overrideRoomOwnership': value.overrideRoomOwnership,
        'overrideRotationRoom': value.overrideRotationRoom,
        'party': value.party,
        'preRegistered': value.preRegistered,
        'preferenceCollection': value.preferenceCollection === undefined ? undefined : (value.preferenceCollection.map(PreferenceTypeType_1.PreferenceTypeTypeToJSON)),
        'prepaidCards': value.prepaidCards === undefined ? undefined : (value.prepaidCards.map(PrepaidCardType_1.PrepaidCardTypeToJSON)),
        'primaryEnrollmentChain': value.primaryEnrollmentChain,
        'primaryEnrollmentResort': value.primaryEnrollmentResort,
        'printRate': value.printRate,
        'profileAwards': value.profileAwards === undefined ? undefined : (value.profileAwards.map(AwardType_1.AwardTypeToJSON)),
        'purgeDate': value.purgeDate,
        'queue': (0, ReservationQueueInformationType_1.ReservationQueueInformationTypeToJSON)(value.queue),
        'reinstateDate': value.reinstateDate,
        'reservationActivities': value.reservationActivities === undefined ? undefined : (value.reservationActivities.map(FetchActivityBookingsType_1.FetchActivityBookingsTypeToJSON)),
        'reservationAwards': value.reservationAwards === undefined ? undefined : (value.reservationAwards.map(AwardType_1.AwardTypeToJSON)),
        'reservationCommunication': (0, ResCommunicationType_1.ResCommunicationTypeToJSON)(value.reservationCommunication),
        'reservationGuests': value.reservationGuests === undefined ? undefined : (value.reservationGuests.map(ResGuestType_1.ResGuestTypeToJSON)),
        'reservationIdList': value.reservationIdList === undefined ? undefined : (value.reservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'reservationIndicators': value.reservationIndicators === undefined ? undefined : (value.reservationIndicators.map(IndicatorType_1.IndicatorTypeToJSON)),
        'reservationMemberships': value.reservationMemberships === undefined ? undefined : (value.reservationMemberships.map(ReservationMembershipType_1.ReservationMembershipTypeToJSON)),
        'reservationPackages': value.reservationPackages === undefined ? undefined : (value.reservationPackages.map(ReservationPackageType_1.ReservationPackageTypeToJSON)),
        'reservationPaymentMethods': value.reservationPaymentMethods === undefined ? undefined : (value.reservationPaymentMethods.map(ReservationPaymentMethodType_1.ReservationPaymentMethodTypeToJSON)),
        'reservationPolicies': (0, ReservationPoliciesType_1.ReservationPoliciesTypeToJSON)(value.reservationPolicies),
        'reservationProfiles': (0, HotelReservationInstructionTypeReservationProfiles_1.HotelReservationInstructionTypeReservationProfilesToJSON)(value.reservationProfiles),
        'reservationStatus': (0, PMSResStatusType_1.PMSResStatusTypeToJSON)(value.reservationStatus),
        'responseInstructions': (0, HotelReservationInstructionTypeResponseInstructions_1.HotelReservationInstructionTypeResponseInstructionsToJSON)(value.responseInstructions),
        'roomStay': (0, RoomStayType_1.RoomStayTypeToJSON)(value.roomStay),
        'roomStayReservation': value.roomStayReservation,
        'routingInstructions': value.routingInstructions === undefined ? undefined : (value.routingInstructions.map(RoutingInfoType_1.RoutingInfoTypeToJSON)),
        'scheduledActivities': value.scheduledActivities === undefined ? undefined : (value.scheduledActivities.map(FetchActivityBookingsType_1.FetchActivityBookingsTypeToJSON)),
        'serviceRequests': value.serviceRequests === undefined ? undefined : (value.serviceRequests.map(ServiceRequest_1.ServiceRequestToJSON)),
        'sharedGuests': value.sharedGuests === undefined ? undefined : (value.sharedGuests.map(ResSharedGuestInfoType_1.ResSharedGuestInfoTypeToJSON)),
        'shares': (0, HotelReservationsType_1.HotelReservationsTypeToJSON)(value.shares),
        'sourceOfSale': (0, SourceOfSaleType_1.SourceOfSaleTypeToJSON)(value.sourceOfSale),
        'statisticalClassification': (0, ResStatClassificationType_1.ResStatClassificationTypeToJSON)(value.statisticalClassification),
        'tickets': value.tickets === undefined ? undefined : (value.tickets.map(TicketType_1.TicketTypeToJSON)),
        'traces': value.traces === undefined ? undefined : (value.traces.map(HotelReservationTraceType_1.HotelReservationTraceTypeToJSON)),
        'trackItItems': value.trackItItems === undefined ? undefined : (value.trackItItems.map(TrackItItemType_1.TrackItItemTypeToJSON)),
        'transactionDiversions': (0, HotelReservationInstructionTypeTransactionDiversions_1.HotelReservationInstructionTypeTransactionDiversionsToJSON)(value.transactionDiversions),
        'upgradeEligible': value.upgradeEligible,
        'userDefinedFields': (0, UserDefinedFieldsType_1.UserDefinedFieldsTypeToJSON)(value.userDefinedFields),
        'waitlist': (0, WaitlistResType_1.WaitlistResTypeToJSON)(value.waitlist),
        'walkIn': value.walkIn,
        'webRegistrationCards': value.webRegistrationCards === undefined ? undefined : (value.webRegistrationCards.map(AttachmentType_1.AttachmentTypeToJSON)),
    };
}
exports.HotelReservationInstructionTypeToJSON = HotelReservationInstructionTypeToJSON;
