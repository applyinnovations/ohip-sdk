/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Defines Privacy related information for the profile.
 * @export
 * @interface PrivacyInfoType
 */
export interface PrivacyInfoType {
    /**
     * Indicates if the profile participates in market research.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    marketResearchParticipation?: boolean;
    /**
     * Indicate the last privacy prompt date of the guest.
     * @type {string}
     * @memberof PrivacyInfoType
     */
    lastPrivacyPromptDate?: string;
    /**
     * Indicates if the profile is ok getting info from third parties.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    infoFromThirdParty?: boolean;
    /**
     * Indicates if the profile wishes to be automatically enrolled in the property's loyalty program.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    autoEnrollLoyaltyProgram?: boolean;
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
     * Indicates if the profile wishes to allow Email.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    allowEmail?: boolean;
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
     * Indicates if the profile wishes to opt in for Third Party.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    optInThirdParty?: boolean;
    /**
     * Indicates if the profile wishes to opt in for Auto Enrolment Member.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    optInAutoEnrollmentMember?: boolean;
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
     * Indicates if the profile wishes to opt in for Email.
     * @type {boolean}
     * @memberof PrivacyInfoType
     */
    optInEmail?: boolean;
}
/**
 * Check if a given object implements the PrivacyInfoType interface.
 */
export declare function instanceOfPrivacyInfoType(value: object): boolean;
export declare function PrivacyInfoTypeFromJSON(json: any): PrivacyInfoType;
export declare function PrivacyInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrivacyInfoType;
export declare function PrivacyInfoTypeToJSON(value?: PrivacyInfoType | null): any;
