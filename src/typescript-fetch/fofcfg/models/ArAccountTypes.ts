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
import type { ARAccountTypesType } from './ARAccountTypesType';
import {
    ARAccountTypesTypeFromJSON,
    ARAccountTypesTypeFromJSONTyped,
    ARAccountTypesTypeToJSON,
} from './ARAccountTypesType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for changing account types.
 * @export
 * @interface ArAccountTypes
 */
export interface ArAccountTypes {
    /**
     * 
     * @type {ARAccountTypesType}
     * @memberof ArAccountTypes
     */
    accountTypes?: ARAccountTypesType;
    /**
     * 
     * @type {Links}
     * @memberof ArAccountTypes
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof ArAccountTypes
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ArAccountTypes interface.
 */
export function instanceOfArAccountTypes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ArAccountTypesFromJSON(json: any): ArAccountTypes {
    return ArAccountTypesFromJSONTyped(json, false);
}

export function ArAccountTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArAccountTypes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountTypes': !exists(json, 'accountTypes') ? undefined : ARAccountTypesTypeFromJSON(json['accountTypes']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ArAccountTypesToJSON(value?: ArAccountTypes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountTypes': ARAccountTypesTypeToJSON(value.accountTypes),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
