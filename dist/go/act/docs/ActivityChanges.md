# ActivityChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityClass** | Pointer to [**ActivityConfigClassType**](ActivityConfigClassType.md) |  | [optional] 
**ActivityType** | Pointer to **string** | Indicates the Activity Type used for the Activity. | [optional] 
**ActivityPurpose** | Pointer to **string** | Indicates Purpose of the Activity. | [optional] 
**ActivityTraceCode** | Pointer to **string** | Activity Trace code used for the Activity. | [optional] 
**ActivityOwner** | Pointer to **string** | Owner of Activity. | [optional] 
**StartDate** | Pointer to **string** | Start Date of Activity. | [optional] 
**StartTime** | Pointer to **string** | Start time of the Activity. | [optional] 
**EndDate** | Pointer to **string** | End Date of Activity. | [optional] 
**EndTime** | Pointer to **string** | End time of the Activity. | [optional] 
**Notes** | Pointer to **string** | Notes associated with an Activity. | [optional] 
**HighPriority** | Pointer to **bool** | Indicates whether Activity has a high priority. | [optional] 
**ActivityAccount** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ActivityContact** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewActivityChanges

`func NewActivityChanges() *ActivityChanges`

NewActivityChanges instantiates a new ActivityChanges object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityChangesWithDefaults

`func NewActivityChangesWithDefaults() *ActivityChanges`

NewActivityChangesWithDefaults instantiates a new ActivityChanges object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityClass

`func (o *ActivityChanges) GetActivityClass() ActivityConfigClassType`

GetActivityClass returns the ActivityClass field if non-nil, zero value otherwise.

### GetActivityClassOk

`func (o *ActivityChanges) GetActivityClassOk() (*ActivityConfigClassType, bool)`

GetActivityClassOk returns a tuple with the ActivityClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityClass

`func (o *ActivityChanges) SetActivityClass(v ActivityConfigClassType)`

SetActivityClass sets ActivityClass field to given value.

### HasActivityClass

`func (o *ActivityChanges) HasActivityClass() bool`

HasActivityClass returns a boolean if a field has been set.

### GetActivityType

`func (o *ActivityChanges) GetActivityType() string`

GetActivityType returns the ActivityType field if non-nil, zero value otherwise.

### GetActivityTypeOk

`func (o *ActivityChanges) GetActivityTypeOk() (*string, bool)`

GetActivityTypeOk returns a tuple with the ActivityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityType

`func (o *ActivityChanges) SetActivityType(v string)`

SetActivityType sets ActivityType field to given value.

### HasActivityType

`func (o *ActivityChanges) HasActivityType() bool`

HasActivityType returns a boolean if a field has been set.

### GetActivityPurpose

`func (o *ActivityChanges) GetActivityPurpose() string`

GetActivityPurpose returns the ActivityPurpose field if non-nil, zero value otherwise.

### GetActivityPurposeOk

`func (o *ActivityChanges) GetActivityPurposeOk() (*string, bool)`

GetActivityPurposeOk returns a tuple with the ActivityPurpose field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityPurpose

`func (o *ActivityChanges) SetActivityPurpose(v string)`

SetActivityPurpose sets ActivityPurpose field to given value.

### HasActivityPurpose

`func (o *ActivityChanges) HasActivityPurpose() bool`

HasActivityPurpose returns a boolean if a field has been set.

### GetActivityTraceCode

`func (o *ActivityChanges) GetActivityTraceCode() string`

GetActivityTraceCode returns the ActivityTraceCode field if non-nil, zero value otherwise.

### GetActivityTraceCodeOk

`func (o *ActivityChanges) GetActivityTraceCodeOk() (*string, bool)`

GetActivityTraceCodeOk returns a tuple with the ActivityTraceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityTraceCode

`func (o *ActivityChanges) SetActivityTraceCode(v string)`

SetActivityTraceCode sets ActivityTraceCode field to given value.

### HasActivityTraceCode

`func (o *ActivityChanges) HasActivityTraceCode() bool`

HasActivityTraceCode returns a boolean if a field has been set.

### GetActivityOwner

`func (o *ActivityChanges) GetActivityOwner() string`

GetActivityOwner returns the ActivityOwner field if non-nil, zero value otherwise.

### GetActivityOwnerOk

`func (o *ActivityChanges) GetActivityOwnerOk() (*string, bool)`

GetActivityOwnerOk returns a tuple with the ActivityOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityOwner

`func (o *ActivityChanges) SetActivityOwner(v string)`

SetActivityOwner sets ActivityOwner field to given value.

### HasActivityOwner

`func (o *ActivityChanges) HasActivityOwner() bool`

HasActivityOwner returns a boolean if a field has been set.

### GetStartDate

`func (o *ActivityChanges) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ActivityChanges) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ActivityChanges) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *ActivityChanges) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetStartTime

`func (o *ActivityChanges) GetStartTime() string`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *ActivityChanges) GetStartTimeOk() (*string, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *ActivityChanges) SetStartTime(v string)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *ActivityChanges) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetEndDate

`func (o *ActivityChanges) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ActivityChanges) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ActivityChanges) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ActivityChanges) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetEndTime

`func (o *ActivityChanges) GetEndTime() string`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *ActivityChanges) GetEndTimeOk() (*string, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *ActivityChanges) SetEndTime(v string)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *ActivityChanges) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetNotes

`func (o *ActivityChanges) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *ActivityChanges) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *ActivityChanges) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *ActivityChanges) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetHighPriority

`func (o *ActivityChanges) GetHighPriority() bool`

GetHighPriority returns the HighPriority field if non-nil, zero value otherwise.

### GetHighPriorityOk

`func (o *ActivityChanges) GetHighPriorityOk() (*bool, bool)`

GetHighPriorityOk returns a tuple with the HighPriority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHighPriority

`func (o *ActivityChanges) SetHighPriority(v bool)`

SetHighPriority sets HighPriority field to given value.

### HasHighPriority

`func (o *ActivityChanges) HasHighPriority() bool`

HasHighPriority returns a boolean if a field has been set.

### GetActivityAccount

`func (o *ActivityChanges) GetActivityAccount() UniqueIDType`

GetActivityAccount returns the ActivityAccount field if non-nil, zero value otherwise.

### GetActivityAccountOk

`func (o *ActivityChanges) GetActivityAccountOk() (*UniqueIDType, bool)`

GetActivityAccountOk returns a tuple with the ActivityAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityAccount

`func (o *ActivityChanges) SetActivityAccount(v UniqueIDType)`

SetActivityAccount sets ActivityAccount field to given value.

### HasActivityAccount

`func (o *ActivityChanges) HasActivityAccount() bool`

HasActivityAccount returns a boolean if a field has been set.

### GetActivityContact

`func (o *ActivityChanges) GetActivityContact() UniqueIDType`

GetActivityContact returns the ActivityContact field if non-nil, zero value otherwise.

### GetActivityContactOk

`func (o *ActivityChanges) GetActivityContactOk() (*UniqueIDType, bool)`

GetActivityContactOk returns a tuple with the ActivityContact field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityContact

`func (o *ActivityChanges) SetActivityContact(v UniqueIDType)`

SetActivityContact sets ActivityContact field to given value.

### HasActivityContact

`func (o *ActivityChanges) HasActivityContact() bool`

HasActivityContact returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


