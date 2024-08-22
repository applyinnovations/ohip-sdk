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
import type { StagedProfileBillingInstructionType } from './StagedProfileBillingInstructionType';
import {
    StagedProfileBillingInstructionTypeFromJSON,
    StagedProfileBillingInstructionTypeFromJSONTyped,
    StagedProfileBillingInstructionTypeToJSON,
} from './StagedProfileBillingInstructionType';
import type { StagedProfileTrxInfoType } from './StagedProfileTrxInfoType';
import {
    StagedProfileTrxInfoTypeFromJSON,
    StagedProfileTrxInfoTypeFromJSONTyped,
    StagedProfileTrxInfoTypeToJSON,
} from './StagedProfileTrxInfoType';

/**
 * 
 * @export
 * @interface StagedProfileRoutingInstructionType
 */
export interface StagedProfileRoutingInstructionType {
    /**
     * 
     * @type {StagedProfileBillingInstructionType}
     * @memberof StagedProfileRoutingInstructionType
     */
    billingInstruction?: StagedProfileBillingInstructionType;
    /**
     * 
     * @type {StagedProfileTrxInfoType}
     * @memberof StagedProfileRoutingInstructionType
     */
    transactionInfo?: StagedProfileTrxInfoType;
}

/**
 * Check if a given object implements the StagedProfileRoutingInstructionType interface.
 */
export function instanceOfStagedProfileRoutingInstructionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StagedProfileRoutingInstructionTypeFromJSON(json: any): StagedProfileRoutingInstructionType {
    return StagedProfileRoutingInstructionTypeFromJSONTyped(json, false);
}

export function StagedProfileRoutingInstructionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileRoutingInstructionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'billingInstruction': !exists(json, 'billingInstruction') ? undefined : StagedProfileBillingInstructionTypeFromJSON(json['billingInstruction']),
        'transactionInfo': !exists(json, 'transactionInfo') ? undefined : StagedProfileTrxInfoTypeFromJSON(json['transactionInfo']),
    };
}

export function StagedProfileRoutingInstructionTypeToJSON(value?: StagedProfileRoutingInstructionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'billingInstruction': StagedProfileBillingInstructionTypeToJSON(value.billingInstruction),
        'transactionInfo': StagedProfileTrxInfoTypeToJSON(value.transactionInfo),
    };
}

