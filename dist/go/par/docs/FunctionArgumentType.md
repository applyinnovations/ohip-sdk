# FunctionArgumentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataType** | Pointer to **string** | Specifies the datatype of the function argument. | [optional] 
**LovAllowMultiSelectYn** | Pointer to **bool** | Specifies if the function argument lov is single select or multi select lov. | [optional] 
**LovName** | Pointer to **string** | Specifies the lov name of the function argument. | [optional] 
**Name** | Pointer to **string** | Specifies the name of the function argument. | [optional] 
**Position** | Pointer to **int32** | Specifies the position of the function argument in the argument list. | [optional] 
**Required** | Pointer to **bool** | Argument of the function mandatory or not. | [optional] 
**UseLovYn** | Pointer to **bool** | Specifies if the function argument is an lov or not. | [optional] 
**Value** | Pointer to **string** | Specifies the value held by the function argument. | [optional] 

## Methods

### NewFunctionArgumentType

`func NewFunctionArgumentType() *FunctionArgumentType`

NewFunctionArgumentType instantiates a new FunctionArgumentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionArgumentTypeWithDefaults

`func NewFunctionArgumentTypeWithDefaults() *FunctionArgumentType`

NewFunctionArgumentTypeWithDefaults instantiates a new FunctionArgumentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataType

`func (o *FunctionArgumentType) GetDataType() string`

GetDataType returns the DataType field if non-nil, zero value otherwise.

### GetDataTypeOk

`func (o *FunctionArgumentType) GetDataTypeOk() (*string, bool)`

GetDataTypeOk returns a tuple with the DataType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataType

`func (o *FunctionArgumentType) SetDataType(v string)`

SetDataType sets DataType field to given value.

### HasDataType

`func (o *FunctionArgumentType) HasDataType() bool`

HasDataType returns a boolean if a field has been set.

### GetLovAllowMultiSelectYn

`func (o *FunctionArgumentType) GetLovAllowMultiSelectYn() bool`

GetLovAllowMultiSelectYn returns the LovAllowMultiSelectYn field if non-nil, zero value otherwise.

### GetLovAllowMultiSelectYnOk

`func (o *FunctionArgumentType) GetLovAllowMultiSelectYnOk() (*bool, bool)`

GetLovAllowMultiSelectYnOk returns a tuple with the LovAllowMultiSelectYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLovAllowMultiSelectYn

`func (o *FunctionArgumentType) SetLovAllowMultiSelectYn(v bool)`

SetLovAllowMultiSelectYn sets LovAllowMultiSelectYn field to given value.

### HasLovAllowMultiSelectYn

`func (o *FunctionArgumentType) HasLovAllowMultiSelectYn() bool`

HasLovAllowMultiSelectYn returns a boolean if a field has been set.

### GetLovName

`func (o *FunctionArgumentType) GetLovName() string`

GetLovName returns the LovName field if non-nil, zero value otherwise.

### GetLovNameOk

`func (o *FunctionArgumentType) GetLovNameOk() (*string, bool)`

GetLovNameOk returns a tuple with the LovName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLovName

`func (o *FunctionArgumentType) SetLovName(v string)`

SetLovName sets LovName field to given value.

### HasLovName

`func (o *FunctionArgumentType) HasLovName() bool`

HasLovName returns a boolean if a field has been set.

### GetName

`func (o *FunctionArgumentType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FunctionArgumentType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FunctionArgumentType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *FunctionArgumentType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPosition

`func (o *FunctionArgumentType) GetPosition() int32`

GetPosition returns the Position field if non-nil, zero value otherwise.

### GetPositionOk

`func (o *FunctionArgumentType) GetPositionOk() (*int32, bool)`

GetPositionOk returns a tuple with the Position field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosition

`func (o *FunctionArgumentType) SetPosition(v int32)`

SetPosition sets Position field to given value.

### HasPosition

`func (o *FunctionArgumentType) HasPosition() bool`

HasPosition returns a boolean if a field has been set.

### GetRequired

`func (o *FunctionArgumentType) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *FunctionArgumentType) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *FunctionArgumentType) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *FunctionArgumentType) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetUseLovYn

`func (o *FunctionArgumentType) GetUseLovYn() bool`

GetUseLovYn returns the UseLovYn field if non-nil, zero value otherwise.

### GetUseLovYnOk

`func (o *FunctionArgumentType) GetUseLovYnOk() (*bool, bool)`

GetUseLovYnOk returns a tuple with the UseLovYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseLovYn

`func (o *FunctionArgumentType) SetUseLovYn(v bool)`

SetUseLovYn sets UseLovYn field to given value.

### HasUseLovYn

`func (o *FunctionArgumentType) HasUseLovYn() bool`

HasUseLovYn returns a boolean if a field has been set.

### GetValue

`func (o *FunctionArgumentType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *FunctionArgumentType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *FunctionArgumentType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *FunctionArgumentType) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

