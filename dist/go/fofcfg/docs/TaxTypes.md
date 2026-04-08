# TaxTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaxTypes** | Pointer to [**[]TaxTypeType**](TaxTypeType.md) | Holds Tax Type details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTaxTypes

`func NewTaxTypes() *TaxTypes`

NewTaxTypes instantiates a new TaxTypes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxTypesWithDefaults

`func NewTaxTypesWithDefaults() *TaxTypes`

NewTaxTypesWithDefaults instantiates a new TaxTypes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaxTypes

`func (o *TaxTypes) GetTaxTypes() []TaxTypeType`

GetTaxTypes returns the TaxTypes field if non-nil, zero value otherwise.

### GetTaxTypesOk

`func (o *TaxTypes) GetTaxTypesOk() (*[]TaxTypeType, bool)`

GetTaxTypesOk returns a tuple with the TaxTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxTypes

`func (o *TaxTypes) SetTaxTypes(v []TaxTypeType)`

SetTaxTypes sets TaxTypes field to given value.

### HasTaxTypes

`func (o *TaxTypes) HasTaxTypes() bool`

HasTaxTypes returns a boolean if a field has been set.

### GetLinks

`func (o *TaxTypes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TaxTypes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TaxTypes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TaxTypes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TaxTypes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TaxTypes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TaxTypes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TaxTypes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


