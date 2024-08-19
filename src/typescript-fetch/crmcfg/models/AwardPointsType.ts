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

import { exists, mapValues } from '../runtime';
import type { AwardPointsValidityDurationType } from './AwardPointsValidityDurationType';
import {
    AwardPointsValidityDurationTypeFromJSON,
    AwardPointsValidityDurationTypeFromJSONTyped,
    AwardPointsValidityDurationTypeToJSON,
} from './AwardPointsValidityDurationType';
import type { AwardsExceptionCriteriaType } from './AwardsExceptionCriteriaType';
import {
    AwardsExceptionCriteriaTypeFromJSON,
    AwardsExceptionCriteriaTypeFromJSONTyped,
    AwardsExceptionCriteriaTypeToJSON,
} from './AwardsExceptionCriteriaType';
import type { CalendarGracePeriodType } from './CalendarGracePeriodType';
import {
    CalendarGracePeriodTypeFromJSON,
    CalendarGracePeriodTypeFromJSONTyped,
    CalendarGracePeriodTypeToJSON,
} from './CalendarGracePeriodType';
import type { CalendarPeriodType } from './CalendarPeriodType';
import {
    CalendarPeriodTypeFromJSON,
    CalendarPeriodTypeFromJSONTyped,
    CalendarPeriodTypeToJSON,
} from './CalendarPeriodType';
import type { NumberOfYearsType } from './NumberOfYearsType';
import {
    NumberOfYearsTypeFromJSON,
    NumberOfYearsTypeFromJSONTyped,
    NumberOfYearsTypeToJSON,
} from './NumberOfYearsType';

/**
 * Base parent type for membership points comprising common elements between award points and tier points.
 * @export
 * @interface AwardPointsType
 */
export interface AwardPointsType {
    /**
     * Indicates if points will be displayed for guests who are not members.
     * @type {boolean}
     * @memberof AwardPointsType
     */
    nonMemberPoints?: boolean;
    /**
     * Award points will be recognized in this number of days following the guest's check out date. The minimum number of days is 3 and the maximum number of days is 60. This delay provides a period of time during which adjustments can be made at the PMS level before awards are uploaded to ORS/OCIS.
     * @type {number}
     * @memberof AwardPointsType
     */
    delayInDays?: number;
    /**
     * Indicates Membership card will be expired if there is no activity on the card for this number of years.
     * @type {number}
     * @memberof AwardPointsType
     */
    yearsToExpire?: number;
    /**
     * 
     * @type {CalendarPeriodType}
     * @memberof AwardPointsType
     */
    calendarPeriod?: CalendarPeriodType;
    /**
     * 
     * @type {NumberOfYearsType}
     * @memberof AwardPointsType
     */
    expiryPeriod?: NumberOfYearsType;
    /**
     * Month of Expiry for Calendar
     * @type {string}
     * @memberof AwardPointsType
     */
    expiryMonth?: string;
    /**
     * Months for which the Points accumulated can be redeemed for Rolling period.
     * @type {number}
     * @memberof AwardPointsType
     */
    monthsToAwardPointsExpiry?: number;
    /**
     * 
     * @type {AwardPointsValidityDurationType}
     * @memberof AwardPointsType
     */
    awardPointsExpiryDate?: AwardPointsValidityDurationType;
    /**
     * Award redemption threshold
     * @type {number}
     * @memberof AwardPointsType
     */
    awardRedeemThreshold?: number;
    /**
     * Activity Period in months for Rolling.
     * @type {number}
     * @memberof AwardPointsType
     */
    activityPeriodMonths?: number;
    /**
     * 
     * @type {NumberOfYearsType}
     * @memberof AwardPointsType
     */
    activityPeriodYears?: NumberOfYearsType;
    /**
     * Grace Period in months used for Rolling.
     * @type {number}
     * @memberof AwardPointsType
     */
    gracePeriodMonths?: number;
    /**
     * 
     * @type {CalendarGracePeriodType}
     * @memberof AwardPointsType
     */
    gracePeriodYear?: CalendarGracePeriodType;
    /**
     * Calculate stay points even if the loyalty membership card is not attached.
     * @type {boolean}
     * @memberof AwardPointsType
     */
    requiredOnStayPeriod?: boolean;
    /**
     * 
     * @type {AwardsExceptionCriteriaType}
     * @memberof AwardPointsType
     */
    exceptionCriteria?: AwardsExceptionCriteriaType;
}

/**
 * Check if a given object implements the AwardPointsType interface.
 */
export function instanceOfAwardPointsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AwardPointsTypeFromJSON(json: any): AwardPointsType {
    return AwardPointsTypeFromJSONTyped(json, false);
}

export function AwardPointsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardPointsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonMemberPoints': !exists(json, 'nonMemberPoints') ? undefined : json['nonMemberPoints'],
        'delayInDays': !exists(json, 'delayInDays') ? undefined : json['delayInDays'],
        'yearsToExpire': !exists(json, 'yearsToExpire') ? undefined : json['yearsToExpire'],
        'calendarPeriod': !exists(json, 'calendarPeriod') ? undefined : CalendarPeriodTypeFromJSON(json['calendarPeriod']),
        'expiryPeriod': !exists(json, 'expiryPeriod') ? undefined : NumberOfYearsTypeFromJSON(json['expiryPeriod']),
        'expiryMonth': !exists(json, 'expiryMonth') ? undefined : json['expiryMonth'],
        'monthsToAwardPointsExpiry': !exists(json, 'monthsToAwardPointsExpiry') ? undefined : json['monthsToAwardPointsExpiry'],
        'awardPointsExpiryDate': !exists(json, 'awardPointsExpiryDate') ? undefined : AwardPointsValidityDurationTypeFromJSON(json['awardPointsExpiryDate']),
        'awardRedeemThreshold': !exists(json, 'awardRedeemThreshold') ? undefined : json['awardRedeemThreshold'],
        'activityPeriodMonths': !exists(json, 'activityPeriodMonths') ? undefined : json['activityPeriodMonths'],
        'activityPeriodYears': !exists(json, 'activityPeriodYears') ? undefined : NumberOfYearsTypeFromJSON(json['activityPeriodYears']),
        'gracePeriodMonths': !exists(json, 'gracePeriodMonths') ? undefined : json['gracePeriodMonths'],
        'gracePeriodYear': !exists(json, 'gracePeriodYear') ? undefined : CalendarGracePeriodTypeFromJSON(json['gracePeriodYear']),
        'requiredOnStayPeriod': !exists(json, 'requiredOnStayPeriod') ? undefined : json['requiredOnStayPeriod'],
        'exceptionCriteria': !exists(json, 'exceptionCriteria') ? undefined : AwardsExceptionCriteriaTypeFromJSON(json['exceptionCriteria']),
    };
}

export function AwardPointsTypeToJSON(value?: AwardPointsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonMemberPoints': value.nonMemberPoints,
        'delayInDays': value.delayInDays,
        'yearsToExpire': value.yearsToExpire,
        'calendarPeriod': CalendarPeriodTypeToJSON(value.calendarPeriod),
        'expiryPeriod': NumberOfYearsTypeToJSON(value.expiryPeriod),
        'expiryMonth': value.expiryMonth,
        'monthsToAwardPointsExpiry': value.monthsToAwardPointsExpiry,
        'awardPointsExpiryDate': AwardPointsValidityDurationTypeToJSON(value.awardPointsExpiryDate),
        'awardRedeemThreshold': value.awardRedeemThreshold,
        'activityPeriodMonths': value.activityPeriodMonths,
        'activityPeriodYears': NumberOfYearsTypeToJSON(value.activityPeriodYears),
        'gracePeriodMonths': value.gracePeriodMonths,
        'gracePeriodYear': CalendarGracePeriodTypeToJSON(value.gracePeriodYear),
        'requiredOnStayPeriod': value.requiredOnStayPeriod,
        'exceptionCriteria': AwardsExceptionCriteriaTypeToJSON(value.exceptionCriteria),
    };
}

