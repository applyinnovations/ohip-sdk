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
import type { CheckoutReservationType } from './CheckoutReservationType';
import {
    CheckoutReservationTypeFromJSON,
    CheckoutReservationTypeFromJSONTyped,
    CheckoutReservationTypeToJSON,
} from './CheckoutReservationType';
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
 * @interface PostAutoCheckoutReservationsRequest
 */
export interface PostAutoCheckoutReservationsRequest {
    /**
     * 
     * @type {CheckoutReservationType}
     * @memberof PostAutoCheckoutReservationsRequest
     */
    criteria?: CheckoutReservationType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostAutoCheckoutReservationsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostAutoCheckoutReservationsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostAutoCheckoutReservationsRequest interface.
 */
export function instanceOfPostAutoCheckoutReservationsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostAutoCheckoutReservationsRequestFromJSON(json: any): PostAutoCheckoutReservationsRequest {
    return PostAutoCheckoutReservationsRequestFromJSONTyped(json, false);
}

export function PostAutoCheckoutReservationsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostAutoCheckoutReservationsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : CheckoutReservationTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostAutoCheckoutReservationsRequestToJSON(value?: PostAutoCheckoutReservationsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': CheckoutReservationTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

