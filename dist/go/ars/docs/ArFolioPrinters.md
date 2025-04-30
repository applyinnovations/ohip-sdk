# ArFolioPrinters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Printers** | Pointer to [**FolioPrintersType**](FolioPrintersType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewArFolioPrinters

`func NewArFolioPrinters() *ArFolioPrinters`

NewArFolioPrinters instantiates a new ArFolioPrinters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArFolioPrintersWithDefaults

`func NewArFolioPrintersWithDefaults() *ArFolioPrinters`

NewArFolioPrintersWithDefaults instantiates a new ArFolioPrinters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrinters

`func (o *ArFolioPrinters) GetPrinters() FolioPrintersType`

GetPrinters returns the Printers field if non-nil, zero value otherwise.

### GetPrintersOk

`func (o *ArFolioPrinters) GetPrintersOk() (*FolioPrintersType, bool)`

GetPrintersOk returns a tuple with the Printers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrinters

`func (o *ArFolioPrinters) SetPrinters(v FolioPrintersType)`

SetPrinters sets Printers field to given value.

### HasPrinters

`func (o *ArFolioPrinters) HasPrinters() bool`

HasPrinters returns a boolean if a field has been set.

### GetLinks

`func (o *ArFolioPrinters) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ArFolioPrinters) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ArFolioPrinters) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ArFolioPrinters) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ArFolioPrinters) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ArFolioPrinters) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ArFolioPrinters) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ArFolioPrinters) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


