/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MembershipAwardCancelPenaltyType } from './MembershipAwardCancelPenaltyType';
import {
    MembershipAwardCancelPenaltyTypeFromJSON,
    MembershipAwardCancelPenaltyTypeFromJSONTyped,
    MembershipAwardCancelPenaltyTypeToJSON,
} from './MembershipAwardCancelPenaltyType';
import type { MembershipAwardCancelPolicyType } from './MembershipAwardCancelPolicyType';
import {
    MembershipAwardCancelPolicyTypeFromJSON,
    MembershipAwardCancelPolicyTypeFromJSONTyped,
    MembershipAwardCancelPolicyTypeToJSON,
} from './MembershipAwardCancelPolicyType';

/**
 * Membership Award cancel related details.
 * @export
 * @interface MembershipAwardRateInfoType
 */
export interface MembershipAwardRateInfoType {
    /**
     * The flat number of award points, or the percentage of the award points, that are forfeited if the guest cancels the reservation fewer than the number of days specified in Cancel Penalty Days before the arrival date.
     * @type {number}
     * @memberof MembershipAwardRateInfoType
     */
    cancelPenaltyCharge?: number;
    /**
     * If a reservation is booked using award points, this is the number of days before the arrival date by which the reservation may be cancelled without penalty. Zero indicates that the reservation may be cancelled any time up to and including the arrival date without incurring a penalty.
     * @type {number}
     * @memberof MembershipAwardRateInfoType
     */
    cancelPenaltyDays?: number;
    /**
     * 
     * @type {MembershipAwardCancelPenaltyType}
     * @memberof MembershipAwardRateInfoType
     */
    cancelPenaltyType?: MembershipAwardCancelPenaltyType;
    /**
     * 
     * @type {MembershipAwardCancelPolicyType}
     * @memberof MembershipAwardRateInfoType
     */
    cancelPolicyType?: MembershipAwardCancelPolicyType;
    /**
     * Number of nights cancel policy is applicable.
     * @type {number}
     * @memberof MembershipAwardRateInfoType
     */
    numberOfNights?: number;
}

/**
 * Check if a given object implements the MembershipAwardRateInfoType interface.
 */
export function instanceOfMembershipAwardRateInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipAwardRateInfoTypeFromJSON(json: any): MembershipAwardRateInfoType {
    return MembershipAwardRateInfoTypeFromJSONTyped(json, false);
}

export function MembershipAwardRateInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipAwardRateInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cancelPenaltyCharge': !exists(json, 'cancelPenaltyCharge') ? undefined : json['cancelPenaltyCharge'],
        'cancelPenaltyDays': !exists(json, 'cancelPenaltyDays') ? undefined : json['cancelPenaltyDays'],
        'cancelPenaltyType': !exists(json, 'cancelPenaltyType') ? undefined : MembershipAwardCancelPenaltyTypeFromJSON(json['cancelPenaltyType']),
        'cancelPolicyType': !exists(json, 'cancelPolicyType') ? undefined : MembershipAwardCancelPolicyTypeFromJSON(json['cancelPolicyType']),
        'numberOfNights': !exists(json, 'numberOfNights') ? undefined : json['numberOfNights'],
    };
}

export function MembershipAwardRateInfoTypeToJSON(value?: MembershipAwardRateInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cancelPenaltyCharge': value.cancelPenaltyCharge,
        'cancelPenaltyDays': value.cancelPenaltyDays,
        'cancelPenaltyType': MembershipAwardCancelPenaltyTypeToJSON(value.cancelPenaltyType),
        'cancelPolicyType': MembershipAwardCancelPolicyTypeToJSON(value.cancelPolicyType),
        'numberOfNights': value.numberOfNights,
    };
}

