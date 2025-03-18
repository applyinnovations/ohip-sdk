# DefaultValueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OperaDefault** | Pointer to **string** | Opera Value | [optional] 
**ExternalDefault** | Pointer to **string** | Value used by the external vendors. | [optional] 
**DefaultValueType** | Pointer to [**DefaultValueCodeType**](DefaultValueCodeType.md) |  | [optional] 

## Methods

### NewDefaultValueType

`func NewDefaultValueType() *DefaultValueType`

NewDefaultValueType instantiates a new DefaultValueType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefaultValueTypeWithDefaults

`func NewDefaultValueTypeWithDefaults() *DefaultValueType`

NewDefaultValueTypeWithDefaults instantiates a new DefaultValueType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperaDefault

`func (o *DefaultValueType) GetOperaDefault() string`

GetOperaDefault returns the OperaDefault field if non-nil, zero value otherwise.

### GetOperaDefaultOk

`func (o *DefaultValueType) GetOperaDefaultOk() (*string, bool)`

GetOperaDefaultOk returns a tuple with the OperaDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperaDefault

`func (o *DefaultValueType) SetOperaDefault(v string)`

SetOperaDefault sets OperaDefault field to given value.

### HasOperaDefault

`func (o *DefaultValueType) HasOperaDefault() bool`

HasOperaDefault returns a boolean if a field has been set.

### GetExternalDefault

`func (o *DefaultValueType) GetExternalDefault() string`

GetExternalDefault returns the ExternalDefault field if non-nil, zero value otherwise.

### GetExternalDefaultOk

`func (o *DefaultValueType) GetExternalDefaultOk() (*string, bool)`

GetExternalDefaultOk returns a tuple with the ExternalDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalDefault

`func (o *DefaultValueType) SetExternalDefault(v string)`

SetExternalDefault sets ExternalDefault field to given value.

### HasExternalDefault

`func (o *DefaultValueType) HasExternalDefault() bool`

HasExternalDefault returns a boolean if a field has been set.

### GetDefaultValueType

`func (o *DefaultValueType) GetDefaultValueType() DefaultValueCodeType`

GetDefaultValueType returns the DefaultValueType field if non-nil, zero value otherwise.

### GetDefaultValueTypeOk

`func (o *DefaultValueType) GetDefaultValueTypeOk() (*DefaultValueCodeType, bool)`

GetDefaultValueTypeOk returns a tuple with the DefaultValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultValueType

`func (o *DefaultValueType) SetDefaultValueType(v DefaultValueCodeType)`

SetDefaultValueType sets DefaultValueType field to given value.

### HasDefaultValueType

`func (o *DefaultValueType) HasDefaultValueType() bool`

HasDefaultValueType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


