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
import type { HousekeepingCodeConfigType } from './HousekeepingCodeConfigType';
import {
    HousekeepingCodeConfigTypeFromJSON,
    HousekeepingCodeConfigTypeFromJSONTyped,
    HousekeepingCodeConfigTypeToJSON,
} from './HousekeepingCodeConfigType';
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
 * 
 * @export
 * @interface ChangeHousekeepingSupplyCodesRequest
 */
export interface ChangeHousekeepingSupplyCodesRequest {
    /**
     * List of the housekeeping codes to be configured or fetched
     * @type {Array<HousekeepingCodeConfigType>}
     * @memberof ChangeHousekeepingSupplyCodesRequest
     */
    codes?: Array<HousekeepingCodeConfigType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChangeHousekeepingSupplyCodesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeHousekeepingSupplyCodesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChangeHousekeepingSupplyCodesRequest interface.
 */
export function instanceOfChangeHousekeepingSupplyCodesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeHousekeepingSupplyCodesRequestFromJSON(json: any): ChangeHousekeepingSupplyCodesRequest {
    return ChangeHousekeepingSupplyCodesRequestFromJSONTyped(json, false);
}

export function ChangeHousekeepingSupplyCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeHousekeepingSupplyCodesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'codes': !exists(json, 'codes') ? undefined : ((json['codes'] as Array<any>).map(HousekeepingCodeConfigTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChangeHousekeepingSupplyCodesRequestToJSON(value?: ChangeHousekeepingSupplyCodesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'codes': value.codes === undefined ? undefined : ((value.codes as Array<any>).map(HousekeepingCodeConfigTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

