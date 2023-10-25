/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CommunicationRoleType } from './CommunicationRoleType';
import {
    CommunicationRoleTypeFromJSON,
    CommunicationRoleTypeFromJSONTyped,
    CommunicationRoleTypeToJSON,
} from './CommunicationRoleType';

/**
 * Communication Type details.
 * @export
 * @interface CommunicationTypeType
 */
export interface CommunicationTypeType {
    /**
     * Unique Communication Type Code.
     * @type {string}
     * @memberof CommunicationTypeType
     */
    code?: string;
    /**
     * Communication Type description.
     * @type {string}
     * @memberof CommunicationTypeType
     */
    description?: string;
    /**
     * 
     * @type {CommunicationRoleType}
     * @memberof CommunicationTypeType
     */
    role?: CommunicationRoleType;
    /**
     * Communication Type sequence.
     * @type {number}
     * @memberof CommunicationTypeType
     */
    sequence?: number;
    /**
     * Communication Type SMS Text Message enabled.
     * @type {boolean}
     * @memberof CommunicationTypeType
     */
    textEnabled?: boolean;
}

/**
 * Check if a given object implements the CommunicationTypeType interface.
 */
export function instanceOfCommunicationTypeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommunicationTypeTypeFromJSON(json: any): CommunicationTypeType {
    return CommunicationTypeTypeFromJSONTyped(json, false);
}

export function CommunicationTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunicationTypeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'role': !exists(json, 'role') ? undefined : CommunicationRoleTypeFromJSON(json['role']),
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'textEnabled': !exists(json, 'textEnabled') ? undefined : json['textEnabled'],
    };
}

export function CommunicationTypeTypeToJSON(value?: CommunicationTypeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'role': CommunicationRoleTypeToJSON(value.role),
        'sequence': value.sequence,
        'textEnabled': value.textEnabled,
    };
}

