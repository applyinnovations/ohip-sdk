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
import type { FolioTextsTypeInner } from './FolioTextsTypeInner';
import {
    FolioTextsTypeInnerFromJSON,
    FolioTextsTypeInnerFromJSONTyped,
    FolioTextsTypeInnerToJSON,
} from './FolioTextsTypeInner';

/**
 * This stores the description for the type of tax calculation especially with tax exemption, etc.
 * @export
 * @interface FolioTextsType
 */
export interface FolioTextsType extends Array<FolioTextsTypeInner> {
}

/**
 * Check if a given object implements the FolioTextsType interface.
 */
export function instanceOfFolioTextsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FolioTextsTypeFromJSON(json: any): FolioTextsType {
    return FolioTextsTypeFromJSONTyped(json, false);
}

export function FolioTextsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioTextsType {
    return json;
}

export function FolioTextsTypeToJSON(value?: FolioTextsType | null): any {
    return value;
}
