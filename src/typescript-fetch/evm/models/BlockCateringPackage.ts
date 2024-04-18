/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockCateringPackageType } from './BlockCateringPackageType';
import {
    BlockCateringPackageTypeFromJSON,
    BlockCateringPackageTypeFromJSONTyped,
    BlockCateringPackageTypeToJSON,
} from './BlockCateringPackageType';
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
 * Request object for adding Catering Package/Template Events to block .
 * @export
 * @interface BlockCateringPackage
 */
export interface BlockCateringPackage {
    /**
     * 
     * @type {BlockCateringPackageType}
     * @memberof BlockCateringPackage
     */
    criteria?: BlockCateringPackageType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockCateringPackage
     */
    links?: Array<InstanceLink>;
    /**
     * Indicates what number of retry attempt this request represents. If this is the original request, RetryCount should be set to 0.
     * @type {number}
     * @memberof BlockCateringPackage
     */
    requestCount?: number;
    /**
     * Used in conjunction with the Success elementSpace to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockCateringPackage
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockCateringPackage interface.
 */
export function instanceOfBlockCateringPackage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockCateringPackageFromJSON(json: any): BlockCateringPackage {
    return BlockCateringPackageFromJSONTyped(json, false);
}

export function BlockCateringPackageFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockCateringPackage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : BlockCateringPackageTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'requestCount': !exists(json, 'requestCount') ? undefined : json['requestCount'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockCateringPackageToJSON(value?: BlockCateringPackage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': BlockCateringPackageTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'requestCount': value.requestCount,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
