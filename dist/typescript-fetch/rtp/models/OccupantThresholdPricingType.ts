/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OccupantThresholdPricingTypeAdults } from './OccupantThresholdPricingTypeAdults';
import {
    OccupantThresholdPricingTypeAdultsFromJSON,
    OccupantThresholdPricingTypeAdultsFromJSONTyped,
    OccupantThresholdPricingTypeAdultsToJSON,
} from './OccupantThresholdPricingTypeAdults';
import type { OccupantThresholdPricingTypeChildren } from './OccupantThresholdPricingTypeChildren';
import {
    OccupantThresholdPricingTypeChildrenFromJSON,
    OccupantThresholdPricingTypeChildrenFromJSONTyped,
    OccupantThresholdPricingTypeChildrenToJSON,
} from './OccupantThresholdPricingTypeChildren';
import type { OccupantThresholdPricingTypeOccupants } from './OccupantThresholdPricingTypeOccupants';
import {
    OccupantThresholdPricingTypeOccupantsFromJSON,
    OccupantThresholdPricingTypeOccupantsFromJSONTyped,
    OccupantThresholdPricingTypeOccupantsToJSON,
} from './OccupantThresholdPricingTypeOccupants';

/**
 * Definition for creating pricing for a rate schedule, based on occupants threshold level.
 * @export
 * @interface OccupantThresholdPricingType
 */
export interface OccupantThresholdPricingType {
    /**
     * 
     * @type {OccupantThresholdPricingTypeAdults}
     * @memberof OccupantThresholdPricingType
     */
    adults?: OccupantThresholdPricingTypeAdults;
    /**
     * 
     * @type {OccupantThresholdPricingTypeChildren}
     * @memberof OccupantThresholdPricingType
     */
    children?: OccupantThresholdPricingTypeChildren;
    /**
     * 
     * @type {OccupantThresholdPricingTypeOccupants}
     * @memberof OccupantThresholdPricingType
     */
    occupants?: OccupantThresholdPricingTypeOccupants;
}

/**
 * Check if a given object implements the OccupantThresholdPricingType interface.
 */
export function instanceOfOccupantThresholdPricingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OccupantThresholdPricingTypeFromJSON(json: any): OccupantThresholdPricingType {
    return OccupantThresholdPricingTypeFromJSONTyped(json, false);
}

export function OccupantThresholdPricingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OccupantThresholdPricingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adults': !exists(json, 'adults') ? undefined : OccupantThresholdPricingTypeAdultsFromJSON(json['adults']),
        'children': !exists(json, 'children') ? undefined : OccupantThresholdPricingTypeChildrenFromJSON(json['children']),
        'occupants': !exists(json, 'occupants') ? undefined : OccupantThresholdPricingTypeOccupantsFromJSON(json['occupants']),
    };
}

export function OccupantThresholdPricingTypeToJSON(value?: OccupantThresholdPricingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adults': OccupantThresholdPricingTypeAdultsToJSON(value.adults),
        'children': OccupantThresholdPricingTypeChildrenToJSON(value.children),
        'occupants': OccupantThresholdPricingTypeOccupantsToJSON(value.occupants),
    };
}

