/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ContractElementInformationType } from './ContractElementInformationType';
import {
    ContractElementInformationTypeFromJSON,
    ContractElementInformationTypeFromJSONTyped,
    ContractElementInformationTypeToJSON,
} from './ContractElementInformationType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * To hold channel account contract detailed information.
 * @export
 * @interface ChannelAccountContractInformationType
 */
export interface ChannelAccountContractInformationType {
    /**
     * Holds begin date of the contract.
     * @type {string}
     * @memberof ChannelAccountContractInformationType
     */
    beginDate?: string;
    /**
     * Channel account contract elements information object to hold details of contract elements.
     * @type {Array<ContractElementInformationType>}
     * @memberof ChannelAccountContractInformationType
     */
    channelAccountContractElements?: Array<ContractElementInformationType>;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ChannelAccountContractInformationType
     */
    contractId?: UniqueIDType;
    /**
     * Holds contract No of the contract.
     * @type {string}
     * @memberof ChannelAccountContractInformationType
     */
    contractNo?: string;
    /**
     * Holds end date of the contract.
     * @type {string}
     * @memberof ChannelAccountContractInformationType
     */
    endDate?: string;
    /**
     * Flag to mark respective statements which were generated on these contracts to be regenerated.
     * @type {boolean}
     * @memberof ChannelAccountContractInformationType
     */
    markStatementsToRegenerate?: boolean;
    /**
     * Holds Note for the account contract.
     * @type {string}
     * @memberof ChannelAccountContractInformationType
     */
    note?: string;
}

/**
 * Check if a given object implements the ChannelAccountContractInformationType interface.
 */
export function instanceOfChannelAccountContractInformationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelAccountContractInformationTypeFromJSON(json: any): ChannelAccountContractInformationType {
    return ChannelAccountContractInformationTypeFromJSONTyped(json, false);
}

export function ChannelAccountContractInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAccountContractInformationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'beginDate': !exists(json, 'beginDate') ? undefined : json['beginDate'],
        'channelAccountContractElements': !exists(json, 'channelAccountContractElements') ? undefined : ((json['channelAccountContractElements'] as Array<any>).map(ContractElementInformationTypeFromJSON)),
        'contractId': !exists(json, 'contractId') ? undefined : UniqueIDTypeFromJSON(json['contractId']),
        'contractNo': !exists(json, 'contractNo') ? undefined : json['contractNo'],
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'markStatementsToRegenerate': !exists(json, 'markStatementsToRegenerate') ? undefined : json['markStatementsToRegenerate'],
        'note': !exists(json, 'note') ? undefined : json['note'],
    };
}

export function ChannelAccountContractInformationTypeToJSON(value?: ChannelAccountContractInformationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'beginDate': value.beginDate,
        'channelAccountContractElements': value.channelAccountContractElements === undefined ? undefined : ((value.channelAccountContractElements as Array<any>).map(ContractElementInformationTypeToJSON)),
        'contractId': UniqueIDTypeToJSON(value.contractId),
        'contractNo': value.contractNo,
        'endDate': value.endDate,
        'markStatementsToRegenerate': value.markStatementsToRegenerate,
        'note': value.note,
    };
}

