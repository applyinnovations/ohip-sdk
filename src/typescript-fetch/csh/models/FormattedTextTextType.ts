/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Provides text and indicates whether it is formatted or not.
 * @export
 * @interface FormattedTextTextType
 */
export interface FormattedTextTextType {
    /**
     * Language identification.
     * @type {string}
     * @memberof FormattedTextTextType
     */
    language?: string;
    /**
     * Property Value
     * @type {string}
     * @memberof FormattedTextTextType
     */
    value?: string;
}

/**
 * Check if a given object implements the FormattedTextTextType interface.
 */
export function instanceOfFormattedTextTextType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FormattedTextTextTypeFromJSON(json: any): FormattedTextTextType {
    return FormattedTextTextTypeFromJSONTyped(json, false);
}

export function FormattedTextTextTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormattedTextTextType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'language': !exists(json, 'language') ? undefined : json['language'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function FormattedTextTextTypeToJSON(value?: FormattedTextTextType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'language': value.language,
        'value': value.value,
    };
}

