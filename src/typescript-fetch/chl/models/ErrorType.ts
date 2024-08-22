/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Standard way to indicate that an error occurred during the processing of an message. If the message successfully processes, but there are business errors, those errors should be passed in the warning element.
 * @export
 * @interface ErrorType
 */
export interface ErrorType {
    /**
     * If present, this refers to a table of coded values exchanged between applications to identify errors or warnings.
     * @type {string}
     * @memberof ErrorType
     */
    code?: string;
    /**
     * If present, this URL refers to an online description of the error that occurred.
     * @type {string}
     * @memberof ErrorType
     */
    docURL?: string;
    /**
     * Language identification.
     * @type {string}
     * @memberof ErrorType
     */
    language?: string;
    /**
     * An XPath expression that selects all the nodes whose data caused this error. Further, this expression should have an additional contraint which contains the data of the node. This will provide the offending data back to systems that cannot maintain the original message.
     * @type {string}
     * @memberof ErrorType
     */
    nodeList?: string;
    /**
     * If present, this attribute allows for batch processing and the identification of the record that failed amongst a group of records. This value may contain a concatenation of a unique failed transaction ID with specific record(s) associated with that transaction.
     * @type {string}
     * @memberof ErrorType
     */
    recordId?: string;
    /**
     * An abbreviated version of the error in textual format.
     * @type {string}
     * @memberof ErrorType
     */
    shortText?: string;
    /**
     * If present, recommended values are those enumerated in the ErrorRS, (NotProcessed Incomplete Complete Unknown) however, the data type is designated as string data, recognizing that trading partners may identify additional status conditions not included in the enumeration.
     * @type {string}
     * @memberof ErrorType
     */
    status?: string;
    /**
     * If present, this attribute may identify an unknown or misspelled tag that caused an error in processing. It is recommended that the Tag attribute use XPath notation to identify the location of a tag in the event that more than one tag of the same name is present in the document. Alternatively, the tag name alone can be used to identify missing data [Type=ReqFieldMissing].
     * @type {string}
     * @memberof ErrorType
     */
    tag?: string;
    /**
     * The Warning element MUST contain the Type attribute that uses a recommended set of values to indicate the warning type. The validating XSD can expect to accept values that it has NOT been explicitly coded for and process them by using Type ="Unknown".
     * @type {string}
     * @memberof ErrorType
     */
    type?: string;
    /**
     * Property Value
     * @type {string}
     * @memberof ErrorType
     */
    value?: string;
}

/**
 * Check if a given object implements the ErrorType interface.
 */
export function instanceOfErrorType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorTypeFromJSON(json: any): ErrorType {
    return ErrorTypeFromJSONTyped(json, false);
}

export function ErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'docURL': !exists(json, 'docURL') ? undefined : json['docURL'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'nodeList': !exists(json, 'nodeList') ? undefined : json['nodeList'],
        'recordId': !exists(json, 'recordId') ? undefined : json['recordId'],
        'shortText': !exists(json, 'shortText') ? undefined : json['shortText'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ErrorTypeToJSON(value?: ErrorType | null): any {
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
        'nodeList': value.nodeList,
        'recordId': value.recordId,
        'shortText': value.shortText,
        'status': value.status,
        'tag': value.tag,
        'type': value.type,
        'value': value.value,
    };
}

