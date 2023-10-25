# PutSalesManagerGoalsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SalesManagerGoals** | Pointer to [**[]SalesManagerGoalType**](SalesManagerGoalType.md) | Detail Information about Sales Manager&#39;s goal. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutSalesManagerGoalsRequest

`func NewPutSalesManagerGoalsRequest() *PutSalesManagerGoalsRequest`

NewPutSalesManagerGoalsRequest instantiates a new PutSalesManagerGoalsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutSalesManagerGoalsRequestWithDefaults

`func NewPutSalesManagerGoalsRequestWithDefaults() *PutSalesManagerGoalsRequest`

NewPutSalesManagerGoalsRequestWithDefaults instantiates a new PutSalesManagerGoalsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutSalesManagerGoalsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutSalesManagerGoalsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutSalesManagerGoalsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutSalesManagerGoalsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSalesManagerGoals

`func (o *PutSalesManagerGoalsRequest) GetSalesManagerGoals() []SalesManagerGoalType`

GetSalesManagerGoals returns the SalesManagerGoals field if non-nil, zero value otherwise.

### GetSalesManagerGoalsOk

`func (o *PutSalesManagerGoalsRequest) GetSalesManagerGoalsOk() (*[]SalesManagerGoalType, bool)`

GetSalesManagerGoalsOk returns a tuple with the SalesManagerGoals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesManagerGoals

`func (o *PutSalesManagerGoalsRequest) SetSalesManagerGoals(v []SalesManagerGoalType)`

SetSalesManagerGoals sets SalesManagerGoals field to given value.

### HasSalesManagerGoals

`func (o *PutSalesManagerGoalsRequest) HasSalesManagerGoals() bool`

HasSalesManagerGoals returns a boolean if a field has been set.

### GetWarnings

`func (o *PutSalesManagerGoalsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutSalesManagerGoalsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutSalesManagerGoalsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutSalesManagerGoalsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


