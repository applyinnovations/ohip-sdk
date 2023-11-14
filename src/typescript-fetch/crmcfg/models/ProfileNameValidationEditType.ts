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
import type { ProfileNameValidationType } from './ProfileNameValidationType';
import {
    ProfileNameValidationTypeFromJSON,
    ProfileNameValidationTypeFromJSONTyped,
    ProfileNameValidationTypeToJSON,
} from './ProfileNameValidationType';
import type { ProfileNameValidationTypeType } from './ProfileNameValidationTypeType';
import {
    ProfileNameValidationTypeTypeFromJSON,
    ProfileNameValidationTypeTypeFromJSONTyped,
    ProfileNameValidationTypeTypeToJSON,
} from './ProfileNameValidationTypeType';

/**
 * Provides information about the Profile Names.
 * @export
 * @interface ProfileNameValidationEditType
 */
export interface ProfileNameValidationEditType {
    /**
     * Name of the Profile.
     * @type {string}
     * @memberof ProfileNameValidationEditType
     */
    name?: string;
    /**
     * 
     * @type {ProfileNameValidationType}
     * @memberof ProfileNameValidationEditType
     */
    newProfileName?: ProfileNameValidationType;
    /**
     * 
     * @type {ProfileNameValidationTypeType}
     * @memberof ProfileNameValidationEditType
     */
    type?: ProfileNameValidationTypeType;
}

/**
 * Check if a given object implements the ProfileNameValidationEditType interface.
 */
export function instanceOfProfileNameValidationEditType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileNameValidationEditTypeFromJSON(json: any): ProfileNameValidationEditType {
    return ProfileNameValidationEditTypeFromJSONTyped(json, false);
}

export function ProfileNameValidationEditTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileNameValidationEditType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'newProfileName': !exists(json, 'newProfileName') ? undefined : ProfileNameValidationTypeFromJSON(json['newProfileName']),
        'type': !exists(json, 'type') ? undefined : ProfileNameValidationTypeTypeFromJSON(json['type']),
    };
}

export function ProfileNameValidationEditTypeToJSON(value?: ProfileNameValidationEditType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'newProfileName': ProfileNameValidationTypeToJSON(value.newProfileName),
        'type': ProfileNameValidationTypeTypeToJSON(value.type),
    };
}
