/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Type for Folio Reason and Text.
 * @export
 * @interface FolioReasonType
 */
export interface FolioReasonType {
    /**
     * The Folio Reason Code.Currently Applicable only for Credit Bills.
     * @type {string}
     * @memberof FolioReasonType
     */
    code?: string;
    /**
     * The Folio Reason Text.Currently Applicable only for Credit Bills.
     * @type {string}
     * @memberof FolioReasonType
     */
    text?: string;
}

/**
 * Check if a given object implements the FolioReasonType interface.
 */
export function instanceOfFolioReasonType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FolioReasonTypeFromJSON(json: any): FolioReasonType {
    return FolioReasonTypeFromJSONTyped(json, false);
}

export function FolioReasonTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioReasonType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function FolioReasonTypeToJSON(value?: FolioReasonType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'text': value.text,
    };
}
