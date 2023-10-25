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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { SourceType } from './SourceType';
import {
    SourceTypeFromJSON,
    SourceTypeFromJSONTyped,
    SourceTypeToJSON,
} from './SourceType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing Sources.
 * @export
 * @interface SourcesToBeChanged
 */
export interface SourcesToBeChanged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof SourcesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * List of Sources.
     * @type {Array<SourceType>}
     * @memberof SourcesToBeChanged
     */
    sources?: Array<SourceType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof SourcesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the SourcesToBeChanged interface.
 */
export function instanceOfSourcesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SourcesToBeChangedFromJSON(json: any): SourcesToBeChanged {
    return SourcesToBeChangedFromJSONTyped(json, false);
}

export function SourcesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourcesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'sources': !exists(json, 'sources') ? undefined : ((json['sources'] as Array<any>).map(SourceTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function SourcesToBeChangedToJSON(value?: SourcesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'sources': value.sources === undefined ? undefined : ((value.sources as Array<any>).map(SourceTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

