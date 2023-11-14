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
import type { AuthorizationHistoryTypeStatusFailed } from './AuthorizationHistoryTypeStatusFailed';
import {
    AuthorizationHistoryTypeStatusFailedFromJSON,
    AuthorizationHistoryTypeStatusFailedFromJSONTyped,
    AuthorizationHistoryTypeStatusFailedToJSON,
} from './AuthorizationHistoryTypeStatusFailed';
import type { AuthorizationHistoryTypeStatusSuccessful } from './AuthorizationHistoryTypeStatusSuccessful';
import {
    AuthorizationHistoryTypeStatusSuccessfulFromJSON,
    AuthorizationHistoryTypeStatusSuccessfulFromJSONTyped,
    AuthorizationHistoryTypeStatusSuccessfulToJSON,
} from './AuthorizationHistoryTypeStatusSuccessful';

/**
 * Contains he authorization status indicator - either Successful for Failed.
 * @export
 * @interface AuthorizationHistoryTypeStatus
 */
export interface AuthorizationHistoryTypeStatus {
    /**
     * 
     * @type {AuthorizationHistoryTypeStatusFailed}
     * @memberof AuthorizationHistoryTypeStatus
     */
    failed?: AuthorizationHistoryTypeStatusFailed;
    /**
     * 
     * @type {AuthorizationHistoryTypeStatusSuccessful}
     * @memberof AuthorizationHistoryTypeStatus
     */
    successful?: AuthorizationHistoryTypeStatusSuccessful;
}

/**
 * Check if a given object implements the AuthorizationHistoryTypeStatus interface.
 */
export function instanceOfAuthorizationHistoryTypeStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthorizationHistoryTypeStatusFromJSON(json: any): AuthorizationHistoryTypeStatus {
    return AuthorizationHistoryTypeStatusFromJSONTyped(json, false);
}

export function AuthorizationHistoryTypeStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationHistoryTypeStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'failed': !exists(json, 'failed') ? undefined : AuthorizationHistoryTypeStatusFailedFromJSON(json['failed']),
        'successful': !exists(json, 'successful') ? undefined : AuthorizationHistoryTypeStatusSuccessfulFromJSON(json['successful']),
    };
}

export function AuthorizationHistoryTypeStatusToJSON(value?: AuthorizationHistoryTypeStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'failed': AuthorizationHistoryTypeStatusFailedToJSON(value.failed),
        'successful': AuthorizationHistoryTypeStatusSuccessfulToJSON(value.successful),
    };
}
