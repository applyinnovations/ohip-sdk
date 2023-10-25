/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { SmokingTypeType } from './SmokingTypeType';
import {
    SmokingTypeTypeFromJSON,
    SmokingTypeTypeFromJSONTyped,
    SmokingTypeTypeToJSON,
} from './SmokingTypeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing Smoking Types.
 * @export
 * @interface SmokingTypesToBeChanged
 */
export interface SmokingTypesToBeChanged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof SmokingTypesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * List of Smoking Types.
     * @type {Array<SmokingTypeType>}
     * @memberof SmokingTypesToBeChanged
     */
    smokingTypes?: Array<SmokingTypeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof SmokingTypesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the SmokingTypesToBeChanged interface.
 */
export function instanceOfSmokingTypesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SmokingTypesToBeChangedFromJSON(json: any): SmokingTypesToBeChanged {
    return SmokingTypesToBeChangedFromJSONTyped(json, false);
}

export function SmokingTypesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): SmokingTypesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'smokingTypes': !exists(json, 'smokingTypes') ? undefined : ((json['smokingTypes'] as Array<any>).map(SmokingTypeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function SmokingTypesToBeChangedToJSON(value?: SmokingTypesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'smokingTypes': value.smokingTypes === undefined ? undefined : ((value.smokingTypes as Array<any>).map(SmokingTypeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

