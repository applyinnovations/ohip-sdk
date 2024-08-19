/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';

/**
 * Payment details to enrolll profile to the membership program.
 * @export
 * @interface EnrollmentPaymentDetailsType
 */
export interface EnrollmentPaymentDetailsType {
    /**
     * Amount/Fee to enroll to membership Program.
     * @type {number}
     * @memberof EnrollmentPaymentDetailsType
     */
    amount?: number;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof EnrollmentPaymentDetailsType
     */
    amountCode?: CodeDescriptionType;
    /**
     * Payment Comments.
     * @type {string}
     * @memberof EnrollmentPaymentDetailsType
     */
    comments?: string;
    /**
     * The date of Payment for enrollment to membership program.
     * @type {string}
     * @memberof EnrollmentPaymentDetailsType
     */
    paymentDate?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof EnrollmentPaymentDetailsType
     */
    paymentMethod?: CodeDescriptionType;
}

/**
 * Check if a given object implements the EnrollmentPaymentDetailsType interface.
 */
export function instanceOfEnrollmentPaymentDetailsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EnrollmentPaymentDetailsTypeFromJSON(json: any): EnrollmentPaymentDetailsType {
    return EnrollmentPaymentDetailsTypeFromJSONTyped(json, false);
}

export function EnrollmentPaymentDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrollmentPaymentDetailsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'amountCode': !exists(json, 'amountCode') ? undefined : CodeDescriptionTypeFromJSON(json['amountCode']),
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'paymentDate': !exists(json, 'paymentDate') ? undefined : json['paymentDate'],
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : CodeDescriptionTypeFromJSON(json['paymentMethod']),
    };
}

export function EnrollmentPaymentDetailsTypeToJSON(value?: EnrollmentPaymentDetailsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'amountCode': CodeDescriptionTypeToJSON(value.amountCode),
        'comments': value.comments,
        'paymentDate': value.paymentDate,
        'paymentMethod': CodeDescriptionTypeToJSON(value.paymentMethod),
    };
}

