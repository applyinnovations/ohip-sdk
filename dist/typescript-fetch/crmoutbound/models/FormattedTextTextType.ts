/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
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
     * 
     * @type {string}
     * @memberof FormattedTextTextType
     */
    value?: string;
    /**
     * Language identification.
     * @type {string}
     * @memberof FormattedTextTextType
     */
    language?: string;
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
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'language': !exists(json, 'language') ? undefined : json['language'],
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
        
        'value': value.value,
        'language': value.language,
    };
}

