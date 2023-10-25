/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CateringMenuClassType } from './CateringMenuClassType';
import {
    CateringMenuClassTypeFromJSON,
    CateringMenuClassTypeFromJSONTyped,
    CateringMenuClassTypeToJSON,
} from './CateringMenuClassType';
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
 * Request object for changing Menu Classes.
 * @export
 * @interface CateringMenuClasses
 */
export interface CateringMenuClasses {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CateringMenuClasses
     */
    links?: Array<InstanceLink>;
    /**
     * List of Values of Menu.
     * @type {Array<CateringMenuClassType>}
     * @memberof CateringMenuClasses
     */
    menuClassList?: Array<CateringMenuClassType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CateringMenuClasses
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CateringMenuClasses interface.
 */
export function instanceOfCateringMenuClasses(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringMenuClassesFromJSON(json: any): CateringMenuClasses {
    return CateringMenuClassesFromJSONTyped(json, false);
}

export function CateringMenuClassesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringMenuClasses {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'menuClassList': !exists(json, 'menuClassList') ? undefined : ((json['menuClassList'] as Array<any>).map(CateringMenuClassTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CateringMenuClassesToJSON(value?: CateringMenuClasses | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'menuClassList': value.menuClassList === undefined ? undefined : ((value.menuClassList as Array<any>).map(CateringMenuClassTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

