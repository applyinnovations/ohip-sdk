# TaxOfficesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaxOffices** | Pointer to [**[]TaxOfficeType**](TaxOfficeType.md) | List of Tax Offices. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTaxOfficesToBeChanged

`func NewTaxOfficesToBeChanged() *TaxOfficesToBeChanged`

NewTaxOfficesToBeChanged instantiates a new TaxOfficesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxOfficesToBeChangedWithDefaults

`func NewTaxOfficesToBeChangedWithDefaults() *TaxOfficesToBeChanged`

NewTaxOfficesToBeChangedWithDefaults instantiates a new TaxOfficesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaxOffices

`func (o *TaxOfficesToBeChanged) GetTaxOffices() []TaxOfficeType`

GetTaxOffices returns the TaxOffices field if non-nil, zero value otherwise.

### GetTaxOfficesOk

`func (o *TaxOfficesToBeChanged) GetTaxOfficesOk() (*[]TaxOfficeType, bool)`

GetTaxOfficesOk returns a tuple with the TaxOffices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxOffices

`func (o *TaxOfficesToBeChanged) SetTaxOffices(v []TaxOfficeType)`

SetTaxOffices sets TaxOffices field to given value.

### HasTaxOffices

`func (o *TaxOfficesToBeChanged) HasTaxOffices() bool`

HasTaxOffices returns a boolean if a field has been set.

### GetLinks

`func (o *TaxOfficesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TaxOfficesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TaxOfficesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TaxOfficesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TaxOfficesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TaxOfficesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TaxOfficesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TaxOfficesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


