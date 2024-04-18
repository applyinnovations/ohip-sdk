/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';

/**
 * Contains Common Master configuration detail.
 * @export
 * @interface ActivityResultsConfigDetailType
 */
export interface ActivityResultsConfigDetailType {
    /**
     * Common Master unique code.
     * @type {string}
     * @memberof ActivityResultsConfigDetailType
     */
    code?: string;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof ActivityResultsConfigDetailType
     */
    description?: TranslationTextType2000;
    /**
     * Common Master record sequence number.
     * @type {number}
     * @memberof ActivityResultsConfigDetailType
     */
    displayOrder?: number;
    /**
     * Indicates the Activity Results is inactive or not.
     * @type {boolean}
     * @memberof ActivityResultsConfigDetailType
     */
    inactive?: boolean;
}

/**
 * Check if a given object implements the ActivityResultsConfigDetailType interface.
 */
export function instanceOfActivityResultsConfigDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivityResultsConfigDetailTypeFromJSON(json: any): ActivityResultsConfigDetailType {
    return ActivityResultsConfigDetailTypeFromJSONTyped(json, false);
}

export function ActivityResultsConfigDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityResultsConfigDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'displayOrder': !exists(json, 'displayOrder') ? undefined : json['displayOrder'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
    };
}

export function ActivityResultsConfigDetailTypeToJSON(value?: ActivityResultsConfigDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': TranslationTextType2000ToJSON(value.description),
        'displayOrder': value.displayOrder,
        'inactive': value.inactive,
    };
}
