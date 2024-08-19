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
import type { PayeeInfoType } from './PayeeInfoType';
import {
    PayeeInfoTypeFromJSON,
    PayeeInfoTypeFromJSONTyped,
    PayeeInfoTypeToJSON,
} from './PayeeInfoType';
import type { ResvRoutingCriteriaTypeFolioGuestInfo } from './ResvRoutingCriteriaTypeFolioGuestInfo';
import {
    ResvRoutingCriteriaTypeFolioGuestInfoFromJSON,
    ResvRoutingCriteriaTypeFolioGuestInfoFromJSONTyped,
    ResvRoutingCriteriaTypeFolioGuestInfoToJSON,
} from './ResvRoutingCriteriaTypeFolioGuestInfo';
import type { RoutingInstructionType } from './RoutingInstructionType';
import {
    RoutingInstructionTypeFromJSON,
    RoutingInstructionTypeFromJSONTyped,
    RoutingInstructionTypeToJSON,
} from './RoutingInstructionType';

/**
 * Folio routing type.
 * @export
 * @interface ResvRoutingCriteriaTypeFolio
 */
export interface ResvRoutingCriteriaTypeFolio {
    /**
     * Accounts Receivable.
     * @type {string}
     * @memberof ResvRoutingCriteriaTypeFolio
     */
    aRNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof ResvRoutingCriteriaTypeFolio
     */
    folioWindowNo?: number;
    /**
     * 
     * @type {ResvRoutingCriteriaTypeFolioGuestInfo}
     * @memberof ResvRoutingCriteriaTypeFolio
     */
    guestInfo?: ResvRoutingCriteriaTypeFolioGuestInfo;
    /**
     * Set of routing instructions associated to this routing type.
     * @type {Array<RoutingInstructionType>}
     * @memberof ResvRoutingCriteriaTypeFolio
     */
    instructions?: Array<RoutingInstructionType>;
    /**
     * 
     * @type {PayeeInfoType}
     * @memberof ResvRoutingCriteriaTypeFolio
     */
    payeeInfo?: PayeeInfoType;
    /**
     * 
     * @type {string}
     * @memberof ResvRoutingCriteriaTypeFolio
     */
    paymentMethod?: string;
}

/**
 * Check if a given object implements the ResvRoutingCriteriaTypeFolio interface.
 */
export function instanceOfResvRoutingCriteriaTypeFolio(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResvRoutingCriteriaTypeFolioFromJSON(json: any): ResvRoutingCriteriaTypeFolio {
    return ResvRoutingCriteriaTypeFolioFromJSONTyped(json, false);
}

export function ResvRoutingCriteriaTypeFolioFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResvRoutingCriteriaTypeFolio {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aRNumber': !exists(json, 'aRNumber') ? undefined : json['aRNumber'],
        'folioWindowNo': !exists(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'guestInfo': !exists(json, 'guestInfo') ? undefined : ResvRoutingCriteriaTypeFolioGuestInfoFromJSON(json['guestInfo']),
        'instructions': !exists(json, 'instructions') ? undefined : ((json['instructions'] as Array<any>).map(RoutingInstructionTypeFromJSON)),
        'payeeInfo': !exists(json, 'payeeInfo') ? undefined : PayeeInfoTypeFromJSON(json['payeeInfo']),
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : json['paymentMethod'],
    };
}

export function ResvRoutingCriteriaTypeFolioToJSON(value?: ResvRoutingCriteriaTypeFolio | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aRNumber': value.aRNumber,
        'folioWindowNo': value.folioWindowNo,
        'guestInfo': ResvRoutingCriteriaTypeFolioGuestInfoToJSON(value.guestInfo),
        'instructions': value.instructions === undefined ? undefined : ((value.instructions as Array<any>).map(RoutingInstructionTypeToJSON)),
        'payeeInfo': PayeeInfoTypeToJSON(value.payeeInfo),
        'paymentMethod': value.paymentMethod,
    };
}

