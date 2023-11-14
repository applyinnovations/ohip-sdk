/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccountPriorityType } from './AccountPriorityType';
import {
    AccountPriorityTypeFromJSON,
    AccountPriorityTypeFromJSONTyped,
    AccountPriorityTypeToJSON,
} from './AccountPriorityType';

/**
 * List of Account Priorities.
 * @export
 * @interface AccountPrioritiesType
 */
export interface AccountPrioritiesType extends Array<AccountPriorityType> {
}

/**
 * Check if a given object implements the AccountPrioritiesType interface.
 */
export function instanceOfAccountPrioritiesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountPrioritiesTypeFromJSON(json: any): AccountPrioritiesType {
    return AccountPrioritiesTypeFromJSONTyped(json, false);
}

export function AccountPrioritiesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountPrioritiesType {
    return json;
}

export function AccountPrioritiesTypeToJSON(value?: AccountPrioritiesType | null): any {
    return value;
}
