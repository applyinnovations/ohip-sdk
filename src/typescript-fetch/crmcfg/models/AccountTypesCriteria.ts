/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccountTypeType } from './AccountTypeType';
import {
    AccountTypeTypeFromJSON,
    AccountTypeTypeFromJSONTyped,
    AccountTypeTypeToJSON,
} from './AccountTypeType';
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
 * Request object for creating Account Types.
 * @export
 * @interface AccountTypesCriteria
 */
export interface AccountTypesCriteria {
    /**
     * List of Account Types.
     * @type {Array<AccountTypeType>}
     * @memberof AccountTypesCriteria
     */
    accountTypes?: Array<AccountTypeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof AccountTypesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AccountTypesCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AccountTypesCriteria interface.
 */
export function instanceOfAccountTypesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountTypesCriteriaFromJSON(json: any): AccountTypesCriteria {
    return AccountTypesCriteriaFromJSONTyped(json, false);
}

export function AccountTypesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountTypesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountTypes': !exists(json, 'accountTypes') ? undefined : ((json['accountTypes'] as Array<any>).map(AccountTypeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AccountTypesCriteriaToJSON(value?: AccountTypesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountTypes': value.accountTypes === undefined ? undefined : ((value.accountTypes as Array<any>).map(AccountTypeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

