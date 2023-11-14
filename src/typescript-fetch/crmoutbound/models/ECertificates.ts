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
import type { ECertificatesType } from './ECertificatesType';
import {
    ECertificatesTypeFromJSON,
    ECertificatesTypeFromJSONTyped,
    ECertificatesTypeToJSON,
} from './ECertificatesType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';

/**
 * Response object for fetch ECertificates. This object contains collection of ECertificates,Success,Warnings and Errors related to this operation.
 * @export
 * @interface ECertificates
 */
export interface ECertificates {
    /**
     * 
     * @type {ECertificatesType}
     * @memberof ECertificates
     */
    eCertificatesDetail?: ECertificatesType;
    /**
     * 
     * @type {Links}
     * @memberof ECertificates
     */
    links?: Links;
}

/**
 * Check if a given object implements the ECertificates interface.
 */
export function instanceOfECertificates(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ECertificatesFromJSON(json: any): ECertificates {
    return ECertificatesFromJSONTyped(json, false);
}

export function ECertificatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificates {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eCertificatesDetail': !exists(json, 'eCertificatesDetail') ? undefined : ECertificatesTypeFromJSON(json['eCertificatesDetail']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
    };
}

export function ECertificatesToJSON(value?: ECertificates | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'eCertificatesDetail': ECertificatesTypeToJSON(value.eCertificatesDetail),
        'links': LinksToJSON(value.links),
    };
}
