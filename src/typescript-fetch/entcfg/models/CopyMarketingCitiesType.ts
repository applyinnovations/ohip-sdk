/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TemplateMarketingCityInfoType } from './TemplateMarketingCityInfoType';
import {
    TemplateMarketingCityInfoTypeFromJSON,
    TemplateMarketingCityInfoTypeFromJSONTyped,
    TemplateMarketingCityInfoTypeToJSON,
} from './TemplateMarketingCityInfoType';

/**
 * Copy instructions for template marketing cities to hotel(s).
 * @export
 * @interface CopyMarketingCitiesType
 */
export interface CopyMarketingCitiesType {
    /**
     * 
     * @type {Array<string>}
     * @memberof CopyMarketingCitiesType
     */
    hotelCodes?: Array<string>;
    /**
     * Marketing city template to be copied to the hotel(s).
     * @type {Array<TemplateMarketingCityInfoType>}
     * @memberof CopyMarketingCitiesType
     */
    templateMarketingCities?: Array<TemplateMarketingCityInfoType>;
}

/**
 * Check if a given object implements the CopyMarketingCitiesType interface.
 */
export function instanceOfCopyMarketingCitiesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyMarketingCitiesTypeFromJSON(json: any): CopyMarketingCitiesType {
    return CopyMarketingCitiesTypeFromJSONTyped(json, false);
}

export function CopyMarketingCitiesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyMarketingCitiesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelCodes': !exists(json, 'hotelCodes') ? undefined : json['hotelCodes'],
        'templateMarketingCities': !exists(json, 'templateMarketingCities') ? undefined : ((json['templateMarketingCities'] as Array<any>).map(TemplateMarketingCityInfoTypeFromJSON)),
    };
}

export function CopyMarketingCitiesTypeToJSON(value?: CopyMarketingCitiesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelCodes': value.hotelCodes,
        'templateMarketingCities': value.templateMarketingCities === undefined ? undefined : ((value.templateMarketingCities as Array<any>).map(TemplateMarketingCityInfoTypeToJSON)),
    };
}

