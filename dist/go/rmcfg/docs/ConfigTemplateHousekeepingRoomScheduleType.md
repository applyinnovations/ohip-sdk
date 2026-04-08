# ConfigTemplateHousekeepingRoomScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code of the template housekeeping task. | [optional] 
**Description** | Pointer to **string** | Description of template housekeeping task. | [optional] 
**Priority** | Pointer to **int32** | Signifies the priority of the template task. | [optional] 
**Credits** | Pointer to **int32** | Housekeeping credits associated with this template housekeeping task. | [optional] 
**Frequency** | Pointer to [**FrequencyTypeType**](FrequencyTypeType.md) |  | [optional] 
**FrequencyDays** | Pointer to **int32** | Specify how often in days following the guest&#39;s arrival date, the template housekeeping task is to be completed. | [optional] 
**SpecialRequests** | Pointer to **[]string** |  | [optional] 
**VIPStatuses** | Pointer to **[]string** |  | [optional] 
**Sequence** | Pointer to **int32** | Used to store the template housekeeping task sequence. | [optional] 
**DaysOfWeek** | Pointer to [**TimeSpanDaysOfWeekType**](TimeSpanDaysOfWeekType.md) |  | [optional] 
**RateCodes** | Pointer to **[]string** |  | [optional] 
**MarketCodes** | Pointer to **[]string** |  | [optional] 
**CycleStartDay** | Pointer to **int32** | Signifies offset(in days) i.e. start on 3rd day from arrival. | [optional] 
**CustomizePromptText** | Pointer to **string** | Indicates information about task message. | [optional] 
**TaskSupplies** | Pointer to [**[]ConfigTemplateHousekeepingRoomScheduleTaskSupplyType**](ConfigTemplateHousekeepingRoomScheduleTaskSupplyType.md) | This type holds a collection of template housekeeping task supply codes. | [optional] 
**RoomType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**GuestRequested** | Pointer to **bool** | Indicate this task is only available when requested by the Guest. | [optional] 
**DefaultDepartureTask** | Pointer to **bool** | Signifies that template task is a default task for the checked out room. | [optional] 
**Moveup** | Pointer to **bool** | Automatically moves the template task up one day if it falls on the day before the guest&#39;s departure. It will only be available when the schedule is set to every 3 days or more. | [optional] 
**MembershipType** | Pointer to **string** | Specify a Membership Type associated to a specific template housekeeping task code. | [optional] 
**MembershipLevels** | Pointer to **[]string** |  | [optional] 

## Methods

### NewConfigTemplateHousekeepingRoomScheduleType

`func NewConfigTemplateHousekeepingRoomScheduleType() *ConfigTemplateHousekeepingRoomScheduleType`

NewConfigTemplateHousekeepingRoomScheduleType instantiates a new ConfigTemplateHousekeepingRoomScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigTemplateHousekeepingRoomScheduleTypeWithDefaults

`func NewConfigTemplateHousekeepingRoomScheduleTypeWithDefaults() *ConfigTemplateHousekeepingRoomScheduleType`

NewConfigTemplateHousekeepingRoomScheduleTypeWithDefaults instantiates a new ConfigTemplateHousekeepingRoomScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPriority

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetCredits

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetCredits() int32`

GetCredits returns the Credits field if non-nil, zero value otherwise.

### GetCreditsOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetCreditsOk() (*int32, bool)`

GetCreditsOk returns a tuple with the Credits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredits

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetCredits(v int32)`

SetCredits sets Credits field to given value.

### HasCredits

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasCredits() bool`

HasCredits returns a boolean if a field has been set.

### GetFrequency

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetFrequency() FrequencyTypeType`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetFrequencyOk() (*FrequencyTypeType, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetFrequency(v FrequencyTypeType)`

SetFrequency sets Frequency field to given value.

### HasFrequency

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasFrequency() bool`

HasFrequency returns a boolean if a field has been set.

### GetFrequencyDays

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetFrequencyDays() int32`

GetFrequencyDays returns the FrequencyDays field if non-nil, zero value otherwise.

### GetFrequencyDaysOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetFrequencyDaysOk() (*int32, bool)`

GetFrequencyDaysOk returns a tuple with the FrequencyDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequencyDays

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetFrequencyDays(v int32)`

SetFrequencyDays sets FrequencyDays field to given value.

### HasFrequencyDays

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasFrequencyDays() bool`

HasFrequencyDays returns a boolean if a field has been set.

### GetSpecialRequests

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetSpecialRequests() []string`

GetSpecialRequests returns the SpecialRequests field if non-nil, zero value otherwise.

### GetSpecialRequestsOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetSpecialRequestsOk() (*[]string, bool)`

GetSpecialRequestsOk returns a tuple with the SpecialRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecialRequests

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetSpecialRequests(v []string)`

SetSpecialRequests sets SpecialRequests field to given value.

### HasSpecialRequests

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasSpecialRequests() bool`

HasSpecialRequests returns a boolean if a field has been set.

### GetVIPStatuses

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetVIPStatuses() []string`

GetVIPStatuses returns the VIPStatuses field if non-nil, zero value otherwise.

### GetVIPStatusesOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetVIPStatusesOk() (*[]string, bool)`

GetVIPStatusesOk returns a tuple with the VIPStatuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVIPStatuses

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetVIPStatuses(v []string)`

SetVIPStatuses sets VIPStatuses field to given value.

### HasVIPStatuses

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasVIPStatuses() bool`

HasVIPStatuses returns a boolean if a field has been set.

### GetSequence

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetDaysOfWeek

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetDaysOfWeek() TimeSpanDaysOfWeekType`

GetDaysOfWeek returns the DaysOfWeek field if non-nil, zero value otherwise.

### GetDaysOfWeekOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetDaysOfWeekOk() (*TimeSpanDaysOfWeekType, bool)`

GetDaysOfWeekOk returns a tuple with the DaysOfWeek field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysOfWeek

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetDaysOfWeek(v TimeSpanDaysOfWeekType)`

SetDaysOfWeek sets DaysOfWeek field to given value.

### HasDaysOfWeek

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasDaysOfWeek() bool`

HasDaysOfWeek returns a boolean if a field has been set.

### GetRateCodes

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetRateCodes() []string`

GetRateCodes returns the RateCodes field if non-nil, zero value otherwise.

### GetRateCodesOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetRateCodesOk() (*[]string, bool)`

GetRateCodesOk returns a tuple with the RateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodes

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetRateCodes(v []string)`

SetRateCodes sets RateCodes field to given value.

### HasRateCodes

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasRateCodes() bool`

HasRateCodes returns a boolean if a field has been set.

### GetMarketCodes

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetMarketCodes() []string`

GetMarketCodes returns the MarketCodes field if non-nil, zero value otherwise.

### GetMarketCodesOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetMarketCodesOk() (*[]string, bool)`

GetMarketCodesOk returns a tuple with the MarketCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCodes

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetMarketCodes(v []string)`

SetMarketCodes sets MarketCodes field to given value.

### HasMarketCodes

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasMarketCodes() bool`

HasMarketCodes returns a boolean if a field has been set.

### GetCycleStartDay

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetCycleStartDay() int32`

GetCycleStartDay returns the CycleStartDay field if non-nil, zero value otherwise.

### GetCycleStartDayOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetCycleStartDayOk() (*int32, bool)`

GetCycleStartDayOk returns a tuple with the CycleStartDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCycleStartDay

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetCycleStartDay(v int32)`

SetCycleStartDay sets CycleStartDay field to given value.

### HasCycleStartDay

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasCycleStartDay() bool`

HasCycleStartDay returns a boolean if a field has been set.

### GetCustomizePromptText

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetCustomizePromptText() string`

GetCustomizePromptText returns the CustomizePromptText field if non-nil, zero value otherwise.

### GetCustomizePromptTextOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetCustomizePromptTextOk() (*string, bool)`

GetCustomizePromptTextOk returns a tuple with the CustomizePromptText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomizePromptText

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetCustomizePromptText(v string)`

SetCustomizePromptText sets CustomizePromptText field to given value.

### HasCustomizePromptText

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasCustomizePromptText() bool`

HasCustomizePromptText returns a boolean if a field has been set.

### GetTaskSupplies

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetTaskSupplies() []ConfigTemplateHousekeepingRoomScheduleTaskSupplyType`

GetTaskSupplies returns the TaskSupplies field if non-nil, zero value otherwise.

### GetTaskSuppliesOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetTaskSuppliesOk() (*[]ConfigTemplateHousekeepingRoomScheduleTaskSupplyType, bool)`

GetTaskSuppliesOk returns a tuple with the TaskSupplies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSupplies

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetTaskSupplies(v []ConfigTemplateHousekeepingRoomScheduleTaskSupplyType)`

SetTaskSupplies sets TaskSupplies field to given value.

### HasTaskSupplies

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasTaskSupplies() bool`

HasTaskSupplies returns a boolean if a field has been set.

### GetRoomType

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetRoomType() CodeDescriptionType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetRoomTypeOk() (*CodeDescriptionType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetRoomType(v CodeDescriptionType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetGuestRequested

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetGuestRequested() bool`

GetGuestRequested returns the GuestRequested field if non-nil, zero value otherwise.

### GetGuestRequestedOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetGuestRequestedOk() (*bool, bool)`

GetGuestRequestedOk returns a tuple with the GuestRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestRequested

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetGuestRequested(v bool)`

SetGuestRequested sets GuestRequested field to given value.

### HasGuestRequested

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasGuestRequested() bool`

HasGuestRequested returns a boolean if a field has been set.

### GetDefaultDepartureTask

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetDefaultDepartureTask() bool`

GetDefaultDepartureTask returns the DefaultDepartureTask field if non-nil, zero value otherwise.

### GetDefaultDepartureTaskOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetDefaultDepartureTaskOk() (*bool, bool)`

GetDefaultDepartureTaskOk returns a tuple with the DefaultDepartureTask field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDepartureTask

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetDefaultDepartureTask(v bool)`

SetDefaultDepartureTask sets DefaultDepartureTask field to given value.

### HasDefaultDepartureTask

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasDefaultDepartureTask() bool`

HasDefaultDepartureTask returns a boolean if a field has been set.

### GetMoveup

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetMoveup() bool`

GetMoveup returns the Moveup field if non-nil, zero value otherwise.

### GetMoveupOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetMoveupOk() (*bool, bool)`

GetMoveupOk returns a tuple with the Moveup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoveup

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetMoveup(v bool)`

SetMoveup sets Moveup field to given value.

### HasMoveup

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasMoveup() bool`

HasMoveup returns a boolean if a field has been set.

### GetMembershipType

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetMembershipLevels

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetMembershipLevels() []string`

GetMembershipLevels returns the MembershipLevels field if non-nil, zero value otherwise.

### GetMembershipLevelsOk

`func (o *ConfigTemplateHousekeepingRoomScheduleType) GetMembershipLevelsOk() (*[]string, bool)`

GetMembershipLevelsOk returns a tuple with the MembershipLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevels

`func (o *ConfigTemplateHousekeepingRoomScheduleType) SetMembershipLevels(v []string)`

SetMembershipLevels sets MembershipLevels field to given value.

### HasMembershipLevels

`func (o *ConfigTemplateHousekeepingRoomScheduleType) HasMembershipLevels() bool`

HasMembershipLevels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


