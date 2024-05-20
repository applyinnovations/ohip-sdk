# AttachElementsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **[]string** | List of attached elements codes. | [optional] 
**Description** | Pointer to **string** | Auto attach rule type description. | [optional] 
**Preference** | Pointer to [**[]AttachPreferenceType**](AttachPreferenceType.md) | Auto attach preference. | [optional] 
**Trace** | Pointer to [**AttachTraceType**](AttachTraceType.md) |  | [optional] 
**Type** | Pointer to [**ResvAutoAttchTypeCode**](ResvAutoAttchTypeCode.md) |  | [optional] 

## Methods

### NewAttachElementsType

`func NewAttachElementsType() *AttachElementsType`

NewAttachElementsType instantiates a new AttachElementsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttachElementsTypeWithDefaults

`func NewAttachElementsTypeWithDefaults() *AttachElementsType`

NewAttachElementsTypeWithDefaults instantiates a new AttachElementsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *AttachElementsType) GetCode() []string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *AttachElementsType) GetCodeOk() (*[]string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *AttachElementsType) SetCode(v []string)`

SetCode sets Code field to given value.

### HasCode

`func (o *AttachElementsType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *AttachElementsType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AttachElementsType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AttachElementsType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AttachElementsType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPreference

`func (o *AttachElementsType) GetPreference() []AttachPreferenceType`

GetPreference returns the Preference field if non-nil, zero value otherwise.

### GetPreferenceOk

`func (o *AttachElementsType) GetPreferenceOk() (*[]AttachPreferenceType, bool)`

GetPreferenceOk returns a tuple with the Preference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreference

`func (o *AttachElementsType) SetPreference(v []AttachPreferenceType)`

SetPreference sets Preference field to given value.

### HasPreference

`func (o *AttachElementsType) HasPreference() bool`

HasPreference returns a boolean if a field has been set.

### GetTrace

`func (o *AttachElementsType) GetTrace() AttachTraceType`

GetTrace returns the Trace field if non-nil, zero value otherwise.

### GetTraceOk

`func (o *AttachElementsType) GetTraceOk() (*AttachTraceType, bool)`

GetTraceOk returns a tuple with the Trace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrace

`func (o *AttachElementsType) SetTrace(v AttachTraceType)`

SetTrace sets Trace field to given value.

### HasTrace

`func (o *AttachElementsType) HasTrace() bool`

HasTrace returns a boolean if a field has been set.

### GetType

`func (o *AttachElementsType) GetType() ResvAutoAttchTypeCode`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttachElementsType) GetTypeOk() (*ResvAutoAttchTypeCode, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttachElementsType) SetType(v ResvAutoAttchTypeCode)`

SetType sets Type field to given value.

### HasType

`func (o *AttachElementsType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


