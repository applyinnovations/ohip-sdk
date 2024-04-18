# PutActivitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivitiesInformation** | Pointer to [**[]ActivityDetailsType**](ActivityDetailsType.md) | Activity information in detail. | [optional] 
**ActivityDetailsEditFlag** | Pointer to **bool** | Signifies whether only activity details are being modified. | [optional] 
**CompleteMode** | Pointer to **bool** | Signifies whether complete details of activity should alone be modified. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**UpdateLinkedActivities** | Pointer to **bool** | Signifies whether the linked activity details should be modified or not. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutActivitiesRequest

`func NewPutActivitiesRequest() *PutActivitiesRequest`

NewPutActivitiesRequest instantiates a new PutActivitiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutActivitiesRequestWithDefaults

`func NewPutActivitiesRequestWithDefaults() *PutActivitiesRequest`

NewPutActivitiesRequestWithDefaults instantiates a new PutActivitiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivitiesInformation

`func (o *PutActivitiesRequest) GetActivitiesInformation() []ActivityDetailsType`

GetActivitiesInformation returns the ActivitiesInformation field if non-nil, zero value otherwise.

### GetActivitiesInformationOk

`func (o *PutActivitiesRequest) GetActivitiesInformationOk() (*[]ActivityDetailsType, bool)`

GetActivitiesInformationOk returns a tuple with the ActivitiesInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivitiesInformation

`func (o *PutActivitiesRequest) SetActivitiesInformation(v []ActivityDetailsType)`

SetActivitiesInformation sets ActivitiesInformation field to given value.

### HasActivitiesInformation

`func (o *PutActivitiesRequest) HasActivitiesInformation() bool`

HasActivitiesInformation returns a boolean if a field has been set.

### GetActivityDetailsEditFlag

`func (o *PutActivitiesRequest) GetActivityDetailsEditFlag() bool`

GetActivityDetailsEditFlag returns the ActivityDetailsEditFlag field if non-nil, zero value otherwise.

### GetActivityDetailsEditFlagOk

`func (o *PutActivitiesRequest) GetActivityDetailsEditFlagOk() (*bool, bool)`

GetActivityDetailsEditFlagOk returns a tuple with the ActivityDetailsEditFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityDetailsEditFlag

`func (o *PutActivitiesRequest) SetActivityDetailsEditFlag(v bool)`

SetActivityDetailsEditFlag sets ActivityDetailsEditFlag field to given value.

### HasActivityDetailsEditFlag

`func (o *PutActivitiesRequest) HasActivityDetailsEditFlag() bool`

HasActivityDetailsEditFlag returns a boolean if a field has been set.

### GetCompleteMode

`func (o *PutActivitiesRequest) GetCompleteMode() bool`

GetCompleteMode returns the CompleteMode field if non-nil, zero value otherwise.

### GetCompleteModeOk

`func (o *PutActivitiesRequest) GetCompleteModeOk() (*bool, bool)`

GetCompleteModeOk returns a tuple with the CompleteMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleteMode

`func (o *PutActivitiesRequest) SetCompleteMode(v bool)`

SetCompleteMode sets CompleteMode field to given value.

### HasCompleteMode

`func (o *PutActivitiesRequest) HasCompleteMode() bool`

HasCompleteMode returns a boolean if a field has been set.

### GetLinks

`func (o *PutActivitiesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutActivitiesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutActivitiesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutActivitiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUpdateLinkedActivities

`func (o *PutActivitiesRequest) GetUpdateLinkedActivities() bool`

GetUpdateLinkedActivities returns the UpdateLinkedActivities field if non-nil, zero value otherwise.

### GetUpdateLinkedActivitiesOk

`func (o *PutActivitiesRequest) GetUpdateLinkedActivitiesOk() (*bool, bool)`

GetUpdateLinkedActivitiesOk returns a tuple with the UpdateLinkedActivities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateLinkedActivities

`func (o *PutActivitiesRequest) SetUpdateLinkedActivities(v bool)`

SetUpdateLinkedActivities sets UpdateLinkedActivities field to given value.

### HasUpdateLinkedActivities

`func (o *PutActivitiesRequest) HasUpdateLinkedActivities() bool`

HasUpdateLinkedActivities returns a boolean if a field has been set.

### GetWarnings

`func (o *PutActivitiesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutActivitiesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutActivitiesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutActivitiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

