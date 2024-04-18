/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
 * Request type for change bed transaction info
 * @export
 * @interface BedTaxCriteria
 */
export interface BedTaxCriteria {
    /**
     * 
     * @type {BedTaxInfoType}
     * @memberof BedTaxCriteria
     */
    bedTaxInfoType?: BedTaxInfoType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BedTaxCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BedTaxCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BedTaxCriteria interface.
 */
export function instanceOfBedTaxCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BedTaxCriteriaFromJSON(json: any): BedTaxCriteria {
    return BedTaxCriteriaFromJSONTyped(json, false);
}

export function BedTaxCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): BedTaxCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bedTaxInfoType': !exists(json, 'bedTaxInfoType') ? undefined : BedTaxInfoTypeFromJSON(json['bedTaxInfoType']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BedTaxCriteriaToJSON(value?: BedTaxCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bedTaxInfoType': BedTaxInfoTypeToJSON(value.bedTaxInfoType),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
