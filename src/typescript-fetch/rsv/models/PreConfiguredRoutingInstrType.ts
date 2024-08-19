/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { BillingInstructionType } from './BillingInstructionType';
import {
    BillingInstructionTypeFromJSON,
    BillingInstructionTypeFromJSONTyped,
    BillingInstructionTypeToJSON,
} from './BillingInstructionType';
import type { PromoCodeCompRoutingType } from './PromoCodeCompRoutingType';
import {
    PromoCodeCompRoutingTypeFromJSON,
    PromoCodeCompRoutingTypeFromJSONTyped,
    PromoCodeCompRoutingTypeToJSON,
} from './PromoCodeCompRoutingType';
import type { ResAttachedProfileType } from './ResAttachedProfileType';
import {
    ResAttachedProfileTypeFromJSON,
    ResAttachedProfileTypeFromJSONTyped,
    ResAttachedProfileTypeToJSON,
} from './ResAttachedProfileType';
import type { TrxInfoType } from './TrxInfoType';
import {
    TrxInfoTypeFromJSON,
    TrxInfoTypeFromJSONTyped,
    TrxInfoTypeToJSON,
} from './TrxInfoType';

/**
 * Routing can be promotion code complimentary routing or profile routing.
 * @export
 * @interface PreConfiguredRoutingInstrType
 */
export interface PreConfiguredRoutingInstrType {
    /**
     * A flag which determines whether the Pre-configured Routing Instruction has to be automatically populated for this profile or not.
     * @type {string}
     * @memberof PreConfiguredRoutingInstrType
     */
    autoPopulateRouting?: string;
    /**
     * Set of Billing Instruction codes.
     * @type {Array<BillingInstructionType>}
     * @memberof PreConfiguredRoutingInstrType
     */
    billingInstructions?: Array<BillingInstructionType>;
    /**
     * 
     * @type {PromoCodeCompRoutingType}
     * @memberof PreConfiguredRoutingInstrType
     */
    compRoutingInstructionType?: PromoCodeCompRoutingType;
    /**
     * This is the actual rate code. This will be populated only for Pre-configured Routing Instructions for RateCodes.
     * @type {string}
     * @memberof PreConfiguredRoutingInstrType
     */
    ratePlanCode?: string;
    /**
     * 
     * @type {ResAttachedProfileType}
     * @memberof PreConfiguredRoutingInstrType
     */
    reservationProfile?: ResAttachedProfileType;
    /**
     * List of Transaction codes info.
     * @type {Array<TrxInfoType>}
     * @memberof PreConfiguredRoutingInstrType
     */
    transactionCodes?: Array<TrxInfoType>;
}

/**
 * Check if a given object implements the PreConfiguredRoutingInstrType interface.
 */
export function instanceOfPreConfiguredRoutingInstrType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PreConfiguredRoutingInstrTypeFromJSON(json: any): PreConfiguredRoutingInstrType {
    return PreConfiguredRoutingInstrTypeFromJSONTyped(json, false);
}

export function PreConfiguredRoutingInstrTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreConfiguredRoutingInstrType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoPopulateRouting': !exists(json, 'autoPopulateRouting') ? undefined : json['autoPopulateRouting'],
        'billingInstructions': !exists(json, 'billingInstructions') ? undefined : ((json['billingInstructions'] as Array<any>).map(BillingInstructionTypeFromJSON)),
        'compRoutingInstructionType': !exists(json, 'compRoutingInstructionType') ? undefined : PromoCodeCompRoutingTypeFromJSON(json['compRoutingInstructionType']),
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'reservationProfile': !exists(json, 'reservationProfile') ? undefined : ResAttachedProfileTypeFromJSON(json['reservationProfile']),
        'transactionCodes': !exists(json, 'transactionCodes') ? undefined : ((json['transactionCodes'] as Array<any>).map(TrxInfoTypeFromJSON)),
    };
}

export function PreConfiguredRoutingInstrTypeToJSON(value?: PreConfiguredRoutingInstrType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autoPopulateRouting': value.autoPopulateRouting,
        'billingInstructions': value.billingInstructions === undefined ? undefined : ((value.billingInstructions as Array<any>).map(BillingInstructionTypeToJSON)),
        'compRoutingInstructionType': PromoCodeCompRoutingTypeToJSON(value.compRoutingInstructionType),
        'ratePlanCode': value.ratePlanCode,
        'reservationProfile': ResAttachedProfileTypeToJSON(value.reservationProfile),
        'transactionCodes': value.transactionCodes === undefined ? undefined : ((value.transactionCodes as Array<any>).map(TrxInfoTypeToJSON)),
    };
}

