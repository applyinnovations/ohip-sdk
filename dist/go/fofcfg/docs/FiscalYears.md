# FiscalYears

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalYears** | Pointer to [**[]FiscalYearType**](FiscalYearType.md) | List of Fiscal Years. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFiscalYears

`func NewFiscalYears() *FiscalYears`

NewFiscalYears instantiates a new FiscalYears object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalYearsWithDefaults

`func NewFiscalYearsWithDefaults() *FiscalYears`

NewFiscalYearsWithDefaults instantiates a new FiscalYears object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalYears

`func (o *FiscalYears) GetFiscalYears() []FiscalYearType`

GetFiscalYears returns the FiscalYears field if non-nil, zero value otherwise.

### GetFiscalYearsOk

`func (o *FiscalYears) GetFiscalYearsOk() (*[]FiscalYearType, bool)`

GetFiscalYearsOk returns a tuple with the FiscalYears field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalYears

`func (o *FiscalYears) SetFiscalYears(v []FiscalYearType)`

SetFiscalYears sets FiscalYears field to given value.

### HasFiscalYears

`func (o *FiscalYears) HasFiscalYears() bool`

HasFiscalYears returns a boolean if a field has been set.

### GetLinks

`func (o *FiscalYears) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FiscalYears) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FiscalYears) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FiscalYears) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FiscalYears) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FiscalYears) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FiscalYears) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FiscalYears) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


