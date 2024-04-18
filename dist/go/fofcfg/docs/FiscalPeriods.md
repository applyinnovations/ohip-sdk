# FiscalPeriods

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CycleFiscalPeriods** | Pointer to [**FiscalPeriodsCycleFiscalPeriods**](FiscalPeriodsCycleFiscalPeriods.md) |  | [optional] 
**FiscalPeriods** | Pointer to [**[]FiscalPeriodType**](FiscalPeriodType.md) | List of Fiscal Periods. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFiscalPeriods

`func NewFiscalPeriods() *FiscalPeriods`

NewFiscalPeriods instantiates a new FiscalPeriods object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalPeriodsWithDefaults

`func NewFiscalPeriodsWithDefaults() *FiscalPeriods`

NewFiscalPeriodsWithDefaults instantiates a new FiscalPeriods object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCycleFiscalPeriods

`func (o *FiscalPeriods) GetCycleFiscalPeriods() FiscalPeriodsCycleFiscalPeriods`

GetCycleFiscalPeriods returns the CycleFiscalPeriods field if non-nil, zero value otherwise.

### GetCycleFiscalPeriodsOk

`func (o *FiscalPeriods) GetCycleFiscalPeriodsOk() (*FiscalPeriodsCycleFiscalPeriods, bool)`

GetCycleFiscalPeriodsOk returns a tuple with the CycleFiscalPeriods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCycleFiscalPeriods

`func (o *FiscalPeriods) SetCycleFiscalPeriods(v FiscalPeriodsCycleFiscalPeriods)`

SetCycleFiscalPeriods sets CycleFiscalPeriods field to given value.

### HasCycleFiscalPeriods

`func (o *FiscalPeriods) HasCycleFiscalPeriods() bool`

HasCycleFiscalPeriods returns a boolean if a field has been set.

### GetFiscalPeriods

`func (o *FiscalPeriods) GetFiscalPeriods() []FiscalPeriodType`

GetFiscalPeriods returns the FiscalPeriods field if non-nil, zero value otherwise.

### GetFiscalPeriodsOk

`func (o *FiscalPeriods) GetFiscalPeriodsOk() (*[]FiscalPeriodType, bool)`

GetFiscalPeriodsOk returns a tuple with the FiscalPeriods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalPeriods

`func (o *FiscalPeriods) SetFiscalPeriods(v []FiscalPeriodType)`

SetFiscalPeriods sets FiscalPeriods field to given value.

### HasFiscalPeriods

`func (o *FiscalPeriods) HasFiscalPeriods() bool`

HasFiscalPeriods returns a boolean if a field has been set.

### GetLinks

`func (o *FiscalPeriods) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FiscalPeriods) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FiscalPeriods) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FiscalPeriods) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FiscalPeriods) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FiscalPeriods) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FiscalPeriods) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FiscalPeriods) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


