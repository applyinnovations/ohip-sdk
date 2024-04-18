/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
import type { SourceGroupType } from './SourceGroupType';
import {
    SourceGroupTypeFromJSON,
    SourceGroupTypeFromJSONTyped,
    SourceGroupTypeToJSON,
} from './SourceGroupType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object that holds the details of Source Group to be changed.
 * @export
 * @interface SourceGroupToBeChanged
 */
export interface SourceGroupToBeChanged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof SourceGroupToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {SourceGroupType}
     * @memberof SourceGroupToBeChanged
     */
    sourceGroup?: SourceGroupType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof SourceGroupToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the SourceGroupToBeChanged interface.
 */
export function instanceOfSourceGroupToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SourceGroupToBeChangedFromJSON(json: any): SourceGroupToBeChanged {
    return SourceGroupToBeChangedFromJSONTyped(json, false);
}

export function SourceGroupToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceGroupToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'sourceGroup': !exists(json, 'sourceGroup') ? undefined : SourceGroupTypeFromJSON(json['sourceGroup']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function SourceGroupToBeChangedToJSON(value?: SourceGroupToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'sourceGroup': SourceGroupTypeToJSON(value.sourceGroup),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
