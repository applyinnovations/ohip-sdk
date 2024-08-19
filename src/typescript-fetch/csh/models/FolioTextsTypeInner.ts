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
 * 
 * @export
 * @interface FolioTextsTypeInner
 */
export interface FolioTextsTypeInner {
    /**
     * Row number of the additional text.
     * @type {number}
     * @memberof FolioTextsTypeInner
     */
    row?: number;
    /**
     * Additional text field to display on the folio.
     * @type {string}
     * @memberof FolioTextsTypeInner
     */
    text?: string;
}

/**
 * Check if a given object implements the FolioTextsTypeInner interface.
 */
export function instanceOfFolioTextsTypeInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FolioTextsTypeInnerFromJSON(json: any): FolioTextsTypeInner {
    return FolioTextsTypeInnerFromJSONTyped(json, false);
}

export function FolioTextsTypeInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioTextsTypeInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'row': !exists(json, 'row') ? undefined : json['row'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function FolioTextsTypeInnerToJSON(value?: FolioTextsTypeInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'row': value.row,
        'text': value.text,
    };
}

