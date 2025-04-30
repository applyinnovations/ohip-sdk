# CommissionCodesSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionCodesSummary** | Pointer to [**[]CommissionCodeSummaryInfoType**](CommissionCodeSummaryInfoType.md) | Commission code details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCommissionCodesSummary

`func NewCommissionCodesSummary() *CommissionCodesSummary`

NewCommissionCodesSummary instantiates a new CommissionCodesSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionCodesSummaryWithDefaults

`func NewCommissionCodesSummaryWithDefaults() *CommissionCodesSummary`

NewCommissionCodesSummaryWithDefaults instantiates a new CommissionCodesSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionCodesSummary

`func (o *CommissionCodesSummary) GetCommissionCodesSummary() []CommissionCodeSummaryInfoType`

GetCommissionCodesSummary returns the CommissionCodesSummary field if non-nil, zero value otherwise.

### GetCommissionCodesSummaryOk

`func (o *CommissionCodesSummary) GetCommissionCodesSummaryOk() (*[]CommissionCodeSummaryInfoType, bool)`

GetCommissionCodesSummaryOk returns a tuple with the CommissionCodesSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCodesSummary

`func (o *CommissionCodesSummary) SetCommissionCodesSummary(v []CommissionCodeSummaryInfoType)`

SetCommissionCodesSummary sets CommissionCodesSummary field to given value.

### HasCommissionCodesSummary

`func (o *CommissionCodesSummary) HasCommissionCodesSummary() bool`

HasCommissionCodesSummary returns a boolean if a field has been set.

### GetLinks

`func (o *CommissionCodesSummary) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CommissionCodesSummary) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CommissionCodesSummary) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CommissionCodesSummary) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CommissionCodesSummary) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CommissionCodesSummary) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CommissionCodesSummary) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CommissionCodesSummary) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


