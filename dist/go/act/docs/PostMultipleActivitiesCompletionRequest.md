# PostMultipleActivitiesCompletionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivitiesInformation** | Pointer to [**[]ActivityDetailsType**](ActivityDetailsType.md) | Activity information in detail. | [optional] 
**ActivityDetailsEditFlag** | Pointer to **bool** | Signifies whether only activity details are being modified. | [optional] 
**UpdateLinkedActivities** | Pointer to **bool** | Signifies whether the linked activity details should be modified or not. | [optional] 
**CompleteMode** | Pointer to **bool** | Signifies whether complete details of activity should alone be modified. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMultipleActivitiesCompletionRequest

`func NewPostMultipleActivitiesCompletionRequest() *PostMultipleActivitiesCompletionRequest`

NewPostMultipleActivitiesCompletionRequest instantiates a new PostMultipleActivitiesCompletionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMultipleActivitiesCompletionRequestWithDefaults

`func NewPostMultipleActivitiesCompletionRequestWithDefaults() *PostMultipleActivitiesCompletionRequest`

NewPostMultipleActivitiesCompletionRequestWithDefaults instantiates a new PostMultipleActivitiesCompletionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivitiesInformation

`func (o *PostMultipleActivitiesCompletionRequest) GetActivitiesInformation() []ActivityDetailsType`

GetActivitiesInformation returns the ActivitiesInformation field if non-nil, zero value otherwise.

### GetActivitiesInformationOk

`func (o *PostMultipleActivitiesCompletionRequest) GetActivitiesInformationOk() (*[]ActivityDetailsType, bool)`

GetActivitiesInformationOk returns a tuple with the ActivitiesInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivitiesInformation

`func (o *PostMultipleActivitiesCompletionRequest) SetActivitiesInformation(v []ActivityDetailsType)`

SetActivitiesInformation sets ActivitiesInformation field to given value.

### HasActivitiesInformation

`func (o *PostMultipleActivitiesCompletionRequest) HasActivitiesInformation() bool`

HasActivitiesInformation returns a boolean if a field has been set.

### GetActivityDetailsEditFlag

`func (o *PostMultipleActivitiesCompletionRequest) GetActivityDetailsEditFlag() bool`

GetActivityDetailsEditFlag returns the ActivityDetailsEditFlag field if non-nil, zero value otherwise.

### GetActivityDetailsEditFlagOk

`func (o *PostMultipleActivitiesCompletionRequest) GetActivityDetailsEditFlagOk() (*bool, bool)`

GetActivityDetailsEditFlagOk returns a tuple with the ActivityDetailsEditFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityDetailsEditFlag

`func (o *PostMultipleActivitiesCompletionRequest) SetActivityDetailsEditFlag(v bool)`

SetActivityDetailsEditFlag sets ActivityDetailsEditFlag field to given value.

### HasActivityDetailsEditFlag

`func (o *PostMultipleActivitiesCompletionRequest) HasActivityDetailsEditFlag() bool`

HasActivityDetailsEditFlag returns a boolean if a field has been set.

### GetUpdateLinkedActivities

`func (o *PostMultipleActivitiesCompletionRequest) GetUpdateLinkedActivities() bool`

GetUpdateLinkedActivities returns the UpdateLinkedActivities field if non-nil, zero value otherwise.

### GetUpdateLinkedActivitiesOk

`func (o *PostMultipleActivitiesCompletionRequest) GetUpdateLinkedActivitiesOk() (*bool, bool)`

GetUpdateLinkedActivitiesOk returns a tuple with the UpdateLinkedActivities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateLinkedActivities

`func (o *PostMultipleActivitiesCompletionRequest) SetUpdateLinkedActivities(v bool)`

SetUpdateLinkedActivities sets UpdateLinkedActivities field to given value.

### HasUpdateLinkedActivities

`func (o *PostMultipleActivitiesCompletionRequest) HasUpdateLinkedActivities() bool`

HasUpdateLinkedActivities returns a boolean if a field has been set.

### GetCompleteMode

`func (o *PostMultipleActivitiesCompletionRequest) GetCompleteMode() bool`

GetCompleteMode returns the CompleteMode field if non-nil, zero value otherwise.

### GetCompleteModeOk

`func (o *PostMultipleActivitiesCompletionRequest) GetCompleteModeOk() (*bool, bool)`

GetCompleteModeOk returns a tuple with the CompleteMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleteMode

`func (o *PostMultipleActivitiesCompletionRequest) SetCompleteMode(v bool)`

SetCompleteMode sets CompleteMode field to given value.

### HasCompleteMode

`func (o *PostMultipleActivitiesCompletionRequest) HasCompleteMode() bool`

HasCompleteMode returns a boolean if a field has been set.

### GetLinks

`func (o *PostMultipleActivitiesCompletionRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMultipleActivitiesCompletionRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMultipleActivitiesCompletionRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMultipleActivitiesCompletionRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMultipleActivitiesCompletionRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMultipleActivitiesCompletionRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMultipleActivitiesCompletionRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMultipleActivitiesCompletionRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


