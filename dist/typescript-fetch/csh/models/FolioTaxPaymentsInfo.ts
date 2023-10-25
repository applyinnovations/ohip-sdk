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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { PaymentTaxInfoType } from './PaymentTaxInfoType';
import {
    PaymentTaxInfoTypeFromJSON,
    PaymentTaxInfoTypeFromJSONTyped,
    PaymentTaxInfoTypeToJSON,
} from './PaymentTaxInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response to the request for Payment Tax records for a reservation. Lists all the Payment Taxes for the reservation which are available.
 * @export
 * @interface FolioTaxPaymentsInfo
 */
export interface FolioTaxPaymentsInfo {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof FolioTaxPaymentsInfo
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {PaymentTaxInfoType}
     * @memberof FolioTaxPaymentsInfo
     */
    paymentTaxInfo?: PaymentTaxInfoType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FolioTaxPaymentsInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the FolioTaxPaymentsInfo interface.
 */
export function instanceOfFolioTaxPaymentsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FolioTaxPaymentsInfoFromJSON(json: any): FolioTaxPaymentsInfo {
    return FolioTaxPaymentsInfoFromJSONTyped(json, false);
}

export function FolioTaxPaymentsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioTaxPaymentsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'paymentTaxInfo': !exists(json, 'paymentTaxInfo') ? undefined : PaymentTaxInfoTypeFromJSON(json['paymentTaxInfo']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function FolioTaxPaymentsInfoToJSON(value?: FolioTaxPaymentsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'paymentTaxInfo': PaymentTaxInfoTypeToJSON(value.paymentTaxInfo),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

