/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProformaResponseInstructionType } from './ProformaResponseInstructionType';
import {
    ProformaResponseInstructionTypeFromJSON,
    ProformaResponseInstructionTypeFromJSONTyped,
    ProformaResponseInstructionTypeToJSON,
} from './ProformaResponseInstructionType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Criteria for creating Proforma transactions for a reservation. These transactions will be used by the Opera Proforma Report.
 * @export
 * @interface CreateProformaCriteriaType
 */
export interface CreateProformaCriteriaType {
    /**
     * Property code.
     * @type {string}
     * @memberof CreateProformaCriteriaType
     */
    hotelId?: string;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof CreateProformaCriteriaType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {ProformaResponseInstructionType}
     * @memberof CreateProformaCriteriaType
     */
    responseInstruction?: ProformaResponseInstructionType;
}

/**
 * Check if a given object implements the CreateProformaCriteriaType interface.
 */
export function instanceOfCreateProformaCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateProformaCriteriaTypeFromJSON(json: any): CreateProformaCriteriaType {
    return CreateProformaCriteriaTypeFromJSONTyped(json, false);
}

export function CreateProformaCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProformaCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'responseInstruction': !exists(json, 'responseInstruction') ? undefined : ProformaResponseInstructionTypeFromJSON(json['responseInstruction']),
    };
}

export function CreateProformaCriteriaTypeToJSON(value?: CreateProformaCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'responseInstruction': ProformaResponseInstructionTypeToJSON(value.responseInstruction),
    };
}

