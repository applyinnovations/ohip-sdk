/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FiscalRegionType } from './FiscalRegionType';
import {
    FiscalRegionTypeFromJSON,
    FiscalRegionTypeFromJSONTyped,
    FiscalRegionTypeToJSON,
} from './FiscalRegionType';
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
 * Request object for changing Fiscal Regions.
 * @export
 * @interface FiscalRegionsToBeChanged
 */
export interface FiscalRegionsToBeChanged {
    /**
     * List of Fiscal Regions.
     * @type {Array<FiscalRegionType>}
     * @memberof FiscalRegionsToBeChanged
     */
    fiscalRegions?: Array<FiscalRegionType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof FiscalRegionsToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FiscalRegionsToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the FiscalRegionsToBeChanged interface.
 */
export function instanceOfFiscalRegionsToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FiscalRegionsToBeChangedFromJSON(json: any): FiscalRegionsToBeChanged {
    return FiscalRegionsToBeChangedFromJSONTyped(json, false);
}

export function FiscalRegionsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiscalRegionsToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fiscalRegions': !exists(json, 'fiscalRegions') ? undefined : ((json['fiscalRegions'] as Array<any>).map(FiscalRegionTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function FiscalRegionsToBeChangedToJSON(value?: FiscalRegionsToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fiscalRegions': value.fiscalRegions === undefined ? undefined : ((value.fiscalRegions as Array<any>).map(FiscalRegionTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
