/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Base structure for template and hotel Event Code.
 * @export
 * @interface TemplateEventCodeType
 */
export interface TemplateEventCodeType {
    /**
     * Black Out flag of Event.
     * @type {boolean}
     * @memberof TemplateEventCodeType
     */
    blackOut?: boolean;
    /**
     * Code of an Event.
     * @type {string}
     * @memberof TemplateEventCodeType
     */
    code?: string;
    /**
     * Description of an Event.
     * @type {string}
     * @memberof TemplateEventCodeType
     */
    description?: string;
    /**
     * Inactive flag of Event.
     * @type {boolean}
     * @memberof TemplateEventCodeType
     */
    inactive?: boolean;
    /**
     * Sell sequence of Event.
     * @type {number}
     * @memberof TemplateEventCodeType
     */
    sellSequence?: number;
}

/**
 * Check if a given object implements the TemplateEventCodeType interface.
 */
export function instanceOfTemplateEventCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateEventCodeTypeFromJSON(json: any): TemplateEventCodeType {
    return TemplateEventCodeTypeFromJSONTyped(json, false);
}

export function TemplateEventCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateEventCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blackOut': !exists(json, 'blackOut') ? undefined : json['blackOut'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'sellSequence': !exists(json, 'sellSequence') ? undefined : json['sellSequence'],
    };
}

export function TemplateEventCodeTypeToJSON(value?: TemplateEventCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blackOut': value.blackOut,
        'code': value.code,
        'description': value.description,
        'inactive': value.inactive,
        'sellSequence': value.sellSequence,
    };
}
