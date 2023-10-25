/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AdditionalGuestAmountType } from './AdditionalGuestAmountType';
import {
    AdditionalGuestAmountTypeFromJSON,
    AdditionalGuestAmountTypeFromJSONTyped,
    AdditionalGuestAmountTypeToJSON,
} from './AdditionalGuestAmountType';
import type { DiscountType } from './DiscountType';
import {
    DiscountTypeFromJSON,
    DiscountTypeFromJSONTyped,
    DiscountTypeToJSON,
} from './DiscountType';
import type { PointsType } from './PointsType';
import {
    PointsTypeFromJSON,
    PointsTypeFromJSONTyped,
    PointsTypeToJSON,
} from './PointsType';
import type { ShareDistributionInstructionType } from './ShareDistributionInstructionType';
import {
    ShareDistributionInstructionTypeFromJSON,
    ShareDistributionInstructionTypeFromJSONTyped,
    ShareDistributionInstructionTypeToJSON,
} from './ShareDistributionInstructionType';
import type { TotalType } from './TotalType';
import {
    TotalTypeFromJSON,
    TotalTypeFromJSONTyped,
    TotalTypeToJSON,
} from './TotalType';

/**
 * Base charge and additional charges related to a room that includes such things as additional guest amounts, cancel fees, etc. Also includes Discount percentages, total amount, and the rate description.
 * @export
 * @interface AmountType
 */
export interface AmountType {
    /**
     * Collection of incremental charges per age qualifying code for additional guests. Amount charged for additional occupant is with respect to age group of the base guests.
     * @type {Array<AdditionalGuestAmountType>}
     * @memberof AmountType
     */
    additionalGuestAmounts?: Array<AdditionalGuestAmountType>;
    /**
     * 
     * @type {TotalType}
     * @memberof AmountType
     */
    base?: TotalType;
    /**
     * 
     * @type {DiscountType}
     * @memberof AmountType
     */
    discount?: DiscountType;
    /**
     * 
     * @type {TotalType}
     * @memberof AmountType
     */
    effectiveRate?: TotalType;
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof AmountType
     */
    end?: Date;
    /**
     * 
     * @type {PointsType}
     * @memberof AmountType
     */
    requiredPoints?: PointsType;
    /**
     * 
     * @type {ShareDistributionInstructionType}
     * @memberof AmountType
     */
    shareDistributionInstruction?: ShareDistributionInstructionType;
    /**
     * Indicates the share rate percentage for the reservation if set to CUSTOMSPLIT.
     * @type {number}
     * @memberof AmountType
     */
    shareRatePercentage?: number;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof AmountType
     */
    start?: Date;
    /**
     * 
     * @type {TotalType}
     * @memberof AmountType
     */
    total?: TotalType;
}

/**
 * Check if a given object implements the AmountType interface.
 */
export function instanceOfAmountType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AmountTypeFromJSON(json: any): AmountType {
    return AmountTypeFromJSONTyped(json, false);
}

export function AmountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AmountType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalGuestAmounts': !exists(json, 'additionalGuestAmounts') ? undefined : ((json['additionalGuestAmounts'] as Array<any>).map(AdditionalGuestAmountTypeFromJSON)),
        'base': !exists(json, 'base') ? undefined : TotalTypeFromJSON(json['base']),
        'discount': !exists(json, 'discount') ? undefined : DiscountTypeFromJSON(json['discount']),
        'effectiveRate': !exists(json, 'effectiveRate') ? undefined : TotalTypeFromJSON(json['effectiveRate']),
        'end': !exists(json, 'end') ? undefined : (new Date(json['end'])),
        'requiredPoints': !exists(json, 'requiredPoints') ? undefined : PointsTypeFromJSON(json['requiredPoints']),
        'shareDistributionInstruction': !exists(json, 'shareDistributionInstruction') ? undefined : ShareDistributionInstructionTypeFromJSON(json['shareDistributionInstruction']),
        'shareRatePercentage': !exists(json, 'shareRatePercentage') ? undefined : json['shareRatePercentage'],
        'start': !exists(json, 'start') ? undefined : (new Date(json['start'])),
        'total': !exists(json, 'total') ? undefined : TotalTypeFromJSON(json['total']),
    };
}

export function AmountTypeToJSON(value?: AmountType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalGuestAmounts': value.additionalGuestAmounts === undefined ? undefined : ((value.additionalGuestAmounts as Array<any>).map(AdditionalGuestAmountTypeToJSON)),
        'base': TotalTypeToJSON(value.base),
        'discount': DiscountTypeToJSON(value.discount),
        'effectiveRate': TotalTypeToJSON(value.effectiveRate),
        'end': value.end === undefined ? undefined : (value.end.toISOString().substr(0,10)),
        'requiredPoints': PointsTypeToJSON(value.requiredPoints),
        'shareDistributionInstruction': ShareDistributionInstructionTypeToJSON(value.shareDistributionInstruction),
        'shareRatePercentage': value.shareRatePercentage,
        'start': value.start === undefined ? undefined : (value.start.toISOString().substr(0,10)),
        'total': TotalTypeToJSON(value.total),
    };
}

