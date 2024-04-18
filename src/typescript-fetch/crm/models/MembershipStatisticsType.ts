/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MembershipStatisticsSummaryType } from './MembershipStatisticsSummaryType';
import {
    MembershipStatisticsSummaryTypeFromJSON,
    MembershipStatisticsSummaryTypeFromJSONTyped,
    MembershipStatisticsSummaryTypeToJSON,
} from './MembershipStatisticsSummaryType';
import type { MembershipTransactionSummaryType } from './MembershipTransactionSummaryType';
import {
    MembershipTransactionSummaryTypeFromJSON,
    MembershipTransactionSummaryTypeFromJSONTyped,
    MembershipTransactionSummaryTypeToJSON,
} from './MembershipTransactionSummaryType';

/**
 * List of membership transactions and the summary of the different total points statistics.
 * @export
 * @interface MembershipStatisticsType
 */
export interface MembershipStatisticsType {
    /**
     * The membership card number.
     * @type {string}
     * @memberof MembershipStatisticsType
     */
    cardNumber?: string;
    /**
     * The level of the membership.
     * @type {string}
     * @memberof MembershipStatisticsType
     */
    level?: string;
    /**
     * 
     * @type {MembershipStatisticsSummaryType}
     * @memberof MembershipStatisticsType
     */
    statisticsSummary?: MembershipStatisticsSummaryType;
    /**
     * Activity or a transaction related to the Membership.
     * @type {Array<MembershipTransactionSummaryType>}
     * @memberof MembershipStatisticsType
     */
    transactions?: Array<MembershipTransactionSummaryType>;
    /**
     * The type of membership.
     * @type {string}
     * @memberof MembershipStatisticsType
     */
    type?: string;
}

/**
 * Check if a given object implements the MembershipStatisticsType interface.
 */
export function instanceOfMembershipStatisticsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipStatisticsTypeFromJSON(json: any): MembershipStatisticsType {
    return MembershipStatisticsTypeFromJSONTyped(json, false);
}

export function MembershipStatisticsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipStatisticsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardNumber': !exists(json, 'cardNumber') ? undefined : json['cardNumber'],
        'level': !exists(json, 'level') ? undefined : json['level'],
        'statisticsSummary': !exists(json, 'statisticsSummary') ? undefined : MembershipStatisticsSummaryTypeFromJSON(json['statisticsSummary']),
        'transactions': !exists(json, 'transactions') ? undefined : ((json['transactions'] as Array<any>).map(MembershipTransactionSummaryTypeFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function MembershipStatisticsTypeToJSON(value?: MembershipStatisticsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardNumber': value.cardNumber,
        'level': value.level,
        'statisticsSummary': MembershipStatisticsSummaryTypeToJSON(value.statisticsSummary),
        'transactions': value.transactions === undefined ? undefined : ((value.transactions as Array<any>).map(MembershipTransactionSummaryTypeToJSON)),
        'type': value.type,
    };
}
