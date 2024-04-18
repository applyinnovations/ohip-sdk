/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ECouponCopyType } from './ECouponCopyType';
import {
    ECouponCopyTypeFromJSON,
    ECouponCopyTypeFromJSONTyped,
    ECouponCopyTypeToJSON,
} from './ECouponCopyType';
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
 * Request object to copy the existing eCoupon codes from source property to the selected target properties.
 * @export
 * @interface ECouponCodesCopy
 */
export interface ECouponCodesCopy {
    /**
     * 
     * @type {ECouponCopyType}
     * @memberof ECouponCodesCopy
     */
    eCouponCopy?: ECouponCopyType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ECouponCodesCopy
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ECouponCodesCopy
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ECouponCodesCopy interface.
 */
export function instanceOfECouponCodesCopy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ECouponCodesCopyFromJSON(json: any): ECouponCodesCopy {
    return ECouponCodesCopyFromJSONTyped(json, false);
}

export function ECouponCodesCopyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECouponCodesCopy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eCouponCopy': !exists(json, 'eCouponCopy') ? undefined : ECouponCopyTypeFromJSON(json['eCouponCopy']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ECouponCodesCopyToJSON(value?: ECouponCodesCopy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'eCouponCopy': ECouponCopyTypeToJSON(value.eCouponCopy),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
