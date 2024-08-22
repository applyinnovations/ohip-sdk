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
 * Validations type record returned after Validations are done.
 * @export
 * @interface ResGuaranteeType
 */
export interface ResGuaranteeType {
    /**
     * Guarantee Code.
     * @type {string}
     * @memberof ResGuaranteeType
     */
    guaranteeCode?: string;
    /**
     * Guarantee Code.
     * @type {boolean}
     * @memberof ResGuaranteeType
     */
    onHold?: boolean;
    /**
     * Guarantee Code.
     * @type {string}
     * @memberof ResGuaranteeType
     */
    shortDescription?: string;
}

/**
 * Check if a given object implements the ResGuaranteeType interface.
 */
export function instanceOfResGuaranteeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResGuaranteeTypeFromJSON(json: any): ResGuaranteeType {
    return ResGuaranteeTypeFromJSONTyped(json, false);
}

export function ResGuaranteeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResGuaranteeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guaranteeCode': !exists(json, 'guaranteeCode') ? undefined : json['guaranteeCode'],
        'onHold': !exists(json, 'onHold') ? undefined : json['onHold'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
    };
}

export function ResGuaranteeTypeToJSON(value?: ResGuaranteeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guaranteeCode': value.guaranteeCode,
        'onHold': value.onHold,
        'shortDescription': value.shortDescription,
    };
}

