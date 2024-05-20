# ErrorType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | If present, this refers to a table of coded values exchanged between applications to identify errors or warnings. Refer to OpenTravel Code List Error Codes (ERR). | [optional] 
**DocURL** | Pointer to **string** | If present, this URL refers to an online description of the error that occurred. | [optional] 
**Language** | Pointer to **string** | Language identification. | [optional] 
**NodeList** | Pointer to **string** | An XPath expression that selects all the nodes whose data caused this error. Further, this expression should have an additional contraint which contains the data of the node. This will provide the offending data back to systems that cannot maintain the original message. | [optional] 
**RecordId** | Pointer to **string** | If present, this attribute allows for batch processing and the identification of the record that failed amongst a group of records. This value may contain a concatenation of a unique failed transaction ID with specific record(s) associated with that transaction. | [optional] 
**ShortText** | Pointer to **string** | An abbreviated version of the error in textual format. | [optional] 
**Status** | Pointer to **string** | If present, recommended values are those enumerated in the OTA_ErrorRS, (NotProcessed Incomplete Complete Unknown) however, the data type is designated as string data, recognizing that trading partners may identify additional status conditions not included in the enumeration. | [optional] 
**Tag** | Pointer to **string** | If present, this attribute may identify an unknown or misspelled tag that caused an error in processing. It is recommended that the Tag attribute use XPath notation to identify the location of a tag in the event that more than one tag of the same name is present in the document. Alternatively, the tag name alone can be used to identify missing data [Type&#x3D;ReqFieldMissing]. | [optional] 
**Type** | Pointer to **string** | The Warning element MUST contain the Type attribute that uses a recommended set of values to indicate the warning type. The validating XSD can expect to accept values that it has NOT been explicitly coded for and process them by using Type &#x3D;\&quot;Unknown\&quot;. Refer to OpenTravel Code List Error Warning Type (EWT). | [optional] 
**Value** | Pointer to **string** | Property Value | [optional] 

## Methods

### NewErrorType

`func NewErrorType() *ErrorType`

NewErrorType instantiates a new ErrorType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorTypeWithDefaults

`func NewErrorTypeWithDefaults() *ErrorType`

NewErrorTypeWithDefaults instantiates a new ErrorType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ErrorType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ErrorType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ErrorType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ErrorType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDocURL

`func (o *ErrorType) GetDocURL() string`

GetDocURL returns the DocURL field if non-nil, zero value otherwise.

### GetDocURLOk

`func (o *ErrorType) GetDocURLOk() (*string, bool)`

GetDocURLOk returns a tuple with the DocURL field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocURL

`func (o *ErrorType) SetDocURL(v string)`

SetDocURL sets DocURL field to given value.

### HasDocURL

`func (o *ErrorType) HasDocURL() bool`

HasDocURL returns a boolean if a field has been set.

### GetLanguage

`func (o *ErrorType) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *ErrorType) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *ErrorType) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *ErrorType) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetNodeList

`func (o *ErrorType) GetNodeList() string`

GetNodeList returns the NodeList field if non-nil, zero value otherwise.

### GetNodeListOk

`func (o *ErrorType) GetNodeListOk() (*string, bool)`

GetNodeListOk returns a tuple with the NodeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodeList

`func (o *ErrorType) SetNodeList(v string)`

SetNodeList sets NodeList field to given value.

### HasNodeList

`func (o *ErrorType) HasNodeList() bool`

HasNodeList returns a boolean if a field has been set.

### GetRecordId

`func (o *ErrorType) GetRecordId() string`

GetRecordId returns the RecordId field if non-nil, zero value otherwise.

### GetRecordIdOk

`func (o *ErrorType) GetRecordIdOk() (*string, bool)`

GetRecordIdOk returns a tuple with the RecordId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordId

`func (o *ErrorType) SetRecordId(v string)`

SetRecordId sets RecordId field to given value.

### HasRecordId

`func (o *ErrorType) HasRecordId() bool`

HasRecordId returns a boolean if a field has been set.

### GetShortText

`func (o *ErrorType) GetShortText() string`

GetShortText returns the ShortText field if non-nil, zero value otherwise.

### GetShortTextOk

`func (o *ErrorType) GetShortTextOk() (*string, bool)`

GetShortTextOk returns a tuple with the ShortText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortText

`func (o *ErrorType) SetShortText(v string)`

SetShortText sets ShortText field to given value.

### HasShortText

`func (o *ErrorType) HasShortText() bool`

HasShortText returns a boolean if a field has been set.

### GetStatus

`func (o *ErrorType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ErrorType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ErrorType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ErrorType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTag

`func (o *ErrorType) GetTag() string`

GetTag returns the Tag field if non-nil, zero value otherwise.

### GetTagOk

`func (o *ErrorType) GetTagOk() (*string, bool)`

GetTagOk returns a tuple with the Tag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTag

`func (o *ErrorType) SetTag(v string)`

SetTag sets Tag field to given value.

### HasTag

`func (o *ErrorType) HasTag() bool`

HasTag returns a boolean if a field has been set.

### GetType

`func (o *ErrorType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ErrorType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ErrorType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ErrorType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetValue

`func (o *ErrorType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ErrorType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ErrorType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ErrorType) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


