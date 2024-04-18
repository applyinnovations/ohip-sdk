/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AmountDeterminationType } from './AmountDeterminationType';
import {
    AmountDeterminationTypeFromJSON,
    AmountDeterminationTypeFromJSONTyped,
    AmountDeterminationTypeToJSON,
} from './AmountDeterminationType';

/**
 * 
 * @export
 * @interface PackageTransactionCodeType
 */
export interface PackageTransactionCodeType {
    /**
     * Posting / transaction code.
     * @type {string}
     * @memberof PackageTransactionCodeType
     */
    code?: string;
    /**
     * The description of the code.
     * @type {string}
     * @memberof PackageTransactionCodeType
     */
    description?: string;
    /**
     * 
     * @type {AmountDeterminationType}
     * @memberof PackageTransactionCodeType
     */
    type?: AmountDeterminationType;
}

/**
 * Check if a given object implements the PackageTransactionCodeType interface.
 */
export function instanceOfPackageTransactionCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackageTransactionCodeTypeFromJSON(json: any): PackageTransactionCodeType {
    return PackageTransactionCodeTypeFromJSONTyped(json, false);
}

export function PackageTransactionCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageTransactionCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': !exists(json, 'type') ? undefined : AmountDeterminationTypeFromJSON(json['type']),
    };
}

export function PackageTransactionCodeTypeToJSON(value?: PackageTransactionCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'type': AmountDeterminationTypeToJSON(value.type),
    };
}
