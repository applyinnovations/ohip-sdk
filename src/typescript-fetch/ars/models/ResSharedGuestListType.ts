/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ResSharedGuestInfoType } from './ResSharedGuestInfoType';
import {
    ResSharedGuestInfoTypeFromJSON,
    ResSharedGuestInfoTypeFromJSONTyped,
    ResSharedGuestInfoTypeToJSON,
} from './ResSharedGuestInfoType';

/**
 * Collection of shared guest reservations.
 * @export
 * @interface ResSharedGuestListType
 */
export interface ResSharedGuestListType extends Array<ResSharedGuestInfoType> {
}

/**
 * Check if a given object implements the ResSharedGuestListType interface.
 */
export function instanceOfResSharedGuestListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResSharedGuestListTypeFromJSON(json: any): ResSharedGuestListType {
    return ResSharedGuestListTypeFromJSONTyped(json, false);
}

export function ResSharedGuestListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResSharedGuestListType {
    return json;
}

export function ResSharedGuestListTypeToJSON(value?: ResSharedGuestListType | null): any {
    return value;
}
