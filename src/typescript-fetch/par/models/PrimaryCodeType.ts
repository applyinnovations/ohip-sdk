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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';

/**
 * Primary flag with code and description.
 * @export
 * @interface PrimaryCodeType
 */
export interface PrimaryCodeType {
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof PrimaryCodeType
     */
    codeDescription?: CodeDescriptionType;
    /**
     * 
     * @type {boolean}
     * @memberof PrimaryCodeType
     */
    primary?: boolean;
}

/**
 * Check if a given object implements the PrimaryCodeType interface.
 */
export function instanceOfPrimaryCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrimaryCodeTypeFromJSON(json: any): PrimaryCodeType {
    return PrimaryCodeTypeFromJSONTyped(json, false);
}

export function PrimaryCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrimaryCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'codeDescription': !exists(json, 'codeDescription') ? undefined : CodeDescriptionTypeFromJSON(json['codeDescription']),
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
    };
}

export function PrimaryCodeTypeToJSON(value?: PrimaryCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'codeDescription': CodeDescriptionTypeToJSON(value.codeDescription),
        'primary': value.primary,
    };
}

