/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ColorType } from './ColorType';
import {
    ColorTypeFromJSON,
    ColorTypeFromJSONTyped,
    ColorTypeToJSON,
} from './ColorType';

/**
 * Post it information of an article.
 * @export
 * @interface ArticlePostItType
 */
export interface ArticlePostItType {
    /**
     * Indicates whether the article is available for post it.
     * @type {boolean}
     * @memberof ArticlePostItType
     */
    availableForPostIt?: boolean;
    /**
     * 
     * @type {ColorType}
     * @memberof ArticlePostItType
     */
    color?: ColorType;
}

/**
 * Check if a given object implements the ArticlePostItType interface.
 */
export function instanceOfArticlePostItType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ArticlePostItTypeFromJSON(json: any): ArticlePostItType {
    return ArticlePostItTypeFromJSONTyped(json, false);
}

export function ArticlePostItTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticlePostItType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableForPostIt': !exists(json, 'availableForPostIt') ? undefined : json['availableForPostIt'],
        'color': !exists(json, 'color') ? undefined : ColorTypeFromJSON(json['color']),
    };
}

export function ArticlePostItTypeToJSON(value?: ArticlePostItType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableForPostIt': value.availableForPostIt,
        'color': ColorTypeToJSON(value.color),
    };
}

