/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { IdentificationType } from './IdentificationType';
import {
    IdentificationTypeFromJSON,
    IdentificationTypeFromJSONTyped,
    IdentificationTypeToJSON,
} from './IdentificationType';

/**
 * Information on the identification of the customer.
 * @export
 * @interface IdentificationInfoType
 */
export interface IdentificationInfoType {
    /**
     * 
     * @type {IdentificationType}
     * @memberof IdentificationInfoType
     */
    identification?: IdentificationType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof IdentificationInfoType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof IdentificationInfoType
     */
    type?: string;
}

/**
 * Check if a given object implements the IdentificationInfoType interface.
 */
export function instanceOfIdentificationInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IdentificationInfoTypeFromJSON(json: any): IdentificationInfoType {
    return IdentificationInfoTypeFromJSONTyped(json, false);
}

export function IdentificationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentificationInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identification': !exists(json, 'identification') ? undefined : IdentificationTypeFromJSON(json['identification']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function IdentificationInfoTypeToJSON(value?: IdentificationInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identification': IdentificationTypeToJSON(value.identification),
        'id': value.id,
        'type': value.type,
    };
}

