/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MembershipTypeLevelType } from './MembershipTypeLevelType';
import {
    MembershipTypeLevelTypeFromJSON,
    MembershipTypeLevelTypeFromJSONTyped,
    MembershipTypeLevelTypeToJSON,
} from './MembershipTypeLevelType';
import type { PreCheckInRuleTypeType } from './PreCheckInRuleTypeType';
import {
    PreCheckInRuleTypeTypeFromJSON,
    PreCheckInRuleTypeTypeFromJSONTyped,
    PreCheckInRuleTypeTypeToJSON,
} from './PreCheckInRuleTypeType';
import type { PreCheckInTimeRuleTypes } from './PreCheckInTimeRuleTypes';
import {
    PreCheckInTimeRuleTypesFromJSON,
    PreCheckInTimeRuleTypesFromJSONTyped,
    PreCheckInTimeRuleTypesToJSON,
} from './PreCheckInTimeRuleTypes';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

/**
 * A Internet Pre Check-In Rule
 * @export
 * @interface PreCheckInRuleType
 */
export interface PreCheckInRuleType {
    /**
     * Hotel code of Pre Check-In Rule to be searched
     * @type {string}
     * @memberof PreCheckInRuleType
     */
    hotelId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PreCheckInRuleType
     */
    marketCodes?: Array<string>;
    /**
     * Code type for Rule Details
     * @type {Array<MembershipTypeLevelType>}
     * @memberof PreCheckInRuleType
     */
    memberships?: Array<MembershipTypeLevelType>;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof PreCheckInRuleType
     */
    newTimeSpan?: TimeSpanType;
    /**
     * 
     * @type {Array<string>}
     * @memberof PreCheckInRuleType
     */
    originCodes?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PreCheckInRuleType
     */
    ratePlans?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PreCheckInRuleType
     */
    reservationTypes?: Array<string>;
    /**
     * 
     * @type {PreCheckInRuleTypeType}
     * @memberof PreCheckInRuleType
     */
    ruleType?: PreCheckInRuleTypeType;
    /**
     * 
     * @type {Array<string>}
     * @memberof PreCheckInRuleType
     */
    specials?: Array<string>;
    /**
     * 
     * @type {PreCheckInTimeRuleTypes}
     * @memberof PreCheckInRuleType
     */
    timeLimit?: PreCheckInTimeRuleTypes;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof PreCheckInRuleType
     */
    timeSpan?: TimeSpanType;
    /**
     * 
     * @type {Array<string>}
     * @memberof PreCheckInRuleType
     */
    vIPCodes?: Array<string>;
}

/**
 * Check if a given object implements the PreCheckInRuleType interface.
 */
export function instanceOfPreCheckInRuleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PreCheckInRuleTypeFromJSON(json: any): PreCheckInRuleType {
    return PreCheckInRuleTypeFromJSONTyped(json, false);
}

export function PreCheckInRuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreCheckInRuleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'marketCodes': !exists(json, 'marketCodes') ? undefined : json['marketCodes'],
        'memberships': !exists(json, 'memberships') ? undefined : ((json['memberships'] as Array<any>).map(MembershipTypeLevelTypeFromJSON)),
        'newTimeSpan': !exists(json, 'newTimeSpan') ? undefined : TimeSpanTypeFromJSON(json['newTimeSpan']),
        'originCodes': !exists(json, 'originCodes') ? undefined : json['originCodes'],
        'ratePlans': !exists(json, 'ratePlans') ? undefined : json['ratePlans'],
        'reservationTypes': !exists(json, 'reservationTypes') ? undefined : json['reservationTypes'],
        'ruleType': !exists(json, 'ruleType') ? undefined : PreCheckInRuleTypeTypeFromJSON(json['ruleType']),
        'specials': !exists(json, 'specials') ? undefined : json['specials'],
        'timeLimit': !exists(json, 'timeLimit') ? undefined : PreCheckInTimeRuleTypesFromJSON(json['timeLimit']),
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
        'vIPCodes': !exists(json, 'vIPCodes') ? undefined : json['vIPCodes'],
    };
}

export function PreCheckInRuleTypeToJSON(value?: PreCheckInRuleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'marketCodes': value.marketCodes,
        'memberships': value.memberships === undefined ? undefined : ((value.memberships as Array<any>).map(MembershipTypeLevelTypeToJSON)),
        'newTimeSpan': TimeSpanTypeToJSON(value.newTimeSpan),
        'originCodes': value.originCodes,
        'ratePlans': value.ratePlans,
        'reservationTypes': value.reservationTypes,
        'ruleType': PreCheckInRuleTypeTypeToJSON(value.ruleType),
        'specials': value.specials,
        'timeLimit': PreCheckInTimeRuleTypesToJSON(value.timeLimit),
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
        'vIPCodes': value.vIPCodes,
    };
}
