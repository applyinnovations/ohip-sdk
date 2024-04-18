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
     * Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.)
     * @type {string}
     * @memberof PersonNameType
     */
    namePrefix?: string;
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
     * Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name.
     * @type {string}
     * @memberof PersonNameType
     */
    surname?: string;
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
     * Envelope Greeting of the profile
     * @type {string}
     * @memberof PersonNameType
     */
    envelopeGreeting?: string;
    /**
     * Salutation of the profile
     * @type {string}
     * @memberof PersonNameType
     */
    salutation?: string;
    /**
     * 
     * @type {PersonNameTypeType}
     * @memberof PersonNameType
     */
    nameType?: PersonNameTypeType;
    /**
     * Language identification.
     * @type {string}
     * @memberof PersonNameType
     */
    language?: string;
    /**
     * When name type is external, indicates the external system the name belongs to.
     * @type {string}
     * @memberof PersonNameType
     */
    externalSystem?: string;
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
        
        'namePrefix': !exists(json, 'namePrefix') ? undefined : json['namePrefix'],
        'givenName': !exists(json, 'givenName') ? undefined : json['givenName'],
        'middleName': !exists(json, 'middleName') ? undefined : json['middleName'],
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
        'nameSuffix': !exists(json, 'nameSuffix') ? undefined : json['nameSuffix'],
        'nameTitle': !exists(json, 'nameTitle') ? undefined : json['nameTitle'],
        'nameTitleSuffix': !exists(json, 'nameTitleSuffix') ? undefined : json['nameTitleSuffix'],
        'envelopeGreeting': !exists(json, 'envelopeGreeting') ? undefined : json['envelopeGreeting'],
        'salutation': !exists(json, 'salutation') ? undefined : json['salutation'],
        'nameType': !exists(json, 'nameType') ? undefined : PersonNameTypeTypeFromJSON(json['nameType']),
        'language': !exists(json, 'language') ? undefined : json['language'],
        'externalSystem': !exists(json, 'externalSystem') ? undefined : json['externalSystem'],
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
        
        'namePrefix': value.namePrefix,
        'givenName': value.givenName,
        'middleName': value.middleName,
        'surname': value.surname,
        'nameSuffix': value.nameSuffix,
        'nameTitle': value.nameTitle,
        'nameTitleSuffix': value.nameTitleSuffix,
        'envelopeGreeting': value.envelopeGreeting,
        'salutation': value.salutation,
        'nameType': PersonNameTypeTypeToJSON(value.nameType),
        'language': value.language,
        'externalSystem': value.externalSystem,
    };
}
