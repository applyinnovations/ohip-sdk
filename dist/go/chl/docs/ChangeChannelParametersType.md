# ChangeChannelParametersType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemCode** | Pointer to **string** | External system code. | [optional] 
**ChannelParameters** | Pointer to [**[]ChannelParameterSimpleType**](ChannelParameterSimpleType.md) | Collection of channel parameters simple information. | [optional] 

## Methods

### NewChangeChannelParametersType

`func NewChangeChannelParametersType() *ChangeChannelParametersType`

NewChangeChannelParametersType instantiates a new ChangeChannelParametersType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeChannelParametersTypeWithDefaults

`func NewChangeChannelParametersTypeWithDefaults() *ChangeChannelParametersType`

NewChangeChannelParametersTypeWithDefaults instantiates a new ChangeChannelParametersType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemCode

`func (o *ChangeChannelParametersType) GetSystemCode() string`

GetSystemCode returns the SystemCode field if non-nil, zero value otherwise.

### GetSystemCodeOk

`func (o *ChangeChannelParametersType) GetSystemCodeOk() (*string, bool)`

GetSystemCodeOk returns a tuple with the SystemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemCode

`func (o *ChangeChannelParametersType) SetSystemCode(v string)`

SetSystemCode sets SystemCode field to given value.

### HasSystemCode

`func (o *ChangeChannelParametersType) HasSystemCode() bool`

HasSystemCode returns a boolean if a field has been set.

### GetChannelParameters

`func (o *ChangeChannelParametersType) GetChannelParameters() []ChannelParameterSimpleType`

GetChannelParameters returns the ChannelParameters field if non-nil, zero value otherwise.

### GetChannelParametersOk

`func (o *ChangeChannelParametersType) GetChannelParametersOk() (*[]ChannelParameterSimpleType, bool)`

GetChannelParametersOk returns a tuple with the ChannelParameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelParameters

`func (o *ChangeChannelParametersType) SetChannelParameters(v []ChannelParameterSimpleType)`

SetChannelParameters sets ChannelParameters field to given value.

### HasChannelParameters

`func (o *ChangeChannelParametersType) HasChannelParameters() bool`

HasChannelParameters returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


