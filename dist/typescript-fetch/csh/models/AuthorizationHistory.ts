/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuthorizationHistoryType } from './AuthorizationHistoryType';
import {
    AuthorizationHistoryTypeFromJSON,
    AuthorizationHistoryTypeFromJSONTyped,
    AuthorizationHistoryTypeToJSON,
} from './AuthorizationHistoryType';
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
 * The result element containing a history list of credit card authorizations for a particular reservation, filtered by the requested criteria.
 * @export
 * @interface AuthorizationHistory
 */
export interface AuthorizationHistory {
    /**
     * The collection of credit card history records.
     * @type {Array<AuthorizationHistoryType>}
     * @memberof AuthorizationHistory
     */
    folioHistory?: Array<AuthorizationHistoryType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof AuthorizationHistory
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AuthorizationHistory
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AuthorizationHistory interface.
 */
export function instanceOfAuthorizationHistory(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthorizationHistoryFromJSON(json: any): AuthorizationHistory {
    return AuthorizationHistoryFromJSONTyped(json, false);
}

export function AuthorizationHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationHistory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'folioHistory': !exists(json, 'folioHistory') ? undefined : ((json['folioHistory'] as Array<any>).map(AuthorizationHistoryTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AuthorizationHistoryToJSON(value?: AuthorizationHistory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'folioHistory': value.folioHistory === undefined ? undefined : ((value.folioHistory as Array<any>).map(AuthorizationHistoryTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

