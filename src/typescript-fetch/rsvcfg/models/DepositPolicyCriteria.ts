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
import type { HotelConfigDepositPoliciesType } from './HotelConfigDepositPoliciesType';
import {
    HotelConfigDepositPoliciesTypeFromJSON,
    HotelConfigDepositPoliciesTypeFromJSONTyped,
    HotelConfigDepositPoliciesTypeToJSON,
} from './HotelConfigDepositPoliciesType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object that holds the details of hotel level Deposit Policy to be created.
 * @export
 * @interface DepositPolicyCriteria
 */
export interface DepositPolicyCriteria {
    /**
     * 
     * @type {HotelConfigDepositPoliciesType}
     * @memberof DepositPolicyCriteria
     */
    depositPolicy?: HotelConfigDepositPoliciesType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof DepositPolicyCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof DepositPolicyCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the DepositPolicyCriteria interface.
 */
export function instanceOfDepositPolicyCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DepositPolicyCriteriaFromJSON(json: any): DepositPolicyCriteria {
    return DepositPolicyCriteriaFromJSONTyped(json, false);
}

export function DepositPolicyCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositPolicyCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'depositPolicy': !exists(json, 'depositPolicy') ? undefined : HotelConfigDepositPoliciesTypeFromJSON(json['depositPolicy']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function DepositPolicyCriteriaToJSON(value?: DepositPolicyCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'depositPolicy': HotelConfigDepositPoliciesTypeToJSON(value.depositPolicy),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

