/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
     * Envelope Greeting of the profile
     * @type {string}
     * @memberof PersonNameType
     */
    envelopeGreeting?: string;
    /**
     * When name type is external, indicates the external system the name belongs to.
     * @type {string}
     * @memberof PersonNameType
     */
    externalSystem?: string;
    /**
     * Given name, first name or names.
     * @type {string}
     * @memberof PersonNameType
     */
    givenName?: string;
    /**
     * Language identification.
     * @type {string}
     * @memberof PersonNameType
     */
    language?: string;
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
     * Salutation of the profile
     * @type {string}
     * @memberof PersonNameType
     */
    salutation?: string;
    /**
     * Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name.
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
        
        'envelopeGreeting': !exists(json, 'envelopeGreeting') ? undefined : json['envelopeGreeting'],
        'externalSystem': !exists(json, 'externalSystem') ? undefined : json['externalSystem'],
        'givenName': !exists(json, 'givenName') ? undefined : json['givenName'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'middleName': !exists(json, 'middleName') ? undefined : json['middleName'],
        'namePrefix': !exists(json, 'namePrefix') ? undefined : json['namePrefix'],
        'nameSuffix': !exists(json, 'nameSuffix') ? undefined : json['nameSuffix'],
        'nameTitle': !exists(json, 'nameTitle') ? undefined : json['nameTitle'],
        'nameTitleSuffix': !exists(json, 'nameTitleSuffix') ? undefined : json['nameTitleSuffix'],
        'nameType': !exists(json, 'nameType') ? undefined : PersonNameTypeTypeFromJSON(json['nameType']),
        'salutation': !exists(json, 'salutation') ? undefined : json['salutation'],
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
        
        'envelopeGreeting': value.envelopeGreeting,
        'externalSystem': value.externalSystem,
        'givenName': value.givenName,
        'language': value.language,
        'middleName': value.middleName,
        'namePrefix': value.namePrefix,
        'nameSuffix': value.nameSuffix,
        'nameTitle': value.nameTitle,
        'nameTitleSuffix': value.nameTitleSuffix,
        'nameType': PersonNameTypeTypeToJSON(value.nameType),
        'salutation': value.salutation,
        'surname': value.surname,
    };
}

