# DailyRatePlanScheduleRangeDailyRateScheduleRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdvancedDailyBaseRatePlanCode** | Pointer to **string** | The Base Rate Plan Code which will be used to look up for and configure the Pricing Schedule for the main Rate Plan Code | [optional] 
**DateRange** | Pointer to [**TimeSpanDaysOfWeekType**](TimeSpanDaysOfWeekType.md) |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**IncrementFlag** | Pointer to **bool** | Flag to indicate if the occupancy data is absolute or relative to the current value. | [optional] 
**OccupantThresholdPricing** | Pointer to [**OccupantThresholdPricingType**](OccupantThresholdPricingType.md) |  | [optional] 
**RateAmounts** | Pointer to [**ScheduleRateAmountsType**](ScheduleRateAmountsType.md) |  | [optional] 
**RatePlanCode** | Pointer to **string** |  | [optional] 
**RoomClasses** | Pointer to **[]string** | List of room classes for which the range update has to be applied. | [optional] 
**RoomTypes** | Pointer to **[]string** | List of room types for which the range update has to be applied. | [optional] 

## Methods

### NewDailyRatePlanScheduleRangeDailyRateScheduleRange

`func NewDailyRatePlanScheduleRangeDailyRateScheduleRange() *DailyRatePlanScheduleRangeDailyRateScheduleRange`

NewDailyRatePlanScheduleRangeDailyRateScheduleRange instantiates a new DailyRatePlanScheduleRangeDailyRateScheduleRange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDailyRatePlanScheduleRangeDailyRateScheduleRangeWithDefaults

`func NewDailyRatePlanScheduleRangeDailyRateScheduleRangeWithDefaults() *DailyRatePlanScheduleRangeDailyRateScheduleRange`

NewDailyRatePlanScheduleRangeDailyRateScheduleRangeWithDefaults instantiates a new DailyRatePlanScheduleRangeDailyRateScheduleRange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdvancedDailyBaseRatePlanCode

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetAdvancedDailyBaseRatePlanCode() string`

GetAdvancedDailyBaseRatePlanCode returns the AdvancedDailyBaseRatePlanCode field if non-nil, zero value otherwise.

### GetAdvancedDailyBaseRatePlanCodeOk

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetAdvancedDailyBaseRatePlanCodeOk() (*string, bool)`

GetAdvancedDailyBaseRatePlanCodeOk returns a tuple with the AdvancedDailyBaseRatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedDailyBaseRatePlanCode

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) SetAdvancedDailyBaseRatePlanCode(v string)`

SetAdvancedDailyBaseRatePlanCode sets AdvancedDailyBaseRatePlanCode field to given value.

### HasAdvancedDailyBaseRatePlanCode

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) HasAdvancedDailyBaseRatePlanCode() bool`

HasAdvancedDailyBaseRatePlanCode returns a boolean if a field has been set.

### GetDateRange

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetDateRange() TimeSpanDaysOfWeekType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetDateRangeOk() (*TimeSpanDaysOfWeekType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) SetDateRange(v TimeSpanDaysOfWeekType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetHotelId

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIncrementFlag

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetIncrementFlag() bool`

GetIncrementFlag returns the IncrementFlag field if non-nil, zero value otherwise.

### GetIncrementFlagOk

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetIncrementFlagOk() (*bool, bool)`

GetIncrementFlagOk returns a tuple with the IncrementFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncrementFlag

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) SetIncrementFlag(v bool)`

SetIncrementFlag sets IncrementFlag field to given value.

### HasIncrementFlag

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) HasIncrementFlag() bool`

HasIncrementFlag returns a boolean if a field has been set.

### GetOccupantThresholdPricing

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetOccupantThresholdPricing() OccupantThresholdPricingType`

GetOccupantThresholdPricing returns the OccupantThresholdPricing field if non-nil, zero value otherwise.

### GetOccupantThresholdPricingOk

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetOccupantThresholdPricingOk() (*OccupantThresholdPricingType, bool)`

GetOccupantThresholdPricingOk returns a tuple with the OccupantThresholdPricing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccupantThresholdPricing

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) SetOccupantThresholdPricing(v OccupantThresholdPricingType)`

SetOccupantThresholdPricing sets OccupantThresholdPricing field to given value.

### HasOccupantThresholdPricing

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) HasOccupantThresholdPricing() bool`

HasOccupantThresholdPricing returns a boolean if a field has been set.

### GetRateAmounts

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetRateAmounts() ScheduleRateAmountsType`

GetRateAmounts returns the RateAmounts field if non-nil, zero value otherwise.

### GetRateAmountsOk

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetRateAmountsOk() (*ScheduleRateAmountsType, bool)`

GetRateAmountsOk returns a tuple with the RateAmounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmounts

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) SetRateAmounts(v ScheduleRateAmountsType)`

SetRateAmounts sets RateAmounts field to given value.

### HasRateAmounts

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) HasRateAmounts() bool`

HasRateAmounts returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRoomClasses

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetRoomClasses() []string`

GetRoomClasses returns the RoomClasses field if non-nil, zero value otherwise.

### GetRoomClassesOk

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetRoomClassesOk() (*[]string, bool)`

GetRoomClassesOk returns a tuple with the RoomClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClasses

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) SetRoomClasses(v []string)`

SetRoomClasses sets RoomClasses field to given value.

### HasRoomClasses

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) HasRoomClasses() bool`

HasRoomClasses returns a boolean if a field has been set.

### GetRoomTypes

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *DailyRatePlanScheduleRangeDailyRateScheduleRange) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


