/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { PaymentMethodType } from './PaymentMethodType';
import {
    PaymentMethodTypeFromJSON,
    PaymentMethodTypeFromJSONTyped,
    PaymentMethodTypeToJSON,
} from './PaymentMethodType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PaymentMethods
 */
export interface PaymentMethods {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PaymentMethods
     */
    links?: Array<InstanceLink>;
    /**
     * Holds the various types of payment methods.
     * @type {Array<PaymentMethodType>}
     * @memberof PaymentMethods
     */
    paymentMethods?: Array<PaymentMethodType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PaymentMethods
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PaymentMethods interface.
 */
export function instanceOfPaymentMethods(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaymentMethodsFromJSON(json: any): PaymentMethods {
    return PaymentMethodsFromJSONTyped(json, false);
}

export function PaymentMethodsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethods {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'paymentMethods': !exists(json, 'paymentMethods') ? undefined : ((json['paymentMethods'] as Array<any>).map(PaymentMethodTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PaymentMethodsToJSON(value?: PaymentMethods | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'paymentMethods': value.paymentMethods === undefined ? undefined : ((value.paymentMethods as Array<any>).map(PaymentMethodTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

