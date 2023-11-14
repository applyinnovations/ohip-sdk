/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DepositPolicyDetailsDepositPolicies } from './DepositPolicyDetailsDepositPolicies';
import {
    DepositPolicyDetailsDepositPoliciesFromJSON,
    DepositPolicyDetailsDepositPoliciesFromJSONTyped,
    DepositPolicyDetailsDepositPoliciesToJSON,
} from './DepositPolicyDetailsDepositPolicies';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response for fetch Deposit Policies in hotel level.
 * @export
 * @interface DepositPolicyDetails
 */
export interface DepositPolicyDetails {
    /**
     * 
     * @type {DepositPolicyDetailsDepositPolicies}
     * @memberof DepositPolicyDetails
     */
    depositPolicies?: DepositPolicyDetailsDepositPolicies;
    /**
     * 
     * @type {Links}
     * @memberof DepositPolicyDetails
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof DepositPolicyDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the DepositPolicyDetails interface.
 */
export function instanceOfDepositPolicyDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DepositPolicyDetailsFromJSON(json: any): DepositPolicyDetails {
    return DepositPolicyDetailsFromJSONTyped(json, false);
}

export function DepositPolicyDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositPolicyDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'depositPolicies': !exists(json, 'depositPolicies') ? undefined : DepositPolicyDetailsDepositPoliciesFromJSON(json['depositPolicies']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function DepositPolicyDetailsToJSON(value?: DepositPolicyDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'depositPolicies': DepositPolicyDetailsDepositPoliciesToJSON(value.depositPolicies),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
