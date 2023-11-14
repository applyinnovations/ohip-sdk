/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
import type { MembershipTypeRulesSummariesType } from './MembershipTypeRulesSummariesType';
import {
    MembershipTypeRulesSummariesTypeFromJSON,
    MembershipTypeRulesSummariesTypeFromJSONTyped,
    MembershipTypeRulesSummariesTypeToJSON,
} from './MembershipTypeRulesSummariesType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for fetching membership type rules.
 * @export
 * @interface MembershipTypeRulesInfo
 */
export interface MembershipTypeRulesInfo {
    /**
     * 
     * @type {Links}
     * @memberof MembershipTypeRulesInfo
     */
    links?: Links;
    /**
     * 
     * @type {MembershipTypeRulesSummariesType}
     * @memberof MembershipTypeRulesInfo
     */
    membershipTypeRules?: MembershipTypeRulesSummariesType;
    /**
     * 
     * @type {WarningsType}
     * @memberof MembershipTypeRulesInfo
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the MembershipTypeRulesInfo interface.
 */
export function instanceOfMembershipTypeRulesInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipTypeRulesInfoFromJSON(json: any): MembershipTypeRulesInfo {
    return MembershipTypeRulesInfoFromJSONTyped(json, false);
}

export function MembershipTypeRulesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeRulesInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'membershipTypeRules': !exists(json, 'membershipTypeRules') ? undefined : MembershipTypeRulesSummariesTypeFromJSON(json['membershipTypeRules']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function MembershipTypeRulesInfoToJSON(value?: MembershipTypeRulesInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'membershipTypeRules': MembershipTypeRulesSummariesTypeToJSON(value.membershipTypeRules),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
