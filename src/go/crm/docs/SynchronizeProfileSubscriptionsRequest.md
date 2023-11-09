# SynchronizeProfileSubscriptionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**SynchronizeProfileSubscriptionsCriteriaType**](SynchronizeProfileSubscriptionsCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewSynchronizeProfileSubscriptionsRequest

`func NewSynchronizeProfileSubscriptionsRequest() *SynchronizeProfileSubscriptionsRequest`

NewSynchronizeProfileSubscriptionsRequest instantiates a new SynchronizeProfileSubscriptionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSynchronizeProfileSubscriptionsRequestWithDefaults

`func NewSynchronizeProfileSubscriptionsRequestWithDefaults() *SynchronizeProfileSubscriptionsRequest`

NewSynchronizeProfileSubscriptionsRequestWithDefaults instantiates a new SynchronizeProfileSubscriptionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *SynchronizeProfileSubscriptionsRequest) GetCriteria() SynchronizeProfileSubscriptionsCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *SynchronizeProfileSubscriptionsRequest) GetCriteriaOk() (*SynchronizeProfileSubscriptionsCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *SynchronizeProfileSubscriptionsRequest) SetCriteria(v SynchronizeProfileSubscriptionsCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *SynchronizeProfileSubscriptionsRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *SynchronizeProfileSubscriptionsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SynchronizeProfileSubscriptionsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SynchronizeProfileSubscriptionsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SynchronizeProfileSubscriptionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SynchronizeProfileSubscriptionsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SynchronizeProfileSubscriptionsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SynchronizeProfileSubscriptionsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SynchronizeProfileSubscriptionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


