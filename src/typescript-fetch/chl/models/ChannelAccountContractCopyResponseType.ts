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
import type { ChannelAccountContractCopyResponseTypeContractResponseInformationInner } from './ChannelAccountContractCopyResponseTypeContractResponseInformationInner';
import {
    ChannelAccountContractCopyResponseTypeContractResponseInformationInnerFromJSON,
    ChannelAccountContractCopyResponseTypeContractResponseInformationInnerFromJSONTyped,
    ChannelAccountContractCopyResponseTypeContractResponseInformationInnerToJSON,
} from './ChannelAccountContractCopyResponseTypeContractResponseInformationInner';
import type { ErrorType } from './ErrorType';
import {
    ErrorTypeFromJSON,
    ErrorTypeFromJSONTyped,
    ErrorTypeToJSON,
} from './ErrorType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Channel account contract type to hold account and contract details to copy.
 * @export
 * @interface ChannelAccountContractCopyResponseType
 */
export interface ChannelAccountContractCopyResponseType {
    /**
     * Target Account code to which contract is copied.
     * @type {string}
     * @memberof ChannelAccountContractCopyResponseType
     */
    accountCode?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ChannelAccountContractCopyResponseType
     */
    accountId?: UniqueIDType;
    /**
     * Holds contract Id of the contract copied.
     * @type {Array<ChannelAccountContractCopyResponseTypeContractResponseInformationInner>}
     * @memberof ChannelAccountContractCopyResponseType
     */
    contractResponseInformation?: Array<ChannelAccountContractCopyResponseTypeContractResponseInformationInner>;
    /**
     * 
     * @type {ErrorType}
     * @memberof ChannelAccountContractCopyResponseType
     */
    errorMessage?: ErrorType;
}

/**
 * Check if a given object implements the ChannelAccountContractCopyResponseType interface.
 */
export function instanceOfChannelAccountContractCopyResponseType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelAccountContractCopyResponseTypeFromJSON(json: any): ChannelAccountContractCopyResponseType {
    return ChannelAccountContractCopyResponseTypeFromJSONTyped(json, false);
}

export function ChannelAccountContractCopyResponseTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAccountContractCopyResponseType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountCode': !exists(json, 'accountCode') ? undefined : json['accountCode'],
        'accountId': !exists(json, 'accountId') ? undefined : UniqueIDTypeFromJSON(json['accountId']),
        'contractResponseInformation': !exists(json, 'contractResponseInformation') ? undefined : ((json['contractResponseInformation'] as Array<any>).map(ChannelAccountContractCopyResponseTypeContractResponseInformationInnerFromJSON)),
        'errorMessage': !exists(json, 'errorMessage') ? undefined : ErrorTypeFromJSON(json['errorMessage']),
    };
}

export function ChannelAccountContractCopyResponseTypeToJSON(value?: ChannelAccountContractCopyResponseType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountCode': value.accountCode,
        'accountId': UniqueIDTypeToJSON(value.accountId),
        'contractResponseInformation': value.contractResponseInformation === undefined ? undefined : ((value.contractResponseInformation as Array<any>).map(ChannelAccountContractCopyResponseTypeContractResponseInformationInnerToJSON)),
        'errorMessage': ErrorTypeToJSON(value.errorMessage),
    };
}

