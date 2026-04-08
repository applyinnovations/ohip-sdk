# StagedProfileErrorType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Field** | Pointer to [**StagedProfileErrorField**](StagedProfileErrorField.md) |  | [optional] 
**ErrorDescription** | Pointer to **string** | The error description for the staged profile. | [optional] 

## Methods

### NewStagedProfileErrorType

`func NewStagedProfileErrorType() *StagedProfileErrorType`

NewStagedProfileErrorType instantiates a new StagedProfileErrorType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileErrorTypeWithDefaults

`func NewStagedProfileErrorTypeWithDefaults() *StagedProfileErrorType`

NewStagedProfileErrorTypeWithDefaults instantiates a new StagedProfileErrorType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetField

`func (o *StagedProfileErrorType) GetField() StagedProfileErrorField`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *StagedProfileErrorType) GetFieldOk() (*StagedProfileErrorField, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *StagedProfileErrorType) SetField(v StagedProfileErrorField)`

SetField sets Field field to given value.

### HasField

`func (o *StagedProfileErrorType) HasField() bool`

HasField returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfileErrorType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileErrorType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileErrorType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileErrorType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


