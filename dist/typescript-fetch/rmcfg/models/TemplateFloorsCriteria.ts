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
import type { TemplateFloorType } from './TemplateFloorType';
import {
    TemplateFloorTypeFromJSON,
    TemplateFloorTypeFromJSONTyped,
    TemplateFloorTypeToJSON,
} from './TemplateFloorType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating floors at the template level.
 * @export
 * @interface TemplateFloorsCriteria
 */
export interface TemplateFloorsCriteria {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TemplateFloorsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * This type holds a collection of floors at the template level.
     * @type {Array<TemplateFloorType>}
     * @memberof TemplateFloorsCriteria
     */
    templateFloors?: Array<TemplateFloorType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateFloorsCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TemplateFloorsCriteria interface.
 */
export function instanceOfTemplateFloorsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateFloorsCriteriaFromJSON(json: any): TemplateFloorsCriteria {
    return TemplateFloorsCriteriaFromJSONTyped(json, false);
}

export function TemplateFloorsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateFloorsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'templateFloors': !exists(json, 'templateFloors') ? undefined : ((json['templateFloors'] as Array<any>).map(TemplateFloorTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TemplateFloorsCriteriaToJSON(value?: TemplateFloorsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'templateFloors': value.templateFloors === undefined ? undefined : ((value.templateFloors as Array<any>).map(TemplateFloorTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

