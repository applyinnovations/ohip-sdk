/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockRatePlansType } from './BlockRatePlansType';
import {
    BlockRatePlansTypeFromJSON,
    BlockRatePlansTypeFromJSONTyped,
    BlockRatePlansTypeToJSON,
} from './BlockRatePlansType';
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
 * Response object to fetch rate plans summary information for blocks.
 * @export
 * @interface BlockRatePlans
 */
export interface BlockRatePlans {
    /**
     * 
     * @type {BlockRatePlansType}
     * @memberof BlockRatePlans
     */
    blockRatePlans?: BlockRatePlansType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockRatePlans
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockRatePlans
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockRatePlans interface.
 */
export function instanceOfBlockRatePlans(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockRatePlansFromJSON(json: any): BlockRatePlans {
    return BlockRatePlansFromJSONTyped(json, false);
}

export function BlockRatePlansFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRatePlans {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockRatePlans': !exists(json, 'blockRatePlans') ? undefined : BlockRatePlansTypeFromJSON(json['blockRatePlans']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockRatePlansToJSON(value?: BlockRatePlans | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockRatePlans': BlockRatePlansTypeToJSON(value.blockRatePlans),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

