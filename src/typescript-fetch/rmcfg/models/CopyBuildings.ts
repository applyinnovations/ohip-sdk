/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CopyConfigurationCodeType } from './CopyConfigurationCodeType';
import {
    CopyConfigurationCodeTypeFromJSON,
    CopyConfigurationCodeTypeFromJSONTyped,
    CopyConfigurationCodeTypeToJSON,
} from './CopyConfigurationCodeType';
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
 * Request object for copying Building details to hotel(s).
 * @export
 * @interface CopyBuildings
 */
export interface CopyBuildings {
    /**
     * Information needed to copy configuration code from one property to the other.
     * @type {Array<CopyConfigurationCodeType>}
     * @memberof CopyBuildings
     */
    copyInstructions?: Array<CopyConfigurationCodeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CopyBuildings
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CopyBuildings
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CopyBuildings interface.
 */
export function instanceOfCopyBuildings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyBuildingsFromJSON(json: any): CopyBuildings {
    return CopyBuildingsFromJSONTyped(json, false);
}

export function CopyBuildingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyBuildings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyInstructions': !exists(json, 'copyInstructions') ? undefined : ((json['copyInstructions'] as Array<any>).map(CopyConfigurationCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CopyBuildingsToJSON(value?: CopyBuildings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyInstructions': value.copyInstructions === undefined ? undefined : ((value.copyInstructions as Array<any>).map(CopyConfigurationCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

