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
 * An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote).
 * @export
 * @interface ProfileId
 */
export interface ProfileId {
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ProfileId
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof ProfileId
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof ProfileId
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof ProfileId
     */
    instance?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof ProfileId
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof ProfileId
     */
    url?: string;
}

/**
 * Check if a given object implements the ProfileId interface.
 */
export function instanceOfProfileId(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileIdFromJSON(json: any): ProfileId {
    return ProfileIdFromJSONTyped(json, false);
}

export function ProfileIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !exists(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function ProfileIdToJSON(value?: ProfileId | null): any {
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
        'instance': value.instance,
        'type': value.type,
        'url': value.url,
    };
}

