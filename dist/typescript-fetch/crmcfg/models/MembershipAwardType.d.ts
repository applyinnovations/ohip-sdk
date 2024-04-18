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
import type { DateRangeType } from './DateRangeType';
import type { MembershipAwardBasedOnType } from './MembershipAwardBasedOnType';
import type { MembershipAwardDetailType } from './MembershipAwardDetailType';
import type { MembershipAwardFinancialTransactionInfoType } from './MembershipAwardFinancialTransactionInfoType';
import type { MembershipAwardOtherInfoType } from './MembershipAwardOtherInfoType';
import type { MembershipAwardProductInfoType } from './MembershipAwardProductInfoType';
import type { MembershipAwardRateInfoType } from './MembershipAwardRateInfoType';
import type { MembershipAwardUpgradeInfoType } from './MembershipAwardUpgradeInfoType';
/**
 * Values by which membership award is uniquely identied.
 * @export
 * @interface MembershipAwardType
 */
export interface MembershipAwardType {
    /**
     * Membership type for which awards are defined.
     * @type {string}
     * @memberof MembershipAwardType
     */
    membershipType?: string;
    /**
     * Membership Award Code.
     * @type {string}
     * @memberof MembershipAwardType
     */
    awardCode?: string;
    /**
     * Short description of Award.
     * @type {string}
     * @memberof MembershipAwardType
     */
    shortDescription?: string;
    /**
     * Detailed description and specification of the Award.
     * @type {string}
     * @memberof MembershipAwardType
     */
    longDescription?: string;
    /**
     * Rule Schedule applied to this Award.
     * @type {string}
     * @memberof MembershipAwardType
     */
    ruleScheduleCode?: string;
    /**
     * The billing group that represents a billing rule schedule for the membership award.
     * @type {string}
     * @memberof MembershipAwardType
     */
    billingGroup?: string;
    /**
     * Membership level required for eligibility to receive this award. Other membership levels are not eligible for this award.
     * @type {string}
     * @memberof MembershipAwardType
     */
    membershipLevel?: string;
    /**
     *
     * @type {DateRangeType}
     * @memberof MembershipAwardType
     */
    dateRange?: DateRangeType;
    /**
     * Inactive flag for Membership Award. The award record cannot be deleted.
     * @type {boolean}
     * @memberof MembershipAwardType
     */
    inactive?: boolean;
    /**
     * Display sequence of Award.
     * @type {number}
     * @memberof MembershipAwardType
     */
    displaySequence?: number;
    /**
     * Number of awards to be given.
     * @type {number}
     * @memberof MembershipAwardType
     */
    awardQuantity?: number;
    /**
     * Indicates if award consumtion is tracked by the system. If value is Y, then system keeps track of availability of award after it is issued.
     * @type {boolean}
     * @memberof MembershipAwardType
     */
    autoConsume?: boolean;
    /**
     * Force verification whether Rate or Product for the Award is valid at reservation.
     * @type {boolean}
     * @memberof MembershipAwardType
     */
    forceVerification?: boolean;
    /**
     *
     * @type {MembershipAwardBasedOnType}
     * @memberof MembershipAwardType
     */
    awardBasedOn?: MembershipAwardBasedOnType;
    /**
     *
     * @type {MembershipAwardRateInfoType}
     * @memberof MembershipAwardType
     */
    rateInfo?: MembershipAwardRateInfoType;
    /**
     *
     * @type {MembershipAwardProductInfoType}
     * @memberof MembershipAwardType
     */
    productInfo?: MembershipAwardProductInfoType;
    /**
     *
     * @type {MembershipAwardUpgradeInfoType}
     * @memberof MembershipAwardType
     */
    upgradeInfo?: MembershipAwardUpgradeInfoType;
    /**
     *
     * @type {MembershipAwardOtherInfoType}
     * @memberof MembershipAwardType
     */
    otherInfo?: MembershipAwardOtherInfoType;
    /**
     *
     * @type {MembershipAwardFinancialTransactionInfoType}
     * @memberof MembershipAwardType
     */
    financialTransactionInfo?: MembershipAwardFinancialTransactionInfoType;
    /**
     * Membership Award Rate details.
     * @type {Array<MembershipAwardDetailType>}
     * @memberof MembershipAwardType
     */
    awardDetails?: Array<MembershipAwardDetailType>;
}
/**
 * Check if a given object implements the MembershipAwardType interface.
 */
export declare function instanceOfMembershipAwardType(value: object): boolean;
export declare function MembershipAwardTypeFromJSON(json: any): MembershipAwardType;
export declare function MembershipAwardTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipAwardType;
export declare function MembershipAwardTypeToJSON(value?: MembershipAwardType | null): any;