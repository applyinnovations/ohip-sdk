/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Metadata describing link description objects that MAY appear in the JSON instance representation.
 * @export
 * @interface InstanceLink
 */
export interface InstanceLink {
    /**
     * URI [RFC3986] or URI Template [RFC6570]. If the value is set to URI Template, then the "templated" property must be set to true.
     * @type {string}
     * @memberof InstanceLink
     */
    href: string;
    /**
     * HTTP method for requesting the target of the link.
     * @type {string}
     * @memberof InstanceLink
     */
    method: InstanceLinkMethodEnum;
    /**
     * The operationId of the path you can call to follow this link.  This allows you to look up not only the path and method, but the description of that path and any parameters you need to supply.
     * @type {string}
     * @memberof InstanceLink
     */
    operationId: string;
    /**
     * Name of the link relation that, in addition to the type property, can be used to retrieve link details. For example, href or profile.
     * @type {string}
     * @memberof InstanceLink
     */
    rel: string;
    /**
     * Link to the metadata of the resource, such as JSON-schema, that describes the resource expected when dereferencing the target resource..
     * @type {string}
     * @memberof InstanceLink
     */
    targetSchema?: string;
    /**
     * Boolean flag that specifies that "href" property is a URI or URI Template. If the property is a URI template, set this value to true. By default, this value is false.
     * @type {boolean}
     * @memberof InstanceLink
     */
    templated?: boolean;
    /**
     * Exact copy of the "summary" field on the linked operation.
     * @type {string}
     * @memberof InstanceLink
     */
    title?: string;
}


/**
 * @export
 */
export const InstanceLinkMethodEnum = {
    Get: 'GET',
    Post: 'POST',
    Put: 'PUT',
    Delete: 'DELETE',
    Patch: 'PATCH',
    Options: 'OPTIONS',
    Head: 'HEAD'
} as const;
export type InstanceLinkMethodEnum = typeof InstanceLinkMethodEnum[keyof typeof InstanceLinkMethodEnum];


/**
 * Check if a given object implements the InstanceLink interface.
 */
export function instanceOfInstanceLink(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "href" in value;
    isInstance = isInstance && "method" in value;
    isInstance = isInstance && "operationId" in value;
    isInstance = isInstance && "rel" in value;

    return isInstance;
}

export function InstanceLinkFromJSON(json: any): InstanceLink {
    return InstanceLinkFromJSONTyped(json, false);
}

export function InstanceLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstanceLink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': json['href'],
        'method': json['method'],
        'operationId': json['operationId'],
        'rel': json['rel'],
        'targetSchema': !exists(json, 'targetSchema') ? undefined : json['targetSchema'],
        'templated': !exists(json, 'templated') ? undefined : json['templated'],
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function InstanceLinkToJSON(value?: InstanceLink | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
        'method': value.method,
        'operationId': value.operationId,
        'rel': value.rel,
        'targetSchema': value.targetSchema,
        'templated': value.templated,
        'title': value.title,
    };
}

