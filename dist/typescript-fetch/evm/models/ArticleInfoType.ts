/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ArticlePostItType } from './ArticlePostItType';
import {
    ArticlePostItTypeFromJSON,
    ArticlePostItTypeFromJSONTyped,
    ArticlePostItTypeToJSON,
} from './ArticlePostItType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * Information regarding an article.
 * @export
 * @interface ArticleInfoType
 */
export interface ArticleInfoType {
    /**
     * Unique code of the article.
     * @type {string}
     * @memberof ArticleInfoType
     */
    articleCode?: string;
    /**
     * Description of the article.
     * @type {string}
     * @memberof ArticleInfoType
     */
    description?: string;
    /**
     * Hotel code to which the article belongs.
     * @type {string}
     * @memberof ArticleInfoType
     */
    hotelId?: string;
    /**
     * Indicates whether the article is inactive or not.
     * @type {boolean}
     * @memberof ArticleInfoType
     */
    inactive?: boolean;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof ArticleInfoType
     */
    orderSequence?: number;
    /**
     * 
     * @type {ArticlePostItType}
     * @memberof ArticleInfoType
     */
    postIt?: ArticlePostItType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ArticleInfoType
     */
    price?: CurrencyAmountType;
    /**
     * Transaction code to which the article belongs.
     * @type {string}
     * @memberof ArticleInfoType
     */
    transactionCode?: string;
    /**
     * Unique Universal product code of the article.
     * @type {string}
     * @memberof ArticleInfoType
     */
    universalProductCode?: string;
}

/**
 * Check if a given object implements the ArticleInfoType interface.
 */
export function instanceOfArticleInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ArticleInfoTypeFromJSON(json: any): ArticleInfoType {
    return ArticleInfoTypeFromJSONTyped(json, false);
}

export function ArticleInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticleInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'articleCode': !exists(json, 'articleCode') ? undefined : json['articleCode'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
        'postIt': !exists(json, 'postIt') ? undefined : ArticlePostItTypeFromJSON(json['postIt']),
        'price': !exists(json, 'price') ? undefined : CurrencyAmountTypeFromJSON(json['price']),
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
        'universalProductCode': !exists(json, 'universalProductCode') ? undefined : json['universalProductCode'],
    };
}

export function ArticleInfoTypeToJSON(value?: ArticleInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'articleCode': value.articleCode,
        'description': value.description,
        'hotelId': value.hotelId,
        'inactive': value.inactive,
        'orderSequence': value.orderSequence,
        'postIt': ArticlePostItTypeToJSON(value.postIt),
        'price': CurrencyAmountTypeToJSON(value.price),
        'transactionCode': value.transactionCode,
        'universalProductCode': value.universalProductCode,
    };
}

