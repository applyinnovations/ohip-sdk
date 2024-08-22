/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Holds caller information.
 * @export
 * @interface CallerType
 */
export interface CallerType {
    /**
     * Caller Email.
     * @type {string}
     * @memberof CallerType
     */
    email?: string;
    /**
     * Caller Fax Number.
     * @type {string}
     * @memberof CallerType
     */
    fax?: string;
    /**
     * Caller First Name.
     * @type {string}
     * @memberof CallerType
     */
    givenName?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof CallerType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof CallerType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof CallerType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof CallerType
     */
    instance?: string;
    /**
     * Caller Phone Number.
     * @type {string}
     * @memberof CallerType
     */
    phone?: string;
    /**
     * Caller Last Name.
     * @type {string}
     * @memberof CallerType
     */
    surname?: string;
    /**
     * A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT).
     * @type {string}
     * @memberof CallerType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof CallerType
     */
    url?: string;
}

/**
 * Check if a given object implements the CallerType interface.
 */
export function instanceOfCallerType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CallerTypeFromJSON(json: any): CallerType {
    return CallerTypeFromJSONTyped(json, false);
}

export function CallerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallerType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'fax': !exists(json, 'fax') ? undefined : json['fax'],
        'givenName': !exists(json, 'givenName') ? undefined : json['givenName'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !exists(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function CallerTypeToJSON(value?: CallerType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'fax': value.fax,
        'givenName': value.givenName,
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'phone': value.phone,
        'surname': value.surname,
        'type': value.type,
        'url': value.url,
    };
}

