# FiscalPeriodsEdit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalPeriods** | Pointer to [**[]FiscalPeriodEditType**](FiscalPeriodEditType.md) | List of Fiscal Periods. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFiscalPeriodsEdit

`func NewFiscalPeriodsEdit() *FiscalPeriodsEdit`

NewFiscalPeriodsEdit instantiates a new FiscalPeriodsEdit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalPeriodsEditWithDefaults

`func NewFiscalPeriodsEditWithDefaults() *FiscalPeriodsEdit`

NewFiscalPeriodsEditWithDefaults instantiates a new FiscalPeriodsEdit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalPeriods

`func (o *FiscalPeriodsEdit) GetFiscalPeriods() []FiscalPeriodEditType`

GetFiscalPeriods returns the FiscalPeriods field if non-nil, zero value otherwise.

### GetFiscalPeriodsOk

`func (o *FiscalPeriodsEdit) GetFiscalPeriodsOk() (*[]FiscalPeriodEditType, bool)`

GetFiscalPeriodsOk returns a tuple with the FiscalPeriods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalPeriods

`func (o *FiscalPeriodsEdit) SetFiscalPeriods(v []FiscalPeriodEditType)`

SetFiscalPeriods sets FiscalPeriods field to given value.

### HasFiscalPeriods

`func (o *FiscalPeriodsEdit) HasFiscalPeriods() bool`

HasFiscalPeriods returns a boolean if a field has been set.

### GetLinks

`func (o *FiscalPeriodsEdit) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FiscalPeriodsEdit) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FiscalPeriodsEdit) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FiscalPeriodsEdit) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FiscalPeriodsEdit) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FiscalPeriodsEdit) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FiscalPeriodsEdit) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FiscalPeriodsEdit) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


