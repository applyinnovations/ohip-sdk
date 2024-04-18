/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ImmigrationStatusType } from './ImmigrationStatusType';
import {
    ImmigrationStatusTypeFromJSON,
    ImmigrationStatusTypeFromJSONTyped,
    ImmigrationStatusTypeToJSON,
} from './ImmigrationStatusType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing Immigration Statuses.
 * @export
 * @interface ImmigrationStatusesToBeChanged
 */
export interface ImmigrationStatusesToBeChanged {
    /**
     * List of Immigration Statuses.
     * @type {Array<ImmigrationStatusType>}
     * @memberof ImmigrationStatusesToBeChanged
     */
    immigrationStatuses?: Array<ImmigrationStatusType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ImmigrationStatusesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ImmigrationStatusesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ImmigrationStatusesToBeChanged interface.
 */
export function instanceOfImmigrationStatusesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ImmigrationStatusesToBeChangedFromJSON(json: any): ImmigrationStatusesToBeChanged {
    return ImmigrationStatusesToBeChangedFromJSONTyped(json, false);
}

export function ImmigrationStatusesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImmigrationStatusesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'immigrationStatuses': !exists(json, 'immigrationStatuses') ? undefined : ((json['immigrationStatuses'] as Array<any>).map(ImmigrationStatusTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ImmigrationStatusesToBeChangedToJSON(value?: ImmigrationStatusesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'immigrationStatuses': value.immigrationStatuses === undefined ? undefined : ((value.immigrationStatuses as Array<any>).map(ImmigrationStatusTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
