/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CateringEventsAttendeesType } from './CateringEventsAttendeesType';
import {
    CateringEventsAttendeesTypeFromJSON,
    CateringEventsAttendeesTypeFromJSONTyped,
    CateringEventsAttendeesTypeToJSON,
} from './CateringEventsAttendeesType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { TranslationTextType200 } from './TranslationTextType200';
import {
    TranslationTextType200FromJSON,
    TranslationTextType200FromJSONTyped,
    TranslationTextType200ToJSON,
} from './TranslationTextType200';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Details of Catering Package Type.
 * @export
 * @interface BlockCateringPackageType
 */
export interface BlockCateringPackageType {
    /**
     * 
     * @type {CateringEventsAttendeesType}
     * @memberof BlockCateringPackageType
     */
    attendees?: CateringEventsAttendeesType;
    /**
     * Begin Date for package/template events
     * @type {string}
     * @memberof BlockCateringPackageType
     */
    beginDate?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof BlockCateringPackageType
     */
    blockId?: UniqueIDType;
    /**
     * Notifies whether this catering package can be deleted or not.
     * @type {boolean}
     * @memberof BlockCateringPackageType
     */
    cateringPackageRemovable?: boolean;
    /**
     * Catering Package duration.
     * @type {number}
     * @memberof BlockCateringPackageType
     */
    duration?: number;
    /**
     * Defines if Flat Rate is applicable for the package.
     * @type {boolean}
     * @memberof BlockCateringPackageType
     */
    flatRate?: boolean;
    /**
     * Hotel Code of the Block.
     * @type {string}
     * @memberof BlockCateringPackageType
     */
    hotelId?: string;
    /**
     * Flat to determine if the events the events associated with this package has non packaged resources
     * @type {boolean}
     * @memberof BlockCateringPackageType
     */
    nonPackagedResourcesExist?: boolean;
    /**
     * Indicates whether all event from the package is in Actual Status.
     * @type {boolean}
     * @memberof BlockCateringPackageType
     */
    packageActual?: boolean;
    /**
     * Package Code which will be added to the block.
     * @type {string}
     * @memberof BlockCateringPackageType
     */
    packageCode?: string;
    /**
     * Hotel Code of the associated package.
     * @type {string}
     * @memberof BlockCateringPackageType
     */
    packageHotelCode?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof BlockCateringPackageType
     */
    packageId?: UniqueIDType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof BlockCateringPackageType
     */
    price?: CurrencyAmountType;
    /**
     * Price Code of the package.
     * @type {string}
     * @memberof BlockCateringPackageType
     */
    priceCode?: string;
    /**
     * Price Code description of the associated package.
     * @type {string}
     * @memberof BlockCateringPackageType
     */
    priceDescription?: string;
    /**
     * Rate code of the associated package
     * @type {string}
     * @memberof BlockCateringPackageType
     */
    rentalCode?: string;
    /**
     * Status of the catering block
     * @type {string}
     * @memberof BlockCateringPackageType
     */
    status?: string;
    /**
     * 
     * @type {TranslationTextType200}
     * @memberof BlockCateringPackageType
     */
    translatableDescription?: TranslationTextType200;
}

/**
 * Check if a given object implements the BlockCateringPackageType interface.
 */
export function instanceOfBlockCateringPackageType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockCateringPackageTypeFromJSON(json: any): BlockCateringPackageType {
    return BlockCateringPackageTypeFromJSONTyped(json, false);
}

export function BlockCateringPackageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockCateringPackageType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attendees': !exists(json, 'attendees') ? undefined : CateringEventsAttendeesTypeFromJSON(json['attendees']),
        'beginDate': !exists(json, 'beginDate') ? undefined : json['beginDate'],
        'blockId': !exists(json, 'blockId') ? undefined : UniqueIDTypeFromJSON(json['blockId']),
        'cateringPackageRemovable': !exists(json, 'cateringPackageRemovable') ? undefined : json['cateringPackageRemovable'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'flatRate': !exists(json, 'flatRate') ? undefined : json['flatRate'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'nonPackagedResourcesExist': !exists(json, 'nonPackagedResourcesExist') ? undefined : json['nonPackagedResourcesExist'],
        'packageActual': !exists(json, 'packageActual') ? undefined : json['packageActual'],
        'packageCode': !exists(json, 'packageCode') ? undefined : json['packageCode'],
        'packageHotelCode': !exists(json, 'packageHotelCode') ? undefined : json['packageHotelCode'],
        'packageId': !exists(json, 'packageId') ? undefined : UniqueIDTypeFromJSON(json['packageId']),
        'price': !exists(json, 'price') ? undefined : CurrencyAmountTypeFromJSON(json['price']),
        'priceCode': !exists(json, 'priceCode') ? undefined : json['priceCode'],
        'priceDescription': !exists(json, 'priceDescription') ? undefined : json['priceDescription'],
        'rentalCode': !exists(json, 'rentalCode') ? undefined : json['rentalCode'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'translatableDescription': !exists(json, 'translatableDescription') ? undefined : TranslationTextType200FromJSON(json['translatableDescription']),
    };
}

export function BlockCateringPackageTypeToJSON(value?: BlockCateringPackageType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attendees': CateringEventsAttendeesTypeToJSON(value.attendees),
        'beginDate': value.beginDate,
        'blockId': UniqueIDTypeToJSON(value.blockId),
        'cateringPackageRemovable': value.cateringPackageRemovable,
        'duration': value.duration,
        'flatRate': value.flatRate,
        'hotelId': value.hotelId,
        'nonPackagedResourcesExist': value.nonPackagedResourcesExist,
        'packageActual': value.packageActual,
        'packageCode': value.packageCode,
        'packageHotelCode': value.packageHotelCode,
        'packageId': UniqueIDTypeToJSON(value.packageId),
        'price': CurrencyAmountTypeToJSON(value.price),
        'priceCode': value.priceCode,
        'priceDescription': value.priceDescription,
        'rentalCode': value.rentalCode,
        'status': value.status,
        'translatableDescription': TranslationTextType200ToJSON(value.translatableDescription),
    };
}

