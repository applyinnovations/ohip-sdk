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
import type { PayloadType } from './PayloadType';
import {
    PayloadTypeFromJSON,
    PayloadTypeFromJSONTyped,
    PayloadTypeToJSON,
} from './PayloadType';

/**
 * FiscalInfo criteria type.
 * @export
 * @interface PostFiscalInfoType
 */
export interface PostFiscalInfoType {
    /**
     * 
     * @type {PayloadType}
     * @memberof PostFiscalInfoType
     */
    fiscalPayloadType?: PayloadType;
}

/**
 * Check if a given object implements the PostFiscalInfoType interface.
 */
export function instanceOfPostFiscalInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostFiscalInfoTypeFromJSON(json: any): PostFiscalInfoType {
    return PostFiscalInfoTypeFromJSONTyped(json, false);
}

export function PostFiscalInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostFiscalInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fiscalPayloadType': !exists(json, 'fiscalPayloadType') ? undefined : PayloadTypeFromJSON(json['fiscalPayloadType']),
    };
}

export function PostFiscalInfoTypeToJSON(value?: PostFiscalInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fiscalPayloadType': PayloadTypeToJSON(value.fiscalPayloadType),
    };
}
