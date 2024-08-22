/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BillingInstructionType } from './BillingInstructionType';
import {
    BillingInstructionTypeFromJSON,
    BillingInstructionTypeFromJSONTyped,
    BillingInstructionTypeToJSON,
} from './BillingInstructionType';
import type { TrxInfoType } from './TrxInfoType';
import {
    TrxInfoTypeFromJSON,
    TrxInfoTypeFromJSONTyped,
    TrxInfoTypeToJSON,
} from './TrxInfoType';

/**
 * The type contains routing instructions for the profile.
 * @export
 * @interface ProfileRoutingInstructionsType
 */
export interface ProfileRoutingInstructionsType {
    /**
     * A flag which determines whether the instructions has to be automatically populated for this profile or not.
     * @type {boolean}
     * @memberof ProfileRoutingInstructionsType
     */
    autoPopulateRouting?: boolean;
    /**
     * Set of Billing Instruction codes.
     * @type {Array<BillingInstructionType>}
     * @memberof ProfileRoutingInstructionsType
     */
    billingInstructions?: Array<BillingInstructionType>;
    /**
     * List of Transaction codes info.
     * @type {Array<TrxInfoType>}
     * @memberof ProfileRoutingInstructionsType
     */
    transactionCodes?: Array<TrxInfoType>;
}

/**
 * Check if a given object implements the ProfileRoutingInstructionsType interface.
 */
export function instanceOfProfileRoutingInstructionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileRoutingInstructionsTypeFromJSON(json: any): ProfileRoutingInstructionsType {
    return ProfileRoutingInstructionsTypeFromJSONTyped(json, false);
}

export function ProfileRoutingInstructionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileRoutingInstructionsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoPopulateRouting': !exists(json, 'autoPopulateRouting') ? undefined : json['autoPopulateRouting'],
        'billingInstructions': !exists(json, 'billingInstructions') ? undefined : ((json['billingInstructions'] as Array<any>).map(BillingInstructionTypeFromJSON)),
        'transactionCodes': !exists(json, 'transactionCodes') ? undefined : ((json['transactionCodes'] as Array<any>).map(TrxInfoTypeFromJSON)),
    };
}

export function ProfileRoutingInstructionsTypeToJSON(value?: ProfileRoutingInstructionsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autoPopulateRouting': value.autoPopulateRouting,
        'billingInstructions': value.billingInstructions === undefined ? undefined : ((value.billingInstructions as Array<any>).map(BillingInstructionTypeToJSON)),
        'transactionCodes': value.transactionCodes === undefined ? undefined : ((value.transactionCodes as Array<any>).map(TrxInfoTypeToJSON)),
    };
}

