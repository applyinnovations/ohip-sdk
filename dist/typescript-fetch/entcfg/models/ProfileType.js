"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileTypeToJSON = exports.ProfileTypeFromJSONTyped = exports.ProfileTypeFromJSON = exports.instanceOfProfileType = void 0;
const runtime_1 = require("../runtime");
const CompanyType_1 = require("./CompanyType");
const CustomerType_1 = require("./CustomerType");
const ECertificatesType_1 = require("./ECertificatesType");
const ImageSetType_1 = require("./ImageSetType");
const IndicatorsType_1 = require("./IndicatorsType");
const LastStayInfoType_1 = require("./LastStayInfoType");
const MailingActionsType_1 = require("./MailingActionsType");
const PrivacyInfoType_1 = require("./PrivacyInfoType");
const ProfileAccessType_1 = require("./ProfileAccessType");
const ProfileCashieringType_1 = require("./ProfileCashieringType");
const ProfileCommissionType_1 = require("./ProfileCommissionType");
const ProfileRestrictions_1 = require("./ProfileRestrictions");
const ProfileStatusType_1 = require("./ProfileStatusType");
const ProfileSubscriptionListType_1 = require("./ProfileSubscriptionListType");
const ProfileTaxInfoType_1 = require("./ProfileTaxInfoType");
const ProfileTypeAddresses_1 = require("./ProfileTypeAddresses");
const ProfileTypeComments_1 = require("./ProfileTypeComments");
const ProfileTypeEmails_1 = require("./ProfileTypeEmails");
const ProfileTypeGdsNegotiatedRates_1 = require("./ProfileTypeGdsNegotiatedRates");
const ProfileTypeKeywords_1 = require("./ProfileTypeKeywords");
const ProfileTypeNegotiatedRates_1 = require("./ProfileTypeNegotiatedRates");
const ProfileTypePreferenceCollection_1 = require("./ProfileTypePreferenceCollection");
const ProfileTypeProfileDeliveryMethods_1 = require("./ProfileTypeProfileDeliveryMethods");
const ProfileTypeProfileMemberships_1 = require("./ProfileTypeProfileMemberships");
const ProfileTypeRelationships_1 = require("./ProfileTypeRelationships");
const ProfileTypeRelationshipsSummary_1 = require("./ProfileTypeRelationshipsSummary");
const ProfileTypeTelephones_1 = require("./ProfileTypeTelephones");
const ProfileTypeType_1 = require("./ProfileTypeType");
const ProfileTypeURLs_1 = require("./ProfileTypeURLs");
const ReservationHistoryFutureInfoType_1 = require("./ReservationHistoryFutureInfoType");
const ReservationStayHistoryFutureInfoType_1 = require("./ReservationStayHistoryFutureInfoType");
const SalesInfoType_1 = require("./SalesInfoType");
const UserDefinedFieldsType_1 = require("./UserDefinedFieldsType");
const WebUserAccountsType_1 = require("./WebUserAccountsType");
/**
 * Check if a given object implements the ProfileType interface.
 */
function instanceOfProfileType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileType = instanceOfProfileType;
function ProfileTypeFromJSON(json) {
    return ProfileTypeFromJSONTyped(json, false);
}
exports.ProfileTypeFromJSON = ProfileTypeFromJSON;
function ProfileTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addresses': !(0, runtime_1.exists)(json, 'addresses') ? undefined : (0, ProfileTypeAddresses_1.ProfileTypeAddressesFromJSON)(json['addresses']),
        'businessSegments': !(0, runtime_1.exists)(json, 'businessSegments') ? undefined : json['businessSegments'],
        'cashiering': !(0, runtime_1.exists)(json, 'cashiering') ? undefined : (0, ProfileCashieringType_1.ProfileCashieringTypeFromJSON)(json['cashiering']),
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : (0, ProfileTypeComments_1.ProfileTypeCommentsFromJSON)(json['comments']),
        'commissionInfoList': !(0, runtime_1.exists)(json, 'commissionInfoList') ? undefined : (json['commissionInfoList'].map(ProfileCommissionType_1.ProfileCommissionTypeFromJSON)),
        'company': !(0, runtime_1.exists)(json, 'company') ? undefined : (0, CompanyType_1.CompanyTypeFromJSON)(json['company']),
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'customer': !(0, runtime_1.exists)(json, 'customer') ? undefined : (0, CustomerType_1.CustomerTypeFromJSON)(json['customer']),
        'eCertificates': !(0, runtime_1.exists)(json, 'eCertificates') ? undefined : (0, ECertificatesType_1.ECertificatesTypeFromJSON)(json['eCertificates']),
        'eligibleForFiscalFolio': !(0, runtime_1.exists)(json, 'eligibleForFiscalFolio') ? undefined : json['eligibleForFiscalFolio'],
        'emails': !(0, runtime_1.exists)(json, 'emails') ? undefined : (0, ProfileTypeEmails_1.ProfileTypeEmailsFromJSON)(json['emails']),
        'gdsNegotiatedRates': !(0, runtime_1.exists)(json, 'gdsNegotiatedRates') ? undefined : (0, ProfileTypeGdsNegotiatedRates_1.ProfileTypeGdsNegotiatedRatesFromJSON)(json['gdsNegotiatedRates']),
        'hasCommission': !(0, runtime_1.exists)(json, 'hasCommission') ? undefined : json['hasCommission'],
        'influenceCode': !(0, runtime_1.exists)(json, 'influenceCode') ? undefined : json['influenceCode'],
        'inheritedNegRates': !(0, runtime_1.exists)(json, 'inheritedNegRates') ? undefined : json['inheritedNegRates'],
        'keywords': !(0, runtime_1.exists)(json, 'keywords') ? undefined : (0, ProfileTypeKeywords_1.ProfileTypeKeywordsFromJSON)(json['keywords']),
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastStayInfo': !(0, runtime_1.exists)(json, 'lastStayInfo') ? undefined : (0, LastStayInfoType_1.LastStayInfoTypeFromJSON)(json['lastStayInfo']),
        'localizationGuestType': !(0, runtime_1.exists)(json, 'localizationGuestType') ? undefined : json['localizationGuestType'],
        'mailingActions': !(0, runtime_1.exists)(json, 'mailingActions') ? undefined : (0, MailingActionsType_1.MailingActionsTypeFromJSON)(json['mailingActions']),
        'markAsRecentlyAccessed': !(0, runtime_1.exists)(json, 'markAsRecentlyAccessed') ? undefined : json['markAsRecentlyAccessed'],
        'markForHistory': !(0, runtime_1.exists)(json, 'markForHistory') ? undefined : json['markForHistory'],
        'negotiatedRates': !(0, runtime_1.exists)(json, 'negotiatedRates') ? undefined : (0, ProfileTypeNegotiatedRates_1.ProfileTypeNegotiatedRatesFromJSON)(json['negotiatedRates']),
        'ownerCode': !(0, runtime_1.exists)(json, 'ownerCode') ? undefined : json['ownerCode'],
        'preferenceCollection': !(0, runtime_1.exists)(json, 'preferenceCollection') ? undefined : (0, ProfileTypePreferenceCollection_1.ProfileTypePreferenceCollectionFromJSON)(json['preferenceCollection']),
        'privacyInfo': !(0, runtime_1.exists)(json, 'privacyInfo') ? undefined : (0, PrivacyInfoType_1.PrivacyInfoTypeFromJSON)(json['privacyInfo']),
        'profileAccessType': !(0, runtime_1.exists)(json, 'profileAccessType') ? undefined : (0, ProfileAccessType_1.ProfileAccessTypeFromJSON)(json['profileAccessType']),
        'profileDeliveryMethods': !(0, runtime_1.exists)(json, 'profileDeliveryMethods') ? undefined : (0, ProfileTypeProfileDeliveryMethods_1.ProfileTypeProfileDeliveryMethodsFromJSON)(json['profileDeliveryMethods']),
        'profileImage': !(0, runtime_1.exists)(json, 'profileImage') ? undefined : (0, ImageSetType_1.ImageSetTypeFromJSON)(json['profileImage']),
        'profileIndicators': !(0, runtime_1.exists)(json, 'profileIndicators') ? undefined : (0, IndicatorsType_1.IndicatorsTypeFromJSON)(json['profileIndicators']),
        'profileMemberships': !(0, runtime_1.exists)(json, 'profileMemberships') ? undefined : (0, ProfileTypeProfileMemberships_1.ProfileTypeProfileMembershipsFromJSON)(json['profileMemberships']),
        'profileRestrictions': !(0, runtime_1.exists)(json, 'profileRestrictions') ? undefined : (0, ProfileRestrictions_1.ProfileRestrictionsFromJSON)(json['profileRestrictions']),
        'profileType': !(0, runtime_1.exists)(json, 'profileType') ? undefined : (0, ProfileTypeType_1.ProfileTypeTypeFromJSON)(json['profileType']),
        'protectedBy': !(0, runtime_1.exists)(json, 'protectedBy') ? undefined : json['protectedBy'],
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'registeredProperty': !(0, runtime_1.exists)(json, 'registeredProperty') ? undefined : json['registeredProperty'],
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, ProfileTypeRelationships_1.ProfileTypeRelationshipsFromJSON)(json['relationships']),
        'relationshipsSummary': !(0, runtime_1.exists)(json, 'relationshipsSummary') ? undefined : (0, ProfileTypeRelationshipsSummary_1.ProfileTypeRelationshipsSummaryFromJSON)(json['relationshipsSummary']),
        'requestForHotel': !(0, runtime_1.exists)(json, 'requestForHotel') ? undefined : json['requestForHotel'],
        'reservationInfoList': !(0, runtime_1.exists)(json, 'reservationInfoList') ? undefined : (0, ReservationHistoryFutureInfoType_1.ReservationHistoryFutureInfoTypeFromJSON)(json['reservationInfoList']),
        'salesInfo': !(0, runtime_1.exists)(json, 'salesInfo') ? undefined : (0, SalesInfoType_1.SalesInfoTypeFromJSON)(json['salesInfo']),
        'statusCode': !(0, runtime_1.exists)(json, 'statusCode') ? undefined : (0, ProfileStatusType_1.ProfileStatusTypeFromJSON)(json['statusCode']),
        'stayReservationInfoList': !(0, runtime_1.exists)(json, 'stayReservationInfoList') ? undefined : (0, ReservationStayHistoryFutureInfoType_1.ReservationStayHistoryFutureInfoTypeFromJSON)(json['stayReservationInfoList']),
        'subscriptions': !(0, runtime_1.exists)(json, 'subscriptions') ? undefined : (0, ProfileSubscriptionListType_1.ProfileSubscriptionListTypeFromJSON)(json['subscriptions']),
        'taxInfo': !(0, runtime_1.exists)(json, 'taxInfo') ? undefined : (0, ProfileTaxInfoType_1.ProfileTaxInfoTypeFromJSON)(json['taxInfo']),
        'telephones': !(0, runtime_1.exists)(json, 'telephones') ? undefined : (0, ProfileTypeTelephones_1.ProfileTypeTelephonesFromJSON)(json['telephones']),
        'territory': !(0, runtime_1.exists)(json, 'territory') ? undefined : json['territory'],
        'traceCode': !(0, runtime_1.exists)(json, 'traceCode') ? undefined : json['traceCode'],
        'uRLs': !(0, runtime_1.exists)(json, 'uRLs') ? undefined : (0, ProfileTypeURLs_1.ProfileTypeURLsFromJSON)(json['uRLs']),
        'userDefinedFields': !(0, runtime_1.exists)(json, 'userDefinedFields') ? undefined : (0, UserDefinedFieldsType_1.UserDefinedFieldsTypeFromJSON)(json['userDefinedFields']),
        'webUserAccounts': !(0, runtime_1.exists)(json, 'webUserAccounts') ? undefined : (0, WebUserAccountsType_1.WebUserAccountsTypeFromJSON)(json['webUserAccounts']),
    };
}
exports.ProfileTypeFromJSONTyped = ProfileTypeFromJSONTyped;
function ProfileTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addresses': (0, ProfileTypeAddresses_1.ProfileTypeAddressesToJSON)(value.addresses),
        'businessSegments': value.businessSegments,
        'cashiering': (0, ProfileCashieringType_1.ProfileCashieringTypeToJSON)(value.cashiering),
        'comments': (0, ProfileTypeComments_1.ProfileTypeCommentsToJSON)(value.comments),
        'commissionInfoList': value.commissionInfoList === undefined ? undefined : (value.commissionInfoList.map(ProfileCommissionType_1.ProfileCommissionTypeToJSON)),
        'company': (0, CompanyType_1.CompanyTypeToJSON)(value.company),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'customer': (0, CustomerType_1.CustomerTypeToJSON)(value.customer),
        'eCertificates': (0, ECertificatesType_1.ECertificatesTypeToJSON)(value.eCertificates),
        'eligibleForFiscalFolio': value.eligibleForFiscalFolio,
        'emails': (0, ProfileTypeEmails_1.ProfileTypeEmailsToJSON)(value.emails),
        'gdsNegotiatedRates': (0, ProfileTypeGdsNegotiatedRates_1.ProfileTypeGdsNegotiatedRatesToJSON)(value.gdsNegotiatedRates),
        'hasCommission': value.hasCommission,
        'influenceCode': value.influenceCode,
        'inheritedNegRates': value.inheritedNegRates,
        'keywords': (0, ProfileTypeKeywords_1.ProfileTypeKeywordsToJSON)(value.keywords),
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastStayInfo': (0, LastStayInfoType_1.LastStayInfoTypeToJSON)(value.lastStayInfo),
        'localizationGuestType': value.localizationGuestType,
        'mailingActions': (0, MailingActionsType_1.MailingActionsTypeToJSON)(value.mailingActions),
        'markAsRecentlyAccessed': value.markAsRecentlyAccessed,
        'markForHistory': value.markForHistory,
        'negotiatedRates': (0, ProfileTypeNegotiatedRates_1.ProfileTypeNegotiatedRatesToJSON)(value.negotiatedRates),
        'ownerCode': value.ownerCode,
        'preferenceCollection': (0, ProfileTypePreferenceCollection_1.ProfileTypePreferenceCollectionToJSON)(value.preferenceCollection),
        'privacyInfo': (0, PrivacyInfoType_1.PrivacyInfoTypeToJSON)(value.privacyInfo),
        'profileAccessType': (0, ProfileAccessType_1.ProfileAccessTypeToJSON)(value.profileAccessType),
        'profileDeliveryMethods': (0, ProfileTypeProfileDeliveryMethods_1.ProfileTypeProfileDeliveryMethodsToJSON)(value.profileDeliveryMethods),
        'profileImage': (0, ImageSetType_1.ImageSetTypeToJSON)(value.profileImage),
        'profileIndicators': (0, IndicatorsType_1.IndicatorsTypeToJSON)(value.profileIndicators),
        'profileMemberships': (0, ProfileTypeProfileMemberships_1.ProfileTypeProfileMembershipsToJSON)(value.profileMemberships),
        'profileRestrictions': (0, ProfileRestrictions_1.ProfileRestrictionsToJSON)(value.profileRestrictions),
        'profileType': (0, ProfileTypeType_1.ProfileTypeTypeToJSON)(value.profileType),
        'protectedBy': value.protectedBy,
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0, 10)),
        'registeredProperty': value.registeredProperty,
        'relationships': (0, ProfileTypeRelationships_1.ProfileTypeRelationshipsToJSON)(value.relationships),
        'relationshipsSummary': (0, ProfileTypeRelationshipsSummary_1.ProfileTypeRelationshipsSummaryToJSON)(value.relationshipsSummary),
        'requestForHotel': value.requestForHotel,
        'reservationInfoList': (0, ReservationHistoryFutureInfoType_1.ReservationHistoryFutureInfoTypeToJSON)(value.reservationInfoList),
        'salesInfo': (0, SalesInfoType_1.SalesInfoTypeToJSON)(value.salesInfo),
        'statusCode': (0, ProfileStatusType_1.ProfileStatusTypeToJSON)(value.statusCode),
        'stayReservationInfoList': (0, ReservationStayHistoryFutureInfoType_1.ReservationStayHistoryFutureInfoTypeToJSON)(value.stayReservationInfoList),
        'subscriptions': (0, ProfileSubscriptionListType_1.ProfileSubscriptionListTypeToJSON)(value.subscriptions),
        'taxInfo': (0, ProfileTaxInfoType_1.ProfileTaxInfoTypeToJSON)(value.taxInfo),
        'telephones': (0, ProfileTypeTelephones_1.ProfileTypeTelephonesToJSON)(value.telephones),
        'territory': value.territory,
        'traceCode': value.traceCode,
        'uRLs': (0, ProfileTypeURLs_1.ProfileTypeURLsToJSON)(value.uRLs),
        'userDefinedFields': (0, UserDefinedFieldsType_1.UserDefinedFieldsTypeToJSON)(value.userDefinedFields),
        'webUserAccounts': (0, WebUserAccountsType_1.WebUserAccountsTypeToJSON)(value.webUserAccounts),
    };
}
exports.ProfileTypeToJSON = ProfileTypeToJSON;
