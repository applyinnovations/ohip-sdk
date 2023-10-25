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
/**
 * 
 * @export
 * @interface InterfaceRightsStatusType
 */
export interface InterfaceRightsStatusType {
    /**
     * Category code of this interface right.
     * @type {string}
     * @memberof InterfaceRightsStatusType
     */
    category?: string;
    /**
     * User defined description for an Interface Right.
     * @type {string}
     * @memberof InterfaceRightsStatusType
     */
    description?: string;
    /**
     * Internal code for each allowed right of a Hotel Interface record.
     * @type {number}
     * @memberof InterfaceRightsStatusType
     */
    right?: number;
    /**
     * User defined code for an Interface Right.
     * @type {string}
     * @memberof InterfaceRightsStatusType
     */
    statusCode?: string;
}

/**
 * Check if a given object implements the InterfaceRightsStatusType interface.
 */
export function instanceOfInterfaceRightsStatusType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InterfaceRightsStatusTypeFromJSON(json: any): InterfaceRightsStatusType {
    return InterfaceRightsStatusTypeFromJSONTyped(json, false);
}

export function InterfaceRightsStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceRightsStatusType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': !exists(json, 'category') ? undefined : json['category'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'right': !exists(json, 'right') ? undefined : json['right'],
        'statusCode': !exists(json, 'statusCode') ? undefined : json['statusCode'],
    };
}

export function InterfaceRightsStatusTypeToJSON(value?: InterfaceRightsStatusType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': value.category,
        'description': value.description,
        'right': value.right,
        'statusCode': value.statusCode,
    };
}

