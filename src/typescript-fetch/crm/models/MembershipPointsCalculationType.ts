/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { MembershipPointsCalculationProcessType } from './MembershipPointsCalculationProcessType';
import {
    MembershipPointsCalculationProcessTypeFromJSON,
    MembershipPointsCalculationProcessTypeFromJSONTyped,
    MembershipPointsCalculationProcessTypeToJSON,
} from './MembershipPointsCalculationProcessType';

/**
 * Details needed for calculating membership points.
 * @export
 * @interface MembershipPointsCalculationType
 */
export interface MembershipPointsCalculationType {
    /**
     * Award Code to be used to generate awards for the membership type. Available for Automatic Generation of Awards (Issue Awards) only.
     * @type {string}
     * @memberof MembershipPointsCalculationType
     */
    awardCode?: string;
    /**
     * The last date for which calculate or expire points. Available for Calculate Points and Expire Award Points only.
     * @type {string}
     * @memberof MembershipPointsCalculationType
     */
    calculateUntilDate?: string;
    /**
     * Membership type for which point calculation process is to be run.
     * @type {string}
     * @memberof MembershipPointsCalculationType
     */
    membershipType?: string;
    /**
     * 
     * @type {MembershipPointsCalculationProcessType}
     * @memberof MembershipPointsCalculationType
     */
    processType?: MembershipPointsCalculationProcessType;
}

/**
 * Check if a given object implements the MembershipPointsCalculationType interface.
 */
export function instanceOfMembershipPointsCalculationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipPointsCalculationTypeFromJSON(json: any): MembershipPointsCalculationType {
    return MembershipPointsCalculationTypeFromJSONTyped(json, false);
}

export function MembershipPointsCalculationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipPointsCalculationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'awardCode': !exists(json, 'awardCode') ? undefined : json['awardCode'],
        'calculateUntilDate': !exists(json, 'calculateUntilDate') ? undefined : json['calculateUntilDate'],
        'membershipType': !exists(json, 'membershipType') ? undefined : json['membershipType'],
        'processType': !exists(json, 'processType') ? undefined : MembershipPointsCalculationProcessTypeFromJSON(json['processType']),
    };
}

export function MembershipPointsCalculationTypeToJSON(value?: MembershipPointsCalculationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'awardCode': value.awardCode,
        'calculateUntilDate': value.calculateUntilDate,
        'membershipType': value.membershipType,
        'processType': MembershipPointsCalculationProcessTypeToJSON(value.processType),
    };
}

