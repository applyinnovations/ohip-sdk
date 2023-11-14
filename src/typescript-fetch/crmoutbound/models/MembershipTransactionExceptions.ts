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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { MembershipTransactionExceptionsType } from './MembershipTransactionExceptionsType';
import {
    MembershipTransactionExceptionsTypeFromJSON,
    MembershipTransactionExceptionsTypeFromJSONTyped,
    MembershipTransactionExceptionsTypeToJSON,
} from './MembershipTransactionExceptionsType';

/**
 * Response object for fetching membership transaction exceptions.
 * @export
 * @interface MembershipTransactionExceptions
 */
export interface MembershipTransactionExceptions {
    /**
     * 
     * @type {MembershipTransactionExceptionsType}
     * @memberof MembershipTransactionExceptions
     */
    memberTransactionExceptions?: MembershipTransactionExceptionsType;
    /**
     * 
     * @type {Links}
     * @memberof MembershipTransactionExceptions
     */
    links?: Links;
}

/**
 * Check if a given object implements the MembershipTransactionExceptions interface.
 */
export function instanceOfMembershipTransactionExceptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipTransactionExceptionsFromJSON(json: any): MembershipTransactionExceptions {
    return MembershipTransactionExceptionsFromJSONTyped(json, false);
}

export function MembershipTransactionExceptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTransactionExceptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'memberTransactionExceptions': !exists(json, 'memberTransactionExceptions') ? undefined : MembershipTransactionExceptionsTypeFromJSON(json['memberTransactionExceptions']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
    };
}

export function MembershipTransactionExceptionsToJSON(value?: MembershipTransactionExceptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'memberTransactionExceptions': MembershipTransactionExceptionsTypeToJSON(value.memberTransactionExceptions),
        'links': LinksToJSON(value.links),
    };
}
