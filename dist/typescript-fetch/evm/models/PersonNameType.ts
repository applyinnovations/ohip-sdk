/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PersonNameTypeType } from './PersonNameTypeType';
import {
    PersonNameTypeTypeFromJSON,
    PersonNameTypeTypeFromJSONTyped,
    PersonNameTypeTypeToJSON,
} from './PersonNameTypeType';

/**
 * This provides name information for a person.
 * @export
 * @interface PersonNameType
 */
export interface PersonNameType {
    /**
     * Given name, first name or names.
     * @type {string}
     * @memberof PersonNameType
     */
    givenName?: string;
    /**
     * The middle name of the person name.
     * @type {string}
     * @memberof PersonNameType
     */
    middleName?: string;
    /**
     * Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.)
     * @type {string}
     * @memberof PersonNameType
     */
    namePrefix?: string;
    /**
     * Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.)
     * @type {string}
     * @memberof PersonNameType
     */
    nameSuffix?: string;
    /**
     * Degree or honors (e.g., Ph.D., M.D.)
     * @type {string}
     * @memberof PersonNameType
     */
    nameTitle?: string;
    /**
     * Title Suffix. Must be populated if ADVANCED_TITLE is on.
     * @type {number}
     * @memberof PersonNameType
     */
    nameTitleSuffix?: number;
    /**
     * 
     * @type {PersonNameTypeType}
     * @memberof PersonNameType
     */
    nameType?: PersonNameTypeType;
    /**
     * Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname elementSpace may be used to pass the full name.
     * @type {string}
     * @memberof PersonNameType
     */
    surname?: string;
}

/**
 * Check if a given object implements the PersonNameType interface.
 */
export function instanceOfPersonNameType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonNameTypeFromJSON(json: any): PersonNameType {
    return PersonNameTypeFromJSONTyped(json, false);
}

export function PersonNameTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonNameType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'givenName': !exists(json, 'givenName') ? undefined : json['givenName'],
        'middleName': !exists(json, 'middleName') ? undefined : json['middleName'],
        'namePrefix': !exists(json, 'namePrefix') ? undefined : json['namePrefix'],
        'nameSuffix': !exists(json, 'nameSuffix') ? undefined : json['nameSuffix'],
        'nameTitle': !exists(json, 'nameTitle') ? undefined : json['nameTitle'],
        'nameTitleSuffix': !exists(json, 'nameTitleSuffix') ? undefined : json['nameTitleSuffix'],
        'nameType': !exists(json, 'nameType') ? undefined : PersonNameTypeTypeFromJSON(json['nameType']),
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
    };
}

export function PersonNameTypeToJSON(value?: PersonNameType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'givenName': value.givenName,
        'middleName': value.middleName,
        'namePrefix': value.namePrefix,
        'nameSuffix': value.nameSuffix,
        'nameTitle': value.nameTitle,
        'nameTitleSuffix': value.nameTitleSuffix,
        'nameType': PersonNameTypeTypeToJSON(value.nameType),
        'surname': value.surname,
    };
}

