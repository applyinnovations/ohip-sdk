/* tslint:disable */
/* eslint-disable */
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
 * @interface StagedProfileMembershipType
 */
export interface StagedProfileMembershipType {
    /**
     * 
     * @type {ParagraphType}
     * @memberof StagedProfileMembershipType
     */
    comment?: ParagraphType;
    /**
     * Card Number of the membership.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    newMembershipNumber?: string;
    /**
     * Name to be displayed on the membership card.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    nameOnCard?: string;
    /**
     * Description of the membership program.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    programDescription?: string;
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
     * Indicates the membership class.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    membershipClass?: string;
    /**
     * 
     * @type {MembershipEarningPreferenceType}
     * @memberof StagedProfileMembershipType
     */
    earningPreference?: MembershipEarningPreferenceType;
    /**
     * Indicates whether membership is active or inactive.
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    inactive?: boolean;
    /**
     * Basic information about membership benefit.
     * @type {Array<BenefitType>}
     * @memberof StagedProfileMembershipType
     */
    benefits?: Array<BenefitType>;
    /**
     * 
     * @type {TierAdministrationType}
     * @memberof StagedProfileMembershipType
     */
    tierAdministration?: TierAdministrationType;
    /**
     * 
     * @type {DowngradeType}
     * @memberof StagedProfileMembershipType
     */
    downgrade?: DowngradeType;
    /**
     * 
     * @type {CardReIssueType}
     * @memberof StagedProfileMembershipType
     */
    reIssueNewCard?: CardReIssueType;
    /**
     * True if you want to exclude the member from the Membership Fulfillment extract,the member's actions will not be included in the fulfillment extract until this value set to false.
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    excludeFromBatch?: boolean;
    /**
     * Indicates Upgrade information which includes member's next tier level, requirements for the next upgrade.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    upgradeDescription?: string;
    /**
     * Indicates information regarding the member's possible downgrades.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    downgradeDescription?: string;
    /**
     * Value Rating Type Description for this membership.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    rating?: string;
    /**
     * Indicates how the guest enrolled in the program.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    membershipEnrollmentCode?: string;
    /**
     * Indicates where the guest is in the membership enrollment process.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    memberStatus?: string;
    /**
     * Profile MemberShip Points.
     * @type {number}
     * @memberof StagedProfileMembershipType
     */
    currentPoints?: number;
    /**
     * Label used to refer to points for this membership type
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    pointsLabel?: string;
    /**
     * Source from where the enrollment is done.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    enrollmentSource?: string;
    /**
     * Resort/CRO where enrollment is done.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    enrollmentResort?: string;
    /**
     * Preferred Card.
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    preferredCard?: boolean;
    /**
     * Card Number of the membership.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    membershipId?: string;
    /**
     * Type of membership.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    membershipType?: string;
    /**
     * Boolean indicator set to True implies membership is a Primary Membership.
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    primaryMembership?: boolean;
    /**
     * Membership ID Number.
     * @type {number}
     * @memberof StagedProfileMembershipType
     */
    membershipIdNo?: number;
    /**
     * Ranking assigned to the Player Profile by the Gaming system.
     * @type {number}
     * @memberof StagedProfileMembershipType
     */
    playerRanking?: number;
    /**
     * Indicates how the award points for this membership type will be managed.
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    centralSetup?: boolean;
    /**
     * Indicates when the member signed up for the loyalty program.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    signupDate?: string;
    /**
     * Indicates the starting date.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    effectiveDate?: string;
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
     * Display Order sequence.
     * @type {number}
     * @memberof StagedProfileMembershipType
     */
    orderSequence?: number;
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
     * Time stamp of last modification.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    lastModifierId?: string;
    /**
     * The error in membership information in a staged profile with an invalid status.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    errorDescription?: string;
    /**
     * Registration resort.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    registrationResort?: string;
    /**
     * Enrollment code.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    enrollmentCode?: string;
    /**
     * Membership status.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    membershipStatus?: string;
    /**
     * Inactivation date of the record.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    inactiveDate?: string;
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
     * Indicates if existing information for primary membership should be overwritten.
     * @type {boolean}
     * @memberof StagedProfileMembershipType
     */
    updateExistingMembership?: boolean;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileMembershipType
     */
    type?: string;
}

/**
 * Check if a given object implements the StagedProfileMembershipType interface.
 */
export function instanceOfStagedProfileMembershipType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StagedProfileMembershipTypeFromJSON(json: any): StagedProfileMembershipType {
    return StagedProfileMembershipTypeFromJSONTyped(json, false);
}

export function StagedProfileMembershipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileMembershipType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comment': !exists(json, 'comment') ? undefined : ParagraphTypeFromJSON(json['comment']),
        'newMembershipNumber': !exists(json, 'newMembershipNumber') ? undefined : json['newMembershipNumber'],
        'nameOnCard': !exists(json, 'nameOnCard') ? undefined : json['nameOnCard'],
        'programDescription': !exists(json, 'programDescription') ? undefined : json['programDescription'],
        'membershipLevel': !exists(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipLevelDescription': !exists(json, 'membershipLevelDescription') ? undefined : json['membershipLevelDescription'],
        'membershipClass': !exists(json, 'membershipClass') ? undefined : json['membershipClass'],
        'earningPreference': !exists(json, 'earningPreference') ? undefined : MembershipEarningPreferenceTypeFromJSON(json['earningPreference']),
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'benefits': !exists(json, 'benefits') ? undefined : ((json['benefits'] as Array<any>).map(BenefitTypeFromJSON)),
        'tierAdministration': !exists(json, 'tierAdministration') ? undefined : TierAdministrationTypeFromJSON(json['tierAdministration']),
        'downgrade': !exists(json, 'downgrade') ? undefined : DowngradeTypeFromJSON(json['downgrade']),
        'reIssueNewCard': !exists(json, 'reIssueNewCard') ? undefined : CardReIssueTypeFromJSON(json['reIssueNewCard']),
        'excludeFromBatch': !exists(json, 'excludeFromBatch') ? undefined : json['excludeFromBatch'],
        'upgradeDescription': !exists(json, 'upgradeDescription') ? undefined : json['upgradeDescription'],
        'downgradeDescription': !exists(json, 'downgradeDescription') ? undefined : json['downgradeDescription'],
        'rating': !exists(json, 'rating') ? undefined : json['rating'],
        'membershipEnrollmentCode': !exists(json, 'membershipEnrollmentCode') ? undefined : json['membershipEnrollmentCode'],
        'memberStatus': !exists(json, 'memberStatus') ? undefined : json['memberStatus'],
        'currentPoints': !exists(json, 'currentPoints') ? undefined : json['currentPoints'],
        'pointsLabel': !exists(json, 'pointsLabel') ? undefined : json['pointsLabel'],
        'enrollmentSource': !exists(json, 'enrollmentSource') ? undefined : json['enrollmentSource'],
        'enrollmentResort': !exists(json, 'enrollmentResort') ? undefined : json['enrollmentResort'],
        'preferredCard': !exists(json, 'preferredCard') ? undefined : json['preferredCard'],
        'membershipId': !exists(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipType': !exists(json, 'membershipType') ? undefined : json['membershipType'],
        'primaryMembership': !exists(json, 'primaryMembership') ? undefined : json['primaryMembership'],
        'membershipIdNo': !exists(json, 'membershipIdNo') ? undefined : json['membershipIdNo'],
        'playerRanking': !exists(json, 'playerRanking') ? undefined : json['playerRanking'],
        'centralSetup': !exists(json, 'centralSetup') ? undefined : json['centralSetup'],
        'signupDate': !exists(json, 'signupDate') ? undefined : json['signupDate'],
        'effectiveDate': !exists(json, 'effectiveDate') ? undefined : json['effectiveDate'],
        'expireDate': !exists(json, 'expireDate') ? undefined : json['expireDate'],
        'expireDateExclusiveIndicator': !exists(json, 'expireDateExclusiveIndicator') ? undefined : json['expireDateExclusiveIndicator'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'registrationResort': !exists(json, 'registrationResort') ? undefined : json['registrationResort'],
        'enrollmentCode': !exists(json, 'enrollmentCode') ? undefined : json['enrollmentCode'],
        'membershipStatus': !exists(json, 'membershipStatus') ? undefined : json['membershipStatus'],
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'deviceCode': !exists(json, 'deviceCode') ? undefined : json['deviceCode'],
        'deviceDisabledDate': !exists(json, 'deviceDisabledDate') ? undefined : json['deviceDisabledDate'],
        'updateExistingMembership': !exists(json, 'updateExistingMembership') ? undefined : json['updateExistingMembership'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function StagedProfileMembershipTypeToJSON(value?: StagedProfileMembershipType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comment': ParagraphTypeToJSON(value.comment),
        'newMembershipNumber': value.newMembershipNumber,
        'nameOnCard': value.nameOnCard,
        'programDescription': value.programDescription,
        'membershipLevel': value.membershipLevel,
        'membershipLevelDescription': value.membershipLevelDescription,
        'membershipClass': value.membershipClass,
        'earningPreference': MembershipEarningPreferenceTypeToJSON(value.earningPreference),
        'inactive': value.inactive,
        'benefits': value.benefits === undefined ? undefined : ((value.benefits as Array<any>).map(BenefitTypeToJSON)),
        'tierAdministration': TierAdministrationTypeToJSON(value.tierAdministration),
        'downgrade': DowngradeTypeToJSON(value.downgrade),
        'reIssueNewCard': CardReIssueTypeToJSON(value.reIssueNewCard),
        'excludeFromBatch': value.excludeFromBatch,
        'upgradeDescription': value.upgradeDescription,
        'downgradeDescription': value.downgradeDescription,
        'rating': value.rating,
        'membershipEnrollmentCode': value.membershipEnrollmentCode,
        'memberStatus': value.memberStatus,
        'currentPoints': value.currentPoints,
        'pointsLabel': value.pointsLabel,
        'enrollmentSource': value.enrollmentSource,
        'enrollmentResort': value.enrollmentResort,
        'preferredCard': value.preferredCard,
        'membershipId': value.membershipId,
        'membershipType': value.membershipType,
        'primaryMembership': value.primaryMembership,
        'membershipIdNo': value.membershipIdNo,
        'playerRanking': value.playerRanking,
        'centralSetup': value.centralSetup,
        'signupDate': value.signupDate,
        'effectiveDate': value.effectiveDate,
        'expireDate': value.expireDate,
        'expireDateExclusiveIndicator': value.expireDateExclusiveIndicator,
        'orderSequence': value.orderSequence,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastModifierId': value.lastModifierId,
        'errorDescription': value.errorDescription,
        'registrationResort': value.registrationResort,
        'enrollmentCode': value.enrollmentCode,
        'membershipStatus': value.membershipStatus,
        'inactiveDate': value.inactiveDate,
        'deviceCode': value.deviceCode,
        'deviceDisabledDate': value.deviceDisabledDate,
        'updateExistingMembership': value.updateExistingMembership,
        'id': value.id,
        'type': value.type,
    };
}

