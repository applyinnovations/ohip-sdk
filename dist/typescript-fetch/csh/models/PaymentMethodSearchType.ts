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
/**
 * Reservation Payment method search criteria for searching a reservation.
 * @export
 * @interface PaymentMethodSearchType
 */
export interface PaymentMethodSearchType {
    /**
     * Payment Method to search the reservation.
     * @type {string}
     * @memberof PaymentMethodSearchType
     */
    paymentMethod?: string;
}

/**
 * Check if a given object implements the PaymentMethodSearchType interface.
 */
export function instanceOfPaymentMethodSearchType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaymentMethodSearchTypeFromJSON(json: any): PaymentMethodSearchType {
    return PaymentMethodSearchTypeFromJSONTyped(json, false);
}

export function PaymentMethodSearchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodSearchType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : json['paymentMethod'],
    };
}

export function PaymentMethodSearchTypeToJSON(value?: PaymentMethodSearchType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paymentMethod': value.paymentMethod,
    };
}

