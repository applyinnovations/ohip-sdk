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
import type { MemberAwardType } from './MemberAwardType';
import {
    MemberAwardTypeFromJSON,
    MemberAwardTypeFromJSONTyped,
    MemberAwardTypeToJSON,
} from './MemberAwardType';

/**
 * Request object to redeem award.
 * @export
 * @interface Award
 */
export interface Award {
    /**
     * 
     * @type {MemberAwardType}
     * @memberof Award
     */
    memberAward?: MemberAwardType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof Award
     */
    links?: Array<InstanceLink>;
}

/**
 * Check if a given object implements the Award interface.
 */
export function instanceOfAward(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AwardFromJSON(json: any): Award {
    return AwardFromJSONTyped(json, false);
}

export function AwardFromJSONTyped(json: any, ignoreDiscriminator: boolean): Award {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'memberAward': !exists(json, 'memberAward') ? undefined : MemberAwardTypeFromJSON(json['memberAward']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
    };
}

export function AwardToJSON(value?: Award | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'memberAward': MemberAwardTypeToJSON(value.memberAward),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
    };
}

