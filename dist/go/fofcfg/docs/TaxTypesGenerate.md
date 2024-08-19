# TaxTypesGenerate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TaxTypes** | Pointer to [**[]TaxTypeGenerateType**](TaxTypeGenerateType.md) | Defines the Calculation Rule for the Tax Type for a specific date schedule | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTaxTypesGenerate

`func NewTaxTypesGenerate() *TaxTypesGenerate`

NewTaxTypesGenerate instantiates a new TaxTypesGenerate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxTypesGenerateWithDefaults

`func NewTaxTypesGenerateWithDefaults() *TaxTypesGenerate`

NewTaxTypesGenerateWithDefaults instantiates a new TaxTypesGenerate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TaxTypesGenerate) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TaxTypesGenerate) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TaxTypesGenerate) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TaxTypesGenerate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTaxTypes

`func (o *TaxTypesGenerate) GetTaxTypes() []TaxTypeGenerateType`

GetTaxTypes returns the TaxTypes field if non-nil, zero value otherwise.

### GetTaxTypesOk

`func (o *TaxTypesGenerate) GetTaxTypesOk() (*[]TaxTypeGenerateType, bool)`

GetTaxTypesOk returns a tuple with the TaxTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxTypes

`func (o *TaxTypesGenerate) SetTaxTypes(v []TaxTypeGenerateType)`

SetTaxTypes sets TaxTypes field to given value.

### HasTaxTypes

`func (o *TaxTypesGenerate) HasTaxTypes() bool`

HasTaxTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *TaxTypesGenerate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TaxTypesGenerate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TaxTypesGenerate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TaxTypesGenerate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


