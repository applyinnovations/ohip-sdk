"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivacyInfoTypeToJSON = exports.PrivacyInfoTypeFromJSONTyped = exports.PrivacyInfoTypeFromJSON = exports.instanceOfPrivacyInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PrivacyInfoType interface.
 */
function instanceOfPrivacyInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPrivacyInfoType = instanceOfPrivacyInfoType;
function PrivacyInfoTypeFromJSON(json) {
    return PrivacyInfoTypeFromJSONTyped(json, false);
}
exports.PrivacyInfoTypeFromJSON = PrivacyInfoTypeFromJSON;
function PrivacyInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowEmail': !(0, runtime_1.exists)(json, 'allowEmail') ? undefined : json['allowEmail'],
        'allowPhone': !(0, runtime_1.exists)(json, 'allowPhone') ? undefined : json['allowPhone'],
        'allowSMS': !(0, runtime_1.exists)(json, 'allowSMS') ? undefined : json['allowSMS'],
        'autoEnrollLoyaltyProgram': !(0, runtime_1.exists)(json, 'autoEnrollLoyaltyProgram') ? undefined : json['autoEnrollLoyaltyProgram'],
        'infoFromThirdParty': !(0, runtime_1.exists)(json, 'infoFromThirdParty') ? undefined : json['infoFromThirdParty'],
        'lastPrivacyPromptDate': !(0, runtime_1.exists)(json, 'lastPrivacyPromptDate') ? undefined : (new Date(json['lastPrivacyPromptDate'])),
        'marketResearchParticipation': !(0, runtime_1.exists)(json, 'marketResearchParticipation') ? undefined : json['marketResearchParticipation'],
        'optInAutoEnrollmentMember': !(0, runtime_1.exists)(json, 'optInAutoEnrollmentMember') ? undefined : json['optInAutoEnrollmentMember'],
        'optInEmail': !(0, runtime_1.exists)(json, 'optInEmail') ? undefined : json['optInEmail'],
        'optInMailingList': !(0, runtime_1.exists)(json, 'optInMailingList') ? undefined : json['optInMailingList'],
        'optInMarketResearch': !(0, runtime_1.exists)(json, 'optInMarketResearch') ? undefined : json['optInMarketResearch'],
        'optInPhone': !(0, runtime_1.exists)(json, 'optInPhone') ? undefined : json['optInPhone'],
        'optInSms': !(0, runtime_1.exists)(json, 'optInSms') ? undefined : json['optInSms'],
        'optInThirdParty': !(0, runtime_1.exists)(json, 'optInThirdParty') ? undefined : json['optInThirdParty'],
    };
}
exports.PrivacyInfoTypeFromJSONTyped = PrivacyInfoTypeFromJSONTyped;
function PrivacyInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowEmail': value.allowEmail,
        'allowPhone': value.allowPhone,
        'allowSMS': value.allowSMS,
        'autoEnrollLoyaltyProgram': value.autoEnrollLoyaltyProgram,
        'infoFromThirdParty': value.infoFromThirdParty,
        'lastPrivacyPromptDate': value.lastPrivacyPromptDate === undefined ? undefined : (value.lastPrivacyPromptDate.toISOString().substr(0, 10)),
        'marketResearchParticipation': value.marketResearchParticipation,
        'optInAutoEnrollmentMember': value.optInAutoEnrollmentMember,
        'optInEmail': value.optInEmail,
        'optInMailingList': value.optInMailingList,
        'optInMarketResearch': value.optInMarketResearch,
        'optInPhone': value.optInPhone,
        'optInSms': value.optInSms,
        'optInThirdParty': value.optInThirdParty,
    };
}
exports.PrivacyInfoTypeToJSON = PrivacyInfoTypeToJSON;
