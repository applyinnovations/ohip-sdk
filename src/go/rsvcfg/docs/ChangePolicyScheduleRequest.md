# ChangePolicyScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PolicySchedule** | Pointer to [**PolicyScheduleType**](PolicyScheduleType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangePolicyScheduleRequest

`func NewChangePolicyScheduleRequest() *ChangePolicyScheduleRequest`

NewChangePolicyScheduleRequest instantiates a new ChangePolicyScheduleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangePolicyScheduleRequestWithDefaults

`func NewChangePolicyScheduleRequestWithDefaults() *ChangePolicyScheduleRequest`

NewChangePolicyScheduleRequestWithDefaults instantiates a new ChangePolicyScheduleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangePolicyScheduleRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangePolicyScheduleRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangePolicyScheduleRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangePolicyScheduleRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPolicySchedule

`func (o *ChangePolicyScheduleRequest) GetPolicySchedule() PolicyScheduleType`

GetPolicySchedule returns the PolicySchedule field if non-nil, zero value otherwise.

### GetPolicyScheduleOk

`func (o *ChangePolicyScheduleRequest) GetPolicyScheduleOk() (*PolicyScheduleType, bool)`

GetPolicyScheduleOk returns a tuple with the PolicySchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicySchedule

`func (o *ChangePolicyScheduleRequest) SetPolicySchedule(v PolicyScheduleType)`

SetPolicySchedule sets PolicySchedule field to given value.

### HasPolicySchedule

`func (o *ChangePolicyScheduleRequest) HasPolicySchedule() bool`

HasPolicySchedule returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangePolicyScheduleRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangePolicyScheduleRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangePolicyScheduleRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangePolicyScheduleRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


