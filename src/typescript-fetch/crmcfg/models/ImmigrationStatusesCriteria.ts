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
import type { ImmigrationStatusesType } from './ImmigrationStatusesType';
import {
    ImmigrationStatusesTypeFromJSON,
    ImmigrationStatusesTypeFromJSONTyped,
    ImmigrationStatusesTypeToJSON,
} from './ImmigrationStatusesType';
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
 * Request object for creating Immigration Statuses.
 * @export
 * @interface ImmigrationStatusesCriteria
 */
export interface ImmigrationStatusesCriteria {
    /**
     * 
     * @type {ImmigrationStatusesType}
     * @memberof ImmigrationStatusesCriteria
     */
    immigrationStatuses?: ImmigrationStatusesType;
    /**
     * 
     * @type {Links}
     * @memberof ImmigrationStatusesCriteria
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof ImmigrationStatusesCriteria
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ImmigrationStatusesCriteria interface.
 */
export function instanceOfImmigrationStatusesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ImmigrationStatusesCriteriaFromJSON(json: any): ImmigrationStatusesCriteria {
    return ImmigrationStatusesCriteriaFromJSONTyped(json, false);
}

export function ImmigrationStatusesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImmigrationStatusesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'immigrationStatuses': !exists(json, 'immigrationStatuses') ? undefined : ImmigrationStatusesTypeFromJSON(json['immigrationStatuses']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ImmigrationStatusesCriteriaToJSON(value?: ImmigrationStatusesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'immigrationStatuses': ImmigrationStatusesTypeToJSON(value.immigrationStatuses),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
