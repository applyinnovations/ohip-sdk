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
 * 
 * @export
 * @interface DetailPostingTypeMiscellaneousInfo
 */
export interface DetailPostingTypeMiscellaneousInfo {
    /**
     * 
     * @type {string}
     * @memberof DetailPostingTypeMiscellaneousInfo
     */
    covers?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailPostingTypeMiscellaneousInfo
     */
    createDateTime?: string;
}

/**
 * Check if a given object implements the DetailPostingTypeMiscellaneousInfo interface.
 */
export function instanceOfDetailPostingTypeMiscellaneousInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DetailPostingTypeMiscellaneousInfoFromJSON(json: any): DetailPostingTypeMiscellaneousInfo {
    return DetailPostingTypeMiscellaneousInfoFromJSONTyped(json, false);
}

export function DetailPostingTypeMiscellaneousInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetailPostingTypeMiscellaneousInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'covers': !exists(json, 'covers') ? undefined : json['covers'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
    };
}

export function DetailPostingTypeMiscellaneousInfoToJSON(value?: DetailPostingTypeMiscellaneousInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'covers': value.covers,
        'createDateTime': value.createDateTime,
    };
}
