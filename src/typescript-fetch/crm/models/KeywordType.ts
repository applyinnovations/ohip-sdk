/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { KeywordDetailType } from './KeywordDetailType';
import {
    KeywordDetailTypeFromJSON,
    KeywordDetailTypeFromJSONTyped,
    KeywordDetailTypeToJSON,
} from './KeywordDetailType';

/**
 * 
 * @export
 * @interface KeywordType
 */
export interface KeywordType {
    /**
     * The keyword value.
     * @type {string}
     * @memberof KeywordType
     */
    keyword?: string;
    /**
     * 
     * @type {KeywordDetailType}
     * @memberof KeywordType
     */
    keywordDetail?: KeywordDetailType;
    /**
     * The type of keyword
     * @type {string}
     * @memberof KeywordType
     */
    type?: string;
}

/**
 * Check if a given object implements the KeywordType interface.
 */
export function instanceOfKeywordType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KeywordTypeFromJSON(json: any): KeywordType {
    return KeywordTypeFromJSONTyped(json, false);
}

export function KeywordTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeywordType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'keyword': !exists(json, 'keyword') ? undefined : json['keyword'],
        'keywordDetail': !exists(json, 'keywordDetail') ? undefined : KeywordDetailTypeFromJSON(json['keywordDetail']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function KeywordTypeToJSON(value?: KeywordType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'keyword': value.keyword,
        'keywordDetail': KeywordDetailTypeToJSON(value.keywordDetail),
        'type': value.type,
    };
}

