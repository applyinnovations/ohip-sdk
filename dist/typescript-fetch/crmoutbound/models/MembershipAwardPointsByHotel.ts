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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MembershipAwardPointByHotelType } from './MembershipAwardPointByHotelType';
import {
    MembershipAwardPointByHotelTypeFromJSON,
    MembershipAwardPointByHotelTypeFromJSONTyped,
    MembershipAwardPointByHotelTypeToJSON,
} from './MembershipAwardPointByHotelType';

/**
 * Response object for fetching member award points by Hotel.
 * @export
 * @interface MembershipAwardPointsByHotel
 */
export interface MembershipAwardPointsByHotel {
    /**
     * List of available award points information by Hotel.
     * @type {Array<MembershipAwardPointByHotelType>}
     * @memberof MembershipAwardPointsByHotel
     */
    membershipAwardPoints?: Array<MembershipAwardPointByHotelType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MembershipAwardPointsByHotel
     */
    links?: Array<InstanceLink>;
}

/**
 * Check if a given object implements the MembershipAwardPointsByHotel interface.
 */
export function instanceOfMembershipAwardPointsByHotel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipAwardPointsByHotelFromJSON(json: any): MembershipAwardPointsByHotel {
    return MembershipAwardPointsByHotelFromJSONTyped(json, false);
}

export function MembershipAwardPointsByHotelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipAwardPointsByHotel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'membershipAwardPoints': !exists(json, 'membershipAwardPoints') ? undefined : ((json['membershipAwardPoints'] as Array<any>).map(MembershipAwardPointByHotelTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
    };
}

export function MembershipAwardPointsByHotelToJSON(value?: MembershipAwardPointsByHotel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'membershipAwardPoints': value.membershipAwardPoints === undefined ? undefined : ((value.membershipAwardPoints as Array<any>).map(MembershipAwardPointByHotelTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
    };
}

