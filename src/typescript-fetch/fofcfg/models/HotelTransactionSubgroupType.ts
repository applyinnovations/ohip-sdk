/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CashieringTransactionTypeType } from './CashieringTransactionTypeType';
import {
    CashieringTransactionTypeTypeFromJSON,
    CashieringTransactionTypeTypeFromJSONTyped,
    CashieringTransactionTypeTypeToJSON,
} from './CashieringTransactionTypeType';
import type { GeneratesSetupType } from './GeneratesSetupType';
import {
    GeneratesSetupTypeFromJSON,
    GeneratesSetupTypeFromJSONTyped,
    GeneratesSetupTypeToJSON,
} from './GeneratesSetupType';

/**
 * Transaction Subgroup configuration Information.
 * @export
 * @interface HotelTransactionSubgroupType
 */
export interface HotelTransactionSubgroupType {
    /**
     * Transaction Subroup Configuration Code.
     * @type {string}
     * @memberof HotelTransactionSubgroupType
     */
    code?: string;
    /**
     * Description of the Transaction Subgroup.
     * @type {string}
     * @memberof HotelTransactionSubgroupType
     */
    description?: string;
    /**
     * Flag to determine whether generates are available or not
     * @type {boolean}
     * @memberof HotelTransactionSubgroupType
     */
    generatesAvailable?: boolean;
    /**
     * 
     * @type {GeneratesSetupType}
     * @memberof HotelTransactionSubgroupType
     */
    generatesSetup?: GeneratesSetupType;
    /**
     * Transaction Group Configuration Code.
     * @type {string}
     * @memberof HotelTransactionSubgroupType
     */
    group?: string;
    /**
     * Description of the Transaction Group.
     * @type {string}
     * @memberof HotelTransactionSubgroupType
     */
    groupDescription?: string;
    /**
     * Hotel Code where the Transaction Subgroup is configured.
     * @type {string}
     * @memberof HotelTransactionSubgroupType
     */
    hotelId?: string;
    /**
     * Use this attribute to update the existing group during change operation.
     * @type {string}
     * @memberof HotelTransactionSubgroupType
     */
    newGroup?: string;
    /**
     * Display sequence for the code type.
     * @type {number}
     * @memberof HotelTransactionSubgroupType
     */
    sequence?: number;
    /**
     * 
     * @type {CashieringTransactionTypeType}
     * @memberof HotelTransactionSubgroupType
     */
    type?: CashieringTransactionTypeType;
}

/**
 * Check if a given object implements the HotelTransactionSubgroupType interface.
 */
export function instanceOfHotelTransactionSubgroupType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelTransactionSubgroupTypeFromJSON(json: any): HotelTransactionSubgroupType {
    return HotelTransactionSubgroupTypeFromJSONTyped(json, false);
}

export function HotelTransactionSubgroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelTransactionSubgroupType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'generatesAvailable': !exists(json, 'generatesAvailable') ? undefined : json['generatesAvailable'],
        'generatesSetup': !exists(json, 'generatesSetup') ? undefined : GeneratesSetupTypeFromJSON(json['generatesSetup']),
        'group': !exists(json, 'group') ? undefined : json['group'],
        'groupDescription': !exists(json, 'groupDescription') ? undefined : json['groupDescription'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'newGroup': !exists(json, 'newGroup') ? undefined : json['newGroup'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'type': !exists(json, 'type') ? undefined : CashieringTransactionTypeTypeFromJSON(json['type']),
    };
}

export function HotelTransactionSubgroupTypeToJSON(value?: HotelTransactionSubgroupType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'generatesAvailable': value.generatesAvailable,
        'generatesSetup': GeneratesSetupTypeToJSON(value.generatesSetup),
        'group': value.group,
        'groupDescription': value.groupDescription,
        'hotelId': value.hotelId,
        'newGroup': value.newGroup,
        'sequence': value.sequence,
        'type': CashieringTransactionTypeTypeToJSON(value.type),
    };
}

