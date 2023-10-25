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
import type { CateringCodeType } from './CateringCodeType';
import {
    CateringCodeTypeFromJSON,
    CateringCodeTypeFromJSONTyped,
    CateringCodeTypeToJSON,
} from './CateringCodeType';
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
 * Response object for fetching Catering Rental Code details.
 * @export
 * @interface CateringRentalCodesDetails
 */
export interface CateringRentalCodesDetails {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CateringRentalCodesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Catering Code details.
     * @type {Array<CateringCodeType>}
     * @memberof CateringRentalCodesDetails
     */
    rentalCodes?: Array<CateringCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CateringRentalCodesDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CateringRentalCodesDetails interface.
 */
export function instanceOfCateringRentalCodesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringRentalCodesDetailsFromJSON(json: any): CateringRentalCodesDetails {
    return CateringRentalCodesDetailsFromJSONTyped(json, false);
}

export function CateringRentalCodesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringRentalCodesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'rentalCodes': !exists(json, 'rentalCodes') ? undefined : ((json['rentalCodes'] as Array<any>).map(CateringCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CateringRentalCodesDetailsToJSON(value?: CateringRentalCodesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'rentalCodes': value.rentalCodes === undefined ? undefined : ((value.rentalCodes as Array<any>).map(CateringCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

