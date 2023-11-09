# PostNewPolicyScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PolicySchedule** | Pointer to [**PolicyScheduleType**](PolicyScheduleType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostNewPolicyScheduleRequest

`func NewPostNewPolicyScheduleRequest() *PostNewPolicyScheduleRequest`

NewPostNewPolicyScheduleRequest instantiates a new PostNewPolicyScheduleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostNewPolicyScheduleRequestWithDefaults

`func NewPostNewPolicyScheduleRequestWithDefaults() *PostNewPolicyScheduleRequest`

NewPostNewPolicyScheduleRequestWithDefaults instantiates a new PostNewPolicyScheduleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostNewPolicyScheduleRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostNewPolicyScheduleRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostNewPolicyScheduleRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostNewPolicyScheduleRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPolicySchedule

`func (o *PostNewPolicyScheduleRequest) GetPolicySchedule() PolicyScheduleType`

GetPolicySchedule returns the PolicySchedule field if non-nil, zero value otherwise.

### GetPolicyScheduleOk

`func (o *PostNewPolicyScheduleRequest) GetPolicyScheduleOk() (*PolicyScheduleType, bool)`

GetPolicyScheduleOk returns a tuple with the PolicySchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicySchedule

`func (o *PostNewPolicyScheduleRequest) SetPolicySchedule(v PolicyScheduleType)`

SetPolicySchedule sets PolicySchedule field to given value.

### HasPolicySchedule

`func (o *PostNewPolicyScheduleRequest) HasPolicySchedule() bool`

HasPolicySchedule returns a boolean if a field has been set.

### GetWarnings

`func (o *PostNewPolicyScheduleRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostNewPolicyScheduleRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostNewPolicyScheduleRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostNewPolicyScheduleRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


