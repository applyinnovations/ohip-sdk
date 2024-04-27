# ExportColumnsAndFunctionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DbColumns** | Pointer to [**[]ExpDataSourceColumnType**](ExpDataSourceColumnType.md) | Function parameters | [optional] 
**Functions** | Pointer to [**[]ExpFunctionType**](ExpFunctionType.md) | Function parameters | [optional] 
**PrePostFunctions** | Pointer to [**[]ExpFunctionType**](ExpFunctionType.md) | Function parameters | [optional] 

## Methods

### NewExportColumnsAndFunctionsType

`func NewExportColumnsAndFunctionsType() *ExportColumnsAndFunctionsType`

NewExportColumnsAndFunctionsType instantiates a new ExportColumnsAndFunctionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportColumnsAndFunctionsTypeWithDefaults

`func NewExportColumnsAndFunctionsTypeWithDefaults() *ExportColumnsAndFunctionsType`

NewExportColumnsAndFunctionsTypeWithDefaults instantiates a new ExportColumnsAndFunctionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDbColumns

`func (o *ExportColumnsAndFunctionsType) GetDbColumns() []ExpDataSourceColumnType`

GetDbColumns returns the DbColumns field if non-nil, zero value otherwise.

### GetDbColumnsOk

`func (o *ExportColumnsAndFunctionsType) GetDbColumnsOk() (*[]ExpDataSourceColumnType, bool)`

GetDbColumnsOk returns a tuple with the DbColumns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDbColumns

`func (o *ExportColumnsAndFunctionsType) SetDbColumns(v []ExpDataSourceColumnType)`

SetDbColumns sets DbColumns field to given value.

### HasDbColumns

`func (o *ExportColumnsAndFunctionsType) HasDbColumns() bool`

HasDbColumns returns a boolean if a field has been set.

### GetFunctions

`func (o *ExportColumnsAndFunctionsType) GetFunctions() []ExpFunctionType`

GetFunctions returns the Functions field if non-nil, zero value otherwise.

### GetFunctionsOk

`func (o *ExportColumnsAndFunctionsType) GetFunctionsOk() (*[]ExpFunctionType, bool)`

GetFunctionsOk returns a tuple with the Functions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctions

`func (o *ExportColumnsAndFunctionsType) SetFunctions(v []ExpFunctionType)`

SetFunctions sets Functions field to given value.

### HasFunctions

`func (o *ExportColumnsAndFunctionsType) HasFunctions() bool`

HasFunctions returns a boolean if a field has been set.

### GetPrePostFunctions

`func (o *ExportColumnsAndFunctionsType) GetPrePostFunctions() []ExpFunctionType`

GetPrePostFunctions returns the PrePostFunctions field if non-nil, zero value otherwise.

### GetPrePostFunctionsOk

`func (o *ExportColumnsAndFunctionsType) GetPrePostFunctionsOk() (*[]ExpFunctionType, bool)`

GetPrePostFunctionsOk returns a tuple with the PrePostFunctions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrePostFunctions

`func (o *ExportColumnsAndFunctionsType) SetPrePostFunctions(v []ExpFunctionType)`

SetPrePostFunctions sets PrePostFunctions field to given value.

### HasPrePostFunctions

`func (o *ExportColumnsAndFunctionsType) HasPrePostFunctions() bool`

HasPrePostFunctions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


