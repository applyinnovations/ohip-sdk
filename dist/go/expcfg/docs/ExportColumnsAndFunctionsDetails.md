# ExportColumnsAndFunctionsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ColumnsAndFunctions** | Pointer to [**ExportColumnsAndFunctionsType**](ExportColumnsAndFunctionsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewExportColumnsAndFunctionsDetails

`func NewExportColumnsAndFunctionsDetails() *ExportColumnsAndFunctionsDetails`

NewExportColumnsAndFunctionsDetails instantiates a new ExportColumnsAndFunctionsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportColumnsAndFunctionsDetailsWithDefaults

`func NewExportColumnsAndFunctionsDetailsWithDefaults() *ExportColumnsAndFunctionsDetails`

NewExportColumnsAndFunctionsDetailsWithDefaults instantiates a new ExportColumnsAndFunctionsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetColumnsAndFunctions

`func (o *ExportColumnsAndFunctionsDetails) GetColumnsAndFunctions() ExportColumnsAndFunctionsType`

GetColumnsAndFunctions returns the ColumnsAndFunctions field if non-nil, zero value otherwise.

### GetColumnsAndFunctionsOk

`func (o *ExportColumnsAndFunctionsDetails) GetColumnsAndFunctionsOk() (*ExportColumnsAndFunctionsType, bool)`

GetColumnsAndFunctionsOk returns a tuple with the ColumnsAndFunctions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnsAndFunctions

`func (o *ExportColumnsAndFunctionsDetails) SetColumnsAndFunctions(v ExportColumnsAndFunctionsType)`

SetColumnsAndFunctions sets ColumnsAndFunctions field to given value.

### HasColumnsAndFunctions

`func (o *ExportColumnsAndFunctionsDetails) HasColumnsAndFunctions() bool`

HasColumnsAndFunctions returns a boolean if a field has been set.

### GetLinks

`func (o *ExportColumnsAndFunctionsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExportColumnsAndFunctionsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExportColumnsAndFunctionsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExportColumnsAndFunctionsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExportColumnsAndFunctionsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExportColumnsAndFunctionsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExportColumnsAndFunctionsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExportColumnsAndFunctionsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


