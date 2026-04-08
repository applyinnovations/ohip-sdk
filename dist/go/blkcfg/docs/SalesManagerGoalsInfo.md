# SalesManagerGoalsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SalesManagerGoals** | Pointer to [**[]SalesManagerGoalType**](SalesManagerGoalType.md) | Detail Information about Sales Manager&#39;s goal. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSalesManagerGoalsInfo

`func NewSalesManagerGoalsInfo() *SalesManagerGoalsInfo`

NewSalesManagerGoalsInfo instantiates a new SalesManagerGoalsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSalesManagerGoalsInfoWithDefaults

`func NewSalesManagerGoalsInfoWithDefaults() *SalesManagerGoalsInfo`

NewSalesManagerGoalsInfoWithDefaults instantiates a new SalesManagerGoalsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSalesManagerGoals

`func (o *SalesManagerGoalsInfo) GetSalesManagerGoals() []SalesManagerGoalType`

GetSalesManagerGoals returns the SalesManagerGoals field if non-nil, zero value otherwise.

### GetSalesManagerGoalsOk

`func (o *SalesManagerGoalsInfo) GetSalesManagerGoalsOk() (*[]SalesManagerGoalType, bool)`

GetSalesManagerGoalsOk returns a tuple with the SalesManagerGoals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesManagerGoals

`func (o *SalesManagerGoalsInfo) SetSalesManagerGoals(v []SalesManagerGoalType)`

SetSalesManagerGoals sets SalesManagerGoals field to given value.

### HasSalesManagerGoals

`func (o *SalesManagerGoalsInfo) HasSalesManagerGoals() bool`

HasSalesManagerGoals returns a boolean if a field has been set.

### GetLinks

`func (o *SalesManagerGoalsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SalesManagerGoalsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SalesManagerGoalsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SalesManagerGoalsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SalesManagerGoalsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SalesManagerGoalsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SalesManagerGoalsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SalesManagerGoalsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


