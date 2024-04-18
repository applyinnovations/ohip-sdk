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
/**
 * Used when a message has been successfully processed to report any warnings or business errors that occurred.
 * @export
 * @interface WarningType
 */
export interface WarningType {
    /**
     * If present, this refers to a table of coded values exchanged between applications to identify errors or warnings.
     * @type {string}
     * @memberof WarningType
     */
    code?: string;
    /**
     * If present, this URL refers to an online description of the error that occurred.
     * @type {string}
     * @memberof WarningType
     */
    docURL?: string;
    /**
     * Language identification.
     * @type {string}
     * @memberof WarningType
     */
    language?: string;
    /**
     * If present, this attribute allows for batch processing and the identification of the record that failed amongst a group of records. This value may contain a concatenation of a unique failed transaction ID with specific record(s) associated with that transaction.
     * @type {string}
     * @memberof WarningType
     */
    recordId?: string;
    /**
     * Reference Place Holder used as an index for this warning.
     * @type {string}
     * @memberof WarningType
     */
    rph?: string;
    /**
     * An abbreviated version of the error in textual format.
     * @type {string}
     * @memberof WarningType
     */
    shortText?: string;
    /**
     * If present, recommended values are those enumerated in the ErrorRS, (NotProcessed Incomplete Complete Unknown) however, the data type is designated as string data, recognizing that trading partners may identify additional status conditions not included in the enumeration.
     * @type {string}
     * @memberof WarningType
     */
    status?: string;
    /**
     * If present, this attribute may identify an unknown or misspelled tag that caused an error in processing. It is recommended that the Tag attribute use XPath notation to identify the location of a tag in the event that more than one tag of the same name is present in the document. Alternatively, the tag name alone can be used to identify missing data [Type=ReqFieldMissing].
     * @type {string}
     * @memberof WarningType
     */
    tag?: string;
    /**
     * The Warning element MUST contain the Type attribute that uses a recommended set of values to indicate the warning type. The validating XSD can expect to accept values that it has NOT been explicitly coded for and process them by using Type ="Unknown".
     * @type {string}
     * @memberof WarningType
     */
    type?: string;
    /**
     * Property Value
     * @type {string}
     * @memberof WarningType
     */
    value?: string;
}

/**
 * Check if a given object implements the WarningType interface.
 */
export function instanceOfWarningType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WarningTypeFromJSON(json: any): WarningType {
    return WarningTypeFromJSONTyped(json, false);
}

export function WarningTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WarningType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'docURL': !exists(json, 'docURL') ? undefined : json['docURL'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'recordId': !exists(json, 'recordId') ? undefined : json['recordId'],
        'rph': !exists(json, 'rph') ? undefined : json['rph'],
        'shortText': !exists(json, 'shortText') ? undefined : json['shortText'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function WarningTypeToJSON(value?: WarningType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'docURL': value.docURL,
        'language': value.language,
        'recordId': value.recordId,
        'rph': value.rph,
        'shortText': value.shortText,
        'status': value.status,
        'tag': value.tag,
        'type': value.type,
        'value': value.value,
    };
}
