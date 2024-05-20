# ImageParameterType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ImageParameterCode** | Pointer to [**ImageCodeType**](ImageCodeType.md) |  | [optional] 
**ImageParameterValue** | Pointer to **string** | Image parameter value. | [optional] 

## Methods

### NewImageParameterType

`func NewImageParameterType() *ImageParameterType`

NewImageParameterType instantiates a new ImageParameterType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImageParameterTypeWithDefaults

`func NewImageParameterTypeWithDefaults() *ImageParameterType`

NewImageParameterTypeWithDefaults instantiates a new ImageParameterType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetImageParameterCode

`func (o *ImageParameterType) GetImageParameterCode() ImageCodeType`

GetImageParameterCode returns the ImageParameterCode field if non-nil, zero value otherwise.

### GetImageParameterCodeOk

`func (o *ImageParameterType) GetImageParameterCodeOk() (*ImageCodeType, bool)`

GetImageParameterCodeOk returns a tuple with the ImageParameterCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageParameterCode

`func (o *ImageParameterType) SetImageParameterCode(v ImageCodeType)`

SetImageParameterCode sets ImageParameterCode field to given value.

### HasImageParameterCode

`func (o *ImageParameterType) HasImageParameterCode() bool`

HasImageParameterCode returns a boolean if a field has been set.

### GetImageParameterValue

`func (o *ImageParameterType) GetImageParameterValue() string`

GetImageParameterValue returns the ImageParameterValue field if non-nil, zero value otherwise.

### GetImageParameterValueOk

`func (o *ImageParameterType) GetImageParameterValueOk() (*string, bool)`

GetImageParameterValueOk returns a tuple with the ImageParameterValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageParameterValue

`func (o *ImageParameterType) SetImageParameterValue(v string)`

SetImageParameterValue sets ImageParameterValue field to given value.

### HasImageParameterValue

`func (o *ImageParameterType) HasImageParameterValue() bool`

HasImageParameterValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


