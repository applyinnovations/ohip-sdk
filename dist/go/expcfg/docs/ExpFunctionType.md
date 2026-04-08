# ExpFunctionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FunctionParameter** | Pointer to [**[]ExpFunctionParamType**](ExpFunctionParamType.md) | Function parameters | [optional] 
**FunctionName** | Pointer to **string** | Name of the function | [optional] 

## Methods

### NewExpFunctionType

`func NewExpFunctionType() *ExpFunctionType`

NewExpFunctionType instantiates a new ExpFunctionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExpFunctionTypeWithDefaults

`func NewExpFunctionTypeWithDefaults() *ExpFunctionType`

NewExpFunctionTypeWithDefaults instantiates a new ExpFunctionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFunctionParameter

`func (o *ExpFunctionType) GetFunctionParameter() []ExpFunctionParamType`

GetFunctionParameter returns the FunctionParameter field if non-nil, zero value otherwise.

### GetFunctionParameterOk

`func (o *ExpFunctionType) GetFunctionParameterOk() (*[]ExpFunctionParamType, bool)`

GetFunctionParameterOk returns a tuple with the FunctionParameter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionParameter

`func (o *ExpFunctionType) SetFunctionParameter(v []ExpFunctionParamType)`

SetFunctionParameter sets FunctionParameter field to given value.

### HasFunctionParameter

`func (o *ExpFunctionType) HasFunctionParameter() bool`

HasFunctionParameter returns a boolean if a field has been set.

### GetFunctionName

`func (o *ExpFunctionType) GetFunctionName() string`

GetFunctionName returns the FunctionName field if non-nil, zero value otherwise.

### GetFunctionNameOk

`func (o *ExpFunctionType) GetFunctionNameOk() (*string, bool)`

GetFunctionNameOk returns a tuple with the FunctionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionName

`func (o *ExpFunctionType) SetFunctionName(v string)`

SetFunctionName sets FunctionName field to given value.

### HasFunctionName

`func (o *ExpFunctionType) HasFunctionName() bool`

HasFunctionName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


