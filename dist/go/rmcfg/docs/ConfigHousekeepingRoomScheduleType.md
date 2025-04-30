# ConfigHousekeepingRoomScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Facility task description. | [optional] 
**Priority** | Pointer to **int32** | Signifies the priority of the task. | [optional] 
**Code** | Pointer to **string** | Code of the housekeeping task. | [optional] 
**Credits** | Pointer to **int32** | Housekeeping credits associated with this housekeeping task. | [optional] 
**Frequency** | Pointer to [**FrequencyTypeType**](FrequencyTypeType.md) |  | [optional] 
**FrequencyDays** | Pointer to **int32** | Specify how often in days following the guest&#39;s arrival date, the housekeeping task is to be completed. | [optional] 
**SpecialRequests** | Pointer to **[]string** |  | [optional] 
**VIPStatuses** | Pointer to **[]string** |  | [optional] 
**Sequence** | Pointer to **int32** | Used to store the housekeeping task sequence. | [optional] 
**DaysOfWeek** | Pointer to [**TimeSpanDaysOfWeekType**](TimeSpanDaysOfWeekType.md) |  | [optional] 
**RateCodes** | Pointer to **[]string** |  | [optional] 
**MarketCodes** | Pointer to **[]string** |  | [optional] 
**CycleStartDay** | Pointer to **int32** | Signifies offset(in days) i.e. start on 3rd day from arrival. | [optional] 
**CustomizePromptText** | Pointer to **string** | The information that is entered into this text box. | [optional] 
**TaskSupplies** | Pointer to [**[]ConfigHousekeepingRoomScheduleTaskSupplyType**](ConfigHousekeepingRoomScheduleTaskSupplyType.md) | This type holds a collection of housekeeping task supplies attached to a room type. | [optional] 
**RoomType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**GuestRequested** | Pointer to **bool** | Signifies whether housekeeping task is a guest requested task. | [optional] 
**DefaultDepartureTask** | Pointer to **bool** | Signifies that task is a default task for the checked out room. | [optional] 
**Moveup** | Pointer to **bool** | Automatically moves the task up one day if it falls on the day before the guest&#39;s departure. It will only be available when the schedule is set to every 3 days or more. | [optional] 
**HotelId** | Pointer to **string** | Specifies the hotel code that the room type belongs to. | [optional] 
**MembershipType** | Pointer to **string** | Specify a Membership Type to associate to a specific housekeeping task code. | [optional] 
**MembershipLevels** | Pointer to **[]string** |  | [optional] 

## Methods

### NewConfigHousekeepingRoomScheduleType

`func NewConfigHousekeepingRoomScheduleType() *ConfigHousekeepingRoomScheduleType`

NewConfigHousekeepingRoomScheduleType instantiates a new ConfigHousekeepingRoomScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigHousekeepingRoomScheduleTypeWithDefaults

`func NewConfigHousekeepingRoomScheduleTypeWithDefaults() *ConfigHousekeepingRoomScheduleType`

NewConfigHousekeepingRoomScheduleTypeWithDefaults instantiates a new ConfigHousekeepingRoomScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *ConfigHousekeepingRoomScheduleType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigHousekeepingRoomScheduleType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigHousekeepingRoomScheduleType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigHousekeepingRoomScheduleType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPriority

`func (o *ConfigHousekeepingRoomScheduleType) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *ConfigHousekeepingRoomScheduleType) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *ConfigHousekeepingRoomScheduleType) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *ConfigHousekeepingRoomScheduleType) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetCode

`func (o *ConfigHousekeepingRoomScheduleType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ConfigHousekeepingRoomScheduleType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ConfigHousekeepingRoomScheduleType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ConfigHousekeepingRoomScheduleType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCredits

`func (o *ConfigHousekeepingRoomScheduleType) GetCredits() int32`

GetCredits returns the Credits field if non-nil, zero value otherwise.

### GetCreditsOk

`func (o *ConfigHousekeepingRoomScheduleType) GetCreditsOk() (*int32, bool)`

GetCreditsOk returns a tuple with the Credits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredits

`func (o *ConfigHousekeepingRoomScheduleType) SetCredits(v int32)`

SetCredits sets Credits field to given value.

### HasCredits

`func (o *ConfigHousekeepingRoomScheduleType) HasCredits() bool`

HasCredits returns a boolean if a field has been set.

### GetFrequency

`func (o *ConfigHousekeepingRoomScheduleType) GetFrequency() FrequencyTypeType`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *ConfigHousekeepingRoomScheduleType) GetFrequencyOk() (*FrequencyTypeType, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *ConfigHousekeepingRoomScheduleType) SetFrequency(v FrequencyTypeType)`

SetFrequency sets Frequency field to given value.

### HasFrequency

`func (o *ConfigHousekeepingRoomScheduleType) HasFrequency() bool`

HasFrequency returns a boolean if a field has been set.

### GetFrequencyDays

`func (o *ConfigHousekeepingRoomScheduleType) GetFrequencyDays() int32`

GetFrequencyDays returns the FrequencyDays field if non-nil, zero value otherwise.

### GetFrequencyDaysOk

`func (o *ConfigHousekeepingRoomScheduleType) GetFrequencyDaysOk() (*int32, bool)`

GetFrequencyDaysOk returns a tuple with the FrequencyDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequencyDays

`func (o *ConfigHousekeepingRoomScheduleType) SetFrequencyDays(v int32)`

SetFrequencyDays sets FrequencyDays field to given value.

### HasFrequencyDays

`func (o *ConfigHousekeepingRoomScheduleType) HasFrequencyDays() bool`

HasFrequencyDays returns a boolean if a field has been set.

### GetSpecialRequests

`func (o *ConfigHousekeepingRoomScheduleType) GetSpecialRequests() []string`

GetSpecialRequests returns the SpecialRequests field if non-nil, zero value otherwise.

### GetSpecialRequestsOk

`func (o *ConfigHousekeepingRoomScheduleType) GetSpecialRequestsOk() (*[]string, bool)`

GetSpecialRequestsOk returns a tuple with the SpecialRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecialRequests

`func (o *ConfigHousekeepingRoomScheduleType) SetSpecialRequests(v []string)`

SetSpecialRequests sets SpecialRequests field to given value.

### HasSpecialRequests

`func (o *ConfigHousekeepingRoomScheduleType) HasSpecialRequests() bool`

HasSpecialRequests returns a boolean if a field has been set.

### GetVIPStatuses

`func (o *ConfigHousekeepingRoomScheduleType) GetVIPStatuses() []string`

GetVIPStatuses returns the VIPStatuses field if non-nil, zero value otherwise.

### GetVIPStatusesOk

`func (o *ConfigHousekeepingRoomScheduleType) GetVIPStatusesOk() (*[]string, bool)`

GetVIPStatusesOk returns a tuple with the VIPStatuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVIPStatuses

`func (o *ConfigHousekeepingRoomScheduleType) SetVIPStatuses(v []string)`

SetVIPStatuses sets VIPStatuses field to given value.

### HasVIPStatuses

`func (o *ConfigHousekeepingRoomScheduleType) HasVIPStatuses() bool`

HasVIPStatuses returns a boolean if a field has been set.

### GetSequence

`func (o *ConfigHousekeepingRoomScheduleType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ConfigHousekeepingRoomScheduleType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ConfigHousekeepingRoomScheduleType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ConfigHousekeepingRoomScheduleType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetDaysOfWeek

`func (o *ConfigHousekeepingRoomScheduleType) GetDaysOfWeek() TimeSpanDaysOfWeekType`

GetDaysOfWeek returns the DaysOfWeek field if non-nil, zero value otherwise.

### GetDaysOfWeekOk

`func (o *ConfigHousekeepingRoomScheduleType) GetDaysOfWeekOk() (*TimeSpanDaysOfWeekType, bool)`

GetDaysOfWeekOk returns a tuple with the DaysOfWeek field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysOfWeek

`func (o *ConfigHousekeepingRoomScheduleType) SetDaysOfWeek(v TimeSpanDaysOfWeekType)`

SetDaysOfWeek sets DaysOfWeek field to given value.

### HasDaysOfWeek

`func (o *ConfigHousekeepingRoomScheduleType) HasDaysOfWeek() bool`

HasDaysOfWeek returns a boolean if a field has been set.

### GetRateCodes

`func (o *ConfigHousekeepingRoomScheduleType) GetRateCodes() []string`

GetRateCodes returns the RateCodes field if non-nil, zero value otherwise.

### GetRateCodesOk

`func (o *ConfigHousekeepingRoomScheduleType) GetRateCodesOk() (*[]string, bool)`

GetRateCodesOk returns a tuple with the RateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodes

`func (o *ConfigHousekeepingRoomScheduleType) SetRateCodes(v []string)`

SetRateCodes sets RateCodes field to given value.

### HasRateCodes

`func (o *ConfigHousekeepingRoomScheduleType) HasRateCodes() bool`

HasRateCodes returns a boolean if a field has been set.

### GetMarketCodes

`func (o *ConfigHousekeepingRoomScheduleType) GetMarketCodes() []string`

GetMarketCodes returns the MarketCodes field if non-nil, zero value otherwise.

### GetMarketCodesOk

`func (o *ConfigHousekeepingRoomScheduleType) GetMarketCodesOk() (*[]string, bool)`

GetMarketCodesOk returns a tuple with the MarketCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCodes

`func (o *ConfigHousekeepingRoomScheduleType) SetMarketCodes(v []string)`

SetMarketCodes sets MarketCodes field to given value.

### HasMarketCodes

`func (o *ConfigHousekeepingRoomScheduleType) HasMarketCodes() bool`

HasMarketCodes returns a boolean if a field has been set.

### GetCycleStartDay

`func (o *ConfigHousekeepingRoomScheduleType) GetCycleStartDay() int32`

GetCycleStartDay returns the CycleStartDay field if non-nil, zero value otherwise.

### GetCycleStartDayOk

`func (o *ConfigHousekeepingRoomScheduleType) GetCycleStartDayOk() (*int32, bool)`

GetCycleStartDayOk returns a tuple with the CycleStartDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCycleStartDay

`func (o *ConfigHousekeepingRoomScheduleType) SetCycleStartDay(v int32)`

SetCycleStartDay sets CycleStartDay field to given value.

### HasCycleStartDay

`func (o *ConfigHousekeepingRoomScheduleType) HasCycleStartDay() bool`

HasCycleStartDay returns a boolean if a field has been set.

### GetCustomizePromptText

`func (o *ConfigHousekeepingRoomScheduleType) GetCustomizePromptText() string`

GetCustomizePromptText returns the CustomizePromptText field if non-nil, zero value otherwise.

### GetCustomizePromptTextOk

`func (o *ConfigHousekeepingRoomScheduleType) GetCustomizePromptTextOk() (*string, bool)`

GetCustomizePromptTextOk returns a tuple with the CustomizePromptText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomizePromptText

`func (o *ConfigHousekeepingRoomScheduleType) SetCustomizePromptText(v string)`

SetCustomizePromptText sets CustomizePromptText field to given value.

### HasCustomizePromptText

`func (o *ConfigHousekeepingRoomScheduleType) HasCustomizePromptText() bool`

HasCustomizePromptText returns a boolean if a field has been set.

### GetTaskSupplies

`func (o *ConfigHousekeepingRoomScheduleType) GetTaskSupplies() []ConfigHousekeepingRoomScheduleTaskSupplyType`

GetTaskSupplies returns the TaskSupplies field if non-nil, zero value otherwise.

### GetTaskSuppliesOk

`func (o *ConfigHousekeepingRoomScheduleType) GetTaskSuppliesOk() (*[]ConfigHousekeepingRoomScheduleTaskSupplyType, bool)`

GetTaskSuppliesOk returns a tuple with the TaskSupplies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSupplies

`func (o *ConfigHousekeepingRoomScheduleType) SetTaskSupplies(v []ConfigHousekeepingRoomScheduleTaskSupplyType)`

SetTaskSupplies sets TaskSupplies field to given value.

### HasTaskSupplies

`func (o *ConfigHousekeepingRoomScheduleType) HasTaskSupplies() bool`

HasTaskSupplies returns a boolean if a field has been set.

### GetRoomType

`func (o *ConfigHousekeepingRoomScheduleType) GetRoomType() CodeDescriptionType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ConfigHousekeepingRoomScheduleType) GetRoomTypeOk() (*CodeDescriptionType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ConfigHousekeepingRoomScheduleType) SetRoomType(v CodeDescriptionType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ConfigHousekeepingRoomScheduleType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetGuestRequested

`func (o *ConfigHousekeepingRoomScheduleType) GetGuestRequested() bool`

GetGuestRequested returns the GuestRequested field if non-nil, zero value otherwise.

### GetGuestRequestedOk

`func (o *ConfigHousekeepingRoomScheduleType) GetGuestRequestedOk() (*bool, bool)`

GetGuestRequestedOk returns a tuple with the GuestRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestRequested

`func (o *ConfigHousekeepingRoomScheduleType) SetGuestRequested(v bool)`

SetGuestRequested sets GuestRequested field to given value.

### HasGuestRequested

`func (o *ConfigHousekeepingRoomScheduleType) HasGuestRequested() bool`

HasGuestRequested returns a boolean if a field has been set.

### GetDefaultDepartureTask

`func (o *ConfigHousekeepingRoomScheduleType) GetDefaultDepartureTask() bool`

GetDefaultDepartureTask returns the DefaultDepartureTask field if non-nil, zero value otherwise.

### GetDefaultDepartureTaskOk

`func (o *ConfigHousekeepingRoomScheduleType) GetDefaultDepartureTaskOk() (*bool, bool)`

GetDefaultDepartureTaskOk returns a tuple with the DefaultDepartureTask field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDepartureTask

`func (o *ConfigHousekeepingRoomScheduleType) SetDefaultDepartureTask(v bool)`

SetDefaultDepartureTask sets DefaultDepartureTask field to given value.

### HasDefaultDepartureTask

`func (o *ConfigHousekeepingRoomScheduleType) HasDefaultDepartureTask() bool`

HasDefaultDepartureTask returns a boolean if a field has been set.

### GetMoveup

`func (o *ConfigHousekeepingRoomScheduleType) GetMoveup() bool`

GetMoveup returns the Moveup field if non-nil, zero value otherwise.

### GetMoveupOk

`func (o *ConfigHousekeepingRoomScheduleType) GetMoveupOk() (*bool, bool)`

GetMoveupOk returns a tuple with the Moveup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoveup

`func (o *ConfigHousekeepingRoomScheduleType) SetMoveup(v bool)`

SetMoveup sets Moveup field to given value.

### HasMoveup

`func (o *ConfigHousekeepingRoomScheduleType) HasMoveup() bool`

HasMoveup returns a boolean if a field has been set.

### GetHotelId

`func (o *ConfigHousekeepingRoomScheduleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigHousekeepingRoomScheduleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigHousekeepingRoomScheduleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigHousekeepingRoomScheduleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMembershipType

`func (o *ConfigHousekeepingRoomScheduleType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *ConfigHousekeepingRoomScheduleType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *ConfigHousekeepingRoomScheduleType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *ConfigHousekeepingRoomScheduleType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetMembershipLevels

`func (o *ConfigHousekeepingRoomScheduleType) GetMembershipLevels() []string`

GetMembershipLevels returns the MembershipLevels field if non-nil, zero value otherwise.

### GetMembershipLevelsOk

`func (o *ConfigHousekeepingRoomScheduleType) GetMembershipLevelsOk() (*[]string, bool)`

GetMembershipLevelsOk returns a tuple with the MembershipLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevels

`func (o *ConfigHousekeepingRoomScheduleType) SetMembershipLevels(v []string)`

SetMembershipLevels sets MembershipLevels field to given value.

### HasMembershipLevels

`func (o *ConfigHousekeepingRoomScheduleType) HasMembershipLevels() bool`

HasMembershipLevels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


