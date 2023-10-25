/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Specifies various requirement for the guarantee code.
 * @export
 * @interface GuaranteeRequirementsType
 */
export interface GuaranteeRequirementsType {
    /**
     * When true indicates address on the reservation is required for this guarantee code.
     * @type {boolean}
     * @memberof GuaranteeRequirementsType
     */
    address?: boolean;
    /**
     * When true indicates arrival Time on the reservation is required for this guarantee code.
     * @type {boolean}
     * @memberof GuaranteeRequirementsType
     */
    arrivalTime?: boolean;
    /**
     * When true indicates cancellation on the reservation is required for this guarantee code.
     * @type {boolean}
     * @memberof GuaranteeRequirementsType
     */
    cancellation?: boolean;
    /**
     * When true indicates Credit Card on the reservation is required for this guarantee code.
     * @type {boolean}
     * @memberof GuaranteeRequirementsType
     */
    creditCard?: boolean;
    /**
     * When true indicates deposit is required for this guarantee code.
     * @type {boolean}
     * @memberof GuaranteeRequirementsType
     */
    deposit?: boolean;
    /**
     * When true indicates phone number on the reservation is required for this guarantee code.
     * @type {boolean}
     * @memberof GuaranteeRequirementsType
     */
    phoneNumber?: boolean;
    /**
     * Requirement Code.
     * @type {string}
     * @memberof GuaranteeRequirementsType
     */
    requirementCode?: string;
}

/**
 * Check if a given object implements the GuaranteeRequirementsType interface.
 */
export function instanceOfGuaranteeRequirementsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GuaranteeRequirementsTypeFromJSON(json: any): GuaranteeRequirementsType {
    return GuaranteeRequirementsTypeFromJSONTyped(json, false);
}

export function GuaranteeRequirementsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuaranteeRequirementsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : json['address'],
        'arrivalTime': !exists(json, 'arrivalTime') ? undefined : json['arrivalTime'],
        'cancellation': !exists(json, 'cancellation') ? undefined : json['cancellation'],
        'creditCard': !exists(json, 'creditCard') ? undefined : json['creditCard'],
        'deposit': !exists(json, 'deposit') ? undefined : json['deposit'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'requirementCode': !exists(json, 'requirementCode') ? undefined : json['requirementCode'],
    };
}

export function GuaranteeRequirementsTypeToJSON(value?: GuaranteeRequirementsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'arrivalTime': value.arrivalTime,
        'cancellation': value.cancellation,
        'creditCard': value.creditCard,
        'deposit': value.deposit,
        'phoneNumber': value.phoneNumber,
        'requirementCode': value.requirementCode,
    };
}

