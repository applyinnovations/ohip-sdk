# UDFGenerateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UDF** | Pointer to **string** | Defines User Defined Function to calculate generates. | [optional] 
**UDFFunctionArguments** | Pointer to [**FunctionArgumentsType**](FunctionArgumentsType.md) |  | [optional] 
**UDFFunctionName** | Pointer to **string** | The function name of the User Defined Function used to calculate generates. | [optional] 

## Methods

### NewUDFGenerateType

`func NewUDFGenerateType() *UDFGenerateType`

NewUDFGenerateType instantiates a new UDFGenerateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUDFGenerateTypeWithDefaults

`func NewUDFGenerateTypeWithDefaults() *UDFGenerateType`

NewUDFGenerateTypeWithDefaults instantiates a new UDFGenerateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUDF

`func (o *UDFGenerateType) GetUDF() string`

GetUDF returns the UDF field if non-nil, zero value otherwise.

### GetUDFOk

`func (o *UDFGenerateType) GetUDFOk() (*string, bool)`

GetUDFOk returns a tuple with the UDF field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDF

`func (o *UDFGenerateType) SetUDF(v string)`

SetUDF sets UDF field to given value.

### HasUDF

`func (o *UDFGenerateType) HasUDF() bool`

HasUDF returns a boolean if a field has been set.

### GetUDFFunctionArguments

`func (o *UDFGenerateType) GetUDFFunctionArguments() FunctionArgumentsType`

GetUDFFunctionArguments returns the UDFFunctionArguments field if non-nil, zero value otherwise.

### GetUDFFunctionArgumentsOk

`func (o *UDFGenerateType) GetUDFFunctionArgumentsOk() (*FunctionArgumentsType, bool)`

GetUDFFunctionArgumentsOk returns a tuple with the UDFFunctionArguments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFFunctionArguments

`func (o *UDFGenerateType) SetUDFFunctionArguments(v FunctionArgumentsType)`

SetUDFFunctionArguments sets UDFFunctionArguments field to given value.

### HasUDFFunctionArguments

`func (o *UDFGenerateType) HasUDFFunctionArguments() bool`

HasUDFFunctionArguments returns a boolean if a field has been set.

### GetUDFFunctionName

`func (o *UDFGenerateType) GetUDFFunctionName() string`

GetUDFFunctionName returns the UDFFunctionName field if non-nil, zero value otherwise.

### GetUDFFunctionNameOk

`func (o *UDFGenerateType) GetUDFFunctionNameOk() (*string, bool)`

GetUDFFunctionNameOk returns a tuple with the UDFFunctionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFFunctionName

`func (o *UDFGenerateType) SetUDFFunctionName(v string)`

SetUDFFunctionName sets UDFFunctionName field to given value.

### HasUDFFunctionName

`func (o *UDFGenerateType) HasUDFFunctionName() bool`

HasUDFFunctionName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


