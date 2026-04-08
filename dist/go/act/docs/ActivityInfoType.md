# ActivityInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | This is the Hotel Code of the Activity. | [optional] 
**ActivityClass** | Pointer to [**ActivityConfigClassType**](ActivityConfigClassType.md) |  | [optional] 
**ActivityType** | Pointer to **string** | Indicates the Activity Type used for the Activity. | [optional] 
**ActivityTypeDescription** | Pointer to **string** | Indicates the description used for the Activity Type. | [optional] 
**ActivityPurpose** | Pointer to **string** | Indicates Purpose of the Activity. | [optional] 
**ActivityTraceCode** | Pointer to **string** | Activity Trace code used for the Activity. | [optional] 
**ActivityOwner** | Pointer to **string** | Owner of Activity. | [optional] 
**StartDateTime** | Pointer to **string** | Start Date time of Activity. | [optional] 
**EndDateTime** | Pointer to **string** | End Date time of Activity. | [optional] 
**Status** | Pointer to [**ActivityInfoTypeStatus**](ActivityInfoTypeStatus.md) |  | [optional] 
**ActivityResult** | Pointer to **string** | Indicates the outcome of a completed Activity. | [optional] 
**Notes** | Pointer to **string** | Notes associated with an Activity. | [optional] 
**Followup** | Pointer to **bool** | Indicates whether Followup Activity is needed or not. | [optional] 
**FollowupStartDateTime** | Pointer to **string** | Start Date time of the Followup Activity. | [optional] 
**HighPriority** | Pointer to **bool** | Indicates whether Activity has a high priority. | [optional] 
**OverlapActivity** | Pointer to **bool** | Determines whether the Activity overlaps with another activity with same date and time for the same owner. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 

## Methods

### NewActivityInfoType

`func NewActivityInfoType() *ActivityInfoType`

NewActivityInfoType instantiates a new ActivityInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityInfoTypeWithDefaults

`func NewActivityInfoTypeWithDefaults() *ActivityInfoType`

NewActivityInfoTypeWithDefaults instantiates a new ActivityInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ActivityInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ActivityInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ActivityInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ActivityInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetActivityClass

`func (o *ActivityInfoType) GetActivityClass() ActivityConfigClassType`

GetActivityClass returns the ActivityClass field if non-nil, zero value otherwise.

### GetActivityClassOk

`func (o *ActivityInfoType) GetActivityClassOk() (*ActivityConfigClassType, bool)`

GetActivityClassOk returns a tuple with the ActivityClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityClass

`func (o *ActivityInfoType) SetActivityClass(v ActivityConfigClassType)`

SetActivityClass sets ActivityClass field to given value.

### HasActivityClass

`func (o *ActivityInfoType) HasActivityClass() bool`

HasActivityClass returns a boolean if a field has been set.

### GetActivityType

`func (o *ActivityInfoType) GetActivityType() string`

GetActivityType returns the ActivityType field if non-nil, zero value otherwise.

### GetActivityTypeOk

`func (o *ActivityInfoType) GetActivityTypeOk() (*string, bool)`

GetActivityTypeOk returns a tuple with the ActivityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityType

`func (o *ActivityInfoType) SetActivityType(v string)`

SetActivityType sets ActivityType field to given value.

### HasActivityType

`func (o *ActivityInfoType) HasActivityType() bool`

HasActivityType returns a boolean if a field has been set.

### GetActivityTypeDescription

`func (o *ActivityInfoType) GetActivityTypeDescription() string`

GetActivityTypeDescription returns the ActivityTypeDescription field if non-nil, zero value otherwise.

### GetActivityTypeDescriptionOk

`func (o *ActivityInfoType) GetActivityTypeDescriptionOk() (*string, bool)`

GetActivityTypeDescriptionOk returns a tuple with the ActivityTypeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityTypeDescription

`func (o *ActivityInfoType) SetActivityTypeDescription(v string)`

SetActivityTypeDescription sets ActivityTypeDescription field to given value.

### HasActivityTypeDescription

`func (o *ActivityInfoType) HasActivityTypeDescription() bool`

HasActivityTypeDescription returns a boolean if a field has been set.

### GetActivityPurpose

`func (o *ActivityInfoType) GetActivityPurpose() string`

GetActivityPurpose returns the ActivityPurpose field if non-nil, zero value otherwise.

### GetActivityPurposeOk

`func (o *ActivityInfoType) GetActivityPurposeOk() (*string, bool)`

GetActivityPurposeOk returns a tuple with the ActivityPurpose field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityPurpose

`func (o *ActivityInfoType) SetActivityPurpose(v string)`

SetActivityPurpose sets ActivityPurpose field to given value.

### HasActivityPurpose

`func (o *ActivityInfoType) HasActivityPurpose() bool`

HasActivityPurpose returns a boolean if a field has been set.

### GetActivityTraceCode

`func (o *ActivityInfoType) GetActivityTraceCode() string`

GetActivityTraceCode returns the ActivityTraceCode field if non-nil, zero value otherwise.

### GetActivityTraceCodeOk

`func (o *ActivityInfoType) GetActivityTraceCodeOk() (*string, bool)`

GetActivityTraceCodeOk returns a tuple with the ActivityTraceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityTraceCode

`func (o *ActivityInfoType) SetActivityTraceCode(v string)`

SetActivityTraceCode sets ActivityTraceCode field to given value.

### HasActivityTraceCode

`func (o *ActivityInfoType) HasActivityTraceCode() bool`

HasActivityTraceCode returns a boolean if a field has been set.

### GetActivityOwner

`func (o *ActivityInfoType) GetActivityOwner() string`

GetActivityOwner returns the ActivityOwner field if non-nil, zero value otherwise.

### GetActivityOwnerOk

`func (o *ActivityInfoType) GetActivityOwnerOk() (*string, bool)`

GetActivityOwnerOk returns a tuple with the ActivityOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityOwner

`func (o *ActivityInfoType) SetActivityOwner(v string)`

SetActivityOwner sets ActivityOwner field to given value.

### HasActivityOwner

`func (o *ActivityInfoType) HasActivityOwner() bool`

HasActivityOwner returns a boolean if a field has been set.

### GetStartDateTime

`func (o *ActivityInfoType) GetStartDateTime() string`

GetStartDateTime returns the StartDateTime field if non-nil, zero value otherwise.

### GetStartDateTimeOk

`func (o *ActivityInfoType) GetStartDateTimeOk() (*string, bool)`

GetStartDateTimeOk returns a tuple with the StartDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDateTime

`func (o *ActivityInfoType) SetStartDateTime(v string)`

SetStartDateTime sets StartDateTime field to given value.

### HasStartDateTime

`func (o *ActivityInfoType) HasStartDateTime() bool`

HasStartDateTime returns a boolean if a field has been set.

### GetEndDateTime

`func (o *ActivityInfoType) GetEndDateTime() string`

GetEndDateTime returns the EndDateTime field if non-nil, zero value otherwise.

### GetEndDateTimeOk

`func (o *ActivityInfoType) GetEndDateTimeOk() (*string, bool)`

GetEndDateTimeOk returns a tuple with the EndDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDateTime

`func (o *ActivityInfoType) SetEndDateTime(v string)`

SetEndDateTime sets EndDateTime field to given value.

### HasEndDateTime

`func (o *ActivityInfoType) HasEndDateTime() bool`

HasEndDateTime returns a boolean if a field has been set.

### GetStatus

`func (o *ActivityInfoType) GetStatus() ActivityInfoTypeStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ActivityInfoType) GetStatusOk() (*ActivityInfoTypeStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ActivityInfoType) SetStatus(v ActivityInfoTypeStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ActivityInfoType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetActivityResult

`func (o *ActivityInfoType) GetActivityResult() string`

GetActivityResult returns the ActivityResult field if non-nil, zero value otherwise.

### GetActivityResultOk

`func (o *ActivityInfoType) GetActivityResultOk() (*string, bool)`

GetActivityResultOk returns a tuple with the ActivityResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityResult

`func (o *ActivityInfoType) SetActivityResult(v string)`

SetActivityResult sets ActivityResult field to given value.

### HasActivityResult

`func (o *ActivityInfoType) HasActivityResult() bool`

HasActivityResult returns a boolean if a field has been set.

### GetNotes

`func (o *ActivityInfoType) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *ActivityInfoType) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *ActivityInfoType) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *ActivityInfoType) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetFollowup

`func (o *ActivityInfoType) GetFollowup() bool`

GetFollowup returns the Followup field if non-nil, zero value otherwise.

### GetFollowupOk

`func (o *ActivityInfoType) GetFollowupOk() (*bool, bool)`

GetFollowupOk returns a tuple with the Followup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFollowup

`func (o *ActivityInfoType) SetFollowup(v bool)`

SetFollowup sets Followup field to given value.

### HasFollowup

`func (o *ActivityInfoType) HasFollowup() bool`

HasFollowup returns a boolean if a field has been set.

### GetFollowupStartDateTime

`func (o *ActivityInfoType) GetFollowupStartDateTime() string`

GetFollowupStartDateTime returns the FollowupStartDateTime field if non-nil, zero value otherwise.

### GetFollowupStartDateTimeOk

`func (o *ActivityInfoType) GetFollowupStartDateTimeOk() (*string, bool)`

GetFollowupStartDateTimeOk returns a tuple with the FollowupStartDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFollowupStartDateTime

`func (o *ActivityInfoType) SetFollowupStartDateTime(v string)`

SetFollowupStartDateTime sets FollowupStartDateTime field to given value.

### HasFollowupStartDateTime

`func (o *ActivityInfoType) HasFollowupStartDateTime() bool`

HasFollowupStartDateTime returns a boolean if a field has been set.

### GetHighPriority

`func (o *ActivityInfoType) GetHighPriority() bool`

GetHighPriority returns the HighPriority field if non-nil, zero value otherwise.

### GetHighPriorityOk

`func (o *ActivityInfoType) GetHighPriorityOk() (*bool, bool)`

GetHighPriorityOk returns a tuple with the HighPriority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHighPriority

`func (o *ActivityInfoType) SetHighPriority(v bool)`

SetHighPriority sets HighPriority field to given value.

### HasHighPriority

`func (o *ActivityInfoType) HasHighPriority() bool`

HasHighPriority returns a boolean if a field has been set.

### GetOverlapActivity

`func (o *ActivityInfoType) GetOverlapActivity() bool`

GetOverlapActivity returns the OverlapActivity field if non-nil, zero value otherwise.

### GetOverlapActivityOk

`func (o *ActivityInfoType) GetOverlapActivityOk() (*bool, bool)`

GetOverlapActivityOk returns a tuple with the OverlapActivity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverlapActivity

`func (o *ActivityInfoType) SetOverlapActivity(v bool)`

SetOverlapActivity sets OverlapActivity field to given value.

### HasOverlapActivity

`func (o *ActivityInfoType) HasOverlapActivity() bool`

HasOverlapActivity returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *ActivityInfoType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ActivityInfoType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ActivityInfoType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *ActivityInfoType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *ActivityInfoType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *ActivityInfoType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *ActivityInfoType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *ActivityInfoType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *ActivityInfoType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *ActivityInfoType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *ActivityInfoType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *ActivityInfoType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *ActivityInfoType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *ActivityInfoType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *ActivityInfoType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *ActivityInfoType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


