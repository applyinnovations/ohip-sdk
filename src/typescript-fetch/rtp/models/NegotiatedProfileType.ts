/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { NegRateAccessType } from './NegRateAccessType';
import {
    NegRateAccessTypeFromJSON,
    NegRateAccessTypeFromJSONTyped,
    NegRateAccessTypeToJSON,
} from './NegRateAccessType';
import type { ProfileNameType } from './ProfileNameType';
import {
    ProfileNameTypeFromJSON,
    ProfileNameTypeFromJSONTyped,
    ProfileNameTypeToJSON,
} from './ProfileNameType';
import type { ProfileTypeType } from './ProfileTypeType';
import {
    ProfileTypeTypeFromJSON,
    ProfileTypeTypeFromJSONTyped,
    ProfileTypeTypeToJSON,
} from './ProfileTypeType';
import type { UniqueIDListType } from './UniqueIDListType';
import {
    UniqueIDListTypeFromJSON,
    UniqueIDListTypeFromJSONTyped,
    UniqueIDListTypeToJSON,
} from './UniqueIDListType';

/**
 * Profile details
 * @export
 * @interface NegotiatedProfileType
 */
export interface NegotiatedProfileType {
    /**
     * External system code selected to allow changes from external system.
     * @type {string}
     * @memberof NegotiatedProfileType
     */
    externalSystemCode?: string;
    /**
     * 
     * @type {UniqueIDListType}
     * @memberof NegotiatedProfileType
     */
    profileIdList?: UniqueIDListType;
    /**
     * 
     * @type {ProfileNameType}
     * @memberof NegotiatedProfileType
     */
    profileName?: ProfileNameType;
    /**
     * 
     * @type {ProfileTypeType}
     * @memberof NegotiatedProfileType
     */
    profileType?: ProfileTypeType;
    /**
     * collection of Negotiated rates.
     * @type {Array<NegRateAccessType>}
     * @memberof NegotiatedProfileType
     */
    rateInfoList?: Array<NegRateAccessType>;
}

/**
 * Check if a given object implements the NegotiatedProfileType interface.
 */
export function instanceOfNegotiatedProfileType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NegotiatedProfileTypeFromJSON(json: any): NegotiatedProfileType {
    return NegotiatedProfileTypeFromJSONTyped(json, false);
}

export function NegotiatedProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NegotiatedProfileType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalSystemCode': !exists(json, 'externalSystemCode') ? undefined : json['externalSystemCode'],
        'profileIdList': !exists(json, 'profileIdList') ? undefined : UniqueIDListTypeFromJSON(json['profileIdList']),
        'profileName': !exists(json, 'profileName') ? undefined : ProfileNameTypeFromJSON(json['profileName']),
        'profileType': !exists(json, 'profileType') ? undefined : ProfileTypeTypeFromJSON(json['profileType']),
        'rateInfoList': !exists(json, 'rateInfoList') ? undefined : ((json['rateInfoList'] as Array<any>).map(NegRateAccessTypeFromJSON)),
    };
}

export function NegotiatedProfileTypeToJSON(value?: NegotiatedProfileType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'externalSystemCode': value.externalSystemCode,
        'profileIdList': UniqueIDListTypeToJSON(value.profileIdList),
        'profileName': ProfileNameTypeToJSON(value.profileName),
        'profileType': ProfileTypeTypeToJSON(value.profileType),
        'rateInfoList': value.rateInfoList === undefined ? undefined : ((value.rateInfoList as Array<any>).map(NegRateAccessTypeToJSON)),
    };
}
