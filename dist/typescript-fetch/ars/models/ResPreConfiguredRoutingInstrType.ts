/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuthorizerInfoType } from './AuthorizerInfoType';
import {
    AuthorizerInfoTypeFromJSON,
    AuthorizerInfoTypeFromJSONTyped,
    AuthorizerInfoTypeToJSON,
} from './AuthorizerInfoType';
import type { ResProfileTypeType } from './ResProfileTypeType';
import {
    ResProfileTypeTypeFromJSON,
    ResProfileTypeTypeFromJSONTyped,
    ResProfileTypeTypeToJSON,
} from './ResProfileTypeType';

/**
 * Instruction to attach Pre-Configured Routing Instructions to a Reservation.
 * @export
 * @interface ResPreConfiguredRoutingInstrType
 */
export interface ResPreConfiguredRoutingInstrType {
    /**
     * 
     * @type {AuthorizerInfoType}
     * @memberof ResPreConfiguredRoutingInstrType
     */
    authorizerInfo?: AuthorizerInfoType;
    /**
     * 
     * @type {ResProfileTypeType}
     * @memberof ResPreConfiguredRoutingInstrType
     */
    profileType?: ResProfileTypeType;
    /**
     * Promotion Code with attached Complimentary Routing.
     * @type {string}
     * @memberof ResPreConfiguredRoutingInstrType
     */
    promotionCode?: string;
    /**
     * Rate Code with attached Routing Instruction.
     * @type {string}
     * @memberof ResPreConfiguredRoutingInstrType
     */
    ratePlanCode?: string;
}

/**
 * Check if a given object implements the ResPreConfiguredRoutingInstrType interface.
 */
export function instanceOfResPreConfiguredRoutingInstrType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResPreConfiguredRoutingInstrTypeFromJSON(json: any): ResPreConfiguredRoutingInstrType {
    return ResPreConfiguredRoutingInstrTypeFromJSONTyped(json, false);
}

export function ResPreConfiguredRoutingInstrTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResPreConfiguredRoutingInstrType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorizerInfo': !exists(json, 'authorizerInfo') ? undefined : AuthorizerInfoTypeFromJSON(json['authorizerInfo']),
        'profileType': !exists(json, 'profileType') ? undefined : ResProfileTypeTypeFromJSON(json['profileType']),
        'promotionCode': !exists(json, 'promotionCode') ? undefined : json['promotionCode'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
    };
}

export function ResPreConfiguredRoutingInstrTypeToJSON(value?: ResPreConfiguredRoutingInstrType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authorizerInfo': AuthorizerInfoTypeToJSON(value.authorizerInfo),
        'profileType': ResProfileTypeTypeToJSON(value.profileType),
        'promotionCode': value.promotionCode,
        'ratePlanCode': value.ratePlanCode,
    };
}

