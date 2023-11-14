/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuthorizerGroupsType } from './AuthorizerGroupsType';
import {
    AuthorizerGroupsTypeFromJSON,
    AuthorizerGroupsTypeFromJSONTyped,
    AuthorizerGroupsTypeToJSON,
} from './AuthorizerGroupsType';

/**
 * Criteria to change authorizer group.
 * @export
 * @interface AuthorizerGroupsCriteriaType
 */
export interface AuthorizerGroupsCriteriaType {
    /**
     * 
     * @type {AuthorizerGroupsType}
     * @memberof AuthorizerGroupsCriteriaType
     */
    authorizerGroups?: AuthorizerGroupsType;
    /**
     * If true, updates all authorizers in the group.
     * @type {boolean}
     * @memberof AuthorizerGroupsCriteriaType
     */
    updateAuthorizers?: boolean;
}

/**
 * Check if a given object implements the AuthorizerGroupsCriteriaType interface.
 */
export function instanceOfAuthorizerGroupsCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthorizerGroupsCriteriaTypeFromJSON(json: any): AuthorizerGroupsCriteriaType {
    return AuthorizerGroupsCriteriaTypeFromJSONTyped(json, false);
}

export function AuthorizerGroupsCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizerGroupsCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorizerGroups': !exists(json, 'authorizerGroups') ? undefined : AuthorizerGroupsTypeFromJSON(json['authorizerGroups']),
        'updateAuthorizers': !exists(json, 'updateAuthorizers') ? undefined : json['updateAuthorizers'],
    };
}

export function AuthorizerGroupsCriteriaTypeToJSON(value?: AuthorizerGroupsCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authorizerGroups': AuthorizerGroupsTypeToJSON(value.authorizerGroups),
        'updateAuthorizers': value.updateAuthorizers,
    };
}
