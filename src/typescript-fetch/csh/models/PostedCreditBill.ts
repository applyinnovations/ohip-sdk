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
import type { DetailPostingType } from './DetailPostingType';
import {
    DetailPostingTypeFromJSON,
    DetailPostingTypeFromJSONTyped,
    DetailPostingTypeToJSON,
} from './DetailPostingType';
import type { FolioWindowType } from './FolioWindowType';
import {
    FolioWindowTypeFromJSON,
    FolioWindowTypeFromJSONTyped,
    FolioWindowTypeToJSON,
} from './FolioWindowType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { TrxInfoType } from './TrxInfoType';
import {
    TrxInfoTypeFromJSON,
    TrxInfoTypeFromJSONTyped,
    TrxInfoTypeToJSON,
} from './TrxInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response for the request to create a Credit Folio.
 * @export
 * @interface PostedCreditBill
 */
export interface PostedCreditBill {
    /**
     * Information regarding the new Credit Folio created.
     * @type {Array<FolioWindowType>}
     * @memberof PostedCreditBill
     */
    folioWindow?: Array<FolioWindowType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostedCreditBill
     */
    links?: Array<InstanceLink>;
    /**
     * Details of the transaction(Posting).
     * @type {Array<DetailPostingType>}
     * @memberof PostedCreditBill
     */
    payments?: Array<DetailPostingType>;
    /**
     * List of Transaction codes info.
     * @type {Array<TrxInfoType>}
     * @memberof PostedCreditBill
     */
    trxCodesInfo?: Array<TrxInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostedCreditBill
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostedCreditBill interface.
 */
export function instanceOfPostedCreditBill(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostedCreditBillFromJSON(json: any): PostedCreditBill {
    return PostedCreditBillFromJSONTyped(json, false);
}

export function PostedCreditBillFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostedCreditBill {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'folioWindow': !exists(json, 'folioWindow') ? undefined : ((json['folioWindow'] as Array<any>).map(FolioWindowTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'payments': !exists(json, 'payments') ? undefined : ((json['payments'] as Array<any>).map(DetailPostingTypeFromJSON)),
        'trxCodesInfo': !exists(json, 'trxCodesInfo') ? undefined : ((json['trxCodesInfo'] as Array<any>).map(TrxInfoTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostedCreditBillToJSON(value?: PostedCreditBill | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'folioWindow': value.folioWindow === undefined ? undefined : ((value.folioWindow as Array<any>).map(FolioWindowTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'payments': value.payments === undefined ? undefined : ((value.payments as Array<any>).map(DetailPostingTypeToJSON)),
        'trxCodesInfo': value.trxCodesInfo === undefined ? undefined : ((value.trxCodesInfo as Array<any>).map(TrxInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

