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
import type { BenefitType } from './BenefitType';
import type { CardReIssueType } from './CardReIssueType';
import type { DowngradeType } from './DowngradeType';
import type { MembershipEarningPreferenceType } from './MembershipEarningPreferenceType';
import type { ParagraphType } from './ParagraphType';
import type { TierAdministrationType } from './TierAdministrationType';
/**
 * Detailed information of the memberships.
 * @export
 * @interface MembershipType
 */
export interface MembershipType {
    /**
     * Basic information about membership benefit.
     * @type {Array<BenefitType>}
     * @memberof MembershipType
     */
    benefits?: Array<BenefitType>;
    /**
     * Indicates how the award points for this membership type will be managed.
     * @type {boolean}
     * @memberof MembershipType
     */
    centralSetup?: boolean;
    /**
     *
     * @type {ParagraphType}
     * @memberof MembershipType
     */
    comment?: ParagraphType;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof MembershipType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof MembershipType
     */
    creatorId?: string;
    /**
     * Profile MemberShip Points.
     * @type {number}
     * @memberof MembershipType
     */
    currentPoints?: number;
    /**
     *
     * @type {DowngradeType}
     * @memberof MembershipType
     */
    downgrade?: DowngradeType;
    /**
     * Indicates information regarding the member's possible downgrades.
     * @type {string}
     * @memberof MembershipType
     */
    downgradeDescription?: string;
    /**
     *
     * @type {MembershipEarningPreferenceType}
     * @memberof MembershipType
     */
    earningPreference?: MembershipEarningPreferenceType;
    /**
     * Indicates the starting date.
     * @type {string}
     * @memberof MembershipType
     */
    effectiveDate?: string;
    /**
     * Resort/CRO where enrollment is done.
     * @type {string}
     * @memberof MembershipType
     */
    enrollmentResort?: string;
    /**
     * Source from where the enrollment is done.
     * @type {string}
     * @memberof MembershipType
     */
    enrollmentSource?: string;
    /**
     * True if you want to exclude the member from the Membership Fulfillment extract,the member's actions will not be included in the fulfillment extract until this value set to false.
     * @type {boolean}
     * @memberof MembershipType
     */
    excludeFromBatch?: boolean;
    /**
     * Indicates the ending date.
     * @type {string}
     * @memberof MembershipType
     */
    expireDate?: string;
    /**
     * When true, indicates that the ExpireDate is the first day after the applicable period (e.g. when expire date is Oct 15 the last date of the period is Oct 14).
     * @type {boolean}
     * @memberof MembershipType
     */
    expireDateExclusiveIndicator?: boolean;
    /**
     * Indicates whether membership is active or inactive.
     * @type {boolean}
     * @memberof MembershipType
     */
    inactive?: boolean;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof MembershipType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof MembershipType
     */
    lastModifyDateTime?: string;
    /**
     * Indicates where the guest is in the membership enrollment process.
     * @type {string}
     * @memberof MembershipType
     */
    memberStatus?: string;
    /**
     * Indicates the membership class.
     * @type {string}
     * @memberof MembershipType
     */
    membershipClass?: string;
    /**
     * Indicates how the guest enrolled in the program.
     * @type {string}
     * @memberof MembershipType
     */
    membershipEnrollmentCode?: string;
    /**
     * Card Number of the membership.
     * @type {string}
     * @memberof MembershipType
     */
    membershipId?: string;
    /**
     * Membership ID Number.
     * @type {number}
     * @memberof MembershipType
     */
    membershipIdNo?: number;
    /**
     * Indicates the membership level.
     * @type {string}
     * @memberof MembershipType
     */
    membershipLevel?: string;
    /**
     * Indicates the membership level description.
     * @type {string}
     * @memberof MembershipType
     */
    membershipLevelDescription?: string;
    /**
     * Type of membership.
     * @type {string}
     * @memberof MembershipType
     */
    membershipType?: string;
    /**
     * Name to be displayed on the membership card.
     * @type {string}
     * @memberof MembershipType
     */
    nameOnCard?: string;
    /**
     * Card Number of the membership.
     * @type {string}
     * @memberof MembershipType
     */
    newMembershipNumber?: string;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof MembershipType
     */
    orderSequence?: number;
    /**
     * Ranking assigned to the Player Profile by the Gaming system.
     * @type {number}
     * @memberof MembershipType
     */
    playerRanking?: number;
    /**
     * Label used to refer to points for this membership type
     * @type {string}
     * @memberof MembershipType
     */
    pointsLabel?: string;
    /**
     * Preferred Card.
     * @type {boolean}
     * @memberof MembershipType
     */
    preferredCard?: boolean;
    /**
     * Boolean indicator set to True implies membership is a Primary Membership.
     * @type {boolean}
     * @memberof MembershipType
     */
    primaryMembership?: boolean;
    /**
     * Indicator if Membership is a Primary Membership.
     * @type {string}
     * @memberof MembershipType
     */
    primaryMembershipYn?: string;
    /**
     * Description of the membership program.
     * @type {string}
     * @memberof MembershipType
     */
    programDescription?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof MembershipType
     */
    purgeDate?: string;
    /**
     * Value Rating Type Description for this membership.
     * @type {string}
     * @memberof MembershipType
     */
    rating?: string;
    /**
     *
     * @type {CardReIssueType}
     * @memberof MembershipType
     */
    reIssueNewCard?: CardReIssueType;
    /**
     * Indicates when the member signed up for the loyalty program.
     * @type {string}
     * @memberof MembershipType
     */
    signupDate?: string;
    /**
     *
     * @type {TierAdministrationType}
     * @memberof MembershipType
     */
    tierAdministration?: TierAdministrationType;
    /**
     * Indicates Upgrade information which includes member's next tier level, requirements for the next upgrade.
     * @type {string}
     * @memberof MembershipType
     */
    upgradeDescription?: string;
}
/**
 * Check if a given object implements the MembershipType interface.
 */
export declare function instanceOfMembershipType(value: object): boolean;
export declare function MembershipTypeFromJSON(json: any): MembershipType;
export declare function MembershipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipType;
export declare function MembershipTypeToJSON(value?: MembershipType | null): any;
