/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Type for the Account Status. Status can be restricted and a message/description added to the Account.
 * @export
 * @interface ARAccountStatusType
 */
export interface ARAccountStatusType {
    /**
     * User defined status message on the Account.
     * @type {string}
     * @memberof ARAccountStatusType
     */
    description?: string;
    /**
     * Flag to indicate if the Account is restricted.
     * @type {boolean}
     * @memberof ARAccountStatusType
     */
    restricted?: boolean;
    /**
     * The Restriction Code added on the Account. This is available when the functionality for adding restriction codes is ON.
     * @type {string}
     * @memberof ARAccountStatusType
     */
    restriction?: string;
}

/**
 * Check if a given object implements the ARAccountStatusType interface.
 */
export function instanceOfARAccountStatusType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ARAccountStatusTypeFromJSON(json: any): ARAccountStatusType {
    return ARAccountStatusTypeFromJSONTyped(json, false);
}

export function ARAccountStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAccountStatusType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'restricted': !exists(json, 'restricted') ? undefined : json['restricted'],
        'restriction': !exists(json, 'restriction') ? undefined : json['restriction'],
    };
}

export function ARAccountStatusTypeToJSON(value?: ARAccountStatusType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'restricted': value.restricted,
        'restriction': value.restriction,
    };
}

