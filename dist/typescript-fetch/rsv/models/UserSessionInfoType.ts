/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { ParameterType } from './ParameterType';
import {
    ParameterTypeFromJSON,
    ParameterTypeFromJSONTyped,
    ParameterTypeToJSON,
} from './ParameterType';
import type { UserSessionDefaultsType } from './UserSessionDefaultsType';
import {
    UserSessionDefaultsTypeFromJSON,
    UserSessionDefaultsTypeFromJSONTyped,
    UserSessionDefaultsTypeToJSON,
} from './UserSessionDefaultsType';

/**
 * 
 * @export
 * @interface UserSessionInfoType
 */
export interface UserSessionInfoType {
    /**
     * 
     * @type {Date}
     * @memberof UserSessionInfoType
     */
    businessDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof UserSessionInfoType
     */
    cROCountryCode?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSessionInfoType
     */
    chain?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof UserSessionInfoType
     */
    cro?: CodeDescriptionType;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof UserSessionInfoType
     */
    hotel?: CodeDescriptionType;
    /**
     * Collection of generic Name-Value-Pair parameters.
     * @type {Array<ParameterType>}
     * @memberof UserSessionInfoType
     */
    parameters?: Array<ParameterType>;
    /**
     * 
     * @type {string}
     * @memberof UserSessionInfoType
     */
    runningApp?: string;
    /**
     * 
     * @type {UserSessionDefaultsType}
     * @memberof UserSessionInfoType
     */
    sessionDefaults?: UserSessionDefaultsType;
    /**
     * 
     * @type {boolean}
     * @memberof UserSessionInfoType
     */
    shareProfiles?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof UserSessionInfoType
     */
    systemDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof UserSessionInfoType
     */
    terminal?: string;
}

/**
 * Check if a given object implements the UserSessionInfoType interface.
 */
export function instanceOfUserSessionInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserSessionInfoTypeFromJSON(json: any): UserSessionInfoType {
    return UserSessionInfoTypeFromJSONTyped(json, false);
}

export function UserSessionInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSessionInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessDate': !exists(json, 'businessDate') ? undefined : (new Date(json['businessDate'])),
        'cROCountryCode': !exists(json, 'cROCountryCode') ? undefined : json['cROCountryCode'],
        'chain': !exists(json, 'chain') ? undefined : json['chain'],
        'cro': !exists(json, 'cro') ? undefined : CodeDescriptionTypeFromJSON(json['cro']),
        'hotel': !exists(json, 'hotel') ? undefined : CodeDescriptionTypeFromJSON(json['hotel']),
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(ParameterTypeFromJSON)),
        'runningApp': !exists(json, 'runningApp') ? undefined : json['runningApp'],
        'sessionDefaults': !exists(json, 'sessionDefaults') ? undefined : UserSessionDefaultsTypeFromJSON(json['sessionDefaults']),
        'shareProfiles': !exists(json, 'shareProfiles') ? undefined : json['shareProfiles'],
        'systemDate': !exists(json, 'systemDate') ? undefined : (new Date(json['systemDate'])),
        'terminal': !exists(json, 'terminal') ? undefined : json['terminal'],
    };
}

export function UserSessionInfoTypeToJSON(value?: UserSessionInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'businessDate': value.businessDate === undefined ? undefined : (value.businessDate.toISOString().substr(0,10)),
        'cROCountryCode': value.cROCountryCode,
        'chain': value.chain,
        'cro': CodeDescriptionTypeToJSON(value.cro),
        'hotel': CodeDescriptionTypeToJSON(value.hotel),
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(ParameterTypeToJSON)),
        'runningApp': value.runningApp,
        'sessionDefaults': UserSessionDefaultsTypeToJSON(value.sessionDefaults),
        'shareProfiles': value.shareProfiles,
        'systemDate': value.systemDate === undefined ? undefined : (value.systemDate.toISOString().substr(0,10)),
        'terminal': value.terminal,
    };
}

