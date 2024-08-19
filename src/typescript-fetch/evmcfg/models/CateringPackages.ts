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
import type { CateringPackageType } from './CateringPackageType';
import {
    CateringPackageTypeFromJSON,
    CateringPackageTypeFromJSONTyped,
    CateringPackageTypeToJSON,
} from './CateringPackageType';
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
 * Request object for changing Catering Packages.
 * @export
 * @interface CateringPackages
 */
export interface CateringPackages {
    /**
     * Collection of multiple Catering Packages.
     * @type {Array<CateringPackageType>}
     * @memberof CateringPackages
     */
    cateringPackageList?: Array<CateringPackageType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CateringPackages
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CateringPackages
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CateringPackages interface.
 */
export function instanceOfCateringPackages(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringPackagesFromJSON(json: any): CateringPackages {
    return CateringPackagesFromJSONTyped(json, false);
}

export function CateringPackagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringPackages {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cateringPackageList': !exists(json, 'cateringPackageList') ? undefined : ((json['cateringPackageList'] as Array<any>).map(CateringPackageTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CateringPackagesToJSON(value?: CateringPackages | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cateringPackageList': value.cateringPackageList === undefined ? undefined : ((value.cateringPackageList as Array<any>).map(CateringPackageTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

