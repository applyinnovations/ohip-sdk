/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeListType } from './CodeListType';
import {
    CodeListTypeFromJSON,
    CodeListTypeFromJSONTyped,
    CodeListTypeToJSON,
} from './CodeListType';
import type { TotalPricingElementsType } from './TotalPricingElementsType';
import {
    TotalPricingElementsTypeFromJSON,
    TotalPricingElementsTypeFromJSONTyped,
    TotalPricingElementsTypeToJSON,
} from './TotalPricingElementsType';

/**
 * Total Pricing Elements to copy from single source property to multi target properties
 * @export
 * @interface CopyTotalPricingElementsType
 */
export interface CopyTotalPricingElementsType {
    /**
     * 
     * @type {CodeListType}
     * @memberof CopyTotalPricingElementsType
     */
    targetHotels?: CodeListType;
    /**
     * 
     * @type {TotalPricingElementsType}
     * @memberof CopyTotalPricingElementsType
     */
    totalPricingElements?: TotalPricingElementsType;
}

/**
 * Check if a given object implements the CopyTotalPricingElementsType interface.
 */
export function instanceOfCopyTotalPricingElementsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyTotalPricingElementsTypeFromJSON(json: any): CopyTotalPricingElementsType {
    return CopyTotalPricingElementsTypeFromJSONTyped(json, false);
}

export function CopyTotalPricingElementsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyTotalPricingElementsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'targetHotels': !exists(json, 'targetHotels') ? undefined : CodeListTypeFromJSON(json['targetHotels']),
        'totalPricingElements': !exists(json, 'totalPricingElements') ? undefined : TotalPricingElementsTypeFromJSON(json['totalPricingElements']),
    };
}

export function CopyTotalPricingElementsTypeToJSON(value?: CopyTotalPricingElementsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'targetHotels': CodeListTypeToJSON(value.targetHotels),
        'totalPricingElements': TotalPricingElementsTypeToJSON(value.totalPricingElements),
    };
}
