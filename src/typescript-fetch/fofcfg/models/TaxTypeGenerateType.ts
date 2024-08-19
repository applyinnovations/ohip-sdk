/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TaxTypeGenerateScheduleType } from './TaxTypeGenerateScheduleType';
import {
    TaxTypeGenerateScheduleTypeFromJSON,
    TaxTypeGenerateScheduleTypeFromJSONTyped,
    TaxTypeGenerateScheduleTypeToJSON,
} from './TaxTypeGenerateScheduleType';

/**
 * Defines the Calculation Rules for the Tax Type
 * @export
 * @interface TaxTypeGenerateType
 */
export interface TaxTypeGenerateType {
    /**
     * Code.
     * @type {string}
     * @memberof TaxTypeGenerateType
     */
    code?: string;
    /**
     * description.
     * @type {string}
     * @memberof TaxTypeGenerateType
     */
    description?: string;
    /**
     * Defines the Calculation Rule for the Tax Type for a specific date schedule
     * @type {Array<TaxTypeGenerateScheduleType>}
     * @memberof TaxTypeGenerateType
     */
    schedule?: Array<TaxTypeGenerateScheduleType>;
}

/**
 * Check if a given object implements the TaxTypeGenerateType interface.
 */
export function instanceOfTaxTypeGenerateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaxTypeGenerateTypeFromJSON(json: any): TaxTypeGenerateType {
    return TaxTypeGenerateTypeFromJSONTyped(json, false);
}

export function TaxTypeGenerateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxTypeGenerateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'schedule': !exists(json, 'schedule') ? undefined : ((json['schedule'] as Array<any>).map(TaxTypeGenerateScheduleTypeFromJSON)),
    };
}

export function TaxTypeGenerateTypeToJSON(value?: TaxTypeGenerateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'schedule': value.schedule === undefined ? undefined : ((value.schedule as Array<any>).map(TaxTypeGenerateScheduleTypeToJSON)),
    };
}

