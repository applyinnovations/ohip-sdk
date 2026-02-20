# CreateRestrictionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RestrictionStatus** | Pointer to [**RestrictionStatusType**](RestrictionStatusType.md) |  | [optional] 
**RatePlanCodes** | Pointer to **[]string** | The rate code for which the restriction will be applied. | [optional] 
**RateClasses** | Pointer to **[]string** | The rate class for which the restriction will be applied. | [optional] 
**RoomClasses** | Pointer to **[]string** | The room class for which the restriction will be applied. | [optional] 
**BookingChannels** | Pointer to **[]string** | Booking channel. | [optional] 
**RoomTypes** | Pointer to **[]string** | The room type for which the restriction will be applied. | [optional] 
**RatePlanCategories** | Pointer to **[]string** | The rate category for which the restriction will be applied. | [optional] 
**SeasonCode** | Pointer to **string** | The season code during which the restrictions are valid. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**BookingChannelOnRequest** | Pointer to **string** | Booking channel on request. | [optional] 
**DateRangeStart** | Pointer to **string** | The starting value of the date range. | [optional] 
**DateRangeEnd** | Pointer to **string** | The ending value of the date range. | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 
**YieldStatus** | Pointer to [**RoomTypeYieldableType**](RoomTypeYieldableType.md) |  | [optional] 

## Methods

### NewCreateRestrictionType

`func NewCreateRestrictionType() *CreateRestrictionType`

NewCreateRestrictionType instantiates a new CreateRestrictionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateRestrictionTypeWithDefaults

`func NewCreateRestrictionTypeWithDefaults() *CreateRestrictionType`

NewCreateRestrictionTypeWithDefaults instantiates a new CreateRestrictionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRestrictionStatus

`func (o *CreateRestrictionType) GetRestrictionStatus() RestrictionStatusType`

GetRestrictionStatus returns the RestrictionStatus field if non-nil, zero value otherwise.

### GetRestrictionStatusOk

`func (o *CreateRestrictionType) GetRestrictionStatusOk() (*RestrictionStatusType, bool)`

GetRestrictionStatusOk returns a tuple with the RestrictionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionStatus

`func (o *CreateRestrictionType) SetRestrictionStatus(v RestrictionStatusType)`

SetRestrictionStatus sets RestrictionStatus field to given value.

### HasRestrictionStatus

`func (o *CreateRestrictionType) HasRestrictionStatus() bool`

HasRestrictionStatus returns a boolean if a field has been set.

### GetRatePlanCodes

`func (o *CreateRestrictionType) GetRatePlanCodes() []string`

GetRatePlanCodes returns the RatePlanCodes field if non-nil, zero value otherwise.

### GetRatePlanCodesOk

`func (o *CreateRestrictionType) GetRatePlanCodesOk() (*[]string, bool)`

GetRatePlanCodesOk returns a tuple with the RatePlanCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCodes

`func (o *CreateRestrictionType) SetRatePlanCodes(v []string)`

SetRatePlanCodes sets RatePlanCodes field to given value.

### HasRatePlanCodes

`func (o *CreateRestrictionType) HasRatePlanCodes() bool`

HasRatePlanCodes returns a boolean if a field has been set.

### GetRateClasses

`func (o *CreateRestrictionType) GetRateClasses() []string`

GetRateClasses returns the RateClasses field if non-nil, zero value otherwise.

### GetRateClassesOk

`func (o *CreateRestrictionType) GetRateClassesOk() (*[]string, bool)`

GetRateClassesOk returns a tuple with the RateClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateClasses

`func (o *CreateRestrictionType) SetRateClasses(v []string)`

SetRateClasses sets RateClasses field to given value.

### HasRateClasses

`func (o *CreateRestrictionType) HasRateClasses() bool`

HasRateClasses returns a boolean if a field has been set.

### GetRoomClasses

`func (o *CreateRestrictionType) GetRoomClasses() []string`

GetRoomClasses returns the RoomClasses field if non-nil, zero value otherwise.

### GetRoomClassesOk

`func (o *CreateRestrictionType) GetRoomClassesOk() (*[]string, bool)`

GetRoomClassesOk returns a tuple with the RoomClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClasses

`func (o *CreateRestrictionType) SetRoomClasses(v []string)`

SetRoomClasses sets RoomClasses field to given value.

### HasRoomClasses

`func (o *CreateRestrictionType) HasRoomClasses() bool`

HasRoomClasses returns a boolean if a field has been set.

### GetBookingChannels

`func (o *CreateRestrictionType) GetBookingChannels() []string`

GetBookingChannels returns the BookingChannels field if non-nil, zero value otherwise.

### GetBookingChannelsOk

`func (o *CreateRestrictionType) GetBookingChannelsOk() (*[]string, bool)`

GetBookingChannelsOk returns a tuple with the BookingChannels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannels

`func (o *CreateRestrictionType) SetBookingChannels(v []string)`

SetBookingChannels sets BookingChannels field to given value.

### HasBookingChannels

`func (o *CreateRestrictionType) HasBookingChannels() bool`

HasBookingChannels returns a boolean if a field has been set.

### GetRoomTypes

`func (o *CreateRestrictionType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *CreateRestrictionType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *CreateRestrictionType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *CreateRestrictionType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetRatePlanCategories

`func (o *CreateRestrictionType) GetRatePlanCategories() []string`

GetRatePlanCategories returns the RatePlanCategories field if non-nil, zero value otherwise.

### GetRatePlanCategoriesOk

`func (o *CreateRestrictionType) GetRatePlanCategoriesOk() (*[]string, bool)`

GetRatePlanCategoriesOk returns a tuple with the RatePlanCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCategories

`func (o *CreateRestrictionType) SetRatePlanCategories(v []string)`

SetRatePlanCategories sets RatePlanCategories field to given value.

### HasRatePlanCategories

`func (o *CreateRestrictionType) HasRatePlanCategories() bool`

HasRatePlanCategories returns a boolean if a field has been set.

### GetSeasonCode

`func (o *CreateRestrictionType) GetSeasonCode() string`

GetSeasonCode returns the SeasonCode field if non-nil, zero value otherwise.

### GetSeasonCodeOk

`func (o *CreateRestrictionType) GetSeasonCodeOk() (*string, bool)`

GetSeasonCodeOk returns a tuple with the SeasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonCode

`func (o *CreateRestrictionType) SetSeasonCode(v string)`

SetSeasonCode sets SeasonCode field to given value.

### HasSeasonCode

`func (o *CreateRestrictionType) HasSeasonCode() bool`

HasSeasonCode returns a boolean if a field has been set.

### GetBlockId

`func (o *CreateRestrictionType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *CreateRestrictionType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *CreateRestrictionType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *CreateRestrictionType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetBookingChannelOnRequest

`func (o *CreateRestrictionType) GetBookingChannelOnRequest() string`

GetBookingChannelOnRequest returns the BookingChannelOnRequest field if non-nil, zero value otherwise.

### GetBookingChannelOnRequestOk

`func (o *CreateRestrictionType) GetBookingChannelOnRequestOk() (*string, bool)`

GetBookingChannelOnRequestOk returns a tuple with the BookingChannelOnRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelOnRequest

`func (o *CreateRestrictionType) SetBookingChannelOnRequest(v string)`

SetBookingChannelOnRequest sets BookingChannelOnRequest field to given value.

### HasBookingChannelOnRequest

`func (o *CreateRestrictionType) HasBookingChannelOnRequest() bool`

HasBookingChannelOnRequest returns a boolean if a field has been set.

### GetDateRangeStart

`func (o *CreateRestrictionType) GetDateRangeStart() string`

GetDateRangeStart returns the DateRangeStart field if non-nil, zero value otherwise.

### GetDateRangeStartOk

`func (o *CreateRestrictionType) GetDateRangeStartOk() (*string, bool)`

GetDateRangeStartOk returns a tuple with the DateRangeStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRangeStart

`func (o *CreateRestrictionType) SetDateRangeStart(v string)`

SetDateRangeStart sets DateRangeStart field to given value.

### HasDateRangeStart

`func (o *CreateRestrictionType) HasDateRangeStart() bool`

HasDateRangeStart returns a boolean if a field has been set.

### GetDateRangeEnd

`func (o *CreateRestrictionType) GetDateRangeEnd() string`

GetDateRangeEnd returns the DateRangeEnd field if non-nil, zero value otherwise.

### GetDateRangeEndOk

`func (o *CreateRestrictionType) GetDateRangeEndOk() (*string, bool)`

GetDateRangeEndOk returns a tuple with the DateRangeEnd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRangeEnd

`func (o *CreateRestrictionType) SetDateRangeEnd(v string)`

SetDateRangeEnd sets DateRangeEnd field to given value.

### HasDateRangeEnd

`func (o *CreateRestrictionType) HasDateRangeEnd() bool`

HasDateRangeEnd returns a boolean if a field has been set.

### GetSunday

`func (o *CreateRestrictionType) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *CreateRestrictionType) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *CreateRestrictionType) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *CreateRestrictionType) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetMonday

`func (o *CreateRestrictionType) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *CreateRestrictionType) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *CreateRestrictionType) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *CreateRestrictionType) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetTuesday

`func (o *CreateRestrictionType) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *CreateRestrictionType) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *CreateRestrictionType) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *CreateRestrictionType) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *CreateRestrictionType) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *CreateRestrictionType) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *CreateRestrictionType) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *CreateRestrictionType) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.

### GetThursday

`func (o *CreateRestrictionType) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *CreateRestrictionType) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *CreateRestrictionType) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *CreateRestrictionType) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetFriday

`func (o *CreateRestrictionType) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *CreateRestrictionType) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *CreateRestrictionType) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *CreateRestrictionType) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetSaturday

`func (o *CreateRestrictionType) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *CreateRestrictionType) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *CreateRestrictionType) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *CreateRestrictionType) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.

### GetYieldStatus

`func (o *CreateRestrictionType) GetYieldStatus() RoomTypeYieldableType`

GetYieldStatus returns the YieldStatus field if non-nil, zero value otherwise.

### GetYieldStatusOk

`func (o *CreateRestrictionType) GetYieldStatusOk() (*RoomTypeYieldableType, bool)`

GetYieldStatusOk returns a tuple with the YieldStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldStatus

`func (o *CreateRestrictionType) SetYieldStatus(v RoomTypeYieldableType)`

SetYieldStatus sets YieldStatus field to given value.

### HasYieldStatus

`func (o *CreateRestrictionType) HasYieldStatus() bool`

HasYieldStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


