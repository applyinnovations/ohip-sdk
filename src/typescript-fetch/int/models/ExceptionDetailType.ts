/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Processor API
 * APIs to get Business Events generated in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ErrorInstance } from './ErrorInstance';
import {
    ErrorInstanceFromJSON,
    ErrorInstanceFromJSONTyped,
    ErrorInstanceToJSON,
} from './ErrorInstance';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';

/**
 * Complex type that contains error details for a REST call.
 * @export
 * @interface ExceptionDetailType
 */
export interface ExceptionDetailType {
    /**
     * Human-readable description specific to this occurrence of the problem.
     * @type {string}
     * @memberof ExceptionDetailType
     */
    detail?: string;
    /**
     * Absolute URI that identifies the specific occurrence of the problem.  It may or may not provide additional information if dereferenced.
     * @type {string}
     * @memberof ExceptionDetailType
     */
    instance?: string;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ExceptionDetailType
     */
    links?: Array<InstanceLink>;
    /**
     * Application error code, which is different from HTTP error code.
     * @type {string}
     * @memberof ExceptionDetailType
     */
    oerrorCode?: string;
    /**
     * Details of the error message, consisting of a hierarchical tree structure.
     * @type {Array<ErrorInstance>}
     * @memberof ExceptionDetailType
     */
    oerrorDetails?: Array<ErrorInstance>;
    /**
     * Path to the problem at the resource or property level.
     * @type {string}
     * @memberof ExceptionDetailType
     */
    oerrorPath?: string;
    /**
     * HTTP status code for this occurrence of the problem, set by the origin server.
     * @type {number}
     * @memberof ExceptionDetailType
     */
    status?: number;
    /**
     * Short, human-readable summary of the problem.  The summary SHOULD NOT change for subsequent occurrences of the problem, except for purposes of localization.
     * @type {string}
     * @memberof ExceptionDetailType
     */
    title: string;
    /**
     * Absolute URI [RFC3986] that identifies the problem type.  When dereferenced, it SHOULD provide a human-readable summary of the problem (for example, using HTML).
     * @type {string}
     * @memberof ExceptionDetailType
     */
    type: string;
}

/**
 * Check if a given object implements the ExceptionDetailType interface.
 */
export function instanceOfExceptionDetailType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ExceptionDetailTypeFromJSON(json: any): ExceptionDetailType {
    return ExceptionDetailTypeFromJSONTyped(json, false);
}

export function ExceptionDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExceptionDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'oerrorCode': !exists(json, 'o:errorCode') ? undefined : json['o:errorCode'],
        'oerrorDetails': !exists(json, 'o:errorDetails') ? undefined : ((json['o:errorDetails'] as Array<any>).map(ErrorInstanceFromJSON)),
        'oerrorPath': !exists(json, 'o:errorPath') ? undefined : json['o:errorPath'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'title': json['title'],
        'type': json['type'],
    };
}

export function ExceptionDetailTypeToJSON(value?: ExceptionDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'detail': value.detail,
        'instance': value.instance,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'o:errorCode': value.oerrorCode,
        'o:errorDetails': value.oerrorDetails === undefined ? undefined : ((value.oerrorDetails as Array<any>).map(ErrorInstanceToJSON)),
        'o:errorPath': value.oerrorPath,
        'status': value.status,
        'title': value.title,
        'type': value.type,
    };
}

