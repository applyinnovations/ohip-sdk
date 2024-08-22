/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Basic information about membership benefit.
 * @export
 * @interface BenefitType
 */
export interface BenefitType {
    /**
     * Benefit code associated with a membership.
     * @type {string}
     * @memberof BenefitType
     */
    code?: string;
    /**
     * Indicates whether membership benefit is active or inactive.
     * @type {boolean}
     * @memberof BenefitType
     */
    inactive?: boolean;
    /**
     * Processing message for membership benefit.
     * @type {string}
     * @memberof BenefitType
     */
    message?: string;
}

/**
 * Check if a given object implements the BenefitType interface.
 */
export function instanceOfBenefitType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BenefitTypeFromJSON(json: any): BenefitType {
    return BenefitTypeFromJSONTyped(json, false);
}

export function BenefitTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BenefitType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function BenefitTypeToJSON(value?: BenefitType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'inactive': value.inactive,
        'message': value.message,
    };
}

