/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BedTaxInfoType } from './BedTaxInfoType';
import {
    BedTaxInfoTypeFromJSON,
    BedTaxInfoTypeFromJSONTyped,
    BedTaxInfoTypeToJSON,
} from './BedTaxInfoType';
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
 * Response for bed transaction info
 * @export
 * @interface BedTaxInfo
 */
export interface BedTaxInfo {
    /**
     * List of Bed Tax info.
     * @type {Array<BedTaxInfoType>}
     * @memberof BedTaxInfo
     */
    bedTaxInfoTypes?: Array<BedTaxInfoType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BedTaxInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BedTaxInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BedTaxInfo interface.
 */
export function instanceOfBedTaxInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BedTaxInfoFromJSON(json: any): BedTaxInfo {
    return BedTaxInfoFromJSONTyped(json, false);
}

export function BedTaxInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BedTaxInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bedTaxInfoTypes': !exists(json, 'bedTaxInfoTypes') ? undefined : ((json['bedTaxInfoTypes'] as Array<any>).map(BedTaxInfoTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BedTaxInfoToJSON(value?: BedTaxInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bedTaxInfoTypes': value.bedTaxInfoTypes === undefined ? undefined : ((value.bedTaxInfoTypes as Array<any>).map(BedTaxInfoTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

