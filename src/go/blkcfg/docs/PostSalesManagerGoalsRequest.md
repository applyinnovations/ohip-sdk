# PostSalesManagerGoalsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SalesManagerGoals** | Pointer to [**SalesManagerGoalsType**](SalesManagerGoalsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostSalesManagerGoalsRequest

`func NewPostSalesManagerGoalsRequest() *PostSalesManagerGoalsRequest`

NewPostSalesManagerGoalsRequest instantiates a new PostSalesManagerGoalsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostSalesManagerGoalsRequestWithDefaults

`func NewPostSalesManagerGoalsRequestWithDefaults() *PostSalesManagerGoalsRequest`

NewPostSalesManagerGoalsRequestWithDefaults instantiates a new PostSalesManagerGoalsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSalesManagerGoals

`func (o *PostSalesManagerGoalsRequest) GetSalesManagerGoals() SalesManagerGoalsType`

GetSalesManagerGoals returns the SalesManagerGoals field if non-nil, zero value otherwise.

### GetSalesManagerGoalsOk

`func (o *PostSalesManagerGoalsRequest) GetSalesManagerGoalsOk() (*SalesManagerGoalsType, bool)`

GetSalesManagerGoalsOk returns a tuple with the SalesManagerGoals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesManagerGoals

`func (o *PostSalesManagerGoalsRequest) SetSalesManagerGoals(v SalesManagerGoalsType)`

SetSalesManagerGoals sets SalesManagerGoals field to given value.

### HasSalesManagerGoals

`func (o *PostSalesManagerGoalsRequest) HasSalesManagerGoals() bool`

HasSalesManagerGoals returns a boolean if a field has been set.

### GetWarnings

`func (o *PostSalesManagerGoalsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostSalesManagerGoalsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostSalesManagerGoalsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostSalesManagerGoalsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


