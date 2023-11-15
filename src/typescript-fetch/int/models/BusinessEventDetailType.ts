/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Processor API
 * APIs to get Business Events generated in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface BusinessEventDetailType
 */
export interface BusinessEventDetailType {
    /**
     * Name of the data element, such as arrival date, departure date, etc.
     * @type {string}
     * @memberof BusinessEventDetailType
     */
    dataElement?: string;
    /**
     * Element role used to correlate fields of each record, when a collection of records is represented, such as phone role for phones.
     * @type {string}
     * @memberof BusinessEventDetailType
     */
    elementRole?: string;
    /**
     * Sequence number used to correlate fields of each record, when a collection of records is represented.
     * @type {number}
     * @memberof BusinessEventDetailType
     */
    elementSequence?: number;
    /**
     * Element type used to correlate fields of each record, when a collection of records is represented, such as phone type for phones.
     * @type {string}
     * @memberof BusinessEventDetailType
     */
    elementType?: string;
    /**
     * Value of the element after this action took place. In case of date values, format used is YYYY-MM-DD.
     * @type {string}
     * @memberof BusinessEventDetailType
     */
    newValue?: string;
    /**
     * Value of the element when this action took place. In case of date values, format used is YYYY-MM-DD.
     * @type {string}
     * @memberof BusinessEventDetailType
     */
    oldValue?: string;
    /**
     * Begin date from when this value is applicable, such as daily element date, block grid date etc.
     * @type {string}
     * @memberof BusinessEventDetailType
     */
    scopeFrom?: string;
    /**
     * End date till when this value is applicable, such as daily element date, block grid date etc.
     * @type {string}
     * @memberof BusinessEventDetailType
     */
    scopeTo?: string;
}

/**
 * Check if a given object implements the BusinessEventDetailType interface.
 */
export function instanceOfBusinessEventDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BusinessEventDetailTypeFromJSON(json: any): BusinessEventDetailType {
    return BusinessEventDetailTypeFromJSONTyped(json, false);
}

export function BusinessEventDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessEventDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataElement': !exists(json, 'dataElement') ? undefined : json['dataElement'],
        'elementRole': !exists(json, 'elementRole') ? undefined : json['elementRole'],
        'elementSequence': !exists(json, 'elementSequence') ? undefined : json['elementSequence'],
        'elementType': !exists(json, 'elementType') ? undefined : json['elementType'],
        'newValue': !exists(json, 'newValue') ? undefined : json['newValue'],
        'oldValue': !exists(json, 'oldValue') ? undefined : json['oldValue'],
        'scopeFrom': !exists(json, 'scopeFrom') ? undefined : json['scopeFrom'],
        'scopeTo': !exists(json, 'scopeTo') ? undefined : json['scopeTo'],
    };
}

export function BusinessEventDetailTypeToJSON(value?: BusinessEventDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataElement': value.dataElement,
        'elementRole': value.elementRole,
        'elementSequence': value.elementSequence,
        'elementType': value.elementType,
        'newValue': value.newValue,
        'oldValue': value.oldValue,
        'scopeFrom': value.scopeFrom,
        'scopeTo': value.scopeTo,
    };
}

