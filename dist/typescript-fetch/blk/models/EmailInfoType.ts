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
import type { EmailType } from './EmailType';
import {
    EmailTypeFromJSON,
    EmailTypeFromJSONTyped,
    EmailTypeToJSON,
} from './EmailType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Information on an email for the customer.
 * @export
 * @interface EmailInfoType
 */
export interface EmailInfoType {
    /**
     * 
     * @type {EmailType}
     * @memberof EmailInfoType
     */
    email?: EmailType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof EmailInfoType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof EmailInfoType
     */
    idContext?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof EmailInfoType
     */
    type?: string;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof EmailInfoType
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the EmailInfoType interface.
 */
export function instanceOfEmailInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailInfoTypeFromJSON(json: any): EmailInfoType {
    return EmailInfoTypeFromJSONTyped(json, false);
}

export function EmailInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : EmailTypeFromJSON(json['email']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function EmailInfoTypeToJSON(value?: EmailInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': EmailTypeToJSON(value.email),
        'id': value.id,
        'idContext': value.idContext,
        'type': value.type,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

