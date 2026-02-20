# ExpFunctionParamType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Parameter Name | [optional] 
**DataType** | Pointer to **string** | Parameter Type | [optional] 
**Position** | Pointer to **int32** | Paramter Position | [optional] 
**Required** | Pointer to **bool** | Flag that determines whether parameter is required or not | [optional] 

## Methods

### NewExpFunctionParamType

`func NewExpFunctionParamType() *ExpFunctionParamType`

NewExpFunctionParamType instantiates a new ExpFunctionParamType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExpFunctionParamTypeWithDefaults

`func NewExpFunctionParamTypeWithDefaults() *ExpFunctionParamType`

NewExpFunctionParamTypeWithDefaults instantiates a new ExpFunctionParamType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ExpFunctionParamType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExpFunctionParamType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExpFunctionParamType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ExpFunctionParamType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDataType

`func (o *ExpFunctionParamType) GetDataType() string`

GetDataType returns the DataType field if non-nil, zero value otherwise.

### GetDataTypeOk

`func (o *ExpFunctionParamType) GetDataTypeOk() (*string, bool)`

GetDataTypeOk returns a tuple with the DataType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataType

`func (o *ExpFunctionParamType) SetDataType(v string)`

SetDataType sets DataType field to given value.

### HasDataType

`func (o *ExpFunctionParamType) HasDataType() bool`

HasDataType returns a boolean if a field has been set.

### GetPosition

`func (o *ExpFunctionParamType) GetPosition() int32`

GetPosition returns the Position field if non-nil, zero value otherwise.

### GetPositionOk

`func (o *ExpFunctionParamType) GetPositionOk() (*int32, bool)`

GetPositionOk returns a tuple with the Position field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosition

`func (o *ExpFunctionParamType) SetPosition(v int32)`

SetPosition sets Position field to given value.

### HasPosition

`func (o *ExpFunctionParamType) HasPosition() bool`

HasPosition returns a boolean if a field has been set.

### GetRequired

`func (o *ExpFunctionParamType) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *ExpFunctionParamType) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *ExpFunctionParamType) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *ExpFunctionParamType) HasRequired() bool`

HasRequired returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


