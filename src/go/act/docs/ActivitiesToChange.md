# ActivitiesToChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivitiesInformation** | Pointer to [**ActivityListType**](ActivityListType.md) |  | [optional] 
**ActivityDetailsEditFlag** | Pointer to **bool** | Signifies whether only activity details are being modified. | [optional] 
**CompleteMode** | Pointer to **bool** | Signifies whether complete details of activity should alone be modified. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**UpdateLinkedActivities** | Pointer to **bool** | Signifies whether the linked activity details should be modified or not. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewActivitiesToChange

`func NewActivitiesToChange() *ActivitiesToChange`

NewActivitiesToChange instantiates a new ActivitiesToChange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivitiesToChangeWithDefaults

`func NewActivitiesToChangeWithDefaults() *ActivitiesToChange`

NewActivitiesToChangeWithDefaults instantiates a new ActivitiesToChange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivitiesInformation

`func (o *ActivitiesToChange) GetActivitiesInformation() ActivityListType`

GetActivitiesInformation returns the ActivitiesInformation field if non-nil, zero value otherwise.

### GetActivitiesInformationOk

`func (o *ActivitiesToChange) GetActivitiesInformationOk() (*ActivityListType, bool)`

GetActivitiesInformationOk returns a tuple with the ActivitiesInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivitiesInformation

`func (o *ActivitiesToChange) SetActivitiesInformation(v ActivityListType)`

SetActivitiesInformation sets ActivitiesInformation field to given value.

### HasActivitiesInformation

`func (o *ActivitiesToChange) HasActivitiesInformation() bool`

HasActivitiesInformation returns a boolean if a field has been set.

### GetActivityDetailsEditFlag

`func (o *ActivitiesToChange) GetActivityDetailsEditFlag() bool`

GetActivityDetailsEditFlag returns the ActivityDetailsEditFlag field if non-nil, zero value otherwise.

### GetActivityDetailsEditFlagOk

`func (o *ActivitiesToChange) GetActivityDetailsEditFlagOk() (*bool, bool)`

GetActivityDetailsEditFlagOk returns a tuple with the ActivityDetailsEditFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityDetailsEditFlag

`func (o *ActivitiesToChange) SetActivityDetailsEditFlag(v bool)`

SetActivityDetailsEditFlag sets ActivityDetailsEditFlag field to given value.

### HasActivityDetailsEditFlag

`func (o *ActivitiesToChange) HasActivityDetailsEditFlag() bool`

HasActivityDetailsEditFlag returns a boolean if a field has been set.

### GetCompleteMode

`func (o *ActivitiesToChange) GetCompleteMode() bool`

GetCompleteMode returns the CompleteMode field if non-nil, zero value otherwise.

### GetCompleteModeOk

`func (o *ActivitiesToChange) GetCompleteModeOk() (*bool, bool)`

GetCompleteModeOk returns a tuple with the CompleteMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleteMode

`func (o *ActivitiesToChange) SetCompleteMode(v bool)`

SetCompleteMode sets CompleteMode field to given value.

### HasCompleteMode

`func (o *ActivitiesToChange) HasCompleteMode() bool`

HasCompleteMode returns a boolean if a field has been set.

### GetLinks

`func (o *ActivitiesToChange) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ActivitiesToChange) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ActivitiesToChange) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ActivitiesToChange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUpdateLinkedActivities

`func (o *ActivitiesToChange) GetUpdateLinkedActivities() bool`

GetUpdateLinkedActivities returns the UpdateLinkedActivities field if non-nil, zero value otherwise.

### GetUpdateLinkedActivitiesOk

`func (o *ActivitiesToChange) GetUpdateLinkedActivitiesOk() (*bool, bool)`

GetUpdateLinkedActivitiesOk returns a tuple with the UpdateLinkedActivities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateLinkedActivities

`func (o *ActivitiesToChange) SetUpdateLinkedActivities(v bool)`

SetUpdateLinkedActivities sets UpdateLinkedActivities field to given value.

### HasUpdateLinkedActivities

`func (o *ActivitiesToChange) HasUpdateLinkedActivities() bool`

HasUpdateLinkedActivities returns a boolean if a field has been set.

### GetWarnings

`func (o *ActivitiesToChange) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ActivitiesToChange) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ActivitiesToChange) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ActivitiesToChange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


