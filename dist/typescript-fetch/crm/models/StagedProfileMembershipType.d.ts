/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BenefitType } from './BenefitType';
import type { CardReIssueType } from './CardReIssueType';
import type { DowngradeType } from './DowngradeType';
import type { MembershipEarningPreferenceType } from './MembershipEarningPreferenceType';
import type { ParagraphType } from './ParagraphType';
import type { TierAdministrationType } from './TierAdministrationType';
/**
 * Detailed information of the memberships.
 * @export
 * @interface StagedProfileMembershipType
 */
export interface StagedProfileMembershipType {
    /**
     * Basic information about membership benefit.
     * @type {Array<BenefitType>}
     * @memberof StagedProfileMembershipType
     */
    benefits?: Array<BenefitType>;
    /**
     * Indicates how the award points for this membership type will be managed.
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    centralSetup?: boolean;
    /**
     *
     * @type {ParagraphType}
     * @memberof StagedProfileMembershipType
     */
    comment?: ParagraphType;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    creatorId?: string;
    /**
     * Profile MemberShip Points.
     * @type {number}
     * @memberof StagedProfileMembershipType
     */
    currentPoints?: number;
    /**
     * Device encoded string.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    deviceCode?: string;
    /**
     * Device disabled date.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    deviceDisabledDate?: string;
    /**
     *
     * @type {DowngradeType}
     * @memberof StagedProfileMembershipType
     */
    downgrade?: DowngradeType;
    /**
     * Indicates information regarding the member's possible downgrades.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    downgradeDescription?: string;
    /**
     *
     * @type {MembershipEarningPreferenceType}
     * @memberof StagedProfileMembershipType
     */
    earningPreference?: MembershipEarningPreferenceType;
    /**
     * Indicates the starting date.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    effectiveDate?: string;
    /**
     * Enrollment code.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    enrollmentCode?: string;
    /**
     * Resort/CRO where enrollment is done.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    enrollmentResort?: string;
    /**
     * Source from where the enrollment is done.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    enrollmentSource?: string;
    /**
     * The error in membership information in a staged profile with an invalid status.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    errorDescription?: string;
    /**
     * True if you want to exclude the member from the Membership Fulfillment extract,the member's actions will not be included in the fulfillment extract until this value set to false.
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    excludeFromBatch?: boolean;
    /**
     * Indicates the ending date.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    expireDate?: string;
    /**
     * When true, indicates that the ExpireDate is the first day after the applicable period (e.g. when expire date is Oct 15 the last date of the period is Oct 14).
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    expireDateExclusiveIndicator?: boolean;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    id?: string;
    /**
     * Indicates whether membership is active or inactive.
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    inactive?: boolean;
    /**
     * Inactivation date of the record.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    inactiveDate?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    lastModifyDateTime?: string;
    /**
     * Indicates where the guest is in the membership enrollment process.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    memberStatus?: string;
    /**
     * Indicates the membership class.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    membershipClass?: string;
    /**
     * Indicates how the guest enrolled in the program.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    membershipEnrollmentCode?: string;
    /**
     * Card Number of the membership.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    membershipId?: string;
    /**
     * Membership ID Number.
     * @type {number}
     * @memberof StagedProfileMembershipType
     */
    membershipIdNo?: number;
    /**
     * Indicates the membership level.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    membershipLevel?: string;
    /**
     * Indicates the membership level description.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    membershipLevelDescription?: string;
    /**
     * Membership status.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    membershipStatus?: string;
    /**
     * Type of membership.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    membershipType?: string;
    /**
     * Name to be displayed on the membership card.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    nameOnCard?: string;
    /**
     * Card Number of the membership.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    newMembershipNumber?: string;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof StagedProfileMembershipType
     */
    orderSequence?: number;
    /**
     * Ranking assigned to the Player Profile by the Gaming system.
     * @type {number}
     * @memberof StagedProfileMembershipType
     */
    playerRanking?: number;
    /**
     * Label used to refer to points for this membership type
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    pointsLabel?: string;
    /**
     * Preferred Card.
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    preferredCard?: boolean;
    /**
     * Boolean indicator set to True implies membership is a Primary Membership.
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    primaryMembership?: boolean;
    /**
     * Indicator if Membership is a Primary Membership.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    primaryMembershipYn?: string;
    /**
     * Description of the membership program.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    programDescription?: string;
    /**
     * Value Rating Type Description for this membership.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    rating?: string;
    /**
     *
     * @type {CardReIssueType}
     * @memberof StagedProfileMembershipType
     */
    reIssueNewCard?: CardReIssueType;
    /**
     * Registration resort.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    registrationResort?: string;
    /**
     * Indicates when the member signed up for the loyalty program.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    signupDate?: string;
    /**
     *
     * @type {TierAdministrationType}
     * @memberof StagedProfileMembershipType
     */
    tierAdministration?: TierAdministrationType;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    type?: string;
    /**
     * Indicates if existing information for primary membership should be overwritten.
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    updateExistingMembership?: boolean;
    /**
     * Indicates Upgrade information which includes member's next tier level, requirements for the next upgrade.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    upgradeDescription?: string;
}
/**
 * Check if a given object implements the StagedProfileMembershipType interface.
 */
export declare function instanceOfStagedProfileMembershipType(value: object): boolean;
export declare function StagedProfileMembershipTypeFromJSON(json: any): StagedProfileMembershipType;
export declare function StagedProfileMembershipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileMembershipType;
export declare function StagedProfileMembershipTypeToJSON(value?: StagedProfileMembershipType | null): any;
