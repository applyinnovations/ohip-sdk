# SalesAllowances

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SalesAllowances** | Pointer to [**[]SalesAllowanceType**](SalesAllowanceType.md) | Collection of Sales Allowances. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSalesAllowances

`func NewSalesAllowances() *SalesAllowances`

NewSalesAllowances instantiates a new SalesAllowances object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSalesAllowancesWithDefaults

`func NewSalesAllowancesWithDefaults() *SalesAllowances`

NewSalesAllowancesWithDefaults instantiates a new SalesAllowances object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *SalesAllowances) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SalesAllowances) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SalesAllowances) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SalesAllowances) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSalesAllowances

`func (o *SalesAllowances) GetSalesAllowances() []SalesAllowanceType`

GetSalesAllowances returns the SalesAllowances field if non-nil, zero value otherwise.

### GetSalesAllowancesOk

`func (o *SalesAllowances) GetSalesAllowancesOk() (*[]SalesAllowanceType, bool)`

GetSalesAllowancesOk returns a tuple with the SalesAllowances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesAllowances

`func (o *SalesAllowances) SetSalesAllowances(v []SalesAllowanceType)`

SetSalesAllowances sets SalesAllowances field to given value.

### HasSalesAllowances

`func (o *SalesAllowances) HasSalesAllowances() bool`

HasSalesAllowances returns a boolean if a field has been set.

### GetWarnings

`func (o *SalesAllowances) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SalesAllowances) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SalesAllowances) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SalesAllowances) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


