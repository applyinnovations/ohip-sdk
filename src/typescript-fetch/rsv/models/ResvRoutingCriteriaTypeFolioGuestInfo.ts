/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Guest details
 * @export
 * @interface ResvRoutingCriteriaTypeFolioGuestInfo
 */
export interface ResvRoutingCriteriaTypeFolioGuestInfo {
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ResvRoutingCriteriaTypeFolioGuestInfo
     */
    profileIdList?: Array<UniqueIDType>;
}

/**
 * Check if a given object implements the ResvRoutingCriteriaTypeFolioGuestInfo interface.
 */
export function instanceOfResvRoutingCriteriaTypeFolioGuestInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResvRoutingCriteriaTypeFolioGuestInfoFromJSON(json: any): ResvRoutingCriteriaTypeFolioGuestInfo {
    return ResvRoutingCriteriaTypeFolioGuestInfoFromJSONTyped(json, false);
}

export function ResvRoutingCriteriaTypeFolioGuestInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResvRoutingCriteriaTypeFolioGuestInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profileIdList': !exists(json, 'profileIdList') ? undefined : ((json['profileIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
    };
}

export function ResvRoutingCriteriaTypeFolioGuestInfoToJSON(value?: ResvRoutingCriteriaTypeFolioGuestInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profileIdList': value.profileIdList === undefined ? undefined : ((value.profileIdList as Array<any>).map(UniqueIDTypeToJSON)),
    };
}

