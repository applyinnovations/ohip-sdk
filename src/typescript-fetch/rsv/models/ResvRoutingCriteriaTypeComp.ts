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
import type { CompAccountingType } from './CompAccountingType';
import {
    CompAccountingTypeFromJSON,
    CompAccountingTypeFromJSONTyped,
    CompAccountingTypeToJSON,
} from './CompAccountingType';
import type { CompRoutingRequestType } from './CompRoutingRequestType';
import {
    CompRoutingRequestTypeFromJSON,
    CompRoutingRequestTypeFromJSONTyped,
    CompRoutingRequestTypeToJSON,
} from './CompRoutingRequestType';
import type { PayeeInfoType } from './PayeeInfoType';
import {
    PayeeInfoTypeFromJSON,
    PayeeInfoTypeFromJSONTyped,
    PayeeInfoTypeToJSON,
} from './PayeeInfoType';
import type { RoutingInstructionType } from './RoutingInstructionType';
import {
    RoutingInstructionTypeFromJSON,
    RoutingInstructionTypeFromJSONTyped,
    RoutingInstructionTypeToJSON,
} from './RoutingInstructionType';

/**
 * Comp Accounting Routing Info
 * @export
 * @interface ResvRoutingCriteriaTypeComp
 */
export interface ResvRoutingCriteriaTypeComp {
    /**
     * 
     * @type {CompAccountingType}
     * @memberof ResvRoutingCriteriaTypeComp
     */
    compAccountingInfo?: CompAccountingType;
    /**
     * 
     * @type {CompRoutingRequestType}
     * @memberof ResvRoutingCriteriaTypeComp
     */
    compRequestInfo?: CompRoutingRequestType;
    /**
     * 
     * @type {number}
     * @memberof ResvRoutingCriteriaTypeComp
     */
    folioWindowNo?: number;
    /**
     * Set of routing instructions associated to this routing type.
     * @type {Array<RoutingInstructionType>}
     * @memberof ResvRoutingCriteriaTypeComp
     */
    instructions?: Array<RoutingInstructionType>;
    /**
     * 
     * @type {PayeeInfoType}
     * @memberof ResvRoutingCriteriaTypeComp
     */
    payeeInfo?: PayeeInfoType;
}

/**
 * Check if a given object implements the ResvRoutingCriteriaTypeComp interface.
 */
export function instanceOfResvRoutingCriteriaTypeComp(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResvRoutingCriteriaTypeCompFromJSON(json: any): ResvRoutingCriteriaTypeComp {
    return ResvRoutingCriteriaTypeCompFromJSONTyped(json, false);
}

export function ResvRoutingCriteriaTypeCompFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResvRoutingCriteriaTypeComp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compAccountingInfo': !exists(json, 'compAccountingInfo') ? undefined : CompAccountingTypeFromJSON(json['compAccountingInfo']),
        'compRequestInfo': !exists(json, 'compRequestInfo') ? undefined : CompRoutingRequestTypeFromJSON(json['compRequestInfo']),
        'folioWindowNo': !exists(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'instructions': !exists(json, 'instructions') ? undefined : ((json['instructions'] as Array<any>).map(RoutingInstructionTypeFromJSON)),
        'payeeInfo': !exists(json, 'payeeInfo') ? undefined : PayeeInfoTypeFromJSON(json['payeeInfo']),
    };
}

export function ResvRoutingCriteriaTypeCompToJSON(value?: ResvRoutingCriteriaTypeComp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'compAccountingInfo': CompAccountingTypeToJSON(value.compAccountingInfo),
        'compRequestInfo': CompRoutingRequestTypeToJSON(value.compRequestInfo),
        'folioWindowNo': value.folioWindowNo,
        'instructions': value.instructions === undefined ? undefined : ((value.instructions as Array<any>).map(RoutingInstructionTypeToJSON)),
        'payeeInfo': PayeeInfoTypeToJSON(value.payeeInfo),
    };
}
