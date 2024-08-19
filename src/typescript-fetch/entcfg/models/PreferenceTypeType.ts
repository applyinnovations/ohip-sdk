/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PreferenceType } from './PreferenceType';
import {
    PreferenceTypeFromJSON,
    PreferenceTypeFromJSONTyped,
    PreferenceTypeToJSON,
} from './PreferenceType';

/**
 * Preference details for the profile.
 * @export
 * @interface PreferenceTypeType
 */
export interface PreferenceTypeType {
    /**
     * Collection of Preferences for the profile.
     * @type {Array<PreferenceType>}
     * @memberof PreferenceTypeType
     */
    preference?: Array<PreferenceType>;
    /**
     * Preference group code.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    preferenceType?: string;
    /**
     * Preference group description.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    preferenceTypeDescription?: string;
    /**
     * Preference Sequence.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    sequence?: string;
    /**
     * Maximum quantity of preferences allowed per preference group.
     * @type {number}
     * @memberof PreferenceTypeType
     */
    maxQuantity?: number;
    /**
     * Available quantity of preferences (maximum quantity - Existing preferences)per preference group.
     * @type {number}
     * @memberof PreferenceTypeType
     */
    availableQuantity?: number;
    /**
     * Maximum quantity of preferences used by any resort per preference group.
     * @type {number}
     * @memberof PreferenceTypeType
     */
    maxResortUsedQuantity?: number;
    /**
     * Whether this preference is reservation preference or not.
     * @type {boolean}
     * @memberof PreferenceTypeType
     */
    reservationPreference?: boolean;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    lastModifierId?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof PreferenceTypeType
     */
    purgeDate?: string;
}

/**
 * Check if a given object implements the PreferenceTypeType interface.
 */
export function instanceOfPreferenceTypeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PreferenceTypeTypeFromJSON(json: any): PreferenceTypeType {
    return PreferenceTypeTypeFromJSONTyped(json, false);
}

export function PreferenceTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreferenceTypeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'preference': !exists(json, 'preference') ? undefined : ((json['preference'] as Array<any>).map(PreferenceTypeFromJSON)),
        'preferenceType': !exists(json, 'preferenceType') ? undefined : json['preferenceType'],
        'preferenceTypeDescription': !exists(json, 'preferenceTypeDescription') ? undefined : json['preferenceTypeDescription'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'maxQuantity': !exists(json, 'maxQuantity') ? undefined : json['maxQuantity'],
        'availableQuantity': !exists(json, 'availableQuantity') ? undefined : json['availableQuantity'],
        'maxResortUsedQuantity': !exists(json, 'maxResortUsedQuantity') ? undefined : json['maxResortUsedQuantity'],
        'reservationPreference': !exists(json, 'reservationPreference') ? undefined : json['reservationPreference'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
    };
}

export function PreferenceTypeTypeToJSON(value?: PreferenceTypeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preference': value.preference === undefined ? undefined : ((value.preference as Array<any>).map(PreferenceTypeToJSON)),
        'preferenceType': value.preferenceType,
        'preferenceTypeDescription': value.preferenceTypeDescription,
        'sequence': value.sequence,
        'maxQuantity': value.maxQuantity,
        'availableQuantity': value.availableQuantity,
        'maxResortUsedQuantity': value.maxResortUsedQuantity,
        'reservationPreference': value.reservationPreference,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastModifierId': value.lastModifierId,
        'purgeDate': value.purgeDate,
    };
}

