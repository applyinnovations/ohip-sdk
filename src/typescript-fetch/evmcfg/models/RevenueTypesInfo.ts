/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { RevenueTypeType } from './RevenueTypeType';
import {
    RevenueTypeTypeFromJSON,
    RevenueTypeTypeFromJSONTyped,
    RevenueTypeTypeToJSON,
} from './RevenueTypeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching Revenue Types Setup configurations.
 * @export
 * @interface RevenueTypesInfo
 */
export interface RevenueTypesInfo {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RevenueTypesInfo
     */
    links?: Array<InstanceLink>;
    /**
     * List of Revenue Types to be configured
     * @type {Array<RevenueTypeType>}
     * @memberof RevenueTypesInfo
     */
    revenueTypes?: Array<RevenueTypeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RevenueTypesInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RevenueTypesInfo interface.
 */
export function instanceOfRevenueTypesInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RevenueTypesInfoFromJSON(json: any): RevenueTypesInfo {
    return RevenueTypesInfoFromJSONTyped(json, false);
}

export function RevenueTypesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueTypesInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'revenueTypes': !exists(json, 'revenueTypes') ? undefined : ((json['revenueTypes'] as Array<any>).map(RevenueTypeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RevenueTypesInfoToJSON(value?: RevenueTypesInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'revenueTypes': value.revenueTypes === undefined ? undefined : ((value.revenueTypes as Array<any>).map(RevenueTypeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
