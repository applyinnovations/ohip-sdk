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
import type { MailingActionsType } from './MailingActionsType';
import type { PrivacyInfoType } from './PrivacyInfoType';
import type { StagedProfileAddressType } from './StagedProfileAddressType';
import type { StagedProfileCommentInfoType } from './StagedProfileCommentInfoType';
import type { StagedProfileCompanyType } from './StagedProfileCompanyType';
import type { StagedProfileCustomerType } from './StagedProfileCustomerType';
import type { StagedProfileEmailType } from './StagedProfileEmailType';
import type { StagedProfileIdentificationsType } from './StagedProfileIdentificationsType';
import type { StagedProfileKeywordType } from './StagedProfileKeywordType';
import type { StagedProfileMembershipType } from './StagedProfileMembershipType';
import type { StagedProfileNegotiatedRateType } from './StagedProfileNegotiatedRateType';
import type { StagedProfilePhoneType } from './StagedProfilePhoneType';
import type { StagedProfilePreferenceType } from './StagedProfilePreferenceType';
import type { StagedProfileRoutingInstructionType } from './StagedProfileRoutingInstructionType';
import type { StagedProfileURLType } from './StagedProfileURLType';
import type { StagedProfileUserDefinedFieldsType } from './StagedProfileUserDefinedFieldsType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Detailed information about the staged profile.
 * @export
 * @interface StagedProfileType
 */
export interface StagedProfileType {
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof StagedProfileType
     */
    profileIdList?: Array<UniqueIDType>;
    /**
     *
     * @type {StagedProfileCustomerType}
     * @memberof StagedProfileType
     */
    customer?: StagedProfileCustomerType;
    /**
     *
     * @type {StagedProfileCompanyType}
     * @memberof StagedProfileType
     */
    company?: StagedProfileCompanyType;
    /**
     * Collection of detailed information about address for the staged profile.
     * @type {Array<StagedProfileAddressType>}
     * @memberof StagedProfileType
     */
    addresses?: Array<StagedProfileAddressType>;
    /**
     * Collection of detailed information about telephone/fax for the staged profile.
     * @type {Array<StagedProfilePhoneType>}
     * @memberof StagedProfileType
     */
    telephones?: Array<StagedProfilePhoneType>;
    /**
     * Collection of detailed information about email for the staged profile.
     * @type {Array<StagedProfileEmailType>}
     * @memberof StagedProfileType
     */
    emails?: Array<StagedProfileEmailType>;
    /**
     * Collection of detailed information about web url/address for the staged profile.
     * @type {Array<StagedProfileURLType>}
     * @memberof StagedProfileType
     */
    uRLs?: Array<StagedProfileURLType>;
    /**
     * Collection of detailed information about memberships for the staged profile.
     * @type {Array<StagedProfileMembershipType>}
     * @memberof StagedProfileType
     */
    memberships?: Array<StagedProfileMembershipType>;
    /**
     * Collection of detailed information about preferences for the staged profile.
     * @type {Array<StagedProfilePreferenceType>}
     * @memberof StagedProfileType
     */
    preferences?: Array<StagedProfilePreferenceType>;
    /**
     * Collection of detailed information about keyword for the staged profile.
     * @type {Array<StagedProfileKeywordType>}
     * @memberof StagedProfileType
     */
    keywords?: Array<StagedProfileKeywordType>;
    /**
     * Collection of detailed information about negotiated rates for the staged profile.
     * @type {Array<StagedProfileNegotiatedRateType>}
     * @memberof StagedProfileType
     */
    negotiatedRates?: Array<StagedProfileNegotiatedRateType>;
    /**
     * Collection of detailed information about identification for the staged profile.
     * @type {Array<StagedProfileIdentificationsType>}
     * @memberof StagedProfileType
     */
    identifications?: Array<StagedProfileIdentificationsType>;
    /**
     * Collection of routing instructions for the staged profile.
     * @type {Array<StagedProfileRoutingInstructionType>}
     * @memberof StagedProfileType
     */
    routingInstructions?: Array<StagedProfileRoutingInstructionType>;
    /**
     *
     * @type {StagedProfileUserDefinedFieldsType}
     * @memberof StagedProfileType
     */
    userDefinedFields?: StagedProfileUserDefinedFieldsType;
    /**
     *
     * @type {MailingActionsType}
     * @memberof StagedProfileType
     */
    mailingActions?: MailingActionsType;
    /**
     *
     * @type {PrivacyInfoType}
     * @memberof StagedProfileType
     */
    privacyInfo?: PrivacyInfoType;
    /**
     * List of Notes for the customer.
     * @type {Array<StagedProfileCommentInfoType>}
     * @memberof StagedProfileType
     */
    comments?: Array<StagedProfileCommentInfoType>;
    /**
     * Hotel code that the staged profile belongs to.
     * @type {string}
     * @memberof StagedProfileType
     */
    hotelId?: string;
    /**
     * The date on which the staged profile has been received.
     * @type {string}
     * @memberof StagedProfileType
     */
    importDate?: string;
    /**
     * Type of the staged profile.
     * @type {string}
     * @memberof StagedProfileType
     */
    profileType?: string;
    /**
     * The status of the staged profile.
     * @type {string}
     * @memberof StagedProfileType
     */
    stageStatus?: string;
}
/**
 * Check if a given object implements the StagedProfileType interface.
 */
export declare function instanceOfStagedProfileType(value: object): boolean;
export declare function StagedProfileTypeFromJSON(json: any): StagedProfileType;
export declare function StagedProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileType;
export declare function StagedProfileTypeToJSON(value?: StagedProfileType | null): any;
