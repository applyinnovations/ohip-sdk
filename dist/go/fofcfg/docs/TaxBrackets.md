# TaxBrackets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TaxBrackets** | Pointer to [**[]TaxBracketType**](TaxBracketType.md) | Details used for storing information about a tax bracket. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTaxBrackets

`func NewTaxBrackets() *TaxBrackets`

NewTaxBrackets instantiates a new TaxBrackets object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxBracketsWithDefaults

`func NewTaxBracketsWithDefaults() *TaxBrackets`

NewTaxBracketsWithDefaults instantiates a new TaxBrackets object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TaxBrackets) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TaxBrackets) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TaxBrackets) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TaxBrackets) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTaxBrackets

`func (o *TaxBrackets) GetTaxBrackets() []TaxBracketType`

GetTaxBrackets returns the TaxBrackets field if non-nil, zero value otherwise.

### GetTaxBracketsOk

`func (o *TaxBrackets) GetTaxBracketsOk() (*[]TaxBracketType, bool)`

GetTaxBracketsOk returns a tuple with the TaxBrackets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxBrackets

`func (o *TaxBrackets) SetTaxBrackets(v []TaxBracketType)`

SetTaxBrackets sets TaxBrackets field to given value.

### HasTaxBrackets

`func (o *TaxBrackets) HasTaxBrackets() bool`

HasTaxBrackets returns a boolean if a field has been set.

### GetWarnings

`func (o *TaxBrackets) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TaxBrackets) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TaxBrackets) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TaxBrackets) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


