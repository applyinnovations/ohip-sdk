/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * An enumeration of image styles.
 * @export
 */
export const ImageStyleType = {
    Full: 'Full',
    Thumbnail: 'Thumbnail',
    Icon: 'Icon',
    Square: 'Square',
    Banner: 'Banner',
    Button: 'Button',
    Lowres: 'Lowres',
    Highres: 'Highres'
} as const;
export type ImageStyleType = typeof ImageStyleType[keyof typeof ImageStyleType];


export function ImageStyleTypeFromJSON(json: any): ImageStyleType {
    return ImageStyleTypeFromJSONTyped(json, false);
}

export function ImageStyleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageStyleType {
    return json as ImageStyleType;
}

export function ImageStyleTypeToJSON(value?: ImageStyleType | null): any {
    return value as any;
}

