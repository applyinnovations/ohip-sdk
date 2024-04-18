/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * 
 * @export
 * @interface KeywordDetailType
 */
export interface KeywordDetailType {
    /**
     * The new keyword value.
     * @type {string}
     * @memberof KeywordDetailType
     */
    newKeyword?: string;
}

/**
 * Check if a given object implements the KeywordDetailType interface.
 */
export function instanceOfKeywordDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KeywordDetailTypeFromJSON(json: any): KeywordDetailType {
    return KeywordDetailTypeFromJSONTyped(json, false);
}

export function KeywordDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeywordDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'newKeyword': !exists(json, 'newKeyword') ? undefined : json['newKeyword'],
    };
}

export function KeywordDetailTypeToJSON(value?: KeywordDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'newKeyword': value.newKeyword,
    };
}
