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

import { exists, mapValues } from '../runtime';
import type { BenefitType } from './BenefitType';
import {
    BenefitTypeFromJSON,
    BenefitTypeFromJSONTyped,
    BenefitTypeToJSON,
} from './BenefitType';
import type { CardReIssueType } from './CardReIssueType';
import {
    CardReIssueTypeFromJSON,
    CardReIssueTypeFromJSONTyped,
    CardReIssueTypeToJSON,
} from './CardReIssueType';
import type { DowngradeType } from './DowngradeType';
import {
    DowngradeTypeFromJSON,
    DowngradeTypeFromJSONTyped,
    DowngradeTypeToJSON,
} from './DowngradeType';
import type { MembershipEarningPreferenceType } from './MembershipEarningPreferenceType';
import {
    MembershipEarningPreferenceTypeFromJSON,
    MembershipEarningPreferenceTypeFromJSONTyped,
    MembershipEarningPreferenceTypeToJSON,
} from './MembershipEarningPreferenceType';
import type { ParagraphType } from './ParagraphType';
import {
    ParagraphTypeFromJSON,
    ParagraphTypeFromJSONTyped,
    ParagraphTypeToJSON,
} from './ParagraphType';
import type { TierAdministrationType } from './TierAdministrationType';
import {
    TierAdministrationTypeFromJSON,
    TierAdministrationTypeFromJSONTyped,
    TierAdministrationTypeToJSON,
} from './TierAdministrationType';

/**
 * Detailed information of the memberships.
 * @export
 * @interface ProfileMembershipType
 */
export interface ProfileMembershipType {
    /**
     * Basic information about membership benefit.
     * @type {Array<BenefitType>}
     * @memberof ProfileMembershipType
     */
    benefits?: Array<BenefitType>;
    /**
     * Indicates how the award points for this membership type will be managed.
     * @type {boolean}
     * @memberof ProfileMembershipType
     */
    centralSetup?: boolean;
    /**
     * 
     * @type {ParagraphType}
     * @memberof ProfileMembershipType
     */
    comment?: ParagraphType;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    creatorId?: string;
    /**
     * Profile MemberShip Points.
     * @type {number}
     * @memberof ProfileMembershipType
     */
    currentPoints?: number;
    /**
     * 
     * @type {DowngradeType}
     * @memberof ProfileMembershipType
     */
    downgrade?: DowngradeType;
    /**
     * Indicates information regarding the member's possible downgrades.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    downgradeDescription?: string;
    /**
     * 
     * @type {MembershipEarningPreferenceType}
     * @memberof ProfileMembershipType
     */
    earningPreference?: MembershipEarningPreferenceType;
    /**
     * Indicates the starting date.
     * @type {Date}
     * @memberof ProfileMembershipType
     */
    effectiveDate?: Date;
    /**
     * Resort/CRO where enrollment is done.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    enrollmentResort?: string;
    /**
     * Source from where the enrollment is done.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    enrollmentSource?: string;
    /**
     * True if you want to exclude the member from the Membership Fulfillment extract,the member's actions will not be included in the fulfillment extract until this value set to false.
     * @type {boolean}
     * @memberof ProfileMembershipType
     */
    excludeFromBatch?: boolean;
    /**
     * Indicates the ending date.
     * @type {Date}
     * @memberof ProfileMembershipType
     */
    expireDate?: Date;
    /**
     * When true, indicates that the ExpireDate is the first day after the applicable period (e.g. when expire date is Oct 15 the last date of the period is Oct 14).
     * @type {boolean}
     * @memberof ProfileMembershipType
     */
    expireDateExclusiveIndicator?: boolean;
    /**
     * Indicates whether membership is active or inactive.
     * @type {boolean}
     * @memberof ProfileMembershipType
     */
    inactive?: boolean;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    lastModifyDateTime?: string;
    /**
     * Indicates where the guest is in the membership enrollment process.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    memberStatus?: string;
    /**
     * Indicates the membership class.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    membershipClass?: string;
    /**
     * Indicates how the guest enrolled in the program.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    membershipEnrollmentCode?: string;
    /**
     * Card Number of the membership.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    membershipId?: string;
    /**
     * Membership ID Number.
     * @type {number}
     * @memberof ProfileMembershipType
     */
    membershipIdNo?: number;
    /**
     * Indicates the membership level.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    membershipLevel?: string;
    /**
     * Indicates the membership level description.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    membershipLevelDescription?: string;
    /**
     * Type of membership.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    membershipType?: string;
    /**
     * Name to be displayed on the membership card.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    nameOnCard?: string;
    /**
     * Card Number of the membership.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    newMembershipNumber?: string;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof ProfileMembershipType
     */
    orderSequence?: number;
    /**
     * Ranking assigned to the Player Profile by the Gaming system.
     * @type {number}
     * @memberof ProfileMembershipType
     */
    playerRanking?: number;
    /**
     * Label used to refer to points for this membership type
     * @type {string}
     * @memberof ProfileMembershipType
     */
    pointsLabel?: string;
    /**
     * Preferred Card.
     * @type {boolean}
     * @memberof ProfileMembershipType
     */
    preferredCard?: boolean;
    /**
     * Boolean indicator set to True implies membership is a Primary Membership.
     * @type {boolean}
     * @memberof ProfileMembershipType
     */
    primaryMembership?: boolean;
    /**
     * Indicator if Membership is a Primary Membership.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    primaryMembershipYn?: string;
    /**
     * Description of the membership program.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    programDescription?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof ProfileMembershipType
     */
    purgeDate?: Date;
    /**
     * Value Rating Type Description for this membership.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    rating?: string;
    /**
     * 
     * @type {CardReIssueType}
     * @memberof ProfileMembershipType
     */
    reIssueNewCard?: CardReIssueType;
    /**
     * Indicates when the member signed up for the loyalty program.
     * @type {Date}
     * @memberof ProfileMembershipType
     */
    signupDate?: Date;
    /**
     * 
     * @type {TierAdministrationType}
     * @memberof ProfileMembershipType
     */
    tierAdministration?: TierAdministrationType;
    /**
     * Indicates Upgrade information which includes member's next tier level, requirements for the next upgrade.
     * @type {string}
     * @memberof ProfileMembershipType
     */
    upgradeDescription?: string;
}

/**
 * Check if a given object implements the ProfileMembershipType interface.
 */
export function instanceOfProfileMembershipType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileMembershipTypeFromJSON(json: any): ProfileMembershipType {
    return ProfileMembershipTypeFromJSONTyped(json, false);
}

export function ProfileMembershipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileMembershipType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'benefits': !exists(json, 'benefits') ? undefined : ((json['benefits'] as Array<any>).map(BenefitTypeFromJSON)),
        'centralSetup': !exists(json, 'centralSetup') ? undefined : json['centralSetup'],
        'comment': !exists(json, 'comment') ? undefined : ParagraphTypeFromJSON(json['comment']),
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'currentPoints': !exists(json, 'currentPoints') ? undefined : json['currentPoints'],
        'downgrade': !exists(json, 'downgrade') ? undefined : DowngradeTypeFromJSON(json['downgrade']),
        'downgradeDescription': !exists(json, 'downgradeDescription') ? undefined : json['downgradeDescription'],
        'earningPreference': !exists(json, 'earningPreference') ? undefined : MembershipEarningPreferenceTypeFromJSON(json['earningPreference']),
        'effectiveDate': !exists(json, 'effectiveDate') ? undefined : (new Date(json['effectiveDate'])),
        'enrollmentResort': !exists(json, 'enrollmentResort') ? undefined : json['enrollmentResort'],
        'enrollmentSource': !exists(json, 'enrollmentSource') ? undefined : json['enrollmentSource'],
        'excludeFromBatch': !exists(json, 'excludeFromBatch') ? undefined : json['excludeFromBatch'],
        'expireDate': !exists(json, 'expireDate') ? undefined : (new Date(json['expireDate'])),
        'expireDateExclusiveIndicator': !exists(json, 'expireDateExclusiveIndicator') ? undefined : json['expireDateExclusiveIndicator'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'memberStatus': !exists(json, 'memberStatus') ? undefined : json['memberStatus'],
        'membershipClass': !exists(json, 'membershipClass') ? undefined : json['membershipClass'],
        'membershipEnrollmentCode': !exists(json, 'membershipEnrollmentCode') ? undefined : json['membershipEnrollmentCode'],
        'membershipId': !exists(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipIdNo': !exists(json, 'membershipIdNo') ? undefined : json['membershipIdNo'],
        'membershipLevel': !exists(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipLevelDescription': !exists(json, 'membershipLevelDescription') ? undefined : json['membershipLevelDescription'],
        'membershipType': !exists(json, 'membershipType') ? undefined : json['membershipType'],
        'nameOnCard': !exists(json, 'nameOnCard') ? undefined : json['nameOnCard'],
        'newMembershipNumber': !exists(json, 'newMembershipNumber') ? undefined : json['newMembershipNumber'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
        'playerRanking': !exists(json, 'playerRanking') ? undefined : json['playerRanking'],
        'pointsLabel': !exists(json, 'pointsLabel') ? undefined : json['pointsLabel'],
        'preferredCard': !exists(json, 'preferredCard') ? undefined : json['preferredCard'],
        'primaryMembership': !exists(json, 'primaryMembership') ? undefined : json['primaryMembership'],
        'primaryMembershipYn': !exists(json, 'primaryMembershipYn') ? undefined : json['primaryMembershipYn'],
        'programDescription': !exists(json, 'programDescription') ? undefined : json['programDescription'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'rating': !exists(json, 'rating') ? undefined : json['rating'],
        'reIssueNewCard': !exists(json, 'reIssueNewCard') ? undefined : CardReIssueTypeFromJSON(json['reIssueNewCard']),
        'signupDate': !exists(json, 'signupDate') ? undefined : (new Date(json['signupDate'])),
        'tierAdministration': !exists(json, 'tierAdministration') ? undefined : TierAdministrationTypeFromJSON(json['tierAdministration']),
        'upgradeDescription': !exists(json, 'upgradeDescription') ? undefined : json['upgradeDescription'],
    };
}

export function ProfileMembershipTypeToJSON(value?: ProfileMembershipType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'benefits': value.benefits === undefined ? undefined : ((value.benefits as Array<any>).map(BenefitTypeToJSON)),
        'centralSetup': value.centralSetup,
        'comment': ParagraphTypeToJSON(value.comment),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'currentPoints': value.currentPoints,
        'downgrade': DowngradeTypeToJSON(value.downgrade),
        'downgradeDescription': value.downgradeDescription,
        'earningPreference': MembershipEarningPreferenceTypeToJSON(value.earningPreference),
        'effectiveDate': value.effectiveDate === undefined ? undefined : (value.effectiveDate.toISOString().substr(0,10)),
        'enrollmentResort': value.enrollmentResort,
        'enrollmentSource': value.enrollmentSource,
        'excludeFromBatch': value.excludeFromBatch,
        'expireDate': value.expireDate === undefined ? undefined : (value.expireDate.toISOString().substr(0,10)),
        'expireDateExclusiveIndicator': value.expireDateExclusiveIndicator,
        'inactive': value.inactive,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'memberStatus': value.memberStatus,
        'membershipClass': value.membershipClass,
        'membershipEnrollmentCode': value.membershipEnrollmentCode,
        'membershipId': value.membershipId,
        'membershipIdNo': value.membershipIdNo,
        'membershipLevel': value.membershipLevel,
        'membershipLevelDescription': value.membershipLevelDescription,
        'membershipType': value.membershipType,
        'nameOnCard': value.nameOnCard,
        'newMembershipNumber': value.newMembershipNumber,
        'orderSequence': value.orderSequence,
        'playerRanking': value.playerRanking,
        'pointsLabel': value.pointsLabel,
        'preferredCard': value.preferredCard,
        'primaryMembership': value.primaryMembership,
        'primaryMembershipYn': value.primaryMembershipYn,
        'programDescription': value.programDescription,
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0,10)),
        'rating': value.rating,
        'reIssueNewCard': CardReIssueTypeToJSON(value.reIssueNewCard),
        'signupDate': value.signupDate === undefined ? undefined : (value.signupDate.toISOString().substr(0,10)),
        'tierAdministration': TierAdministrationTypeToJSON(value.tierAdministration),
        'upgradeDescription': value.upgradeDescription,
    };
}

