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
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * E-Certificates details.
 * @export
 * @interface ECertificateGenerationType
 */
export interface ECertificateGenerationType {
    /**
     * Reason for which e-certificate was generated.
     * @type {string}
     * @memberof ECertificateGenerationType
     */
    generationDetail?: string;
    /**
     * Type of value that is in the certificate.valid values are membership_level.
     * @type {string}
     * @memberof ECertificateGenerationType
     */
    referenceValue?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ECertificateGenerationType
     */
    ruleId?: UniqueIDType;
}

/**
 * Check if a given object implements the ECertificateGenerationType interface.
 */
export function instanceOfECertificateGenerationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ECertificateGenerationTypeFromJSON(json: any): ECertificateGenerationType {
    return ECertificateGenerationTypeFromJSONTyped(json, false);
}

export function ECertificateGenerationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateGenerationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'generationDetail': !exists(json, 'generationDetail') ? undefined : json['generationDetail'],
        'referenceValue': !exists(json, 'referenceValue') ? undefined : json['referenceValue'],
        'ruleId': !exists(json, 'ruleId') ? undefined : UniqueIDTypeFromJSON(json['ruleId']),
    };
}

export function ECertificateGenerationTypeToJSON(value?: ECertificateGenerationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'generationDetail': value.generationDetail,
        'referenceValue': value.referenceValue,
        'ruleId': UniqueIDTypeToJSON(value.ruleId),
    };
}

