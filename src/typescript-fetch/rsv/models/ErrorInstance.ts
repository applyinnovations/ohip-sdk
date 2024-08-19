/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Complex type that contains error instance details for a REST call.
 * @export
 * @interface ErrorInstance
 */
export interface ErrorInstance {
    /**
     * Human-readable description specific to this occurrence of the problem.
     * @type {string}
     * @memberof ErrorInstance
     */
    detail?: string;
    /**
     * Absolute URI that identifies the specific occurrence of the problem.  It may or may not provide additional information if dereferenced.
     * @type {string}
     * @memberof ErrorInstance
     */
    instance?: string;
    /**
     * Application error code, which is different from HTTP error code.
     * @type {string}
     * @memberof ErrorInstance
     */
    oerrorCode?: string;
    /**
     * Path to the problem at the resource or property level.
     * @type {string}
     * @memberof ErrorInstance
     */
    oerrorPath?: string;
    /**
     * HTTP status code for this occurrence of the problem, set by the origin server.
     * @type {number}
     * @memberof ErrorInstance
     */
    status?: number;
    /**
     * Short, human-readable summary of the problem.  The summary SHOULD NOT change for subsequent occurrences of the problem, except for purposes of localization.
     * @type {string}
     * @memberof ErrorInstance
     */
    title: string;
    /**
     * Absolute URI [RFC3986] that identifies the problem type.  When dereferenced, it SHOULD provide a human-readable summary of the problem (for example, using HTML).
     * @type {string}
     * @memberof ErrorInstance
     */
    type: string;
}

/**
 * Check if a given object implements the ErrorInstance interface.
 */
export function instanceOfErrorInstance(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ErrorInstanceFromJSON(json: any): ErrorInstance {
    return ErrorInstanceFromJSONTyped(json, false);
}

export function ErrorInstanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorInstance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'oerrorCode': !exists(json, 'o:errorCode') ? undefined : json['o:errorCode'],
        'oerrorPath': !exists(json, 'o:errorPath') ? undefined : json['o:errorPath'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'title': json['title'],
        'type': json['type'],
    };
}

export function ErrorInstanceToJSON(value?: ErrorInstance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'detail': value.detail,
        'instance': value.instance,
        'o:errorCode': value.oerrorCode,
        'o:errorPath': value.oerrorPath,
        'status': value.status,
        'title': value.title,
        'type': value.type,
    };
}

