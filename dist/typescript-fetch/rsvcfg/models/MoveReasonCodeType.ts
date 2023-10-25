/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
 * @interface MoveReasonCodeType
 */
export interface MoveReasonCodeType {
    /**
     * Common Master unique code.
     * @type {string}
     * @memberof MoveReasonCodeType
     */
    code?: string;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof MoveReasonCodeType
     */
    description?: TranslationTextType2000;
    /**
     * Common Master record sequence number.
     * @type {number}
     * @memberof MoveReasonCodeType
     */
    displayOrder?: number;
}

/**
 * Check if a given object implements the MoveReasonCodeType interface.
 */
export function instanceOfMoveReasonCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MoveReasonCodeTypeFromJSON(json: any): MoveReasonCodeType {
    return MoveReasonCodeTypeFromJSONTyped(json, false);
}

export function MoveReasonCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoveReasonCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'displayOrder': !exists(json, 'displayOrder') ? undefined : json['displayOrder'],
    };
}

export function MoveReasonCodeTypeToJSON(value?: MoveReasonCodeType | null): any {
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
    };
}

