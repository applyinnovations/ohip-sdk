/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Configured Billing Instruction which represents a set of Transaction Codes.
 * @export
 * @interface StagedProfileBillingInstructionType
 */
export interface StagedProfileBillingInstructionType {
    /**
     * Billing Instruction code description.
     * @type {string}
     * @memberof StagedProfileBillingInstructionType
     */
    desc?: string;
    /**
     * This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer.
     * @type {number}
     * @memberof StagedProfileBillingInstructionType
     */
    routingInstructionsId?: number;
    /**
     * Unique identifier for the Billing Instruction.
     * @type {string}
     * @memberof StagedProfileBillingInstructionType
     */
    billingCode?: string;
    /**
     * Hotel context of the Billing Instruction.
     * @type {string}
     * @memberof StagedProfileBillingInstructionType
     */
    hotelId?: string;
    /**
     * The error in billing instruction information in a staged profile with an invalid status
     * @type {string}
     * @memberof StagedProfileBillingInstructionType
     */
    errorDescription?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileBillingInstructionType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileBillingInstructionType
     */
    type?: string;
}

/**
 * Check if a given object implements the StagedProfileBillingInstructionType interface.
 */
export function instanceOfStagedProfileBillingInstructionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StagedProfileBillingInstructionTypeFromJSON(json: any): StagedProfileBillingInstructionType {
    return StagedProfileBillingInstructionTypeFromJSONTyped(json, false);
}

export function StagedProfileBillingInstructionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileBillingInstructionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'desc': !exists(json, 'desc') ? undefined : json['desc'],
        'routingInstructionsId': !exists(json, 'routingInstructionsId') ? undefined : json['routingInstructionsId'],
        'billingCode': !exists(json, 'billingCode') ? undefined : json['billingCode'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function StagedProfileBillingInstructionTypeToJSON(value?: StagedProfileBillingInstructionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'desc': value.desc,
        'routingInstructionsId': value.routingInstructionsId,
        'billingCode': value.billingCode,
        'hotelId': value.hotelId,
        'errorDescription': value.errorDescription,
        'id': value.id,
        'type': value.type,
    };
}

