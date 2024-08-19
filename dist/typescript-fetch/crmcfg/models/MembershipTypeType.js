"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipTypeTypeToJSON = exports.MembershipTypeTypeFromJSONTyped = exports.MembershipTypeTypeFromJSON = exports.instanceOfMembershipTypeType = void 0;
const runtime_1 = require("../runtime");
const AttachMembershipToReservationRuleType_1 = require("./AttachMembershipToReservationRuleType");
const AutoGenerateCardNumberType_1 = require("./AutoGenerateCardNumberType");
const AwardPointsType_1 = require("./AwardPointsType");
const CardNumberDetailsType_1 = require("./CardNumberDetailsType");
const EnrollmentMatchRuleType_1 = require("./EnrollmentMatchRuleType");
const MembershipActionType_1 = require("./MembershipActionType");
const MembershipAwardGenerationMethodType_1 = require("./MembershipAwardGenerationMethodType");
const MembershipHandlingType_1 = require("./MembershipHandlingType");
const MembershipLevelType_1 = require("./MembershipLevelType");
const MembershipTypeAdditionalInfoType_1 = require("./MembershipTypeAdditionalInfoType");
const TierPointsType_1 = require("./TierPointsType");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
/**
 * Check if a given object implements the MembershipTypeType interface.
 */
function instanceOfMembershipTypeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipTypeType = instanceOfMembershipTypeType;
function MembershipTypeTypeFromJSON(json) {
    return MembershipTypeTypeFromJSONTyped(json, false);
}
exports.MembershipTypeTypeFromJSON = MembershipTypeTypeFromJSON;
function MembershipTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'membershipType': !(0, runtime_1.exists)(json, 'membershipType') ? undefined : json['membershipType'],
        'membershipClass': !(0, runtime_1.exists)(json, 'membershipClass') ? undefined : json['membershipClass'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'pointsLabel': !(0, runtime_1.exists)(json, 'pointsLabel') ? undefined : json['pointsLabel'],
        'hasPointCalculationRule': !(0, runtime_1.exists)(json, 'hasPointCalculationRule') ? undefined : json['hasPointCalculationRule'],
        'ranking': !(0, runtime_1.exists)(json, 'ranking') ? undefined : json['ranking'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
        'cardDetails': !(0, runtime_1.exists)(json, 'cardDetails') ? undefined : (0, CardNumberDetailsType_1.CardNumberDetailsTypeFromJSON)(json['cardDetails']),
        'cardNumberAutoGenerateDetails': !(0, runtime_1.exists)(json, 'cardNumberAutoGenerateDetails') ? undefined : (0, AutoGenerateCardNumberType_1.AutoGenerateCardNumberTypeFromJSON)(json['cardNumberAutoGenerateDetails']),
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : json['currency'],
        'membershipAction': !(0, runtime_1.exists)(json, 'membershipAction') ? undefined : (0, MembershipActionType_1.MembershipActionTypeFromJSON)(json['membershipAction']),
        'exchangeType': !(0, runtime_1.exists)(json, 'exchangeType') ? undefined : json['exchangeType'],
        'pointCost': !(0, runtime_1.exists)(json, 'pointCost') ? undefined : json['pointCost'],
        'attachMembershipToReservationRule': !(0, runtime_1.exists)(json, 'attachMembershipToReservationRule') ? undefined : (json['attachMembershipToReservationRule'].map(AttachMembershipToReservationRuleType_1.AttachMembershipToReservationRuleTypeFromJSON)),
        'memberFolioMessage': !(0, runtime_1.exists)(json, 'memberFolioMessage') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['memberFolioMessage']),
        'nonMemberFolioMessage': !(0, runtime_1.exists)(json, 'nonMemberFolioMessage') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['nonMemberFolioMessage']),
        'folioMessageFBAPosting': !(0, runtime_1.exists)(json, 'folioMessageFBAPosting') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['folioMessageFBAPosting']),
        'awardGenerationMethod': !(0, runtime_1.exists)(json, 'awardGenerationMethod') ? undefined : (0, MembershipAwardGenerationMethodType_1.MembershipAwardGenerationMethodTypeFromJSON)(json['awardGenerationMethod']),
        'awardPointsDetail': !(0, runtime_1.exists)(json, 'awardPointsDetail') ? undefined : (0, AwardPointsType_1.AwardPointsTypeFromJSON)(json['awardPointsDetail']),
        'tierPointsDetails': !(0, runtime_1.exists)(json, 'tierPointsDetails') ? undefined : (0, TierPointsType_1.TierPointsTypeFromJSON)(json['tierPointsDetails']),
        'additionalDetails': !(0, runtime_1.exists)(json, 'additionalDetails') ? undefined : (0, MembershipTypeAdditionalInfoType_1.MembershipTypeAdditionalInfoTypeFromJSON)(json['additionalDetails']),
        'handlingDetails': !(0, runtime_1.exists)(json, 'handlingDetails') ? undefined : (0, MembershipHandlingType_1.MembershipHandlingTypeFromJSON)(json['handlingDetails']),
        'membershipLevels': !(0, runtime_1.exists)(json, 'membershipLevels') ? undefined : (json['membershipLevels'].map(MembershipLevelType_1.MembershipLevelTypeFromJSON)),
        'enrollmentMatchRule': !(0, runtime_1.exists)(json, 'enrollmentMatchRule') ? undefined : (0, EnrollmentMatchRuleType_1.EnrollmentMatchRuleTypeFromJSON)(json['enrollmentMatchRule']),
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'excludeProfileFromPurge': !(0, runtime_1.exists)(json, 'excludeProfileFromPurge') ? undefined : json['excludeProfileFromPurge'],
        'allowShares': !(0, runtime_1.exists)(json, 'allowShares') ? undefined : json['allowShares'],
        'sendCheckoutToInterface': !(0, runtime_1.exists)(json, 'sendCheckoutToInterface') ? undefined : json['sendCheckoutToInterface'],
        'multiplier': !(0, runtime_1.exists)(json, 'multiplier') ? undefined : json['multiplier'],
        'centralSetup': !(0, runtime_1.exists)(json, 'centralSetup') ? undefined : json['centralSetup'],
        'isLoyaltyProgram': !(0, runtime_1.exists)(json, 'isLoyaltyProgram') ? undefined : json['isLoyaltyProgram'],
        'enrollmentCodeRequiredYn': !(0, runtime_1.exists)(json, 'enrollmentCodeRequiredYn') ? undefined : json['enrollmentCodeRequiredYn'],
        'bookerProgramYn': !(0, runtime_1.exists)(json, 'bookerProgramYn') ? undefined : json['bookerProgramYn'],
        'companyYn': !(0, runtime_1.exists)(json, 'companyYn') ? undefined : json['companyYn'],
        'travelAgentYn': !(0, runtime_1.exists)(json, 'travelAgentYn') ? undefined : json['travelAgentYn'],
        'sourceYn': !(0, runtime_1.exists)(json, 'sourceYn') ? undefined : json['sourceYn'],
        'groupYn': !(0, runtime_1.exists)(json, 'groupYn') ? undefined : json['groupYn'],
        'contactYn': !(0, runtime_1.exists)(json, 'contactYn') ? undefined : json['contactYn'],
        'externallyControlled': !(0, runtime_1.exists)(json, 'externallyControlled') ? undefined : json['externallyControlled'],
        'enrollmentAddressAllowed': !(0, runtime_1.exists)(json, 'enrollmentAddressAllowed') ? undefined : json['enrollmentAddressAllowed'],
        'enrollmentCommunicationAllowed': !(0, runtime_1.exists)(json, 'enrollmentCommunicationAllowed') ? undefined : json['enrollmentCommunicationAllowed'],
        'enrollmentFeeAllowed': !(0, runtime_1.exists)(json, 'enrollmentFeeAllowed') ? undefined : json['enrollmentFeeAllowed'],
        'enrollmentBirthdateAllowed': !(0, runtime_1.exists)(json, 'enrollmentBirthdateAllowed') ? undefined : json['enrollmentBirthdateAllowed'],
        'reIssueNewCard': !(0, runtime_1.exists)(json, 'reIssueNewCard') ? undefined : json['reIssueNewCard'],
        'primaryMembership': !(0, runtime_1.exists)(json, 'primaryMembership') ? undefined : json['primaryMembership'],
        'printFolioMsgOnConfirmation': !(0, runtime_1.exists)(json, 'printFolioMsgOnConfirmation') ? undefined : json['printFolioMsgOnConfirmation'],
        'externalDatabase': !(0, runtime_1.exists)(json, 'externalDatabase') ? undefined : json['externalDatabase'],
    };
}
exports.MembershipTypeTypeFromJSONTyped = MembershipTypeTypeFromJSONTyped;
function MembershipTypeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'membershipType': value.membershipType,
        'membershipClass': value.membershipClass,
        'description': value.description,
        'pointsLabel': value.pointsLabel,
        'hasPointCalculationRule': value.hasPointCalculationRule,
        'ranking': value.ranking,
        'sequence': value.sequence,
        'cardDetails': (0, CardNumberDetailsType_1.CardNumberDetailsTypeToJSON)(value.cardDetails),
        'cardNumberAutoGenerateDetails': (0, AutoGenerateCardNumberType_1.AutoGenerateCardNumberTypeToJSON)(value.cardNumberAutoGenerateDetails),
        'currency': value.currency,
        'membershipAction': (0, MembershipActionType_1.MembershipActionTypeToJSON)(value.membershipAction),
        'exchangeType': value.exchangeType,
        'pointCost': value.pointCost,
        'attachMembershipToReservationRule': value.attachMembershipToReservationRule === undefined ? undefined : (value.attachMembershipToReservationRule.map(AttachMembershipToReservationRuleType_1.AttachMembershipToReservationRuleTypeToJSON)),
        'memberFolioMessage': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.memberFolioMessage),
        'nonMemberFolioMessage': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.nonMemberFolioMessage),
        'folioMessageFBAPosting': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.folioMessageFBAPosting),
        'awardGenerationMethod': (0, MembershipAwardGenerationMethodType_1.MembershipAwardGenerationMethodTypeToJSON)(value.awardGenerationMethod),
        'awardPointsDetail': (0, AwardPointsType_1.AwardPointsTypeToJSON)(value.awardPointsDetail),
        'tierPointsDetails': (0, TierPointsType_1.TierPointsTypeToJSON)(value.tierPointsDetails),
        'additionalDetails': (0, MembershipTypeAdditionalInfoType_1.MembershipTypeAdditionalInfoTypeToJSON)(value.additionalDetails),
        'handlingDetails': (0, MembershipHandlingType_1.MembershipHandlingTypeToJSON)(value.handlingDetails),
        'membershipLevels': value.membershipLevels === undefined ? undefined : (value.membershipLevels.map(MembershipLevelType_1.MembershipLevelTypeToJSON)),
        'enrollmentMatchRule': (0, EnrollmentMatchRuleType_1.EnrollmentMatchRuleTypeToJSON)(value.enrollmentMatchRule),
        'inactive': value.inactive,
        'excludeProfileFromPurge': value.excludeProfileFromPurge,
        'allowShares': value.allowShares,
        'sendCheckoutToInterface': value.sendCheckoutToInterface,
        'multiplier': value.multiplier,
        'centralSetup': value.centralSetup,
        'isLoyaltyProgram': value.isLoyaltyProgram,
        'enrollmentCodeRequiredYn': value.enrollmentCodeRequiredYn,
        'bookerProgramYn': value.bookerProgramYn,
        'companyYn': value.companyYn,
        'travelAgentYn': value.travelAgentYn,
        'sourceYn': value.sourceYn,
        'groupYn': value.groupYn,
        'contactYn': value.contactYn,
        'externallyControlled': value.externallyControlled,
        'enrollmentAddressAllowed': value.enrollmentAddressAllowed,
        'enrollmentCommunicationAllowed': value.enrollmentCommunicationAllowed,
        'enrollmentFeeAllowed': value.enrollmentFeeAllowed,
        'enrollmentBirthdateAllowed': value.enrollmentBirthdateAllowed,
        'reIssueNewCard': value.reIssueNewCard,
        'primaryMembership': value.primaryMembership,
        'printFolioMsgOnConfirmation': value.printFolioMsgOnConfirmation,
        'externalDatabase': value.externalDatabase,
    };
}
exports.MembershipTypeTypeToJSON = MembershipTypeTypeToJSON;
