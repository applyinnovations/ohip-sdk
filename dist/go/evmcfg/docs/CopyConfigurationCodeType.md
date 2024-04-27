# CopyConfigurationCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Source hotel code from which code is to be copied from. | [optional] 
**SourceHotelCode** | Pointer to **string** | Code that is to be copied. | [optional] 
**TargetHotelCode** | Pointer to **[]string** | Property to which configuration code type to be copied to. | [optional] 

## Methods

### NewCopyConfigurationCodeType

`func NewCopyConfigurationCodeType() *CopyConfigurationCodeType`

NewCopyConfigurationCodeType instantiates a new CopyConfigurationCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyConfigurationCodeTypeWithDefaults

`func NewCopyConfigurationCodeTypeWithDefaults() *CopyConfigurationCodeType`

NewCopyConfigurationCodeTypeWithDefaults instantiates a new CopyConfigurationCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *CopyConfigurationCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CopyConfigurationCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CopyConfigurationCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *CopyConfigurationCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetSourceHotelCode

`func (o *CopyConfigurationCodeType) GetSourceHotelCode() string`

GetSourceHotelCode returns the SourceHotelCode field if non-nil, zero value otherwise.

### GetSourceHotelCodeOk

`func (o *CopyConfigurationCodeType) GetSourceHotelCodeOk() (*string, bool)`

GetSourceHotelCodeOk returns a tuple with the SourceHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceHotelCode

`func (o *CopyConfigurationCodeType) SetSourceHotelCode(v string)`

SetSourceHotelCode sets SourceHotelCode field to given value.

### HasSourceHotelCode

`func (o *CopyConfigurationCodeType) HasSourceHotelCode() bool`

HasSourceHotelCode returns a boolean if a field has been set.

### GetTargetHotelCode

`func (o *CopyConfigurationCodeType) GetTargetHotelCode() []string`

GetTargetHotelCode returns the TargetHotelCode field if non-nil, zero value otherwise.

### GetTargetHotelCodeOk

`func (o *CopyConfigurationCodeType) GetTargetHotelCodeOk() (*[]string, bool)`

GetTargetHotelCodeOk returns a tuple with the TargetHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetHotelCode

`func (o *CopyConfigurationCodeType) SetTargetHotelCode(v []string)`

SetTargetHotelCode sets TargetHotelCode field to given value.

### HasTargetHotelCode

`func (o *CopyConfigurationCodeType) HasTargetHotelCode() bool`

HasTargetHotelCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


