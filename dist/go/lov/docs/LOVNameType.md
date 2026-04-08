# LOVNameType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Unique name for the LOV. | [optional] 
**Parameters** | Pointer to [**[]ParametersNameType**](ParametersNameType.md) | List of parameter names applicable for the particular LOV. | [optional] 

## Methods

### NewLOVNameType

`func NewLOVNameType() *LOVNameType`

NewLOVNameType instantiates a new LOVNameType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLOVNameTypeWithDefaults

`func NewLOVNameTypeWithDefaults() *LOVNameType`

NewLOVNameTypeWithDefaults instantiates a new LOVNameType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *LOVNameType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LOVNameType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LOVNameType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *LOVNameType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetParameters

`func (o *LOVNameType) GetParameters() []ParametersNameType`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *LOVNameType) GetParametersOk() (*[]ParametersNameType, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *LOVNameType) SetParameters(v []ParametersNameType)`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *LOVNameType) HasParameters() bool`

HasParameters returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


