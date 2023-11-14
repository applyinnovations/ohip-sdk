/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * This type contains unique information of external reference.
 * @export
 * @interface ExternalReferenceType
 */
export interface ExternalReferenceType {
    /**
     * Unique ID of external reference.
     * @type {string}
     * @memberof ExternalReferenceType
     */
    id?: string;
    /**
     * ID context for external reference.
     * @type {string}
     * @memberof ExternalReferenceType
     */
    idContext?: string;
    /**
     * ID extension for external reference.
     * @type {number}
     * @memberof ExternalReferenceType
     */
    idExtension?: number;
}

/**
 * Check if a given object implements the ExternalReferenceType interface.
 */
export function instanceOfExternalReferenceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExternalReferenceTypeFromJSON(json: any): ExternalReferenceType {
    return ExternalReferenceTypeFromJSONTyped(json, false);
}

export function ExternalReferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalReferenceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !exists(json, 'idExtension') ? undefined : json['idExtension'],
    };
}

export function ExternalReferenceTypeToJSON(value?: ExternalReferenceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
    };
}
