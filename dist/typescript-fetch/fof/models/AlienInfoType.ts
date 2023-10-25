/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * immigration/visa information of a foreign person.
 * @export
 * @interface AlienInfoType
 */
export interface AlienInfoType {
    /**
     * Alien Registration Number.
     * @type {string}
     * @memberof AlienInfoType
     */
    alienRegistrationNo?: string;
    /**
     * Immigration Status on an Alien.
     * @type {string}
     * @memberof AlienInfoType
     */
    immigrationStatus?: string;
    /**
     * Visa Type of an Alien.
     * @type {string}
     * @memberof AlienInfoType
     */
    visaValidityType?: string;
}

/**
 * Check if a given object implements the AlienInfoType interface.
 */
export function instanceOfAlienInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlienInfoTypeFromJSON(json: any): AlienInfoType {
    return AlienInfoTypeFromJSONTyped(json, false);
}

export function AlienInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlienInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alienRegistrationNo': !exists(json, 'alienRegistrationNo') ? undefined : json['alienRegistrationNo'],
        'immigrationStatus': !exists(json, 'immigrationStatus') ? undefined : json['immigrationStatus'],
        'visaValidityType': !exists(json, 'visaValidityType') ? undefined : json['visaValidityType'],
    };
}

export function AlienInfoTypeToJSON(value?: AlienInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alienRegistrationNo': value.alienRegistrationNo,
        'immigrationStatus': value.immigrationStatus,
        'visaValidityType': value.visaValidityType,
    };
}

