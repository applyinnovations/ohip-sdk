/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Defines Privacy related information for the profile.
 * @export
 * @interface PrivacyInfoType
 */
export interface PrivacyInfoType {
    /**
     * Indicates if the profile wishes to allow Email.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    allowEmail?: boolean;
    /**
     * Indicates if the profile wishes to allow phone calls.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    allowPhone?: boolean;
    /**
     * Indicates if the profile wishes to allow SMS.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    allowSMS?: boolean;
    /**
     * Indicates if the profile wishes to be automatically enrolled in the property's loyalty program.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    autoEnrollLoyaltyProgram?: boolean;
    /**
     * Indicates if the profile is ok getting info from third parties.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    infoFromThirdParty?: boolean;
    /**
     * Indicate the last privacy prompt date of the guest.
     * @type {string}
     * @memberof PrivacyInfoType
     */
    lastPrivacyPromptDate?: string;
    /**
     * Indicates if the profile participates in market research.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    marketResearchParticipation?: boolean;
    /**
     * Indicates if the profile wishes to opt in for Auto Enrolment Member.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    optInAutoEnrollmentMember?: boolean;
    /**
     * Indicates if the profile wishes to opt in for Email.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    optInEmail?: boolean;
    /**
     * Indicates if the profile wishes to opt in for Mailing List.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    optInMailingList?: boolean;
    /**
     * Indicates if the profile wishes to opt in for Market Research.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    optInMarketResearch?: boolean;
    /**
     * Indicates if the profile wishes to opt in for Phone.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    optInPhone?: boolean;
    /**
     * Indicates if the profile wishes to opt in for SMS.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    optInSms?: boolean;
    /**
     * Indicates if the profile wishes to opt in for Third Party.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    optInThirdParty?: boolean;
}

/**
 * Check if a given object implements the PrivacyInfoType interface.
 */
export function instanceOfPrivacyInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrivacyInfoTypeFromJSON(json: any): PrivacyInfoType {
    return PrivacyInfoTypeFromJSONTyped(json, false);
}

export function PrivacyInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrivacyInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowEmail': !exists(json, 'allowEmail') ? undefined : json['allowEmail'],
        'allowPhone': !exists(json, 'allowPhone') ? undefined : json['allowPhone'],
        'allowSMS': !exists(json, 'allowSMS') ? undefined : json['allowSMS'],
        'autoEnrollLoyaltyProgram': !exists(json, 'autoEnrollLoyaltyProgram') ? undefined : json['autoEnrollLoyaltyProgram'],
        'infoFromThirdParty': !exists(json, 'infoFromThirdParty') ? undefined : json['infoFromThirdParty'],
        'lastPrivacyPromptDate': !exists(json, 'lastPrivacyPromptDate') ? undefined : json['lastPrivacyPromptDate'],
        'marketResearchParticipation': !exists(json, 'marketResearchParticipation') ? undefined : json['marketResearchParticipation'],
        'optInAutoEnrollmentMember': !exists(json, 'optInAutoEnrollmentMember') ? undefined : json['optInAutoEnrollmentMember'],
        'optInEmail': !exists(json, 'optInEmail') ? undefined : json['optInEmail'],
        'optInMailingList': !exists(json, 'optInMailingList') ? undefined : json['optInMailingList'],
        'optInMarketResearch': !exists(json, 'optInMarketResearch') ? undefined : json['optInMarketResearch'],
        'optInPhone': !exists(json, 'optInPhone') ? undefined : json['optInPhone'],
        'optInSms': !exists(json, 'optInSms') ? undefined : json['optInSms'],
        'optInThirdParty': !exists(json, 'optInThirdParty') ? undefined : json['optInThirdParty'],
    };
}

export function PrivacyInfoTypeToJSON(value?: PrivacyInfoType | null): any {
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
        'lastPrivacyPromptDate': value.lastPrivacyPromptDate,
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

