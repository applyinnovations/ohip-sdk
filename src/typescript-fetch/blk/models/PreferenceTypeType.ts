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
     * Available quantity of preferences (maximum quantity - Existing preferences)per preference group.
     * @type {number}
     * @memberof PreferenceTypeType
     */
    availableQuantity?: number;
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
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    lastModifyDateTime?: string;
    /**
     * Maximum quantity of preferences allowed per preference group.
     * @type {number}
     * @memberof PreferenceTypeType
     */
    maxQuantity?: number;
    /**
     * Maximum quantity of preferences used by any resort per preference group.
     * @type {number}
     * @memberof PreferenceTypeType
     */
    maxResortUsedQuantity?: number;
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
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof PreferenceTypeType
     */
    purgeDate?: string;
    /**
     * Whether this preference is reservation preference or not.
     * @type {boolean}
     * @memberof PreferenceTypeType
     */
    reservationPreference?: boolean;
    /**
     * Preference Sequence.
     * @type {string}
     * @memberof PreferenceTypeType
     */
    sequence?: string;
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
        
        'availableQuantity': !exists(json, 'availableQuantity') ? undefined : json['availableQuantity'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'maxQuantity': !exists(json, 'maxQuantity') ? undefined : json['maxQuantity'],
        'maxResortUsedQuantity': !exists(json, 'maxResortUsedQuantity') ? undefined : json['maxResortUsedQuantity'],
        'preference': !exists(json, 'preference') ? undefined : ((json['preference'] as Array<any>).map(PreferenceTypeFromJSON)),
        'preferenceType': !exists(json, 'preferenceType') ? undefined : json['preferenceType'],
        'preferenceTypeDescription': !exists(json, 'preferenceTypeDescription') ? undefined : json['preferenceTypeDescription'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
        'reservationPreference': !exists(json, 'reservationPreference') ? undefined : json['reservationPreference'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
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
        
        'availableQuantity': value.availableQuantity,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'maxQuantity': value.maxQuantity,
        'maxResortUsedQuantity': value.maxResortUsedQuantity,
        'preference': value.preference === undefined ? undefined : ((value.preference as Array<any>).map(PreferenceTypeToJSON)),
        'preferenceType': value.preferenceType,
        'preferenceTypeDescription': value.preferenceTypeDescription,
        'purgeDate': value.purgeDate,
        'reservationPreference': value.reservationPreference,
        'sequence': value.sequence,
    };
}

