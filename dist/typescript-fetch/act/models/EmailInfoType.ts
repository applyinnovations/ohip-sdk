/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EmailType } from './EmailType';
import {
    EmailTypeFromJSON,
    EmailTypeFromJSONTyped,
    EmailTypeToJSON,
} from './EmailType';

/**
 * Information on an email for the customer.
 * @export
 * @interface EmailInfoType
 */
export interface EmailInfoType {
    /**
     * 
     * @type {EmailType}
     * @memberof EmailInfoType
     */
    email?: EmailType;
}

/**
 * Check if a given object implements the EmailInfoType interface.
 */
export function instanceOfEmailInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailInfoTypeFromJSON(json: any): EmailInfoType {
    return EmailInfoTypeFromJSONTyped(json, false);
}

export function EmailInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : EmailTypeFromJSON(json['email']),
    };
}

export function EmailInfoTypeToJSON(value?: EmailInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': EmailTypeToJSON(value.email),
    };
}

