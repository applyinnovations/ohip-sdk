# WakeUpCallType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationInfo** | Pointer to [**WakeUpCallResvInfoType**](WakeUpCallResvInfoType.md) |  | [optional] 
**CallTime** | Pointer to **string** | Time on which wake up call is set. | [optional] 
**FollowUpCallTime** | Pointer to **string** | Follow up call time. | [optional] 
**IsFollowUpCall** | Pointer to **bool** | Is the call type follow up. | [optional] 
**Status** | Pointer to [**WakeUpCallStatusType**](WakeUpCallStatusType.md) |  | [optional] 
**ProcessedDate** | Pointer to **string** | Date on which wake up call was processed. | [optional] 
**ProcessedTime** | Pointer to **string** | Time on which wake up call was processed. | [optional] 
**Instructions** | Pointer to **string** | Special instructions for the wake up call. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**NewCallTime** | Pointer to **string** | New Time on which wake up call is set. Used to change the Followup Call time | [optional] 
**NewFollowUpCallTime** | Pointer to **string** | New Follow up call time.Used to change the Followup Call time. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 

## Methods

### NewWakeUpCallType

`func NewWakeUpCallType() *WakeUpCallType`

NewWakeUpCallType instantiates a new WakeUpCallType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWakeUpCallTypeWithDefaults

`func NewWakeUpCallTypeWithDefaults() *WakeUpCallType`

NewWakeUpCallTypeWithDefaults instantiates a new WakeUpCallType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationInfo

`func (o *WakeUpCallType) GetReservationInfo() WakeUpCallResvInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *WakeUpCallType) GetReservationInfoOk() (*WakeUpCallResvInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *WakeUpCallType) SetReservationInfo(v WakeUpCallResvInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *WakeUpCallType) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetCallTime

`func (o *WakeUpCallType) GetCallTime() string`

GetCallTime returns the CallTime field if non-nil, zero value otherwise.

### GetCallTimeOk

`func (o *WakeUpCallType) GetCallTimeOk() (*string, bool)`

GetCallTimeOk returns a tuple with the CallTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallTime

`func (o *WakeUpCallType) SetCallTime(v string)`

SetCallTime sets CallTime field to given value.

### HasCallTime

`func (o *WakeUpCallType) HasCallTime() bool`

HasCallTime returns a boolean if a field has been set.

### GetFollowUpCallTime

`func (o *WakeUpCallType) GetFollowUpCallTime() string`

GetFollowUpCallTime returns the FollowUpCallTime field if non-nil, zero value otherwise.

### GetFollowUpCallTimeOk

`func (o *WakeUpCallType) GetFollowUpCallTimeOk() (*string, bool)`

GetFollowUpCallTimeOk returns a tuple with the FollowUpCallTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFollowUpCallTime

`func (o *WakeUpCallType) SetFollowUpCallTime(v string)`

SetFollowUpCallTime sets FollowUpCallTime field to given value.

### HasFollowUpCallTime

`func (o *WakeUpCallType) HasFollowUpCallTime() bool`

HasFollowUpCallTime returns a boolean if a field has been set.

### GetIsFollowUpCall

`func (o *WakeUpCallType) GetIsFollowUpCall() bool`

GetIsFollowUpCall returns the IsFollowUpCall field if non-nil, zero value otherwise.

### GetIsFollowUpCallOk

`func (o *WakeUpCallType) GetIsFollowUpCallOk() (*bool, bool)`

GetIsFollowUpCallOk returns a tuple with the IsFollowUpCall field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsFollowUpCall

`func (o *WakeUpCallType) SetIsFollowUpCall(v bool)`

SetIsFollowUpCall sets IsFollowUpCall field to given value.

### HasIsFollowUpCall

`func (o *WakeUpCallType) HasIsFollowUpCall() bool`

HasIsFollowUpCall returns a boolean if a field has been set.

### GetStatus

`func (o *WakeUpCallType) GetStatus() WakeUpCallStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *WakeUpCallType) GetStatusOk() (*WakeUpCallStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *WakeUpCallType) SetStatus(v WakeUpCallStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *WakeUpCallType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetProcessedDate

`func (o *WakeUpCallType) GetProcessedDate() string`

GetProcessedDate returns the ProcessedDate field if non-nil, zero value otherwise.

### GetProcessedDateOk

`func (o *WakeUpCallType) GetProcessedDateOk() (*string, bool)`

GetProcessedDateOk returns a tuple with the ProcessedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessedDate

`func (o *WakeUpCallType) SetProcessedDate(v string)`

SetProcessedDate sets ProcessedDate field to given value.

### HasProcessedDate

`func (o *WakeUpCallType) HasProcessedDate() bool`

HasProcessedDate returns a boolean if a field has been set.

### GetProcessedTime

`func (o *WakeUpCallType) GetProcessedTime() string`

GetProcessedTime returns the ProcessedTime field if non-nil, zero value otherwise.

### GetProcessedTimeOk

`func (o *WakeUpCallType) GetProcessedTimeOk() (*string, bool)`

GetProcessedTimeOk returns a tuple with the ProcessedTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessedTime

`func (o *WakeUpCallType) SetProcessedTime(v string)`

SetProcessedTime sets ProcessedTime field to given value.

### HasProcessedTime

`func (o *WakeUpCallType) HasProcessedTime() bool`

HasProcessedTime returns a boolean if a field has been set.

### GetInstructions

`func (o *WakeUpCallType) GetInstructions() string`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *WakeUpCallType) GetInstructionsOk() (*string, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *WakeUpCallType) SetInstructions(v string)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *WakeUpCallType) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetTimeSpan

`func (o *WakeUpCallType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *WakeUpCallType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *WakeUpCallType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *WakeUpCallType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetNewCallTime

`func (o *WakeUpCallType) GetNewCallTime() string`

GetNewCallTime returns the NewCallTime field if non-nil, zero value otherwise.

### GetNewCallTimeOk

`func (o *WakeUpCallType) GetNewCallTimeOk() (*string, bool)`

GetNewCallTimeOk returns a tuple with the NewCallTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewCallTime

`func (o *WakeUpCallType) SetNewCallTime(v string)`

SetNewCallTime sets NewCallTime field to given value.

### HasNewCallTime

`func (o *WakeUpCallType) HasNewCallTime() bool`

HasNewCallTime returns a boolean if a field has been set.

### GetNewFollowUpCallTime

`func (o *WakeUpCallType) GetNewFollowUpCallTime() string`

GetNewFollowUpCallTime returns the NewFollowUpCallTime field if non-nil, zero value otherwise.

### GetNewFollowUpCallTimeOk

`func (o *WakeUpCallType) GetNewFollowUpCallTimeOk() (*string, bool)`

GetNewFollowUpCallTimeOk returns a tuple with the NewFollowUpCallTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewFollowUpCallTime

`func (o *WakeUpCallType) SetNewFollowUpCallTime(v string)`

SetNewFollowUpCallTime sets NewFollowUpCallTime field to given value.

### HasNewFollowUpCallTime

`func (o *WakeUpCallType) HasNewFollowUpCallTime() bool`

HasNewFollowUpCallTime returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *WakeUpCallType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *WakeUpCallType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *WakeUpCallType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *WakeUpCallType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *WakeUpCallType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *WakeUpCallType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *WakeUpCallType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *WakeUpCallType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *WakeUpCallType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *WakeUpCallType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *WakeUpCallType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *WakeUpCallType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *WakeUpCallType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *WakeUpCallType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *WakeUpCallType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *WakeUpCallType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *WakeUpCallType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *WakeUpCallType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *WakeUpCallType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *WakeUpCallType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


