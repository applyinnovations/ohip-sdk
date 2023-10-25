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
import type { ProfileSubscriptionType } from './ProfileSubscriptionType';
import {
    ProfileSubscriptionTypeFromJSON,
    ProfileSubscriptionTypeFromJSONTyped,
    ProfileSubscriptionTypeToJSON,
} from './ProfileSubscriptionType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Contains subscription details about an external profile within a particular external system that is linked to multiple OPERA profiles.
 * @export
 * @interface DuplicateOPERASubscriptionsType
 */
export interface DuplicateOPERASubscriptionsType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof DuplicateOPERASubscriptionsType
     */
    externalProfileId?: UniqueIDType;
    /**
     * Details of the OPERA Profile subscription to external system
     * @type {Array<ProfileSubscriptionType>}
     * @memberof DuplicateOPERASubscriptionsType
     */
    profileSubscriptions?: Array<ProfileSubscriptionType>;
}

/**
 * Check if a given object implements the DuplicateOPERASubscriptionsType interface.
 */
export function instanceOfDuplicateOPERASubscriptionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DuplicateOPERASubscriptionsTypeFromJSON(json: any): DuplicateOPERASubscriptionsType {
    return DuplicateOPERASubscriptionsTypeFromJSONTyped(json, false);
}

export function DuplicateOPERASubscriptionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DuplicateOPERASubscriptionsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalProfileId': !exists(json, 'externalProfileId') ? undefined : UniqueIDTypeFromJSON(json['externalProfileId']),
        'profileSubscriptions': !exists(json, 'profileSubscriptions') ? undefined : ((json['profileSubscriptions'] as Array<any>).map(ProfileSubscriptionTypeFromJSON)),
    };
}

export function DuplicateOPERASubscriptionsTypeToJSON(value?: DuplicateOPERASubscriptionsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'externalProfileId': UniqueIDTypeToJSON(value.externalProfileId),
        'profileSubscriptions': value.profileSubscriptions === undefined ? undefined : ((value.profileSubscriptions as Array<any>).map(ProfileSubscriptionTypeToJSON)),
    };
}

